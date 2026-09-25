// Point each competitor entry in data/competitors.js at the file that actually
// downloaded, reading real intrinsic dimensions out of the file header.
//
//   node tools/link-competitor-logos.mjs
//
// Run after tools/fetch-competitor-logos.sh. Safe to run repeatedly: a competitor whose
// file is missing goes back to src: null, and the table renders that column's name alone.
// This is the same discipline as the client logo linker - nothing in the repo ever points
// at an image that is not there.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';

const DATA = 'data/competitors.js';
const DIR = 'public/images/logos/competitors';
const KEYS = ['plentific', 'askporter', 'fixflo', 'checkatrade', 'homeserve'];

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

function jpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}

// An SVG has no pixel dimensions. Read the viewBox for the RATIO, which is all the layout
// needs, and give it a nominal size on that ratio so next/image reserves the right box.
function svgSize(buf) {
  const head = buf.toString('utf8', 0, Math.min(buf.length, 4000));
  const vb = head.match(/viewBox\s*=\s*["']\s*[-\d.]+[ ,]+[-\d.]+[ ,]+([\d.]+)[ ,]+([\d.]+)/i);
  if (vb) {
    const w = parseFloat(vb[1]);
    const h = parseFloat(vb[2]);
    if (w > 0 && h > 0) {
      const scale = 256 / Math.max(w, h);
      return { width: Math.round(w * scale), height: Math.round(h * scale) };
    }
  }
  const w = head.match(/\bwidth\s*=\s*["']([\d.]+)/i);
  const h = head.match(/\bheight\s*=\s*["']([\d.]+)/i);
  if (w && h) return { width: Math.round(parseFloat(w[1])), height: Math.round(parseFloat(h[1])) };
  return { width: 256, height: 256 };
}

function size(path) {
  const buf = readFileSync(path);
  if (path.endsWith('.svg')) return svgSize(buf);
  return pngSize(buf) || webpSize(buf) || jpegSize(buf) || null;
}

function findFile(key) {
  if (!existsSync(DIR)) return null;
  const hit = readdirSync(DIR).find((f) => f.replace(/\.[^.]+$/, '') === key && !f.startsWith('.'));
  return hit ? `${DIR}/${hit}` : null;
}

let src = readFileSync(DATA, 'utf8');
let linked = 0;
let cleared = 0;

for (const key of KEYS) {
  const file = findFile(key);
  const dims = file ? size(file) : null;

  // Match this competitor's object literal by its key, whatever state it is in now.
  const re = new RegExp(`(key: '${key}',[\\s\\S]*?)src: [^,]+,\\s*\\n(\\s*)width: [^,]+,\\s*\\n\\s*height: [^,\\n]+,`);
  const m = src.match(re);
  if (!m) {
    console.log(`  ?    ${key} - could not find its entry in ${DATA}`);
    continue;
  }

  let replacement;
  if (file && dims) {
    const webPath = '/' + file.replace(/^public\//, '');
    replacement = `${m[1]}src: '${webPath}',\n${m[2]}width: ${dims.width},\n${m[2]}height: ${dims.height},`;
    linked++;
    console.log(`  ok   ${key} (${dims.width}x${dims.height}) ${webPath}`);
  } else {
    replacement = `${m[1]}src: null,\n${m[2]}width: null,\n${m[2]}height: null,`;
    cleared++;
    console.log(`  --   ${key} - no file, column will show the name only`);
  }
  src = src.replace(re, replacement);
}

writeFileSync(DATA, src);
console.log(`\nLinked ${linked}, left unlinked ${cleared}. ${DATA} updated.`);
