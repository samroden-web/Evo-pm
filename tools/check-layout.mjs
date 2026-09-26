// Layout check. Catches a max-width that has landed on something that lays other things
// out, rather than on prose.
//
//   npm run build && npx next start -p 3999 &
//   node tools/check-layout.mjs http://localhost:3999
//
// WHY THIS EXISTS. A prose measure rule was added to stop paragraphs running 114 characters
// a line. It was written as:
//
//   .container > p, .container > ul, .container > ol { max-width: 72ch; }
//
// On this site a list is usually a LAYOUT, not prose. `.pa-list`, `.figures__list`,
// `.ev3-voices`, `.phone-steps`, `.vtimeline`, `.timescales`, `.steps-row` and
// `.guide-steps` are all a ul or an ol sitting directly inside a container. Every one of
// them was squeezed from 1160px to 736px - including the problem and solution block on the
// homepage, the one we had spent four patches designing - and it shipped.
//
// Nothing else could have caught it. The build was happy. The site checker was happy. The
// phone checker was happy, because at 390px a 72ch cap is wider than the screen and does
// nothing at all. It was only visible by looking at a desktop-width page, which is exactly
// the check a human stops doing after the twentieth patch.
//
// THE RULE. A grid or flex container is there to distribute space among its children. If
// it also carries a max-width that makes it materially narrower than the space it was
// given, that is almost always a rule meant for text that has caught a layout by accident.
// Legitimate exceptions are listed in ALLOW below, with a reason each.

import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);

function loadChromium() {
  for (const c of [
    'playwright',
    'playwright-core',
    `${process.env.HOME}/.npm-global/lib/node_modules/playwright`,
    '/usr/lib/node_modules/playwright',
  ]) {
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
  console.log('SKIPPED: playwright is not installed here, so the layout check cannot run.');
  console.log('This check is expected to run before a patch is packaged, not in the Codespace.');
  process.exit(0);
}

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const EXECUTABLE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

// Widths where a ch-based cap actually bites. Below about 900px most caps are wider than
// the screen and inert, which is why the phone checker never saw this.
const WIDTHS = [1440, 1180];

// Class names allowed to be a narrowed grid or flex, with the reason.
const ALLOW = {
  container: 'the page container itself - that is its job',
  'container--narrow': 'a deliberately narrow reading column',
  'ev3-screens--narrow': 'a deliberately narrow pair of phone screenshots - the class says so',
};

// Tags that are never a page layout, whatever they are set to display as. A figcaption is
// a caption inset from the edge of its image; it is flex only because it carries an icon.
const ALLOW_TAGS = new Set(['figcaption', 'figure', 'label', 'button', 'summary']);

// How much narrower than its parent before it counts. A few pixels is rounding.
const SLACK = 24;

async function urlsFromSitemap() {
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
  const articles = all.filter((u) => u.startsWith('/insights/'));
  return [...all.filter((u) => !u.startsWith('/insights/')), ...articles.slice(0, 1)];
}

function audit({ allow, allowTags, slack }) {
  const out = [];
  const label = (el) => {
    const cls = el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '';
    return el.tagName.toLowerCase() + cls;
  };
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.display !== 'grid' && cs.display !== 'flex' && cs.display !== 'inline-grid' && cs.display !== 'inline-flex') continue;
    if (cs.maxWidth === 'none') continue;
    if (el.children.length < 2) continue;
    if (allowTags.includes(el.tagName.toLowerCase())) continue;

    const names = (el.className && typeof el.className === 'string' ? el.className.trim().split(/\s+/) : []);
    if (names.some((n) => Object.prototype.hasOwnProperty.call(allow, n))) continue;

    const parent = el.parentElement;
    if (!parent) continue;
    const pcs = getComputedStyle(parent);
    const pw =
      parent.getBoundingClientRect().width - parseFloat(pcs.paddingLeft || 0) - parseFloat(pcs.paddingRight || 0);
    const w = el.getBoundingClientRect().width;
    if (w < 4 || pw < 4) continue;

    if (w < pw - slack) {
      out.push(
        `${label(el)} is ${Math.round(w)}px inside ${Math.round(pw)}px because max-width is ${cs.maxWidth} (it is a ${cs.display} container with ${el.children.length} children)`
      );
    }
  }
  return [...new Set(out)];
}

const urls = await urlsFromSitemap();
const browser = await chromium.launch({ executablePath: EXECUTABLE, args: ['--no-sandbox'] });
console.log(`Checking ${urls.length} URLs at ${WIDTHS.map((w) => w + 'px').join(' and ')} against ${base}\n`);

const fail = [];
let checks = 0;
for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  for (const u of urls) {
    await page.goto(base + u, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      window.scrollTo(0, 0);
    });
    const found = await page.evaluate(audit, { allow: ALLOW, allowTags: [...ALLOW_TAGS], slack: SLACK });
    checks++;
    for (const f of found) fail.push(`${u}  [${width}px]\n    ${f}`);
  }
  await page.close();
}
await browser.close();

if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  for (const f of fail) console.log('  ' + f);
  console.log('\nA layout container should not carry a prose max-width. If one of these is');
  console.log('deliberate, add its class to ALLOW in this file with the reason.');
  console.log(`\n${checks} page loads checked. FAILED.`);
  process.exit(1);
}
console.log(`${checks} page loads checked across ${urls.length} URLs. No layout container is carrying a prose max-width.`);
