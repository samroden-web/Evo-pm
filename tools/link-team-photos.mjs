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

src = src.replace(/photo: (null|'[^']*'), file: '([^']+)'/g, (whole, current, file) => {
  const wanted = files.has(file) ? `'/images/team/${file}'` : 'null';
  if (wanted === current) return whole;
  if (wanted === 'null') cleared++;
  else set++;
  return `photo: ${wanted}, file: '${file}'`;
});

writeFileSync(DATA, src);
console.log(`Team photos linked: ${set} set, ${cleared} cleared. ${files.size} files in ${DIR}.`);
