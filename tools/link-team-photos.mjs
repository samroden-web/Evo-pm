// Point each team member at their photograph, based on what is ACTUALLY in
// public/images/team. Run after tools/fetch-team-photos.sh.
//
//   node tools/link-team-photos.mjs
//
// Safe to run repeatedly.

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';

const DIR = 'public/images/team';
const DATA = 'data/team.js';

const files = new Set(existsSync(DIR) ? readdirSync(DIR) : []);
let src = readFileSync(DATA, 'utf8');
let set = 0;
let cleared = 0;

// WHITESPACE-TOLERANT, and this matters more than it looks. The original pattern required
// `photo: null, file: 'x.jpg'` on ONE line. Running Prettier over data/team.js splits that pair
// across two lines - which it did on 27 September - and the moment it does, this linker matches
// nothing, reports a cheerful "0 set, 0 cleared", and every team photograph silently disappears
// from the site on the next deploy. No error, no failed build. That is precisely how the client
// logos vanished a few days earlier.
// A code formatter must never be able to break a data linker, so the separator is now \s* and
// the repo carries a .prettierignore for the data files as well. Belt and braces, deliberately.
src = src.replace(/photo:\s*(null|'[^']*'),\s*file:\s*'([^']+)'/g, (whole, current, file) => {
  const wanted = files.has(file) ? `'/images/team/${file}'` : 'null';
  if (wanted === current) return whole;
  if (wanted === 'null') cleared++;
  else set++;
  return `photo: ${wanted}, file: '${file}'`;
});

writeFileSync(DATA, src);
console.log(`Team photos linked: ${set} set, ${cleared} cleared. ${files.size} files in ${DIR}.`);
