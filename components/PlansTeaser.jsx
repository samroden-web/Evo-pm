import Link from 'next/link';
import { plans } from '@/data/plans';

// HOME-08 / GLOBAL-01: the short plans teaser used on the homepage and sector pages.
// Three equal neutral cards with threshold and coverage. Prices live on /pricing.
export default function PlansTeaser({ type, grey = true, headline = 'One fixed price per home. Choose your level of cover.' }) {
  const href = type ? `/pricing?type=${type}` : '/pricing';
  return (
    <section className={`section ${grey ? 'section--grey' : ''}`} aria-labelledby="plans-teaser-title">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Plans and pricing</p>
          <h2 id="plans-teaser-title">{headline}</h2>
          <p className="lead">
            One fixed monthly fee per property, with no limit on the number of repairs in your plan. The plans differ only by the
            repair value threshold.
          </p>
        </div>
        <div className="plan-cards swipe-mobile">
          {plans.map((p) => (
            <div className="plan-card plan-card--compact" key={p.id}>
              <span className="plan-card__tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <div className="threshold-figure">
                £{p.threshold.toLocaleString('en-GB')}
                <small>PER REPAIR, PLUS VAT</small>
              </div>
              <p className="plan-card__coverage">{p.coverage}</p>
            </div>
          ))}
        </div>
        <p className="center mt-2 muted">
          Optional electrical and gas compliance cover is available alongside any plan. All prices are per home per month, plus
          VAT.
        </p>
        <div className="center mt-2">
          <Link href={href} className="btn btn-primary">
            Explore plans and prices
          </Link>
        </div>
      </div>
    </section>
  );
}
