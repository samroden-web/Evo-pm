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
  const priced = plans.filter((p) => org.plans[p.id] != null);
  const entryPlan = priced.reduce((a, b) => (org.plans[a.id] <= org.plans[b.id] ? a : b), priced[0]);
  const entryPlanFee = org.plans[entryPlan.id];
  const from = combinedPrice(org.id, entryPlan.id);

  return (
    <section className={`section ${grey ? 'section--grey' : ''}`} aria-labelledby="plans-teaser-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Plans and pricing</p>
          <h2 id="plans-teaser-title">{headline}</h2>
          <p className="lead mb-0">
            One fixed monthly fee per property, with no limit on the number of repairs in your plan. The plans differ by
            the repair value threshold: how much a single repair can cost before it is quoted separately.
          </p>
        </div>

        {/* The number. Set on its own so it reads as the proof of the claim above it
            rather than as one price among three. */}
        <p className="ev3-from">
          <span className="ev3-from-k">From</span>
          <span className="ev3-from-v">£{Math.round(from)}</span>
          <span className="ev3-from-u">per home, per month, plus VAT</span>
        </p>
        {/* The split, under the total rather than instead of it (Sam). Two smaller
            numbers make £48 easier to take, and the composition carries the argument:
            you are buying a platform AND a repairs service, which is the whole
            difference from a software vendor. Showing only the split would read as
            unbundling — the reader adds them up anyway and then wonders what else is
            outside the number. */}
        <p className="ev3-from-split">
          <span>
            <b>£{Math.round(org.managedTechnology)}</b> platform
          </span>
          <span aria-hidden="true">+</span>
          <span>
            <b>£{Math.round(entryPlanFee)}</b> repairs plan
          </span>
          <span aria-hidden="true">·</span>
          <span>No limit on the number of repairs</span>
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

        {/* TRANSPARENCY, SIGNALLED HERE AND PROVED ON /pricing. Sam, 30 September: "show under
            pricing that on our pricing page we show everything that is included/excluded and
            the price. we are transparent about everything. (but not over dense the homepage
            again)".

            One line, not a section. The objection this answers is the one a procurement lead
            has the moment they see a fixed price - what is the catch, and does £48 turn into
            something else once I speak to sales. The answer is that the catch is already
            published, which is a stronger claim than any adjective.

            EVERY CLAUSE IS ALREADY TRUE AND ALREADY ON /pricing: the standard exclusions list
            in data/plans.js, the stock review behind priceCaveat, and the CPI plus 1% cap in
            priceReview. Nothing new is asserted here - it points at what is already there.

            IT NAMES NOTHING IT SHOULD NOT. The variable-works uplift, the materials uplift,
            the out-of-hours rates and the abortive fee stay off the site. "What is excluded"
            means the published exclusions list, not the rate card. */}
        <p className="ev3-transparency">
          <strong>No surprises.</strong> The pricing page carries the whole thing: every plan, every price, what
          is included and what is excluded, and how the price is reviewed. Your own price is set after a stock review,
          fixed for the first year, and any review after that is capped at CPI plus 1%.
        </p>

        {/* THE ADDITIONAL WORKS, MENTIONED RATHER THAN LISTED. Sam, 30 September: "we also
            need somewhere on a homepage to point to all the additional work we do... i dont
            think we need to duplicate the data, just make sure we link to the relevant part of
            the websites when we are talking about the plans".

            So: one sentence, three examples, two links. It sits inside the plans teaser rather
            than in a section of its own because this is the moment a reader is working out what
            the fixed price does and does not buy - which is also the moment they wonder whether
            EVO only does reactive repairs. The full lists stay on /how-it-works and the prices
            stay on /pricing. Naming everything here would be a third copy of the same content
            to keep in step, and would undo the density work on this page. */}
        <p className="ev3-beyond">
          The plan covers reactive repairs. We also handle planned and cyclical maintenance, voids, capital and
          retrofit works, insurance works, and gas and electrical compliance, quoted or priced separately.{' '}
          <Link href="/how-it-works" className="text-link">
            See what else we cover
          </Link>
          .
        </p>

        <div className="mt-2">
          <Link href="/pricing" className="btn btn-primary">
            See plans, prices and what is included
          </Link>
        </div>
      </div>
    </section>
  );
}
