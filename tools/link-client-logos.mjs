// Point each logo at its file, based on what is ACTUALLY in public/images/logos.
// Run after tools/fetch-client-logos.sh.
//
//   node tools/link-client-logos.mjs
//
// Safe to run repeatedly. A logo whose file is missing goes back to src: null, so the
// site can never reference an image that is not there — which is how the article covers
// nearly shipped broken.
//
// Intrinsic width and height are read from the PNG/WEBP header so the strip reserves the
// right space and nothing shifts as the logos load.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const DATA = 'data/logos.js';

// name in data/logos.js -> file on disk
const FILES = {
  // All nine client logos are managed here, not just the new ones: they all come off the
  // old site at 320x200, and the five that were already in the repo carried hand-typed
  // dimensions from their old, differently-sized files.
  'B&D Reside': 'public/images/logos/clients/bd-reside.png',
  IDS: 'public/images/logos/clients/ids.png',
  'British Land': 'public/images/logos/clients/british-land.png',
  'Capital Letters': 'public/images/logos/clients/capital-letters.png',
  Resonance: 'public/images/logos/clients/resonance.png',
  'Thames Reach': 'public/images/logos/clients/thames-reach.png',
  'Soho Housing': 'public/images/logos/clients/soho-housing.png',
  LRM: 'public/images/logos/clients/lrm.png',
  'Storm Housing Group': 'public/images/logos/clients/storm-housing-group.png',
  'Greenhill Housing': 'public/images/logos/clients/greenhill-housing.png',
  J49: 'public/images/logos/clients/j49.png',
  'South East Consortium': 'public/images/logos/accreditations/south-east-consortium.png',
  'Procurement for Housing': 'public/images/logos/accreditations/procurement-for-housing.png',
  'Cyber Essentials': 'public/images/logos/accreditations/cyber-essentials.png',
  'Living Wage Employer': 'public/images/logos/accreditations/living-wage-employer.png',
};

function pngSize(buf) {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  return null;
}

function webpSize(buf) {
  if (buf.length < 30 || buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const fmt = buf.toString('ascii', 12, 16);
  if (fmt === 'VP8X')
    return { width: (buf.readUIntLE(24, 3) & 0xffffff) + 1, height: (buf.readUIntLE(27, 3) & 0xffffff) + 1 };
  if (fmt === 'VP8L') {
    const b = buf.readUInt32LE(21);
    return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
  }
  if (fmt === 'VP8 ') return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  return null;
}

function size(path) {
  const buf = readFileSync(path);
  return pngSize(buf) || webpSize(buf) || null;
}

let src = readFileSync(DATA, 'utf8');
let linked = 0;
let cleared = 0;

for (const [name, file] of Object.entries(FILES)) {
  const present = existsSync(file);
  const dims = present ? size(file) : null;
  const webPath = '/' + file.replace(/^public\//, '');

  // Match this logo's object literal, whatever state it is currently in.
  const re = new RegExp(`\\{ name: '${name.replace(/[.*+?^$\\{}()|[\\]\\\\]/g, '\\\\$&')}',[^}]*\\}`);
  const m = src.match(re);
  if (!m) {
    console.log(`  ?    ${name} — not found in ${DATA}`);
    continue;
  }

  const show = /show: true/.test(m[0]) ? ', show: true' : '';
  let next;
  if (present && dims) {
    next = `{ name: '${name}', src: '${webPath}', width: ${dims.width}, height: ${dims.height}${show} }`;
    linked++;
    console.log(`  ok   ${name} (${dims.width}x${dims.height})`);
  } else {
    const tbc = (m[0].match(/tbc: '([^']*)'/) || [null, 'logo file to follow'])[1];
    next = `{ name: '${name}', src: null, tbc: '${tbc}'${show} }`;
    cleared++;
    console.log(`  --   ${name} — no file, left unlinked`);
  }
  src = src.replace(re, next);
}

// The award lockup is a single image rather than a logo list entry, so it gets its own
// export. The footer renders it only when this is non-null, which means a failed
// download leaves the text awards standing rather than a broken image.
const AWARD = 'public/images/awards/award-badges-light.png';
const awardDims = existsSync(AWARD) ? size(AWARD) : null;
const awardLine = awardDims
  ? `export const awardBadges = { src: '/images/awards/award-badges-light.png', width: ${awardDims.width}, height: ${awardDims.height} };`
  : `export const awardBadges = null;`;

if (/export const awardBadges = .*;/.test(src)) {
  src = src.replace(/export const awardBadges = .*;/, awardLine);
} else {
  src += `\n${awardLine}\n`;
}
console.log(
  awardDims ? `  ok   award badges (${awardDims.width}x${awardDims.height})` : '  --   award badges — no file'
);

writeFileSync(DATA, src);
console.log(`\nLinked ${linked}, left unlinked ${cleared}. ${DATA} updated.`);
