// Point each article at its cover image, based on what is ACTUALLY in
// public/images/insights. Run after tools/fetch-article-images.sh.
//
// This exists so the repo can never reference an image file that has not been
// downloaded yet: the data file is the source of truth for text, and this script
// makes the image field agree with the filesystem.
//
//   node tools/link-article-images.mjs
//
// Safe to run repeatedly. Prints what it changed.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public/images/insights';
const DATA = 'data/insights.js';

const files = new Map();
for (const f of readdirSync(DIR)) {
  const dot = f.lastIndexOf('.');
  if (dot > 0) files.set(f.slice(0, dot), f);
}

let src = readFileSync(DATA, 'utf8');
let set = 0;
let cleared = 0;

src = src.replace(/slug: '([^']+)',\n([\s\S]*?)    image: (null|'[^']*'),/g, (whole, slug, mid, current) => {
  const file = files.get(slug);
  const wanted = file ? `'/images/insights/${file}'` : 'null';
  if (wanted === current) return whole;
  if (wanted === 'null') cleared++;
  else set++;
  return `slug: '${slug}',\n${mid}    image: ${wanted},`;
});

writeFileSync(DATA, src);
console.log(`Cover images linked: ${set} set, ${cleared} cleared.`);
console.log(`${files.size} image files present in ${DIR}.`);
