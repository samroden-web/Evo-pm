// EVO's own illustrations, brought back from the live evo-pm.com.
//
// WHY THESE EXIST. Sam, 28 September 2026: "the CEO really doesnt want us to change his
// branding ... he also wants to keep the cartoon drawings", and then "incorporate some of
// the cartoons", and then "if we can mix real people and cartoons on the website, that would
// be good."
//
// WHAT THEY ARE. Flat-vector circular vignettes, drawn on a transparent ground. Sampling the
// pixels of four of them found they are drawn in #FF6600 - EVO's exact orange, the same value
// as the --orange token - plus #3C5265, which is the same navy as the brand headings, and a
// light blue family (#96E6FB / #D2F7FF) that appears nowhere else in the palette. That orange
// match is the reason these sit against the site's own bands without clashing; it was the
// main thing worth checking before agreeing to use them.
//
// THE WHITE INSIDE EACH CIRCLE IS PAINTED, NOT TRANSPARENT. Between 25% and 32% of each file
// is fully transparent (the area outside the vignette, where the loose orange squares float),
// but the disc itself is opaque white. So they sit correctly on white, on the warm greys and
// on an orange band - a white disc on orange is exactly what their own hero does - and would
// read as a hard white blob on a dark navy band. globals.css carries the guard.
//
// GLOBAL-09. The developer brief says "real EVO photos only, captioned with the place in
// small grey type". These illustrations contradict that rule, and they are here because Sam
// overruled it on 28 September on the CEO's instruction - not because anybody decided a brief
// was out of date. The real photography stays exactly where it was. See components/Photo.jsx.
//
// THE SPLIT BETWEEN DRAWINGS AND PHOTOGRAPHS IS THEIRS, NOT OURS. Their own /about/who-we-are
// carries one illustration and twenty-eight real headshots on the same page. So: drawings
// carry the concept - who we help, what the service is, the closing invitation - and
// photographs carry the evidence, which is anywhere the site is showing real people doing
// real work. Nothing photographic was removed to make room for these.
//
// HOW THE FILES GET HERE. The egress proxy on the build container blocks evo-pm.com, so these
// cannot be downloaded where the site is assembled. tools/fetch-illustrations.mjs runs in the
// Codespace, fetches each PNG, converts it to WebP and writes it into public/images/
// illustrations/. Until it has run, the repo carries obvious placeholders and
// tools/check-illustrations.mjs FAILS the build - so a grey circle can never reach production
// by accident.
//
// Widths and heights below are the true intrinsic dimensions of the source PNGs, measured on
// the live site on 28 September 2026. They set the aspect ratio next/image reserves, so they
// must stay in step with whatever the fetch script writes.

export const illustrations = {
  'evo-hero-home': {
    remote: '/media/tbrjombd/evo_00.png',
    file: 'evo-hero-home.webp',
    width: 1496,
    height: 1470,
    alt: 'Illustration of an EVO operative at the door of a house, with the family who live there and their dog.',
  },
  'evo-letting-agents': {
    remote: '/media/xwfpdesj/evo_02.png',
    file: 'evo-letting-agents.webp',
    width: 1618,
    height: 1504,
    alt: 'Illustration of a letting agent’s window, with a parent and child looking at the properties on display.',
  },
  'evo-housing-association': {
    remote: '/media/41kn3zmy/evo_03.png',
    file: 'evo-housing-association.webp',
    width: 1582,
    height: 1504,
    alt: 'Illustration of a block of flats with a resident standing on her balcony.',
  },
  'evo-local-authority': {
    remote: '/media/tpwluhyu/evo_04.png',
    file: 'evo-local-authority.webp',
    width: 1572,
    height: 1504,
    alt: 'Illustration of a street of terraced houses seen from above, with cars parked along it.',
  },
  'evo-closing': {
    remote: '/media/om1am55h/evo_06.png',
    file: 'evo-closing.webp',
    width: 1704,
    height: 1254,
    alt: 'Illustration of a family at home together on the sofa.',
  },
  'evo-landlords': {
    remote: '/media/e5qeuwzw/evo_10b.png',
    file: 'evo-landlords.webp',
    width: 1764,
    height: 1582,
    alt: 'Illustration of a landlord and a letting agent shaking hands at the front door of a property.',
  },
  'evo-what-we-do': {
    remote: '/media/humhj021/evo_13.png',
    file: 'evo-what-we-do.webp',
    width: 1870,
    height: 1722,
    alt: 'Illustration showing the EVO service end to end, from a resident’s report through to the work being done.',
  },
  'evo-build-to-rent': {
    remote: '/media/zr5hwv0l/evo_14.png',
    file: 'evo-build-to-rent.webp',
    width: 1618,
    height: 1505,
    alt: 'Illustration of two Build to Rent blocks with a resident walking a dog past them.',
  },
};

export const ILLUSTRATION_DIR = '/images/illustrations';
