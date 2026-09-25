import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import PhoneStepStrip from '@/components/PhoneStepStrip';
import FullJourney from '@/components/FullJourney';
import ComparisonTable from '@/components/ComparisonTable';
import VimeoFacade from '@/components/VimeoFacade';
import Tbc from '@/components/Tbc';
import Photo from '@/components/Photo';
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
        image="/images/photos/evo-team-member-helping-resident.webp"
        imageAlt="An EVO team member helping a resident use the Living App"
        imageWidth={1400}
        imageHeight={787}
        priority
        captionLabel="One system"
        caption="Three apps, one record, one supplier"
      />

      <section className="section" aria-label="EVO Living App, EVO Dashboard and EVO Trades App">
        <div className="container">
          <Audiences />
        </div>
      </section>

      <section className="ev2-band" aria-label="What owning the system makes possible">
        <div className="container">
          <p className="eyebrow">Why we built it ourselves</p>
          <h2>Owning the system is what lets us fix the price.</h2>
          <div className="ev2-band-grid">
            <div className="ev2-band-item">
              <h3>Nothing is re-keyed</h3>
              <p>The resident&rsquo;s report becomes the job, the appointment, the evidence and the invoice. No handoffs between systems that do not speak.</p>
            </div>
            <div className="ev2-band-item">
              <h3>We can see the cost as it happens</h3>
              <p>Every job, every part and every return visit, in one place. That is the only way anyone can quote a fixed monthly price and stand behind it.</p>
            </div>
            <div className="ev2-band-item">
              <h3>The evidence is a by-product</h3>
              <p>Photographs, timestamps and notes are captured because the work needs them, not because a regulator asked afterwards.</p>
            </div>
            <div className="ev2-band-item">
              <h3>The trade sees what the resident said</h3>
              <p>Description, photographs and service history arrive with the job, which is most of the difference between a first-time fix and a second visit.</p>
            </div>
          </div>
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
          <div className="ev3-split mt-3">
            <Photo
              src="/images/photos/evo-trades-two-operatives-van.webp"
              alt="Two tradesmen at the back of their own van on a residential street"
              caption="Mostly small regional firms, working in their own area."
              width={1500}
              height={843}
              sizes="(min-width: 880px) 46vw, 100vw"
            />
            <Photo
              src="/images/photos/evo-operative-at-front-door.webp"
              alt="A tradesman arriving at a resident's front door, phone in hand"
              caption="Arriving in a slot the resident picked, with the history already on the phone."
              width={1500}
              height={843}
              sizes="(min-width: 880px) 46vw, 100vw"
            />
          </div>
          <p className="mt-3 mb-0">
            <Link href="/trades" className="text-link">
              How firms join the network, and what we ask of them
            </Link>
          </p>
        </div>
      </section>

      {/* ISHA deck, gap E. The deck sells a materially wider service than the site has
          ever admitted to, and the map called that "a revenue line the site is hiding".
          Scope and pricing are flagged rather than invented. */}
      <section className="section" aria-labelledby="wider-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Beyond reactive repairs</p>
            <h2 id="wider-title">The plan covers the homes. We can cover the rest of the building too.</h2>
            <p className="lead">
              Reactive repairs inside the plan is where most clients start. It is not the limit of what we run, and putting the
              rest with the same supplier is usually the point at which the coordination overhead disappears.
            </p>
          </div>
          <div className="grid-4 mt-3 swipe-mobile">
            <div className="card">
              <h3>Communal areas and plant</h3>
              <p className="mb-0">Reactive and planned. Lifts, plant rooms, amenity space, car parks and roofs.</p>
            </div>
            <div className="card">
              <h3>Compliance, including building safety</h3>
              <p className="mb-0">
                Gas, electrical, alarms and PAT as add-ons to any plan, alongside the building safety obligations that sit with
                higher-risk blocks.
              </p>
            </div>
            <div className="card">
              <h3>Voids</h3>
              <p className="mb-0">Turnaround works between tenancies, on the same trades network and the same record.</p>
            </div>
            <div className="card">
              <h3>Capital works projects</h3>
              <p className="mb-0">Defined projects quoted openly, scheduled and evidenced the same way a repair is.</p>
            </div>
          </div>
          <Tbc block>
            Confirm the scope and pricing model for communal PPM, voids, building safety and capital works before this goes live.
            The claim is from Steve&rsquo;s ISHA deck; the commercial detail is not yet written down anywhere public.
          </Tbc>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="compare-title">
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

      <section className="section" aria-labelledby="video-title">
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
