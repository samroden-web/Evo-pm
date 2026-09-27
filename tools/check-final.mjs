// The launch audit: links, accessibility and weight, across every page in the sitemap.
//
//   node tools/check-final.mjs http://localhost:3999
//
// WHY THIS EXISTS, AND WHY IT IS SEPARATE FROM THE OTHER FOUR. check-site tests content and
// metadata, check-layout tests containers, check-photos tests crops, check-mobile tests overflow.
// None of them opens a link, reads an alt attribute, or measures a colour against what is
// actually behind it. Sam asked for a full audit before launch - "content, design, optimisation,
// phone, links workign etc etc" - and those are the gaps.
//
// THE CONTRAST PART IS THE ONE TO READ. This project has now measured 1.00:1 three separate
// times, from three different bugs, and each time the number looked plausible enough to act on:
//
//   1. A checker that stopped at the first non-transparent ancestor and read rgba(255,255,255,
//      0.06) as opaque white.
//   2. A throwaway script whose luminance function had a typo'd channel, so every element on the
//      page returned an identical ratio.
//   3. A second throwaway that resolved every backdrop to white because its "is this
//      transparent" test did not match the string Chrome actually returns.
//
// So this composites properly: it collects EVERY background layer from the element up to the
// document, then alpha-composites them front-to-back onto the page's own base colour. If a layer
// is semi-transparent, what shows through it is included. Nothing stops at the first hit.
//
// It also refuses to report a ratio it cannot stand behind: an element sitting on a background
// IMAGE or a gradient is listed as unmeasurable rather than assigned a number, because the pixel
// behind the text is not knowable from computed styles.

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

// Pages are checked at a desktop width for contrast and headings, and at a phone width for tap
// targets, because a 44px target on a laptop can be a 20px one on a phone.
const DESKTOP = { width: 1440, height: 1000 };
const PHONE = { width: 390, height: 844 };

async function urlsFromSitemap() {
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
  // Every non-article page, plus a sample of articles: 80 near-identical article pages would
  // treble the runtime to re-prove the same template.
  const articles = all.filter((u) => u.startsWith('/insights/'));
  return [...all.filter((u) => !u.startsWith('/insights/')), ...articles.slice(0, 6)];
}

// ---------------------------------------------------------------- in-page audit
const auditPage = () => {
  // fg-on-bg pairs signed off by the site's owner, with who decided and when. Anything not on
  // this list is still a failure.
  const ACCEPTED = {
    '#ffffff on #ff6600': 'white on EVO orange, 2.94:1 - Sam, 27 September: the brand look on every orange block',
  };
  const out = { contrast: [], accepted: [], unmeasurable: [], alt: [], headings: [], links: [], lang: null };

  // --- colour helpers -------------------------------------------------------
  const parse = (c) => {
    const n = (c || '').match(/[\d.]+/g);
    if (!n) return null;
    return { r: +n[0], g: +n[1], b: +n[2], a: n.length > 3 ? +n[3] : 1 };
  };
  // src OVER dst, both straight (non-premultiplied) RGBA with dst opaque.
  const over = (src, dst) => ({
    r: src.r * src.a + dst.r * (1 - src.a),
    g: src.g * src.a + dst.g * (1 - src.a),
    b: src.b * src.a + dst.b * (1 - src.a),
    a: 1,
  });
  const lum = (c) => {
    const f = (v) => {
      const x = v / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const ratio = (a, b) => {
    const la = lum(a);
    const lb = lum(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  };

  // Collect every background layer from the element upward, nearest first, then composite from
  // the FURTHEST back forward so semi-transparent layers let what is behind them through.
  const backdropOf = (el) => {
    const layers = [];
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') {
        // A gradient is not an unknown: its colour stops are right there. Measuring against the
        // LIGHTEST stop is the honest worst case for light text, so a gradient no longer buys a
        // free pass - 198 elements were previously reported as unmeasurable and therefore
        // unchecked. A real background image still is unmeasurable, because the pixel behind the
        // text is not knowable from computed styles.
        const stops = (cs.backgroundImage.match(/rgba?\([^)]*\)/g) || []).map(parse).filter(Boolean);
        if (stops.length && /gradient/.test(cs.backgroundImage)) {
          let lightest = stops[0];
          for (const st of stops) if (lum(st) > lum(lightest)) lightest = st;
          layers.push(lightest.a === 0 ? { ...lightest, a: 0.001 } : lightest);
          if (lightest.a === 1) break;
          continue;
        }
        return { image: true };
      }
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) {
        layers.push(c);
        if (c.a === 1) break; // opaque: nothing behind it can show through
      }
    }
    const pageBase = parse(getComputedStyle(document.body).backgroundColor);
    let acc = pageBase && pageBase.a === 1 ? pageBase : { r: 255, g: 255, b: 255, a: 1 };
    for (let i = layers.length - 1; i >= 0; i--) acc = over(layers[i], acc);
    return { colour: acc };
  };

  const label = (el) => {
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 44);
    return t || `<${el.tagName.toLowerCase()}>`;
  };

  // --- contrast -------------------------------------------------------------
  const TEXT_TAGS = 'p,h1,h2,h3,h4,h5,h6,li,a,span,strong,em,td,th,label,button,figcaption,small,summary,blockquote';
  for (const el of document.querySelectorAll(TEXT_TAGS)) {
    // Only elements that own visible text directly, so a wrapper is not counted for its child.
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!own) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;

    const fg = parse(cs.color);
    if (!fg) continue;
    const back = backdropOf(el);
    if (back.image) {
      out.unmeasurable.push(`${label(el)} sits on a background image or gradient`);
      continue;
    }
    // Text can itself be semi-transparent; composite it onto its own backdrop before measuring.
    const fgSolid = fg.a < 1 ? over(fg, back.colour) : fg;
    const size = parseFloat(cs.fontSize);
    const bold = +cs.fontWeight >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const need = large ? 3 : 4.5;
    const got = ratio(fgSolid, back.colour);
    if (got < need) {
      const hex = (c) => '#' + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
      const pair = `${hex(fgSolid)} on ${hex(back.colour)}`;
      const line = `${got.toFixed(2)}:1 (needs ${need}) ${pair} at ${size}px${bold ? ' bold' : ''} - "${label(el)}"`;
      // ACCEPTED EXCEPTIONS. This is not a way of hiding failures, it is the opposite. Sam was
      // shown the measurement for white on the brand orange and chose the brand look, which is
      // his decision to make and not a defect for a tool to keep re-reporting at him. Recording
      // it here keeps three things true at once: the deploy is not blocked by a decision already
      // taken, the number is still printed on every run so nobody forgets it, and any NEW
      // failure still fails the build loudly.
      if (ACCEPTED[pair]) out.accepted.push(line);
      else out.contrast.push(line);
    }
  }

  // --- images ---------------------------------------------------------------
  for (const img of document.querySelectorAll('img')) {
    const r = img.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const alt = img.getAttribute('alt');
    if (alt === null) out.alt.push(`no alt attribute at all: ${img.currentSrc || img.src}`);
    else if (alt.trim() === '') {
      // An empty alt is CORRECT in two common cases, and the first version of this check called
      // 21 of them faults: an image inside a link whose own text already names it (every article
      // card on the site), and an image in a figure with a caption. Announcing the same title
      // twice is worse than not announcing it. So it is only a finding when nothing else names
      // the image AND it is big enough to be carrying meaning.
      const link = img.closest('a');
      const named = !!(link && ((link.textContent || '').trim().length > 1 || link.getAttribute('aria-label')));
      const fig = img.closest('figure');
      const capt = !!(fig && fig.querySelector('figcaption') && fig.querySelector('figcaption').textContent.trim());
      if (!named && !capt && r.width > 200 && r.height > 150)
        out.alt.push(
          `empty alt on a ${Math.round(r.width)}x${Math.round(r.height)} image: ${img.currentSrc || img.src}`
        );
    } else if (/\.(png|jpe?g|webp|svg)$/i.test(alt.trim())) {
      out.alt.push(`alt is a filename: "${alt}"`);
    }
  }

  // --- headings -------------------------------------------------------------
  const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter((h) => {
    const cs = getComputedStyle(h);
    return cs.display !== 'none' && cs.visibility !== 'hidden';
  });
  const h1s = hs.filter((h) => h.tagName === 'H1');
  if (h1s.length !== 1) out.headings.push(`${h1s.length} h1 elements`);
  let prev = 0;
  for (const h of hs) {
    const lvl = +h.tagName[1];
    if (prev && lvl > prev + 1) out.headings.push(`h${prev} jumps to h${lvl} at "${label(h)}"`);
    prev = lvl;
  }

  // --- links ----------------------------------------------------------------
  for (const a of document.querySelectorAll('a')) {
    const href = a.getAttribute('href');
    const text = (a.textContent || '').trim();
    const aria = a.getAttribute('aria-label');
    if (href === null || href.trim() === '') out.links.push(`link with no href: "${text.slice(0, 40)}"`);
    else if (href === '#') out.links.push(`link goes nowhere (href="#"): "${text.slice(0, 40)}"`);
    if (!text && !aria && !a.querySelector('img[alt]:not([alt=""])'))
      out.links.push(`link with no accessible name: ${href}`);
    if (href && /^https?:/i.test(href) && a.target === '_blank' && !/noopener/.test(a.rel || '')) {
      out.links.push(`opens a new tab without rel=noopener: ${href}`);
    }
    if (href && href.startsWith('/')) out.links.push(`INTERNAL::${href.split('#')[0]}`);
    else if (href && /^https?:/i.test(href)) out.links.push(`EXTERNAL::${href}`);
  }

  out.lang = document.documentElement.getAttribute('lang');

  // UNRESOLVED COMMENTS. Sam, 27 September: "can you also check there are no unresolved comments
  // on there?" SHOW_TBC is true in production, so every tag left in the source is visible to a
  // customer. They are listed rather than failed, because some are deliberate - they are the
  // site's own record of what EVO still owes it - but nothing should reach launch unseen.
  out.tbc = [...document.querySelectorAll('.tbc')].map((t) =>
    (t.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 90)
  );
  return out;
};

// Tap targets, measured at phone width only.
const auditTaps = () =>
  [...document.querySelectorAll('a,button,summary,input,select,[role="button"]')]
    .filter((el) => {
      const cs = getComputedStyle(el);
      return cs.display !== 'none' && cs.visibility !== 'hidden';
    })
    .map((el) => {
      const r = el.getBoundingClientRect();
      return {
        w: Math.round(r.width),
        h: Math.round(r.height),
        t: (el.textContent || '').trim().slice(0, 34),
        inline: getComputedStyle(el).display === 'inline',
      };
    })
    // An inline link inside a paragraph is expected to be text-height; the rule is for controls.
    .filter((x) => x.w > 1 && x.h > 1 && !x.inline && (x.w < 24 || x.h < 24));

// ---------------------------------------------------------------- run
const urls = await urlsFromSitemap();
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

console.log(`Launch audit of ${urls.length} pages against ${base}`);
console.log('Links, contrast, alt text, heading order, tap targets and page weight.\n');

const fail = [];
const warn = [];
const internal = new Set();
const external = new Set();
const weights = [];
const tbcs = [];
const accepted = [];
const note = (bucket, page, msg) => bucket.push(`  ${page}\n    ${msg}`);

const page = await browser.newPage({ viewport: DESKTOP });
let bytes = 0;
page.on('response', (r) => {
  const len = +(r.headers()['content-length'] || 0);
  if (len) bytes += len;
});

for (const u of urls) {
  bytes = 0;
  await page.goto(base + u, { waitUntil: 'load' });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 25));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(250);

  const r = await page.evaluate(auditPage);
  weights.push({ u, kb: Math.round(bytes / 1024) });

  for (const c of r.contrast) note(fail, u, `contrast ${c}`);
  for (const c of r.accepted || []) accepted.push(`  ${u}\n    ${c}`);
  for (const a of r.alt) note(fail, u, `image ${a}`);
  for (const h of r.headings) note(fail, u, `headings: ${h}`);
  for (const x of r.unmeasurable) note(warn, u, `contrast not measurable: ${x}`);
  if (r.lang !== 'en-GB' && r.lang !== 'en') note(fail, u, `html lang is "${r.lang}"`);
  for (const t of r.tbc || []) tbcs.push(`  ${u}\n    ${t}`);
  for (const l of r.links) {
    if (l.startsWith('INTERNAL::')) internal.add(l.slice(10));
    else if (l.startsWith('EXTERNAL::')) external.add(l.slice(10));
    else note(fail, u, l);
  }
}
await page.close();

// Tap targets at phone width.
const phone = await browser.newPage({ viewport: PHONE });
for (const u of urls) {
  await phone.goto(base + u, { waitUntil: 'load' });
  await phone.waitForTimeout(200);
  const small = await phone.evaluate(auditTaps);
  for (const s of small) note(fail, u, `tap target ${s.w}x${s.h}px (needs 24px) - "${s.t}"`);
}
await phone.close();
await browser.close();

// Every internal link actually resolves.
console.log(`Checking ${internal.size} distinct internal links resolve...`);
const dead = [];
for (const href of internal) {
  try {
    const res = await fetch(base + href, { redirect: 'follow' });
    if (!res.ok) dead.push(`${href} -> ${res.status}`);
  } catch (e) {
    dead.push(`${href} -> ${e.message.split('\n')[0]}`);
  }
}
for (const d of dead) fail.push(`  internal link\n    ${d}`);

console.log('');
if (warn.length) {
  console.log(`NOTES (${warn.length})`);
  warn.forEach((w) => console.log(w));
  console.log('');
}

if (accepted.length) {
  console.log(`ACCEPTED CONTRAST EXCEPTIONS (${accepted.length} elements)`);
  console.log('Measured, below the WCAG AA bar, and signed off by the site owner - so they are');
  console.log('reported here every run rather than failing the build or being forgotten:');
  console.log("  white on EVO orange = 2.94:1, against a 3:1 requirement. Sam's call, 27 September.");
  console.log('  Re-measure every one of these if the brand orange ever changes.');
  console.log('');
}

if (tbcs.length) {
  console.log(`UNRESOLVED COMMENTS VISIBLE ON THE LIVE SITE (${tbcs.length})`);
  console.log('SHOW_TBC is true, so each of these is on the page for a customer to read.');
  tbcs.forEach((t) => console.log(t));
  console.log('');
} else {
  console.log('UNRESOLVED COMMENTS: none. No TBC tag is rendering anywhere.\n');
}

const heavy = weights.sort((a, b) => b.kb - a.kb).slice(0, 5);
console.log('HEAVIEST PAGES (transferred, compressed)');
heavy.forEach((h) => console.log(`  ${String(h.kb).padStart(5)} KB  ${h.u}`));
console.log(`  ${external.size} distinct external links found (not fetched - many block automated requests)`);
console.log('');

if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  fail.forEach((f) => console.log(f));
  console.log(`\n${urls.length} pages audited. FAILED.`);
  process.exit(1);
}
console.log(`${urls.length} pages audited. No dead links, no contrast failures, no missing alt text,`);
console.log('no heading-order breaks and no undersized tap targets.');
