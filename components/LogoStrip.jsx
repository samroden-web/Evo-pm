import Tbc from './Tbc';

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
const TARGET_AREA = 3400;

function normalisedHeight(l) {
  if (!l.width || !l.height) return undefined;
  const ratio = l.width / l.height;
  return Math.round(Math.sqrt(TARGET_AREA / ratio));
}

export default function LogoStrip({
  logos,
  color = false,
  label,
  swipe = false,
  row = false,
  hideMissing = false,
  normalise = false,
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
              loading="lazy"
              decoding="async"
              style={normalise ? { maxHeight: normalisedHeight(l), maxWidth: 'none' } : undefined}
            />
          ) : (
            <Tbc>{row ? `${l.name} logo` : `${l.name}: ${l.tbc || 'logo to follow'}`}</Tbc>
          )}
        </li>
      ))}
    </ul>
  );
}
