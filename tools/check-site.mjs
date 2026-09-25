// Pre-deploy check. Crawls every URL in the sitemap against a running build and asserts
// the things that have actually gone wrong on this project, rather than a generic lint.
//
//   npm run build && npx next start -p 3999 &
//   node tools/check-site.mjs http://localhost:3999
//
// Exits non-zero if anything fails, so it can go in CI.
//
// WHY THIS EXISTS. Every check below corresponds to a real defect that shipped and was
// found by eye afterwards:
//
//   images    A team photograph 404'd on production for two patches because a branch
//             switch dropped the files and nothing re-fetched them.
//   claims    An unsourced statistic was removed from the homepage and reported as gone
//             while it was still live on two other pages.
//   tbc       A "to be confirmed" tag for a phone number stayed visible for weeks after
//             the number was confirmed, because two pages hardcoded it instead of
//             reading data/site.js.
//   h1        Pages were briefly shipping with two h1s, or none.
//   meta      Two pages silently shared a description inherited from the root layout.
//
// Add a line to BANNED_TEXT whenever a claim is retired. That is the whole point: the
// check remembers, so nobody has to.

const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');

// Text that must not appear anywhere on the site again. Retired claims, cost-base
// figures, and anything EVO has ruled out.
const BANNED_TEXT = [
  '28-plus', // unsourced sector comparison for damp and mould resolution
  '35-60%', // unsourced savings claim
  '15p a day', // unsourced cost claim
  'less than 15p',
  '23% of', // unsourced missing-compliance-checks claim
  'supply-chain cost plus', // the uplift on variable works: EVO's cost base
  'cost plus 25%',
  '+30%', // out-of-hours uplifts, not cleared for publication
  '+40%',
  'abortive fee',
  // Retired 25 September with the rebuilt comparison table.
  'Four things you cannot buy anywhere else', // untrue: HomeServe does all four
  'shaded below', // the old table's shaded-rows device went with it
  'British Gas', // named in a draft but never verified, so it must not reappear in a cell
];

const fail = [];
const warn = [];
let pagesChecked = 0;

function note(list, url, msg) {
  list.push(`${url}\n    ${msg}`);
}

async function urlsFromSitemap() {
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, ''))
    .map((p) => p || '/');
}

const imageCache = new Map();
async function imageOk(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  let ok = false;
  try {
    const r = await fetch(base + src, { method: 'HEAD' });
    ok = r.ok;
  } catch {
    ok = false;
  }
  imageCache.set(src, ok);
  return ok;
}

const titles = new Map();
const descriptions = new Map();

async function checkPage(path) {
  const res = await fetch(base + path);
  if (!res.ok) {
    note(fail, path, `HTTP ${res.status}`);
    return;
  }
  const html = await res.text();
  pagesChecked++;

  // --- one h1, and it is not empty ---
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]+>/g, '').trim());
  if (h1s.length === 0) note(fail, path, 'no h1');
  if (h1s.length > 1) note(fail, path, `${h1s.length} h1 elements: ${h1s.join(' | ').slice(0, 120)}`);

  // --- title and description: present, sane length, unique ---
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1].trim();
  if (!title) note(fail, path, 'no title');
  else {
    if (title.length > 65) note(warn, path, `title ${title.length} chars (over 65): ${title}`);
    if (titles.has(title)) note(fail, path, `title duplicated with ${titles.get(title)}: ${title}`);
    else titles.set(title, path);
  }

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1].trim();
  if (!desc) note(fail, path, 'no meta description');
  else {
    if (desc.length < 70) note(warn, path, `description only ${desc.length} chars`);
    if (desc.length > 165) note(warn, path, `description ${desc.length} chars (over 165)`);
    if (descriptions.has(desc)) note(fail, path, `description duplicated with ${descriptions.get(desc)}`);
    else descriptions.set(desc, path);
  }

  // --- every local image resolves ---
  const srcs = new Set();
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    let s = m[1];
    if (s.startsWith('/_next/image')) {
      const u = decodeURIComponent((s.match(/[?&]url=([^&]+)/) || [, ''])[1]);
      if (u) s = u;
    }
    if (s.startsWith('/')) srcs.add(s);
  }
  for (const s of srcs) if (!(await imageOk(s))) note(fail, path, `broken image ${s}`);

  // --- retired claims and cost-base figures ---
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const banned of BANNED_TEXT) {
    if (text.includes(banned)) note(fail, path, `banned text present: "${banned}"`);
  }

  // --- visible TBC tags, listed so stale ones get spotted ---
  const tbcs = [...text.matchAll(/class="tbc[^"]*"[^>]*>([\s\S]*?)<\/span>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter((t) => t && t !== 'To be confirmed');
  for (const t of tbcs) note(warn, path, `TBC: ${t.slice(0, 90)}`);
}

const urls = await urlsFromSitemap();
console.log(`Checking ${urls.length} URLs from the sitemap against ${base}\n`);
for (const u of urls) await checkPage(u);

if (warn.length) {
  console.log(`WARNINGS (${warn.length})`);
  for (const w of warn) console.log('  ' + w);
  console.log('');
}
if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  for (const f of fail) console.log('  ' + f);
  console.log(`\n${pagesChecked} pages checked. FAILED.`);
  process.exit(1);
}
console.log(`${pagesChecked} pages checked, ${imageCache.size} images. All clear.`);
