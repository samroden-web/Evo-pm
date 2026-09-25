import Tbc from './Tbc';

// row: keep every logo on one line, scrolling sideways if they don't all fit.
//
// hideMissing: drop any logo with no file instead of showing a yellow TBC tag. Used
// wherever the strip is part of the design rather than a working checklist — the footer
// had four TBC tags interleaved with the real logos, which looked broken, and would have
// left four holes the moment SHOW_TBC was turned off. What is still outstanding is
// tracked in data/logos.js, which is the right place for it.
export default function LogoStrip({ logos, color = false, label, swipe = false, row = false, hideMissing = false }) {
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
            <img src={l.src} alt={l.name} width={l.width} height={l.height} loading="lazy" decoding="async" />
          ) : (
            <Tbc>{row ? `${l.name} logo` : `${l.name}: ${l.tbc || 'logo to follow'}`}</Tbc>
          )}
        </li>
      ))}
    </ul>
  );
}
