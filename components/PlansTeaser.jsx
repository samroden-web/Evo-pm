import Link from 'next/link';
import { plans, orgTypes, defaultOrgType } from '@/data/plans';

// HOME-08 / GLOBAL-01: the plans teaser, rebuilt to the agreed mockup.
//
// The draft showed three identical neutral cards carrying the repair threshold and no
// price, which left the reader with nothing to choose between and no reason to click.
// The mockup gives each tier a coloured cap, the real all-in monthly figure, the
// coverage percentage and a five-segment fill meter — and puts Home 1000 in brand
// orange, because it is the plan we want chosen.
//
// The price shown is the plan fee PLUS Managed Technology, because that is the number
// a landlord actually pays per home per month. Both halves come from data/plans.js, so
// this stays correct when a price changes; /pricing remains the only place the full
// breakdown appears.

const TIER_CLASS = { home500: 't1', home1000: 't2', homeTrust: 't3' };
const FILL = { home500: 3, home1000: 4, homeTrust: 5 };

export default function PlansTeaser({
  type,
  grey = true,
  headline = 'One fixed price per home. Choose your level of cover.',
}) {
  const orgId = type || defaultOrgType;
  const org = orgTypes.find((o) => o.id === orgId) || orgTypes[0];
  const href = type ? `/pricing?type=${type}` : '/pricing';

  return (
    <section className={`section ${grey ? 'section--grey' : ''}`} aria-labelledby="plans-teaser-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Plans and pricing</p>
          <h2 id="plans-teaser-title">{headline}</h2>
          <p className="lead">
            One fixed monthly fee per property, with no limit on the number of repairs in your plan. The plans differ only by the
            repair value threshold.
          </p>
        </div>

        <div className="ev3-tiers">
          {plans.map((p) => {
            const planFee = org.plans[p.id];
            const total = planFee == null ? null : planFee + org.managedTechnology;
            const fill = FILL[p.id] || 3;
            return (
              <div className={`ev3-tier ev3-tier--${TIER_CLASS[p.id] || 't1'}`} key={p.id}>
                <div className="ev3-tier-bar" aria-hidden="true" />
                <div className="ev3-tier-in">
                  <span className="ev3-tier-tag">{p.tag}</span>
                  <span className="ev3-tier-name">{p.name}</span>
                  {total == null ? (
                    <span className="ev3-tier-price ev3-tier-price--poa">Price on application</span>
                  ) : (
                    <span className="ev3-tier-price">
                      £{Math.round(total)}
                      <small> /home /month</small>
                    </span>
                  )}
                  <span className="ev3-tier-cover">
                    Up to £{p.threshold.toLocaleString('en-GB')} per repair. {p.coverage}.
                  </span>
                  <span className="ev3-meter" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <i key={i} className={i < fill ? 'on' : ''} />
                    ))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-2 muted">
          {org.label} pricing shown, plus VAT, and includes Managed Technology at £{org.managedTechnology.toFixed(2)} per home per
          month. Optional electrical and gas compliance cover is available alongside any plan.
        </p>
        <div className="mt-2">
          <Link href={href} className="btn btn-primary">
            Explore plans and prices
          </Link>
        </div>
      </div>
    </section>
  );
}
