import Tbc from './Tbc';

// row: keep every logo on one line, scrolling sideways if they don't all fit.
export default function LogoStrip({ logos, color = false, label, swipe = false, row = false }) {
  const visible = logos.filter((l) => l.show !== false);
  return (
    <ul className={`logo-strip ${color ? 'logo-strip--color' : ''} ${swipe ? 'swipe-mobile' : ''} ${row ? 'logo-strip--row' : ''}`} aria-label={label} tabIndex={row ? 0 : undefined}>
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
