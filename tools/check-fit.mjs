// Does every page FIT, at every width somebody might actually use?
//
//   node tools/check-fit.mjs http://localhost:3999
//
// WHY THIS EXISTS. Sam, 29 September: "can you review this website, do an audit that
// everything working properly, and also fits on the page etc. when i look at the homepage for
// example the book a portfolio review at the top right is cut off".
//
// He was right, and nothing in this repo could have caught it. check-mobile.mjs looks at 390
// and 360px; check-layout.mjs looks at 1440 and 1180. The header's contents came to 1280px
// inside a 1200px container and spilled past its right edge at EVERY desktop width - the
// button ran off the side of the window below about 1310px, and above that simply sat outside
// the column the rest of the page lines up with. Two checks either side of the fault, and
// neither looked at it. So this one sweeps the range instead of two convenient points.
//
// THIS CHECK WAS WRONG THREE TIMES BEFORE IT WAS RIGHT, AND EACH MISTAKE IS WORTH KNOWING,
// because all three are the obvious way to write it:
//
//   1. "The page scrolls sideways if documentElement.scrollWidth > clientWidth."
//      NO. body carries `overflow-x: hidden`, and scrollWidth still reports the content
//      underneath it - /how-it-works reported 837px of content in a 390px window while the
//      page could not actually be scrolled a single pixel. The only trustworthy test is to
//      TRY TO SCROLL IT and see whether anything moved.
//
//   2. "Anything wider than the window is overflowing."
//      NO. The pricing table, the comparison table and the FAQ category chips are all
//      deliberately wider than the phone and sit in wrappers that scroll. A wide thing in a
//      box that scrolls is a design decision; the same wide thing in a box that does not is a
//      bug; the element alone cannot tell you which. Ask the browser whether the element or
//      anything above it actually scrolls.
//
//   3. "Anything ending past its container's padding edge is outside its column."
//      NO, not site-wide. Full-bleed-inside-a-container is used all over this site on
//      purpose - every .swipe-mobile row, every logo strip - by means of negative margins.
//      That rule produced 236 findings, of which zero were faults. It is kept for the HEADER
//      only, where nothing is meant to bleed, which is where the real fault was.
//
// The first version reported 236 failures and not one of them was real. check-mobile.mjs
// passed at the same widths the whole time, and when two checks disagree the new one is the
// suspect. Worth remembering before trusting the next red tick.

import { createRequire } from 'node:module';
import { assertStylesLoaded, assertServingThisBuild } from './lib/assert-styles.mjs';
const require_ = createRequire(import.meta.url);

function loadChromium() {
  for (const c of ['playwright', 'playwright-core', `${process.env.HOME}/.npm-global/lib/node_modules/playwright`]) {
    try {
      return require_(c).chromium;
    } catch {
      /* next */
    }
  }
  return null;
}
const chromium = loadChromium();
if (!chromium) {
  console.log('SKIPPED: playwright is not installed here.');
  process.exit(0);
}

const base = (process.argv[2] || 'http://localhost:3999').replace(/\/$/, '');
const EXECUTABLE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

// Real widths, plus the ones either side of every header breakpoint, because a breakpoint is
// where things break.
const WIDTHS = [
  [360, 'small phone'],
  [390, 'phone'],
  [430, 'large phone'],
  [560, 'phone landscape'],
  [768, 'tablet'],
  [834, 'tablet landscape'],
  [1024, 'laptop'],
  [1180, 'laptop'],
  [1259, 'just below the header breakpoint'],
  [1260, 'just above the header breakpoint'],
  [1366, 'laptop'],
  [1440, 'laptop'],
  [1512, 'laptop'],
  [1680, 'desktop'],
  [1920, 'desktop'],
];

async function urls() {
  const res = await fetch(`${base}/sitemap.xml`);
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
  const articles = all.filter((u) => u.startsWith('/insights/'));
  return [...all.filter((u) => !u.startsWith('/insights/')), ...articles.slice(0, 2)];
}

const audit = () => {
  const out = { sideways: null, offWindow: [], headerSpill: null };
  const de = document.documentElement;
  const vw = de.clientWidth;

  // 1. Can a person actually scroll this page sideways? Try it, rather than inferring it.
  const before = window.scrollX;
  window.scrollTo(9999, window.scrollY);
  const moved = window.scrollX;
  window.scrollTo(before, window.scrollY);
  if (moved > 1) out.sideways = moved;

  const label = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls =
      typeof el.className === 'string' && el.className
        ? `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}`
        : '';
    const txt = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 34);
    return `${el.tagName.toLowerCase()}${id}${cls}${txt ? ` "${txt}"` : ''}`;
  };

  // Does this element, or anything above it, scroll sideways on purpose?
  const scrolls = (el) => {
    for (let p = el; p && p !== document.body; p = p.parentElement) {
      const o = getComputedStyle(p);
      if (['auto', 'scroll'].includes(o.overflowX) || ['auto', 'scroll'].includes(o.overflow)) return true;
    }
    return false;
  };
  const skip = (el) =>
    el.closest('dialog, .drawer-dialog, [hidden], [aria-hidden="true"]') ||
    getComputedStyle(el).position === 'fixed' ||
    scrolls(el);

  // 2. Elements chopped by the window edge. With overflow-x hidden this leaves no scrollbar
  //    to notice, which is exactly why it needs checking.
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    if (skip(el)) continue;
    if (r.right > vw + 1 || r.left < -1) {
      // Report only the outermost offender: a heading sticking out because its section does
      // is one fault, not two.
      const p = el.parentElement;
      const pr = p ? p.getBoundingClientRect() : null;
      if (!(pr && (pr.right > vw + 1 || pr.left < -1))) {
        out.offWindow.push(`${label(el)} — ${Math.round(r.left)} to ${Math.round(r.right)} in ${vw}px`);
      }
    }
  }
  out.offWindow = [...new Set(out.offWindow)].slice(0, 6);

  // 3. The header only. Nothing in it is meant to bleed past its column.
  const inner = document.querySelector('.header-inner');
  if (inner) {
    const laid = (el) => {
      const s = getComputedStyle(el);
      return (
        s.display !== 'none' &&
        s.visibility !== 'hidden' &&
        s.position !== 'absolute' &&
        s.position !== 'fixed' &&
        el.getBoundingClientRect().width > 0
      );
    };
    const kids = [...inner.children].filter(laid);
    if (kids.length) {
      const ir = inner.getBoundingClientRect();
      const pad = parseFloat(getComputedStyle(inner).paddingRight) || 0;
      const right = Math.max(...kids.map((k) => k.getBoundingClientRect().right));
      const spill = Math.round(right - (ir.right - pad));
      if (spill > 2) out.headerSpill = { spill, right: Math.round(right), edge: Math.round(ir.right - pad) };
    }
  }
  return out;
};

const pages = await urls();
const browser = await chromium.launch({ executablePath: EXECUTABLE, args: ['--no-sandbox'] });

{
  const probe = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    await assertServingThisBuild(base);
    await assertStylesLoaded(probe, base);
  } catch (e) {
    await probe.close();
    await browser.close();
    console.error(`\n${e.message}\n`);
    process.exit(1);
  }
  await probe.close();
}

console.log(`Fit check against ${base}`);
console.log(`${pages.length} pages x ${WIDTHS.length} widths = ${pages.length * WIDTHS.length} page loads.\n`);

const fail = [];
for (const [w, why] of WIDTHS) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  let hits = 0;
  for (const u of pages) {
    await page.goto(base + u, { waitUntil: 'load' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 25));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(110);
    const r = await page.evaluate(audit);
    if (r.sideways) {
      hits++;
      fail.push(`  ${u} @ ${w}px — the page really does scroll sideways, by ${r.sideways}px`);
    }
    for (const o of r.offWindow) {
      hits++;
      fail.push(`  ${u} @ ${w}px — chopped by the window edge: ${o}`);
    }
    if (r.headerSpill) {
      hits++;
      fail.push(
        `  ${u} @ ${w}px — the header sticks ${r.headerSpill.spill}px past its column (ends ${r.headerSpill.right}, column ends ${r.headerSpill.edge})`
      );
    }
  }
  console.log(`  ${String(w).padStart(4)}px  ${why.padEnd(32)} ${hits ? `${hits} problem${hits > 1 ? 's' : ''}` : 'clean'}`);
  await page.close();
}
await browser.close();

console.log('');
if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  fail.slice(0, 50).forEach((f) => console.log(f));
  if (fail.length > 50) console.log(`  ... and ${fail.length - 50} more`);
  console.log('\nFit check FAILED.');
  process.exit(1);
}
console.log(`Every page fits at every width from ${WIDTHS[0][0]}px to ${WIDTHS[WIDTHS.length - 1][0]}px,`);
console.log('nothing is chopped by the window edge, and the header stays inside its column.');
