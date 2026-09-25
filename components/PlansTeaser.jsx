import Link from 'next/link';
import { plans, orgTypes, defaultOrgType, combinedPrice, priceCaveat } from '@/data/plans';

// HOME-08 / GLOBAL-01: the plans teaser.
//
// Rebuilt 25 September 2026 (Sam, point 9). It used to show three prices, which turned
// the homepage into a price-comparison grid — a pricing page's job, and one the homepage
// did badly because it could only ever show one of the three old org types.
//
// It now shows ONE figure and three plans. That is the balance the argument needs: the
// whole proposition is a fixed price, and a fixed-price claim with no number anywhere
// near it is the same unsupported line every competitor runs. One number proves it. The
// comparison between plans belongs on /pricing, which is one click away.
//
// The figure is the cheapest all-in combination — Managed Technology plus the entry
// plan — computed from data/plans.js rather than typed here, so it cannot drift.

const TIER_CLASS = { home500: 't1', home1000: 't2', homeTrust: 't3' };
const FILL = { home500: 3, home1000: 4, homeTrust: 5 };

export default function PlansTeaser({
  grey = true,
  headline = 'One fixed price per home. Choose your level of cover.',
}) {
  const org = orgTypes.find((o) => o.id === defaultOrgType) || orgTypes[0];

  // The lowest all-in figure across the plans that carry a price.
  const from = plans
    .map((p) => combinedPrice(org.id, p.id))
    .filter((n) => n != null)
    .sort((a, b) => a - b)[0];

  return (
    <section className={`section ${grey ? 'section--grey' : ''}`} aria-labelledby="plans-teaser-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Plans and pricing</p>
          <h2 id="plans-teaser-title">{headline}</h2>
          <p className="lead mb-0">
            One fixed monthly fee per property, with no limit on the number of repairs in your plan. The plans differ by
            the repair value threshold — how much a single repair can cost before it is quoted separately.
          </p>
        </div>

        {/* The number. Set on its own so it reads as the proof of the claim above it
            rather than as one price among three. */}
        <p className="ev3-from">
          <span className="ev3-from-k">From</span>
          <span className="ev3-from-v">£{Math.round(from)}</span>
          <span className="ev3-from-u">per home, per month, plus VAT</span>
        </p>

        <div className="ev3-tiers ev3-tiers--noprice">
          {plans.map((p) => {
            const fill = FILL[p.id] || 3;
            return (
              <div className={`ev3-tier ev3-tier--${TIER_CLASS[p.id] || 't1'}`} key={p.id}>
                <div className="ev3-tier-bar" aria-hidden="true" />
                <div className="ev3-tier-in">
                  <span className="ev3-tier-tag">{p.tag}</span>
                  <span className="ev3-tier-name">{p.name}</span>
                  <span className="ev3-tier-thr">Up to £{p.threshold.toLocaleString('en-GB')} per repair</span>
                  <span className="ev3-tier-cover">{p.coverage}</span>
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

        <p className="mt-2 muted">{priceCaveat}</p>
        <div className="mt-2">
          <Link href="/pricing" className="btn btn-primary">
            See plans and prices
          </Link>
        </div>
      </div>
    </section>
  );
}
