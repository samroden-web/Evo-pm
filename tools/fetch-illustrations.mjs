// Fetch EVO's own illustrations from the live evo-pm.com and convert them to WebP.
//
//   node tools/fetch-illustrations.mjs
//
// RUN THIS IN THE CODESPACE, NOT IN THE BUILD CONTAINER. The container the site is assembled
// in sits behind an egress proxy that refuses evo-pm.com outright - `curl` there returns HTTP
// 000, connect_rejected. That is also true of the shell on a linked laptop. The Codespace can
// reach it, which is the same reason the client logo artwork was fetched there.
//
// WHAT IT DOES. For each entry in data/illustrations.js: fetch the PNG from evo-pm.com,
// convert to WebP at 900px on the long edge, and write it to public/images/illustrations/.
// 900px is twice the largest size any of them is ever displayed at, so they stay sharp on a
// 2x screen while the originals - up to 1870px and 268KB - do not get shipped to a phone.
//
// TRANSPARENCY IS PRESERVED, AND IT MATTERS. These are vignettes on a transparent ground with
// orange squares floating outside the circle. Flattening them onto white would put a white
// rectangle behind every drawing, which is invisible on a white page and glaring on an orange
// band. The conversion keeps the alpha channel and the script refuses any output that has
// lost it.
//
// IT IS SAFE TO RE-RUN. Files are only replaced when the new one arrives intact.

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public/images/illustrations');
const ORIGIN = 'https://evo-pm.com';
const LONG_EDGE = 900;

const { illustrations } = await import(path.join(ROOT, 'data/illustrations.js'));

// sharp if the project has it, otherwise the `cwebp` binary, otherwise Python's Pillow.
// Codespaces vary, and this should not fail over which one happens to be installed.
async function converter() {
  try {
    const sharp = (await import('sharp')).default;
    return {
      name: 'sharp',
      async convert(buf, w, h) {
        const scale = LONG_EDGE / Math.max(w, h);
        return sharp(buf)
          .resize(Math.round(w * scale), Math.round(h * scale), { fit: 'inside' })
          .webp({ quality: 88, alphaQuality: 100 })
          .toBuffer();
      },
    };
  } catch {
    /* next */
  }
  try {
    await run('which', ['cwebp']);
    return {
      name: 'cwebp',
      async convert(buf, w, h) {
        const scale = LONG_EDGE / Math.max(w, h);
        const tmpIn = path.join(OUT, '.tmp-in.png');
        const tmpOut = path.join(OUT, '.tmp-out.webp');
        await writeFile(tmpIn, buf);
        await run('cwebp', [
          '-q', '88', '-alpha_q', '100',
          '-resize', String(Math.round(w * scale)), String(Math.round(h * scale)),
          tmpIn, '-o', tmpOut,
        ]);
        const out = await readFile(tmpOut);
        await run('rm', ['-f', tmpIn, tmpOut]);
        return out;
      },
    };
  } catch {
    /* next */
  }
  await run('python3', ['-c', 'import PIL']);
  return {
    name: 'Pillow',
    async convert(buf, w, h) {
      const scale = LONG_EDGE / Math.max(w, h);
      const tmpIn = path.join(OUT, '.tmp-in.png');
      const tmpOut = path.join(OUT, '.tmp-out.webp');
      await writeFile(tmpIn, buf);
      await run('python3', [
        '-c',
        [
          'import sys',
          'from PIL import Image',
          'im = Image.open(sys.argv[1]).convert("RGBA")',
          `im = im.resize((${Math.round(w * scale)}, ${Math.round(h * scale)}), Image.LANCZOS)`,
          'im.save(sys.argv[2], "WEBP", quality=88, method=6, exact=True)',
        ].join('\n'),
        tmpIn,
        tmpOut,
      ]);
      const out = await readFile(tmpOut);
      await run('rm', ['-f', tmpIn, tmpOut]);
      return out;
    },
  };
}

// Does this WebP still have an alpha channel? The VP8X extended header carries a flag bit for
// it; a lossy VP8 chunk with no VP8X header has none. Checked because a converter that
// silently flattens to white would leave every drawing with a white box round it, and that is
// exactly the kind of fault that survives review on a white page and only shows up on the
// orange band.
function hasAlpha(buf) {
  if (buf.slice(0, 4).toString('ascii') !== 'RIFF') return false;
  const fourcc = buf.slice(12, 16).toString('ascii');
  if (fourcc === 'VP8X') return (buf[20] & 0x10) !== 0;
  if (fourcc === 'VP8L') return true;
  return false;
}

await mkdir(OUT, { recursive: true });
const conv = await converter();
console.log(`Fetching ${Object.keys(illustrations).length} illustrations from ${ORIGIN}`);
console.log(`Converting with ${conv.name}, ${LONG_EDGE}px on the long edge, alpha preserved.\n`);

let failed = 0;
let totalIn = 0;
let totalOut = 0;

for (const [name, art] of Object.entries(illustrations)) {
  const dest = path.join(OUT, art.file);
  try {
    const res = await fetch(ORIGIN + art.remote);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const src = Buffer.from(await res.arrayBuffer());
    if (src.length < 4096) throw new Error(`only ${src.length} bytes back - that is not the artwork`);

    const out = Buffer.from(await conv.convert(src, art.width, art.height));
    if (out.length < 4096) throw new Error(`conversion produced ${out.length} bytes`);
    if (!hasAlpha(out)) throw new Error('converted file has no alpha channel - it was flattened onto a background');

    await writeFile(dest, out);
    // The repo ships obvious placeholders so the site can be built and checked before these
    // files exist. Each one has a marker beside it, and check-illustrations.mjs fails while
    // any marker is still there. Clearing it is how the real artwork announces its arrival.
    await run('rm', ['-f', `${dest}.placeholder`]);
    totalIn += src.length;
    totalOut += out.length;
    const kb = (n) => `${Math.round(n / 1024)}KB`;
    console.log(`  ok    ${art.file.padEnd(30)} ${kb(src.length).padStart(6)} PNG -> ${kb(out.length).padStart(6)} WebP`);
  } catch (e) {
    failed++;
    console.log(`  FAIL  ${art.file.padEnd(30)} ${e.message}`);
    if (existsSync(dest)) {
      const s = await stat(dest);
      console.log(`        left the existing ${Math.round(s.size / 1024)}KB file in place`);
    }
  }
}

console.log('');
if (failed) {
  console.log(`${failed} of ${Object.keys(illustrations).length} could not be fetched.`);
  console.log('If this ran outside the Codespace, that is the egress proxy refusing evo-pm.com.');
  console.log('Run it in the Codespace. Do not work around the proxy.');
  process.exit(1);
}
console.log(`All ${Object.keys(illustrations).length} fetched and converted.`);
console.log(`${Math.round(totalIn / 1024)}KB of PNG became ${Math.round(totalOut / 1024)}KB of WebP.`);
console.log('Now run: node tools/check-illustrations.mjs');
