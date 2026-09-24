import { headlineFigures } from '@/data/site';

// HOME-02. The four headline figures always appear together with "Across the EVO portfolio."
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
        <p className="figures__note">Across the EVO portfolio.</p>
      </div>
    </section>
  );
}
