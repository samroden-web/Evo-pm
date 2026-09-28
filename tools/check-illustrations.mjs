// Are the real illustrations actually in the repo, or is the site still showing placeholders?
//
//   node tools/check-illustrations.mjs
//
// WHY THIS EXISTS. The illustrations cannot be downloaded in the container the site is built
// in - the egress proxy refuses evo-pm.com - so they are fetched separately, in the Codespace,
// by tools/fetch-illustrations.mjs. That leaves a window where the repo has the layout, the
// component and the page changes but not the artwork, and a site in that state builds
// perfectly happily and looks almost right: grey discs where the drawings should be.
//
// "Almost right" is the dangerous state. A missing image shouts; a placeholder that is the
// correct size, in the correct place, with the correct caption underneath, does not. It would
// survive a skim of the preview and reach a client review looking like a design decision. So
// the repo ships placeholders deliberately - and this check refuses to let them ship.
//
// It also re-checks the things that quietly go wrong in conversion: a file that has lost its
// transparency (which puts a white box round every drawing - invisible on a white page,
// obvious on the orange band), and a file whose aspect ratio no longer matches the dimensions
// declared in data/illustrations.js, which is what next/image reserves space with.

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIR = path.join(ROOT, 'public/images/illustrations');
const { illustrations } = await import(path.join(ROOT, 'data/illustrations.js'));

const fail = [];
const warn = [];

// WebP dimensions, straight out of the header. Lossy (VP8 ) and lossless (VP8L) store them
// differently, and the extended (VP8X) form carries a canvas size of its own.
function webpSize(b) {
  const fourcc = b.slice(12, 16).toString('ascii');
  if (fourcc === 'VP8X') return { w: (b[24] | (b[25] << 8) | (b[26] << 16)) + 1, h: (b[27] | (b[28] << 8) | (b[29] << 16)) + 1 };
  if (fourcc === 'VP8 ') return { w: (b[26] | (b[27] << 8)) & 0x3fff, h: (b[28] | (b[29] << 8)) & 0x3fff };
  if (fourcc === 'VP8L') {
    const n = b.readUInt32LE(21);
    return { w: (n & 0x3fff) + 1, h: ((n >> 14) & 0x3fff) + 1 };
  }
  return null;
}
function webpHasAlpha(b) {
  const fourcc = b.slice(12, 16).toString('ascii');
  if (fourcc === 'VP8X') return (b[20] & 0x10) !== 0;
  if (fourcc === 'VP8L') return true;
  return false;
}

console.log('Illustration check');
console.log(`${Object.keys(illustrations).length} drawings expected in public/images/illustrations\n`);

if (!existsSync(DIR)) {
  console.error('The folder does not exist at all. Run: node tools/fetch-illustrations.mjs (in the Codespace)');
  process.exit(1);
}
const present = await readdir(DIR);

for (const [name, art] of Object.entries(illustrations)) {
  const file = path.join(DIR, art.file);
  if (!present.includes(art.file)) {
    fail.push(`${art.file} is missing entirely (${name})`);
    continue;
  }
  if (existsSync(`${file}.placeholder`)) {
    fail.push(`${art.file} is still the PLACEHOLDER, not the real drawing (${name})`);
    continue;
  }
  const b = await readFile(file);
  if (b.slice(0, 4).toString('ascii') !== 'RIFF' || b.slice(8, 12).toString('ascii') !== 'WEBP') {
    fail.push(`${art.file} is not a WebP file`);
    continue;
  }
  if (b.length < 4096) {
    fail.push(`${art.file} is only ${b.length} bytes - too small to be the artwork`);
    continue;
  }
  if (!webpHasAlpha(b)) {
    fail.push(`${art.file} has no alpha channel - it was flattened, so it will show a white box on the orange band`);
  }
  const size = webpSize(b);
  if (size) {
    const declared = art.width / art.height;
    const actual = size.w / size.h;
    if (Math.abs(declared - actual) > 0.02) {
      fail.push(
        `${art.file} is ${size.w}x${size.h} (ratio ${actual.toFixed(3)}) but data/illustrations.js declares ` +
          `${art.width}x${art.height} (ratio ${declared.toFixed(3)}). next/image reserves space from the ` +
          `declared figures, so the page will jump as this loads.`
      );
    }
    if (Math.max(size.w, size.h) < 600) {
      warn.push(`${art.file} is only ${size.w}x${size.h} - it will soften on a 2x screen`);
    }
  }
}

// Anything in the folder that nothing references. Not a failure - it is shipped weight.
for (const f of present) {
  if (f.endsWith('.placeholder') || f.startsWith('.')) continue;
  if (!Object.values(illustrations).some((a) => a.file === f)) {
    warn.push(`${f} is in the folder but nothing in data/illustrations.js points at it`);
  }
}

if (warn.length) {
  console.log(`WARNINGS (${warn.length})`);
  warn.forEach((w) => console.log(`    ${w}`));
  console.log('');
}

if (fail.length) {
  console.log(`FAILURES (${fail.length})`);
  fail.forEach((f) => console.log(`    ${f}`));
  console.log('');
  console.log('If these are placeholders, the fetch step has not run. In the Codespace:');
  console.log('    node tools/fetch-illustrations.mjs');
  console.log('It cannot run in the build container - the egress proxy refuses evo-pm.com.');
  console.log('\nIllustration check FAILED.');
  process.exit(1);
}

console.log(`All ${Object.keys(illustrations).length} illustrations are real, transparent, and the right shape.`);
