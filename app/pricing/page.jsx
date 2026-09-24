import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PlanExplorer from '@/components/PlanExplorer';
import JsonLd, { faqJsonLd } from '@/components/JsonLd';
import Tbc from '@/components/Tbc';
import { orgTypes, plans, addons, pricingFaqs, formatPrice, combinedPrice, vatNote } from '@/data/plans';

export const metadata = {
  title: 'EVO plans and pricing | Fixed-price repairs per home',
  description:
    'One fixed price per home for the technology, the service and the repairs. Managed Technology plus Home 500, Home 1000 or Home Trust, priced per home per month, plus VAT.',
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
                Reactive repairs under your threshold, however many: heating, plumbing, drainage, electrics, locks, carpentry, tiling,
                windows, flooring and localised decoration. Plus the platform, the helpdesk, contractor management, quality checks and
                reporting.
              </p>
            </div>
            <div className="card card--grey">
              <h3>Quoted openly, before we start.</h3>
              <p>
                Planned and cyclical work, capital and retrofit works, damp and mould programmes (see our{' '}
                <Link href="/damp-and-mould">damp and mould page</Link>), insurance works, and any job above your threshold. Major
                works are never hidden in the monthly fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All prices as plain, crawlable text (brief section 7) */}
      <section className="section section--grey" aria-labelledby="glance-title">
        <div className="container">
          <div className="section-head">
            <h2 id="glance-title">All prices at a glance</h2>
            <p className="lead">{vatNote}</p>
          </div>
          <div className="table-wrap">
            <table className="data">
              <caption className="visually-hidden">Prices per home per month, plus VAT, by organisation type</caption>
              <thead>
                <tr>
                  <th scope="col">Organisation type</th>
                  <th scope="col">Managed Technology</th>
                  {plans.map((p) => (
                    <th scope="col" key={p.id}>
                      {p.name} plan
                    </th>
                  ))}
                  {addons.map((a) => (
                    <th scope="col" key={a.id}>
                      {a.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orgTypes.map((t) => (
                  <tr key={t.id}>
                    <th scope="row">{t.label}</th>
                    <td>{formatPrice(t.managedTechnology)}</td>
                    {plans.map((p) => (
                      <td key={p.id}>{t.plans[p.id] == null ? 'POA' : formatPrice(t.plans[p.id])}</td>
                    ))}
                    {addons.map((a) => (
                      <td key={a.id}>{formatPrice(t.addons[a.id])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-3">Combined price per home per month (Managed Technology and plan), plus VAT</h3>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th scope="col">Organisation type</th>
                  {plans.map((p) => (
                    <th scope="col" key={p.id}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orgTypes.map((t) => (
                  <tr key={t.id}>
                    <th scope="row">{t.label}</th>
                    {plans.map((p) => {
                      const c = combinedPrice(t.id, p.id);
                      return <td key={p.id}>{c == null ? 'Price on application' : formatPrice(c)}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted mt-1">Compliance cover is added on top of these where selected. POA means price on application.</p>

          {/* PRICE-08 Footnotes */}
          <h3 className="mt-3" style={{ fontSize: '1.05rem' }}>
            Notes
          </h3>
          <ul className="muted" style={{ fontSize: '0.92rem' }}>
            <li>All prices are per home per month, plus VAT at the standard rate.</li>
            <li>Plan thresholds are the total cost of labour and materials per repair, excluding VAT.</li>
            <li>Coverage percentages are typical and depend on the age and condition of the stock.</li>
            <li>
              Communal repairs reporting for blocks, and client account management, are quoted in your proposal.{' '}
              <Tbc>wording to be confirmed by EVO</Tbc>
            </li>
            <li>
              All repairs are on a like-for-like basis. Plans exclude major renewals, structural repairs, boiler replacements, rewires,
              roofing works, damp and mould remediation, and planned investment programmes.
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
