// Navigation check: does every link in the header and footer actually take you somewhere, on a
// desktop AND on a phone?
//
//   node tools/check-nav.mjs http://localhost:3999
//
// WHY THIS EXISTS. Sam, 28 September: "on the phone, when i clicked compliance, it didnt open the
// page straight away (i had to click close). can byou check all links are working properly on
// desktop/ phone and no blank links etc"
//
// Nothing already in this repo could have caught that. check-final confirms every href RESOLVES -
// it fetches the URL and checks for a 200 - and /compliance answered 200 all along. The fault was
// not the destination, it was the interaction: the mobile menu is a tall in-flow panel, so while
// it is open the page sits underneath it. The navigation happened; the panel was still covering
// the screen. A link can be perfectly valid and still feel broken.
//
// And one case was genuinely broken rather than just slow: tapping the menu link for the page you
// are ALREADY on never changes the route, so the effect that closed the menu never fired, and the
// menu stayed open with no way out but the X.
//
// So this one drives the browser rather than reading the DOM. It opens the phone menu, taps each
// item, and asserts three things: the URL changed to where the link pointed, the menu closed
// itself, and the destination is not an error page. Then it does the same to the desktop header
// and the footer, by clicking rather than by fetching.
//
// WHAT IT CATCHES AND WHAT IT DOES NOT. Proved by putting the bug back: with the close-on-tap
// removed, this check fails on the same-route case - tapping the link for the page you are
// already on - every time. It does NOT reliably catch the slower half of what Sam saw, because
// against a local `next start` the route change completes inside the wait, so the panel has
// already gone by the time it looks. That half only shows on a real phone over a real network,
// which is exactly why he found it and the tooling did not. Fixing it at the source - closing on
// the tap rather than on the route change - removes both, and this holds the half that can be
// automated. Worth knowing the limit rather than trusting a green tick too far.

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

// Compare where we LANDED with where the link pointed, hash and query included. The first version
// of this compared `new URL(page.url()).pathname` against the raw href, which quietly drops
// everything after the path - so /case-studies#ids and /contact?enquiry=review were reported as
// going to the wrong place when they were exactly right. Six false failures out of six. That is
// the third assertion in this project to be wrong rather than the page it was testing, so the
// rule stands: when a new check goes red, suspect the check first.
function landedCorrectly(currentUrl, href) {
  const got = new URL(currentUrl);
  const want = new URL(href, base);
  if (got.pathname !== want.pathname) return `path is ${got.pathname}, expected ${want.pathname}`;
  if (want.hash && got.hash !== want.hash) return `landed without the ${want.hash} anchor`;
  for (const [k, v] of want.searchParams) {
    if (got.searchParams.get(k) !== v) return `lost the ${k}=${v} parameter`;
  }
  return null;
}
const EXECUTABLE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const PHONE = { width: 390, height: 844 };
const DESKTOP = { width: 1440, height: 1000 };

const fail = [];
const note = (msg) => fail.push(`    ${msg}`);

const browser = await chromium.launch({ executablePath: EXECUTABLE, args: ['--no-sandbox'] });

{
  const probe = await browser.newPage({ viewport: DESKTOP });
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

console.log(`Navigation check against ${base}`);
console.log('Every header and footer link, clicked, on a phone and on a desktop.\n');

// ---------------------------------------------------------------- phone
{
  const page = await browser.newPage({ viewport: PHONE });
  await page.goto(`${base}/`, { waitUntil: 'load' });

  const toggle = await page.$('.menu-toggle');
  if (!toggle) note('phone: no menu button in the header');
  else {
    await toggle.click();
    await page.waitForTimeout(250);
    const links = await page.$$eval('#mobile-nav a[href^="/"]', (as) =>
      as.map((a) => ({ href: a.getAttribute('href'), text: (a.textContent || '').trim() }))
    );
    if (!links.length) note('phone: the menu opened but has no internal links in it');
    console.log(`  phone: ${links.length} links in the menu`);

    // Start from a page that is NOT the destination, so a same-route tap is tested separately.
    for (const { href, text } of links) {
      await page.goto(`${base}/`, { waitUntil: 'load' });
      await (await page.$('.menu-toggle')).click();
      await page.waitForTimeout(200);
      const sel = `#mobile-nav a[href="${href}"]`;
      const el = await page.$(sel);
      if (!el) {
        note(`phone: "${text}" (${href}) vanished from the menu between opening it and tapping it`);
        continue;
      }
      await el.click();
      await page.waitForTimeout(900);
      const wrong = landedCorrectly(page.url(), href);
      if (wrong) note(`phone: tapping "${text}" - ${wrong}`);
      const stillOpen = await page.$('#mobile-nav');
      if (stillOpen)
        note(`phone: the menu was still covering the page after tapping "${text}" - this is the fault Sam hit`);
      const broken = await page.evaluate(() => /404|not found/i.test(document.querySelector('h1')?.textContent || ''));
      if (broken) note(`phone: "${text}" (${href}) landed on a not-found page`);
    }

    // The case that was definitely broken: tapping the link for the page you are already on.
    const firstHref = links[0]?.href;
    if (firstHref) {
      await page.goto(base + firstHref, { waitUntil: 'load' });
      await (await page.$('.menu-toggle')).click();
      await page.waitForTimeout(200);
      const el = await page.$(`#mobile-nav a[href="${firstHref}"]`);
      if (el) {
        await el.click();
        await page.waitForTimeout(600);
        if (await page.$('#mobile-nav')) {
          note(`phone: tapping "${firstHref}" while already on it left the menu open with no way out but the X`);
        }
      }
    }
  }
  await page.close();
}

// ---------------------------------------------------------------- desktop
{
  const page = await browser.newPage({ viewport: DESKTOP });
  await page.goto(`${base}/`, { waitUntil: 'load' });
  const links = await page.$$eval('.site-header a[href^="/"], .site-footer a[href^="/"], footer a[href^="/"]', (as) => [
    ...new Map(
      as.map((a) => [
        a.getAttribute('href'),
        { href: a.getAttribute('href'), text: (a.textContent || '').trim().slice(0, 30) },
      ])
    ).values(),
  ]);
  console.log(`  desktop: ${links.length} distinct header and footer links`);
  for (const { href, text } of links) {
    await page.goto(`${base}/`, { waitUntil: 'load' });
    const el = await page.$(`.site-header a[href="${href}"], .site-footer a[href="${href}"], footer a[href="${href}"]`);
    if (!el) continue;
    // Submenu items are hidden until their parent is hovered; click through the DOM rather than
    // simulating a hover chain, because what is being tested is the link, not the hover.
    await el.evaluate((e) => e.click());
    await page.waitForTimeout(700);
    const wrong = landedCorrectly(page.url(), href);
    if (wrong) note(`desktop: clicking "${text}" - ${wrong}`);
    const broken = await page.evaluate(() => /404|not found/i.test(document.querySelector('h1')?.textContent || ''));
    if (broken) note(`desktop: "${text}" (${href}) landed on a not-found page`);
  }
  await page.close();
}

await browser.close();

console.log('');
if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  fail.forEach((f) => console.log(f));
  console.log('\nNavigation check FAILED.');
  process.exit(1);
}
console.log('Every header and footer link navigates correctly, and the phone menu closes itself.');
