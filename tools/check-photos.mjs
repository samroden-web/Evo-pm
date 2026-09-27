// Photo framing check. Fails when a photograph is being cropped so hard by its layout that
// the picture no longer shows what it was taken to show.
//
//   npm run build && npx next start -p 3999 &
//   node tools/check-photos.mjs http://localhost:3999
//
// WHY THIS EXISTS. A rule written to make two SIDE-BY-SIDE photographs match each other -
// `.ev3-split > .photo img { aspect-ratio: 16/9 }` - applied to every photograph in a split,
// including single portrait ones. A 547x729 portrait group shot rendered at 478x269: 62% of
// the picture thrown away, heads cut off. Sam's words were "the picture itself looks out of
// frame". Nothing else would have caught it - the image loaded, the page passed every other
// check, and it looked like a deliberate crop unless you knew the source was portrait.
//
// THE TEST. Compare the rendered box's aspect ratio against the file's own. object-fit:cover
// keeps the shorter dimension and crops the longer, so the proportion of the picture left
// visible is the ratio of the two aspect ratios. Below 65% is reported.

import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
function loadChromium() {
  for (const c of ['playwright', 'playwright-core', `${process.env.HOME}/.npm-global/lib/node_modules/playwright`]) {
    try { return require_(c).chromium; } catch { /* next */ }
  }
  return null;
}
const chromium = loadChromium();
if (!chromium) {
  console.log('SKIPPED: playwright is not installed here, so the photo framing check cannot run.');
  process.exit(0);
}

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const EXECUTABLE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const KEPT_FLOOR = 0.65; // how much of the picture must survive the crop

async function urls() {
  const res = await fetch(`${base}/sitemap.xml`);
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
  const articles = all.filter((u) => u.startsWith('/insights/'));
  return [...all.filter((u) => !u.startsWith('/insights/')), ...articles.slice(0, 1)];
}

function audit(floor) {
  const out = [];
  for (const i of document.querySelectorAll('img')) {
    if (!i.naturalWidth || !i.naturalHeight) continue;
    const r = i.getBoundingClientRect();
    // Icons, marks and LIST THUMBNAILS. A 110px square thumbnail of a 1200x627 article
    // image is always going to crop hard and that is the correct design - the thumbnail is
    // decorative and the article is one tap away. This check is about CONTENT photographs,
    // where the picture is the point, so anything rendered small is out of scope. Raising
    // this to silence a real finding would be the wrong fix.
    if (r.width < 200 || r.height < 120) continue;
    const cs = getComputedStyle(i);
    if (cs.objectFit !== 'cover') continue;                  // contain and fill do not crop
    const src = decodeURIComponent(i.currentSrc || i.src);
    if (/\/logos?\//.test(src) || /favicon/.test(src)) continue;
    const boxRatio = r.width / r.height;
    const fileRatio = i.naturalWidth / i.naturalHeight;
    const kept = Math.min(boxRatio, fileRatio) / Math.max(boxRatio, fileRatio);
    if (kept < floor) {
      const name = src.split('/').pop().split('&')[0].replace('image?url=', '');
      out.push(
        `${name} - only ${Math.round(kept * 100)}% of the picture is visible ` +
          `(file is ${i.naturalWidth}x${i.naturalHeight}, shown in ${Math.round(r.width)}x${Math.round(r.height)})`
      );
    }
  }
  return [...new Set(out)];
}

const list = await urls();
const browser = await chromium.launch({ executablePath: EXECUTABLE, args: ['--no-sandbox'] });
console.log(`Checking photo framing on ${list.length} URLs at 1440px and 390px against ${base}\n`);
const fail = [];
let checks = 0;
for (const width of [1440, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  for (const u of list) {
    await page.goto(base + u, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    });
    // naturalWidth, not .complete - .complete is true for a lazy image that has not started.
    await page.waitForFunction(() => [...document.images].every((i) => i.naturalWidth > 0), null, { timeout: 20000 }).catch(() => {});
    for (const f of await page.evaluate(audit, KEPT_FLOOR)) fail.push(`${u}  [${width}px]\n    ${f}`);
    checks++;
  }
  await page.close();
}
await browser.close();

if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  for (const f of fail) console.log('  ' + f);
  console.log('\nEither the layout is forcing the wrong shape on this photograph, or the');
  console.log('photograph is the wrong shape for the slot. Do not just raise the floor.');
  console.log(`\n${checks} page loads checked. FAILED.`);
  process.exit(1);
}
console.log(`${checks} page loads checked across ${list.length} URLs. No photograph is cropped past ${Math.round(KEPT_FLOOR * 100)}%.`);
