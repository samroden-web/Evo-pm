// Phone-width check. Loads every URL in the sitemap at two real phone sizes and fails on
// the things that actually went wrong on this site.
//
//   npm run build && npx next start -p 3999 &
//   node tools/check-mobile.mjs http://localhost:3999
//
// WHY THIS EXISTS. The homepage hero shipped BROKEN on phones and nobody noticed for days.
// The copy column was rendering 466px wide inside a 390px screen, so the headline, the
// lead, the second button and both award chips were cut off mid-word. It looked perfect on
// a laptop. Nothing in the build, the site checker or the deploy block would ever have
// caught it, because the page did not error and did not even scroll sideways - the hero
// clips its own overflow, so the content was simply invisible.
//
// The cause was one CSS pattern, `repeat(auto-fit, minmax(230px, 1fr))`, which has a hard
// 230px floor and therefore an intrinsic minimum of two tracks. It appeared 18 times in the
// stylesheet. That is exactly the kind of defect a human reviewer cannot be asked to catch
// every time, which is the whole argument for this file.
//
// THE TWO SIZES. 390x844 is an iPhone 14/15/16 in CSS pixels; 360x800 is the most common
// Android. Between them they cover the overwhelming majority of phone traffic, and a layout
// that survives 360 survives almost everything narrower.
//
// WHAT THIS DOES NOT DO. It runs Chromium, so it catches layout, overflow and clipping -
// which is nearly all of it - but it is not real Safari. iOS-specific rendering (backdrop
// filters, sticky inside overflow, 100vh under the toolbar) still needs a human with a
// phone before launch.

// Playwright is not a dependency of this repo, deliberately: adding it would make every
// Codespace deploy download a 150MB browser it does not otherwise need. It is instead
// resolved from wherever it happens to be installed, and if it is nowhere this check SKIPS
// with a clear message rather than failing. The gate that matters is that this runs before
// a patch is packaged, on a machine that has it - not that it runs in the Codespace.
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);

function loadChromium() {
  const candidates = [
    'playwright',
    'playwright-core',
    `${process.env.HOME}/.npm-global/lib/node_modules/playwright`,
    '/usr/lib/node_modules/playwright',
  ];
  for (const c of candidates) {
    try {
      return require_(c).chromium;
    } catch {
      /* try the next one */
    }
  }
  return null;
}

const chromium = loadChromium();
if (!chromium) {
  console.log('SKIPPED: playwright is not installed here, so the phone-width check cannot run.');
  console.log('This check is expected to run before a patch is packaged, not in the Codespace.');
  console.log('To run it here: npm i -D playwright && npx playwright install chromium');
  process.exit(0);
}

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const EXECUTABLE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const SIZES = [
  { name: 'iPhone 390', width: 390, height: 844 },
  { name: 'Android 360', width: 360, height: 800 },
];

const fail = [];
const warn = [];

function note(list, page, size, msg) {
  list.push(`${page}  [${size}]\n    ${msg}`);
}

async function urlsFromSitemap() {
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
  // The 75 migrated articles all share one template, so checking every one of them buys
  // nothing and costs minutes. One is enough to cover the template.
  const articles = all.filter((u) => u.startsWith('/insights/'));
  return [...all.filter((u) => !u.startsWith('/insights/')), ...articles.slice(0, 1)];
}

// Runs in the page. Returns every element that is wider than the screen, plus whether it is
// CLIPPED (an ancestor hides the overflow) or merely SCROLLING.
function audit() {
  const vw = document.documentElement.clientWidth;

  // THE HONEST TEST FOR SIDEWAYS SCROLL. documentElement.scrollWidth lies: it reports the
  // overflow of descendants even when a scroll container has properly contained them, so a
  // horizontal card strip makes it read 839px on a page that cannot be scrolled an inch.
  // The first version of this file failed /how-it-works for exactly that reason. A checker
  // that cries wolf gets ignored, which is worse than no checker. So ask the browser to
  // scroll and see whether it does.
  const sx = window.scrollX;
  window.scrollTo(vw * 2, window.scrollY);
  const scrolled = Math.round(window.scrollX);
  window.scrollTo(sx, window.scrollY);
  const docW = scrolled > 0 ? vw + scrolled : vw;
  const over = [];
  const clipped = [];
  const smallInputs = [];

  const label = (el) => {
    const cls = el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
    return el.tagName.toLowerCase() + cls;
  };

  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.height === 0 || r.width === 0) continue;

    if (r.width > vw + 1) {
      // Report only the outermost element in a chain of oversized parents.
      const pr = el.parentElement && el.parentElement.getBoundingClientRect();
      if (pr && pr.width > vw + 1) continue;

      // Does an ancestor scroll it, or does one clip it? Clipping is the serious case:
      // the content is gone with no way for the reader to reach it.
      let scrolls = false;
      let clips = false;
      for (let a = el.parentElement; a && a !== document.documentElement; a = a.parentElement) {
        const ox = getComputedStyle(a).overflowX;
        if (ox === 'auto' || ox === 'scroll') { scrolls = true; break; }
        if (ox === 'hidden' || ox === 'clip') { clips = true; break; }
      }
      if (clips) clipped.push(`${label(el)} is ${Math.round(r.width)}px wide and CLIPPED by an ancestor`);
      else if (!scrolls) over.push(`${label(el)} is ${Math.round(r.width)}px wide`);
    }

    // iOS Safari zooms the whole page when a text field under 16px takes focus, which
    // leaves the reader zoomed in with no obvious way back.
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs && fs < 16) smallInputs.push(`${label(el)} font-size ${fs}px (iOS zooms below 16px)`);
    }
  }

  return { vw, docW, over, clipped, smallInputs };
}

const urls = await urlsFromSitemap();
const browser = await chromium.launch({ executablePath: EXECUTABLE, args: ['--no-sandbox'] });
console.log(`Checking ${urls.length} URLs at ${SIZES.map((s) => s.width + 'px').join(' and ')} against ${base}\n`);

let checks = 0;
for (const size of SIZES) {
  const page = await browser.newPage({
    viewport: { width: size.width, height: size.height },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });
  for (const u of urls) {
    await page.goto(base + u, { waitUntil: 'networkidle' });
    // Lazy content below the fold can be the thing that overflows, so the page is walked
    // before anything is measured.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    const r = await page.evaluate(audit);
    checks++;

    if (r.docW > r.vw + 1)
      note(fail, u, size.name, `page really does scroll sideways, by ${r.docW - r.vw}px (screen is ${r.vw}px)`);
    for (const c of r.clipped) note(fail, u, size.name, c);
    for (const o of r.over) note(fail, u, size.name, o);
    for (const s of r.smallInputs) note(warn, u, size.name, s);
  }
  await page.close();
}
await browser.close();

if (warn.length) {
  console.log(`WARNINGS (${warn.length})`);
  for (const w of warn) console.log('  ' + w);
  console.log('');
}
if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  for (const f of fail) console.log('  ' + f);
  console.log(`\n${checks} page loads checked. FAILED.`);
  process.exit(1);
}
console.log(`${checks} page loads checked across ${urls.length} URLs. No overflow, no clipped content.`);
