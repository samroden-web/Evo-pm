import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PlanExplorer from '@/components/PlanExplorer';
import JsonLd, { faqJsonLd } from '@/components/JsonLd';
import Tbc from '@/components/Tbc';
import {
  orgTypes,
  plans,
  addons,
  pricingFaqs,
  formatPrice,
  combinedPrice,
  vatNote,
  priceCaveat,
  clientStandingCharge,
  priceReview,
} from '@/data/plans';

export const metadata = {
  title: 'EVO plans and pricing | Fixed-price repairs per home',
  description:
    'One fixed price per home for the technology, the service and the repairs. Home 500, Home 1000 and Home Trust, priced per home per month, plus VAT.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      {/* PRICE-01 */}
      <PageHero
        eyebrow="Plans and pricing"
        title="One fixed price per home, for the technology, the service and the repairs."
        lead="We manage each repair from report to completion and stand behind the work with a 12-month warranty, so you have certainty over both the service and the cost."
        crumbs={[{ label: 'Plans and pricing' }]}
      />

      <div className="container">
        <PlanExplorer />
      </div>

      {/* PRICE-07 */}
      <section className="section" aria-labelledby="outside-title">
        <div className="container">
          <div className="section-head">
            <h2 id="outside-title">What sits outside the plans</h2>
          </div>
          <div className="grid-2">
            <div className="card card--grey">
              <h3>Inside the fee.</h3>
              <p>
                Reactive repairs under your threshold, however many: heating, plumbing, drainage, electrics, locks,
                carpentry, tiling, windows, flooring and localised decoration. Plus the platform, the helpdesk,
                contractor management, quality checks and reporting.
              </p>
            </div>
            <div className="card card--grey">
              <h3>Quoted openly, before we start.</h3>
              <p>
                Planned and cyclical work, capital and retrofit works, damp and mould programmes (see our{' '}
                <Link href="/damp-and-mould">damp and mould page</Link>), insurance works, and any job above your
                threshold. Major works are never hidden in the monthly fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All prices as plain, crawlable text (brief section 7).
          Rebuilt 25 September 2026: with a single price list these tables no longer have
          an "organisation type" axis, so they now read down the items instead. */}
      <section className="section section--grey" aria-labelledby="glance-title">
        <div className="container">
          <div className="section-head">
            <h2 id="glance-title">All prices at a glance</h2>
            <p className="lead">{vatNote}</p>
            <p className="mb-0">{priceCaveat}</p>
          </div>
          <div className="table-wrap">
            <table className="data">
              <caption className="visually-hidden">EVO prices per home per month, plus VAT</caption>
              <thead>
                <tr>
                  <th scope="col">What you are paying for</th>
                  <th scope="col">Price</th>
                  <th scope="col">Charged</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Managed Technology</th>
                  <td>{formatPrice(orgTypes[0].managedTechnology)}</td>
                  <td>Per home, per month</td>
                </tr>
                {plans.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.name} plan</th>
                    <td>
                      {orgTypes[0].plans[p.id] == null ? 'Price on application' : formatPrice(orgTypes[0].plans[p.id])}
                    </td>
                    <td>Per home, per month</td>
                  </tr>
                ))}
                {addons.map((a) => (
                  <tr key={a.id}>
                    <th scope="row">{a.name}</th>
                    <td>{formatPrice(orgTypes[0].addons[a.id])}</td>
                    <td>Per home, per month</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">{clientStandingCharge.label}</th>
                  <td>{formatPrice(clientStandingCharge.amount)}</td>
                  <td>Per client, per month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted mt-1">{clientStandingCharge.covers}</p>

          <h3 className="mt-3">Combined price per home per month (Managed Technology and plan), plus VAT</h3>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  <th scope="col">Repair threshold</th>
                  <th scope="col">All in, per home, per month</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => {
                  const c = combinedPrice(orgTypes[0].id, p.id);
                  return (
                    <tr key={p.id}>
                      <th scope="row">{p.name}</th>
                      <td>Up to £{p.threshold.toLocaleString('en-GB')} per repair</td>
                      <td>{c == null ? 'Price on application' : formatPrice(c)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="muted mt-1">
            Compliance cover and the client account charge are added on top of these where they apply. {priceReview}
          </p>

          {/* PRICE-08 Footnotes */}
          <h3 className="mt-3" style={{ fontSize: '1.05rem' }}>
            Notes
          </h3>
          <ul className="muted" style={{ fontSize: '0.92rem' }}>
            <li>All prices are per home per month, plus VAT at the standard rate.</li>
            <li>Plan thresholds are the total cost of labour and materials per repair, excluding VAT.</li>
            <li>Coverage percentages are typical and depend on the age and condition of the stock.</li>
            {/* Client account management is now priced in the table above, so the note
                only needs to cover communal reporting, which is quoted per block. */}
            <li>Communal repairs reporting for blocks is quoted in your proposal, based on the number of blocks.</li>
            <li>{priceReview}</li>
            <li>
              All repairs are on a like-for-like basis. Plans exclude major renewals, structural repairs, boiler
              replacements, rewires, roofing works, damp and mould remediation, and planned investment programmes.
            </li>
          </ul>
        </div>
      </section>

      {/* PRICE-09 FAQs */}
      <section className="section" aria-labelledby="pricing-faq-title">
        <div className="container container--narrow">
          <h2 id="pricing-faq-title">Questions about plans and pricing</h2>
          <div className="accordion mt-2">
            {pricingFaqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="accordion__body">
                  <p>{f.a}</p>
                  {f.link && (
                    <Link href={f.link.href} className="text-link">
                      {f.link.label}
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
          <div className="btn-row">
            <Link href="/contact?enquiry=review" className="btn btn-primary">
              Book a portfolio review
            </Link>
            <Link href="/contact?enquiry=pilot" className="btn btn-secondary">
              Talk about a 12-month pilot
            </Link>
          </div>
        </div>
      </section>
      <JsonLd data={faqJsonLd(pricingFaqs)} />
    </>
  );
}
