import Link from 'next/link';
import { plans, orgTypes, defaultOrgType, combinedPrice, priceCaveatShort } from '@/data/plans';

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

        {/* ==================================================================================
            THREE FACTS, FULL WIDTH, EACH POINTING SOMEWHERE. Sam, 30 September: "i also think
            this section takes up too much space on the homepage, can we make it much more
            concise (maybe even full width). take the key bit and point to the relevant places,
            rather than lots of writing."

            What was here: three stacked paragraphs in a 68ch column - the price caveat, a
            "No surprises" note and a sentence on everything beyond reactive repairs. About 110
            words, running down the left of the page with the right half empty.

            AND ONE OF THEM SAID THE SAME THING TWICE. "Your own price is set after a stock
            review" appeared in the caveat AND in the transparency note, three lines apart.
            That is the sort of thing prose hides and a three-up strip cannot.

            Now: the same three claims in about 45 words, full width, each ending at the page
            that proves it. Nothing is dropped - the detail moves to where a reader who wants
            it is already going.

            NOTHING HERE NAMES WHAT IT SHOULD NOT. "What is excluded" means the published
            exclusions list on /pricing. The variable-works uplift, the materials uplift, the
            out-of-hours rates and the abortive fee stay off the site.
            ================================================================================== */}
        <ul className="ev3-facts">
          <li>
            <span className="ev3-fact-k">Your own price</span>
            <p>
              {priceCaveatShort} Fixed for the first year, and any review after that is capped at CPI plus 1%.
            </p>
          </li>
          <li>
            <span className="ev3-fact-k">Nothing hidden</span>
            <p>
              Every plan, every price, and the full included and excluded lists are published.{' '}
              <Link href="/pricing" className="text-link">
                See what is included
              </Link>
            </p>
          </li>
          <li>
            <span className="ev3-fact-k">Beyond reactive repairs</span>
            <p>
              Planned and cyclical maintenance, voids, capital and retrofit, insurance works and compliance.{' '}
              <Link href="/how-it-works" className="text-link">
                See what else we cover
              </Link>
            </p>
          </li>
        </ul>

        <div className="mt-2">
          <Link href="/pricing" className="btn btn-primary">
            See plans, prices and what is included
          </Link>
        </div>
      </div>
    </section>
  );
}
