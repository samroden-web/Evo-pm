import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import PhoneStepStrip from '@/components/PhoneStepStrip';
import FullJourney from '@/components/FullJourney';
import ComparisonTable from '@/components/ComparisonTable';
import VimeoFacade from '@/components/VimeoFacade';
import Tbc from '@/components/Tbc';
import ClosingCta from '@/components/ClosingCta';
import { explainerVideo } from '@/data/testimonials';

export const metadata = {
  title: 'How EVO works | One platform for residents, landlords and trades',
  description:
    'How EVO runs repairs end to end: the EVO Living App for residents, the EVO Dashboard for landlords and the EVO Trades App for vetted contractors, in one system.',
  alternates: { canonical: '/how-it-works' },
};

const fourPoints = [
  { title: 'We do the work.', body: 'Everyone else connects you to somebody who does.' },
  {
    title: 'A twelve-month warranty on every job.',
    body: 'Not on the software, on the repair. If it fails inside the year we come back and it costs you nothing.',
  },
  {
    title: '24/7 emergency response.',
    body: 'A real out-of-hours service with trades attached to it, not a number that logs a ticket until Monday morning.',
  },
  {
    title: 'Fully managed, end to end.',
    body: 'Report, triage, dispatch, contractor, evidence, invoice and reporting. One supplier for the whole of it, not a platform you still have to run.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it runs"
        title="One platform, built for the three people a repair involves."
        lead="Nothing on the market did what we needed, so we built it. Every report, message, appointment, photograph and sign-off lives in one system, which is what makes a fixed price possible in the first place."
        crumbs={[{ label: 'How it works' }]}
      />

      <section className="section" aria-label="EVO Living App, EVO Dashboard and EVO Trades App">
        <div className="container">
          <Audiences />
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The EVO Living App in use</p>
            <h2 id="steps-title">Report, book, track, rate.</h2>
          </div>
          <PhoneStepStrip />
          <p className="center mt-3">
            <Link href="/how-to-guides/using-the-evo-living-app" className="text-link">
              Step-by-step guide to the EVO Living App
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="journey-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The full journey</p>
            <h2 id="journey-title">From the first report to the landlord&apos;s dashboard.</h2>
            <p className="lead">Every step is recorded as it happens, so there is a clear record of the work.</p>
          </div>
          <FullJourney twoColumn />
        </div>
      </section>

      <section className="section section--grey" aria-label="Who does the work">
        <div className="container">
          <div className="grid-2 swipe-mobile">
            <div className="card card--shadow">
              <h2 style={{ fontSize: '1.4rem' }}>Who does the work</h2>
              <p className="mb-0">
                Around 100 vetted contractors, mostly small regional firms who know their area. Each one is checked for insurance,
                accreditation and competence before their first job, and anyone who falls below standard stops getting work.
              </p>
            </div>
            <div className="card card--shadow">
              <h2 style={{ fontSize: '1.4rem' }}>Behind every job</h2>
              <ul className="tick-list mb-0">
                <li>24/7 emergency cover</li>
                <li>Vetted, DBS-checked trades</li>
                <li>ISO 9001, 14001, 45001 and 27001</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="compare-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The comparison</p>
            <h2 id="compare-title">Four things you cannot buy anywhere else.</h2>
            <p className="lead">
              We compared EVO with the main alternatives across nine capabilities. Most offer an app, and several offer trades, AI or
              property data. Four things only EVO delivers, shaded below.
            </p>
          </div>
          <ComparisonTable />
          <div className="grid-4 mt-3 swipe-mobile">
            {fourPoints.map((p) => (
              <div key={p.title}>
                <h3 style={{ fontSize: '1.1rem' }}>{p.title}</h3>
                <p className="mb-0">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="lead mt-3" style={{ fontWeight: 700, color: 'var(--navy-deep)' }}>
            Most alternatives help you manage the problem. We take it off your hands.
          </p>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="video-title">
        <div className="container container--narrow">
          <h2 id="video-title">Watch: EVO in 90 seconds</h2>
          <p>
            <Tbc>EVO to decide whether this explainer video stays</Tbc>
          </p>
          <VimeoFacade vimeoId={explainerVideo.vimeoId} title={explainerVideo.title} rounded />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
