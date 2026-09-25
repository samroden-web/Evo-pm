import { headlineFigures } from '@/data/site';

// HOME-02. The four headline figures always appear together with "Across the EVO
// portfolio." Treatment B: solid orange band, white numbers, and the qualifier as a
// full-bleed deeper-orange strip attached to the bottom of it — so the caveat travels
// with the numbers and cannot be screenshotted away from them.
export default function Figures() {
  return (
    <section className="figures" aria-label="EVO in numbers">
      <div className="container">
        <ul className="figures__list">
          {headlineFigures.map((f) => (
            <li key={f.label}>
              <span className="figures__value">{f.value}</span>
              <span className="figures__label">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="figures__note">
        <span>Across the EVO portfolio</span>
      </p>
    </section>
  );
}
