import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ClosingCta from '@/components/ClosingCta';
import Photo from '@/components/Photo';
import { cta, contact } from '@/data/site';

export const metadata = {
  title: 'Damp and mould service for social landlords | EVO',
  description:
    "A defined damp and mould process from the first report to the final check, with every step recorded so you can evidence your Awaab's Law timescales.",
  alternates: { canonical: '/damp-and-mould' },
};

// MHCLG guidance. Re-check the timescales against this page on the day of launch.
const MHCLG_URL = 'https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords';

const timescales = [
  { hazard: 'Emergency', what: 'Investigate and make safe', when: 'Within 24 hours' },
  { hazard: 'Significant', what: 'Investigate', when: 'Within 10 working days of becoming aware' },
  {
    hazard: 'Significant',
    what: 'Written summary to the resident',
    when: 'Within 3 working days of the investigation ending',
  },
  { hazard: 'Significant', what: 'Safety works', when: 'Within 5 working days of the investigation ending' },
  {
    hazard: 'Significant',
    what: 'Further preventative works',
    when: 'Start within 5 working days, or physically start within 12 weeks where that is not possible',
  },
];

const steps = [
  {
    title: 'Report',
    body: 'The resident reports damp or mould in the EVO Living App, or by phone, in the same way as any other repair. We notify you as soon as it arrives, and log, triage and time-stamp it.',
  },
  {
    title: 'Assess',
    body: 'We survey the affected area, take moisture readings and photographs, and carry out a risk assessment. You receive a written report with our findings and any further works we recommend.',
  },
  { title: 'Treat', body: 'We remediate using our three-stage treatment.' },
  {
    title: 'Monitor',
    body: 'We check the property afterwards to stop it coming back, and repeat cases are tracked as a measure in their own right.',
  },
];

const treatment = [
  {
    title: 'Clean and sterilise',
    body: 'A fungicidal treatment removes surface staining across the affected area and one metre beyond it in every direction, without scraping, which can release spores. The area is then ventilated and left to dry for at least 24 hours.',
  },
  {
    title: 'Protect',
    body: 'A clear mould-resistant sealant is applied over the area and one metre beyond it, blocking stains and protecting against regrowth.',
  },
  {
    title: 'Paint',
    body: 'A mould-resistant finish containing fungicide is applied. We use a wipeable, water-resistant finish in kitchens and bathrooms, and a matt finish elsewhere.',
  },
];

const kpis = [
  {
    value: '100%',
    body: "Damp and mould inspections attended within 10 working days of the report, in line with Awaab's Law",
  },
  { value: '100%', body: 'Remedial works completed within the prescribed timescale' },
  { value: 'Below 5%', body: 'Repeat cases within six months' },
];

export default function DampAndMouldPage() {
  return (
    <>
      {/* DM-01 */}
      <PageHero
        eyebrow="Damp and mould"
        title="Damp and mould, handled and evidenced."
        lead="A defined process from the first report to the final check, with every step recorded so you can show the Regulator what was done and when."
        crumbs={[{ label: 'Damp and mould' }]}
      >
        <div className="btn-row">
          <Link href={cta.review.href} className="btn btn-primary">
            {cta.review.label}
          </Link>
          <a href="/downloads/evo-damp-and-mould-procedure.pdf" className="btn btn-secondary">
            Download the procedure (PDF)
          </a>
        </div>
      </PageHero>

      {/* DM-02 */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why it matters now</p>
            <h2 id="why-title">Awaab&apos;s Law sets fixed timescales.</h2>
            <p className="lead">
              Awaab&apos;s Law sets fixed timescales for social landlords to investigate and fix hazards. It has applied
              to damp and mould and to emergency hazards since 27 October 2025. From 30 November 2026 it extends to
              further hazards including excess cold and heat, falls, fire, electrical and structural hazards. The
              government plans to extend it to the remaining hazards in 2027.
            </p>
          </div>
          <h3>The timescales</h3>
          <ul className="timescales timescales--wide">
            {timescales.map((t, i) => (
              <li key={i} className={t.hazard === 'Emergency' ? 'emergency' : ''}>
                <span className="hazard">{t.hazard} hazard</span>
                <span className="what">{t.what}</span>
                <span className="when">{t.when}</span>
              </li>
            ))}
          </ul>
          <p className="source">Source: MHCLG, Awaab&apos;s Law: guidance for social landlords.</p>
          <div className="callout mt-2">
            <p>
              The legal duty stays with the landlord. EVO&apos;s job is to help you meet the timescales and hold the
              evidence that you did.
            </p>
          </div>
        </div>
      </section>

      {/* DM-03 */}
      <section className="section section--grey" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our process</p>
            <h2 id="how-title">How we handle every case</h2>
          </div>
          <ol className="steps-row steps-row--4 swipe-mobile">
            {steps.map((s, i) => (
              <li className="step-card" key={s.title}>
                <span className="num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DM-04 */}
      <section className="section" aria-labelledby="treat-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Step 3 in detail</p>
            <h2 id="treat-title">The three-stage treatment</h2>
          </div>
          <ol className="steps-row steps-row--3 swipe-mobile">
            {treatment.map((s, i) => (
              <li className="step-card" key={s.title}>
                <span className="num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="callout mt-3">
            <p>
              <strong>We do not paint over damp.</strong> Before stages 2 and 3, the surface is checked with a moisture
              meter. We only continue once it reads 20% or below. If it is wetter than that, it is left to dry further.
            </p>
          </div>
        </div>
      </section>

      {/* DM-05 */}
      <section className="section section--warm" aria-labelledby="measure-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we measure</p>
            <h2 id="measure-title">Our service targets</h2>
          </div>
          <div className="grid-3 swipe-mobile">
            {kpis.map((k, i) => (
              <div className="tile" key={i}>
                <span className="stat">{k.value}</span>
                <span className="stat-label">Service target</span>
                <p>{k.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 max-640">
            Every report, reading, photograph and action is recorded in the EVO Dashboard as it happens, in a form you
            can use for your statutory reporting, Tenant Satisfaction Measures and Housing Ombudsman requirements.
          </p>
          {/* The placeholder asked for a damp and mould case view. We do not have that exact
              screen, but we do have the Dashboard job record, which is the same evidence
              trail against a property and makes the point the paragraph above it makes. */}
          <div className="mt-3 cs-photo">
            <Photo
              src="/images/app/evo-dashboard-job-record.webp"
              alt="The EVO Dashboard showing a job record with its full history, photographs and costs"
              caption="Every report, reading and photograph against the property, in the EVO Dashboard."
              width={1400}
              height={875}
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* DM-06 */}
      <section className="section" aria-labelledby="charge-title">
        <div className="container">
          <div className="split split--top">
            <div>
              <p className="eyebrow">How it is charged</p>
              <h2 id="charge-title">Outside the repair plans, and quoted openly.</h2>
            </div>
            <div>
              <p className="lead">
                Damp and mould sits outside the repair plans, so it is never squeezed into a threshold. The initial
                visit (survey, moisture readings, the first treatment stage and a written report) is a fixed charge. Any
                further treatment or remediation is scoped and quoted, and only goes ahead with your approval.
              </p>
              {/* £129 was cleared for publication on 25 September (addendum section 10),
                  so the placeholder was out of date rather than waiting on anything. */}
              <p className="dm-charge">
                <strong>&pound;129 plus VAT</strong> for the initial visit &mdash; survey, moisture readings, the first
                treatment stage and a written report.{' '}
                <Link href="/pricing" className="text-link">
                  All charges in full
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DM-07 */}
      <section className="section section--grey" aria-labelledby="residents-title">
        <div className="container">
          <div className="split split--top">
            <div className="card card--shadow">
              <p className="eyebrow">For residents</p>
              <h2 id="residents-title" className="h2--card">
                Seeing damp or mould at home?
              </h2>
              <p>
                Report it in the EVO Living App. Choose the category, describe what you can see and add a photo. You
                will get a reference number straight away. If you cannot use the app, call us on {contact.residentPhone}
                .
              </p>
              <Link href="/residents" className="text-link">
                Residents: get help with a repair
              </Link>
            </div>
            <div>
              <h3>Preventing damp and mould at home</h3>
              {/* The placeholder asked EVO to supply or approve prevention tips. What follows
                  is the standard published guidance on condensation damp - it makes no claim
                  about EVO and nothing here is specific to our service, so it does not need
                  sign-off the way a performance claim would. The closing line is the
                  important one: none of this is a substitute for reporting it. */}
              <ul className="tick-list tick-list--compact">
                <li>Open a window or use the extractor fan when cooking, showering or drying clothes</li>
                <li>Keep a small gap between furniture and outside walls so air can move behind it</li>
                <li>Wipe condensation off windows and sills in the morning rather than leaving it</li>
                <li>Close the kitchen or bathroom door while the room is in use, and for a while after</li>
                <li>Keep low background heating on in cold weather rather than short bursts of high heat</li>
                <li>Do not block air bricks, trickle vents or extractor fans</li>
              </ul>
              <p className="mt-2 mb-0 muted">
                If you can already see damp or mould, report it. None of the above will clear it, and under Awaab&apos;s
                Law your landlord has fixed timescales to investigate once you have told them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DM-08 */}
      <section className="section" aria-labelledby="links-title">
        <div className="container">
          <h2 id="links-title">Downloads and links</h2>
          <ul className="tick-list mt-2">
            <li>
              <a href="/downloads/evo-damp-and-mould-procedure.pdf">EVO Damp and Mould Procedure (one-page PDF)</a>
            </li>
            <li>
              <Link href="/insights/how-housing-associations-can-evidence-repairs-compliance">
                How Housing Associations Can Evidence Repairs Compliance
              </Link>
            </li>
            <li>
              <a href={MHCLG_URL} target="_blank" rel="noopener noreferrer">
                MHCLG: Awaab&apos;s Law guidance for social landlords (opens in a new tab)
              </a>
            </li>
          </ul>
          <div className="btn-row">
            <Link href={cta.review.href} className="btn btn-primary">
              {cta.review.label}
            </Link>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
