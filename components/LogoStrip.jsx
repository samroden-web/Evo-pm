import Tbc from './Tbc';
import { logoOpacity, logoTone } from '@/data/logos';

// row: keep every logo on one line, scrolling sideways if they don't all fit.
//
// hideMissing: drop any logo with no file instead of showing a yellow TBC tag. Used
// wherever the strip is part of the design rather than a working checklist — the footer
// had four TBC tags interleaved with the real logos, which looked broken, and would have
// left four holes the moment SHOW_TBC was turned off. What is still outstanding is
// tracked in data/logos.js, which is the right place for it.
// normalise: size each logo so they occupy roughly the same AREA rather than the same
// height. Accreditation marks run from 1.5:1 (a near-square badge) to 3.6:1 (a wide
// wordmark), and capping them all at one height makes the wide ones look twice the size
// of the badges. Equal area is what the eye actually reads as "the same size".
// The target differs by strip: the accreditation marks sit small in a dense row, the
// client wall gives each logo a whole cell. Passed in rather than fixed, because one
// number cannot serve both.
// Greyscale flattens colour but not tone, so a darker mark stays darker. Two of the eleven
// client logos are full-strength artwork while the other nine are pre-greyed, so those two
// are blended toward the page to match. See the note in data/logos.js for the measurements
// and for why this is opacity rather than a brightness filter.
function toneOpacity(name, color) {
  // A light-artwork mark is dimmed on every strip, coloured or not: once brightness(0) has
  // flattened it to black it needs lifting back to the weight of the marks beside it.
  if (logoTone[name] === 'light-artwork') return logoOpacity[name];
  if (color) return undefined;
  return logoOpacity[name];
}

function normalisedHeight(l, area) {
  if (!l.width || !l.height) return undefined;
  const ratio = l.width / l.height;
  return Math.round(Math.sqrt(area / ratio));
}

export default function LogoStrip({
  logos,
  color = false,
  label,
  swipe = false,
  row = false,
  hideMissing = false,
  normalise = false,
  normaliseArea = 3400,
}) {
  const visible = logos.filter((l) => l.show !== false).filter((l) => (hideMissing ? l.src : true));
  if (!visible.length) return null;
  return (
    <ul
      className={`logo-strip ${color ? 'logo-strip--color' : ''} ${swipe ? 'swipe-mobile' : ''} ${row ? 'logo-strip--row' : ''}`}
      aria-label={label}
      tabIndex={row ? 0 : undefined}
    >
      {visible.map((l) => (
        <li key={l.name}>
          {l.src ? (
            <img
              src={l.src}
              alt={l.name}
              width={l.width}
              height={l.height}
              data-tone={logoTone[l.name] || undefined}
              loading="lazy"
              decoding="async"
              style={{
                /* A CUSTOM PROPERTY, NOT maxHeight. Setting max-height inline beat every cap in
                   the stylesheet, because inline styles win - so a strip that allows 40px would
                   happily render a 64px logo and clip it. It never showed up until the first
                   PORTRAIT mark arrived (Cyber Essentials, 95x114): every logo before it was
                   wide, so equal-area sizing produced something shorter than the cap anyway.
                   Handing the number to CSS as a variable lets each strip clamp it with
                   min(var(--logo-h), its own cap), so equal area still governs the look and the
                   row still governs the height. */
                ...(normalise ? { '--logo-h': `${normalisedHeight(l, normaliseArea)}px`, maxWidth: '100%' } : null),
                ...(toneOpacity(l.name, color) ? { opacity: toneOpacity(l.name, color) } : null),
              }}
            />
          ) : (
            <Tbc>{row ? `${l.name} logo` : `${l.name}: ${l.tbc || 'logo to follow'}`}</Tbc>
          )}
        </li>
      ))}
    </ul>
  );
}
