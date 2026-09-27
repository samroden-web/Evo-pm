// Cold read, mechanised. One assertion per thing Sam asked for in the 27 September round.
//
//   node tools/audit-round-2026-09-27.mjs http://localhost:3999
//
// WHY THIS EXISTS. Sam asked for "a cold read of the updated website to see if everything you
// meant to do has happened", and it caught a change I had already reported as done that had
// never applied - a text replacement that silently matched nothing because Prettier had
// reflowed the paragraph across three lines. Reporting a change as done on the strength of
// having edited the file is not verification. Nor is running the four checkers: they test
// whether the page is BROKEN, not whether it says what it was supposed to say.
//
// Last round that audit was ad hoc, typed out and thrown away. This one is a file, so the
// next round starts by re-running it and every claim in the changelog stays falsifiable.
//
// HOW TO EXTEND IT. Add a line to CHECKS. Each is { page, name, test } where test runs in the
// browser and returns true, false, or a string explaining the failure. Keep the assertion on
// the RENDERED page, never on the source: a rule that exists in globals.css but loses to
// another rule is exactly the failure this is for.

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

const CHECKS = [
  // ---- Item 1: the em dash in the housing h1, and none anywhere else ----
  {
    page: '/who-we-help/housing',
    name: '1. no em dash in the h1',
    test: () => {
      const h1 = document.querySelector('h1');
      return !/—/.test(h1.textContent) || `h1 still has an em dash: ${h1.textContent}`;
    },
  },

  // ---- Item 2: the IDS quote runs the full width, not half ----
  {
    page: '/who-we-help/housing',
    name: '2. IDS quote band spans the container, not half of it',
    test: () => {
      const band = document.querySelector('.quote-band');
      if (!band) return 'no .quote-band on the page';
      const w = band.getBoundingClientRect().width;
      const c = band.closest('.container').getBoundingClientRect().width;
      return w > c * 0.9 || `quote band is ${Math.round(w)}px inside a ${Math.round(c)}px container`;
    },
  },

  // ---- Item 3: the rule under section headings reaches further across ----
  {
    page: '/who-we-help/housing',
    name: '3. section-head measure widened to 900px',
    test: () => {
      const h = document.querySelector('.section-head');
      const mw = getComputedStyle(h).maxWidth;
      return mw === '900px' || `section-head max-width is ${mw}`;
    },
  },

  // ---- Item 4: integration is not pitched as Rubixx only ----
  {
    page: '/who-we-help/housing',
    name: '4. integration card is not Rubixx-only',
    test: () => {
      const t = document.body.innerText;
      if (!/Built to connect, whatever you run/.test(t)) return 'the new integration heading is not on the page';
      return /scheduled file exchange/.test(t) || 'the API-or-file-exchange wording is missing';
    },
  },

  // ---- Item 5: the compliance pair, and icons beside the label not above it ----
  {
    page: '/compliance',
    name: '5a. statutory and regulatory are a two-column pair',
    test: () => {
      const s = document.querySelector('.split-halves');
      if (!s) return 'no .split-halves on the page';
      const cols = getComputedStyle(s).gridTemplateColumns.split(' ').length;
      const has = document.querySelector('.card--statutory') && document.querySelector('.card--regulatory');
      if (!has) return 'the statutory/regulatory cards are not there';
      return cols === 2 || `.split-halves has ${cols} column(s) at this width`;
    },
  },
  {
    page: '/compliance',
    name: '5b. icon badges float beside the label, not stacked above it',
    test: () => {
      const b = document.querySelector('.card--statutory .icon-badge');
      if (!b) return 'no icon badge in the statutory card';
      return getComputedStyle(b).float === 'left' || `float is ${getComputedStyle(b).float}`;
    },
  },

  // ---- Item 6: the gas safety photograph moved into the statutory section ----
  {
    page: '/compliance',
    name: '6. gas safety photo sits in the statutory part of the page, not the regulatory part',
    test: () => {
      const img = [...document.querySelectorAll('img')].find((i) => /gas/i.test(i.src) || /gas safety/i.test(i.alt));
      if (!img) return 'no gas safety photograph on the page';
      const sec = img.closest('section');
      if (!sec) return 'the photograph is not inside a section';
      // The first version of this assertion demanded the SAME section as the .card--statutory
      // summary, and failed on a page that was correct: the photograph is in "Statutory, in
      // detail", which is the section that talks about the gas and electrical work, and is a
      // different section from the two-card summary above it. Sam asked for "the section where
      // we talk about the statutory compliance", so that is what is tested - by what the
      // section says, not by which box it happens to share.
      const heading =
        (sec.querySelector('h2, h3')?.textContent || '') + ' ' + (sec.querySelector('.eyebrow')?.textContent || '');
      if (/regulatory|tenant satisfaction|TSM/i.test(heading))
        return `the photograph is in the "${heading.trim()}" section`;
      return (
        /statutory/i.test(sec.innerText.slice(0, 400)) ||
        `the section around it does not talk about statutory work: "${heading.trim()}"`
      );
    },
  },

  // ---- Item 7: a resident photograph beside the TSM list ----
  {
    page: '/compliance',
    name: '7. resident photograph beside the TSM list',
    test: () =>
      [...document.querySelectorAll('img')].some((i) => /helping-resident/.test(i.src)) ||
      'evo-team-member-helping-resident is not on the compliance page',
  },

  // ---- Item 8: the two moisture meter readings, used ----
  {
    page: '/damp-and-mould',
    name: '8. the 24% / 18% meter pair is on the page with both readings labelled',
    test: () => {
      const fig = document.querySelector('.meter-pair');
      if (!fig) return 'no .meter-pair figure';
      const cells = fig.querySelectorAll('figcaption span').length;
      const t = fig.innerText;
      if (cells < 2) return `figcaption has ${cells} cell(s)`;
      return (/24%/.test(t) && /18%/.test(t)) || 'the two readings are not both labelled';
    },
  },

  // ---- Item 9: the IDS order, and the pair reading as one comparison ----
  {
    page: '/case-studies',
    name: '9a. IDS order is banner, then start-vs-finish, then timeline, then quotes, then award',
    test: () => {
      const top = (s) => {
        const e = document.querySelector(s);
        return e ? e.getBoundingClientRect().top + window.scrollY : null;
      };
      const banner = top('#ids .cs-banner');
      const pair = top('#ids .cs-startend');
      const timeline = top('#ids-timeline');
      const quotes = top('#ids-voices');
      const award = top('#ids-award');
      const seq = { banner, pair, timeline, quotes, award };
      for (const [k, v] of Object.entries(seq)) if (v === null) return `${k} is missing from the page`;
      const ok = banner < pair && pair < timeline && timeline < quotes && quotes < award;
      return (
        ok ||
        `order is wrong: ${JSON.stringify(Object.fromEntries(Object.entries(seq).map(([k, v]) => [k, Math.round(v)])))}`
      );
    },
  },
  {
    page: '/case-studies',
    name: '9b. start and finish are side by side, equal height, labels level',
    test: () => {
      const pair = document.querySelector('#ids .cs-startend');
      if (!pair) return 'no .cs-startend in the IDS section';
      const [a, b] = pair.children;
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      if (Math.abs(ra.top - rb.top) > 2) return 'the two columns are not on the same row';
      if (Math.abs(ra.height - rb.height) > 2)
        return `heights differ: ${Math.round(ra.height)} vs ${Math.round(rb.height)}`;
      const ea = a.querySelector('.eyebrow').getBoundingClientRect().top;
      const eb = b.querySelector('.eyebrow').getBoundingClientRect().top;
      return Math.abs(ea - eb) <= 1 || `the two labels are ${Math.round(Math.abs(ea - eb))}px out of line`;
    },
  },
  {
    page: '/case-studies',
    name: '9c. the figures are inside the finish column, not above the problem list',
    test: () => {
      const after = document.querySelector('#ids .cs-startend__after .statrow--orange');
      if (!after) return 'the orange figures are not inside the finish column';
      const strays = [...document.querySelectorAll('#ids .statrow--orange')].filter((e) => !e.closest('.cs-startend'));
      return strays.length === 0 || `${strays.length} orange stat row(s) still outside the pair`;
    },
  },
  {
    page: '/case-studies',
    name: '9d. the one-sentence "What changed." section is gone',
    test: () => !document.querySelector('#ids-results') || 'the What changed section is still a section of its own',
  },

  // ---- Item 10: B&D given the same treatment, and the duplicate award removed ----
  {
    page: '/case-studies',
    name: '10a. B&D has the same banner and the same start-vs-finish pair',
    test: () => {
      const s = document.querySelector('#bd-reside');
      if (!s) return 'no #bd-reside section';
      if (!s.querySelector('.cs-banner')) return 'B&D has no banner';
      if (!s.querySelector('.cs-startend')) return 'B&D has no start-vs-finish pair';
      return !!s.querySelector('.cs-startend__after .statrow--orange') || 'B&D figures are not in the finish column';
    },
  },
  {
    page: '/case-studies',
    name: '10b. the B&D award appears once, not as a chip and a card',
    test: () => {
      const n = (document.body.innerText.match(/Housing Digital Innovation Awards 2024/g) || []).length;
      return n === 1 || `"Housing Digital Innovation Awards 2024" appears ${n} times`;
    },
  },
  {
    page: '/case-studies',
    name: '10c. the Managing Director quote runs full width',
    test: () => {
      const band = document.querySelector('#bd-voices')?.closest('section')?.querySelector('.quote-band');
      if (!band) return 'no quote band in the B&D voices section';
      const w = band.getBoundingClientRect().width;
      const c = band.closest('.container').getBoundingClientRect().width;
      return w > c * 0.9 || `band is ${Math.round(w)}px inside ${Math.round(c)}px`;
    },
  },

  // ---- Standing: things settled earlier that a later patch could quietly undo ----
  {
    page: '/case-studies',
    name: 'standing. each award appears only against the client it was won with (GLOBAL-06)',
    test: () => {
      const ids = document.querySelector('#ids').innerText;
      const bd = document.querySelector('#bd-reside').innerText;
      if (/Housing Digital/.test(ids)) return 'the B&D award appears in the IDS section';
      if (/Housing Executive/.test(bd)) return 'the IDS award appears in the B&D section';
      return true;
    },
  },
  {
    page: '/case-studies',
    name: 'standing. no retired claim has crept back in',
    test: () => {
      const t = document.body.innerText;
      for (const b of ['28-plus', 'Bronze', 'Silver plan', '15p a day'])
        if (t.includes(b)) return `"${b}" is on the page`;
      return true;
    },
  },
  {
    page: '/who-we-help/landlords-and-agents',
    name: 'standing. the LRM quote still runs the full width',
    test: () => {
      const band = document.querySelector('.quote-band');
      if (!band) return 'no .quote-band on the landlords page';
      const w = band.getBoundingClientRect().width;
      const c = band.closest('.container').getBoundingClientRect().width;
      return w > c * 0.9 || `band is ${Math.round(w)}px inside ${Math.round(c)}px`;
    },
  },
];

// Em dashes in headings, swept across the whole site rather than on one page.
async function sweepEmDashes(page) {
  const res = await fetch(`${base}/sitemap.xml`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/')
    .filter((u) => !u.startsWith('/insights/'));
  const bad = [];
  for (const u of urls) {
    await page.goto(base + u, { waitUntil: 'domcontentloaded' });
    const found = await page.evaluate(() =>
      [...document.querySelectorAll('h1, h2')]
        .filter((h) => /—/.test(h.textContent))
        .map((h) => h.textContent.trim().slice(0, 70))
    );
    if (found.length) bad.push(`${u}: ${found.join(' | ')}`);
  }
  return { urls: urls.length, bad };
}

const browser = await chromium.launch({ executablePath: EXECUTABLE, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

try {
  await assertServingThisBuild(base);
  await assertStylesLoaded(page, base);
} catch (e) {
  await browser.close();
  console.error(`\n${e.message}\n`);
  process.exit(1);
}

console.log(`Cold read of the 27 September round against ${base}\n`);

const failed = [];
let loaded = null;
for (const c of CHECKS) {
  if (loaded !== c.page) {
    await page.goto(base + c.page, { waitUntil: 'load' });
    // Let every lazy image settle, so a photograph is measured loaded rather than at zero.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    loaded = c.page;
  }
  let r;
  try {
    r = await page.evaluate(`(${c.test.toString()})()`);
  } catch (e) {
    r = `threw: ${e.message.split('\n')[0]}`;
  }
  if (r === true) console.log(`  PASS  ${c.name}`);
  else {
    console.log(`  FAIL  ${c.name}\n          ${r === false ? 'assertion returned false' : r}`);
    failed.push(c.name);
  }
}

const sweep = await sweepEmDashes(page);
if (sweep.bad.length === 0) console.log(`  PASS  1. no em dash in any h1 or h2, swept across ${sweep.urls} pages`);
else {
  console.log(`  FAIL  1. em dashes in headings on ${sweep.bad.length} page(s)`);
  sweep.bad.forEach((b) => console.log(`          ${b}`));
  failed.push('em dash sweep');
}

await browser.close();

console.log(`\n${CHECKS.length + 1} assertions. ${failed.length === 0 ? 'ALL PASS.' : `${failed.length} FAILED.`}`);
process.exit(failed.length ? 1 : 0);
