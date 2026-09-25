import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import PhoneStepStrip from '@/components/PhoneStepStrip';
import FullJourney from '@/components/FullJourney';
import ComparisonTable from '@/components/ComparisonTable';
import Photo from '@/components/Photo';
import ClosingCta from '@/components/ClosingCta';
import { plans } from '@/data/plans';

export const metadata = {
  title: 'How EVO works | One platform for residents, landlords and trades',
  description:
    'How EVO runs repairs end to end: the EVO Living App for residents, the EVO Dashboard for landlords and the EVO Trades App for vetted contractors, in one system.',
  alternates: { canonical: '/how-it-works' },
};

// Numbered rather than four equal blocks of text. The four reasons were previously all one
// weight - dark ink heading, dark ink body, thin rule - so there was nothing for the eye to
// enter on. The numeral is also the only element on the bright orange that can be white and
// still pass AA, so it is doing contrast work as well as design work.
const whyOwnIt = [
  {
    title: 'Nothing is re-keyed',
    body: 'The resident’s report becomes the job, the appointment, the evidence and the invoice. No handoffs between systems that do not speak.',
  },
  {
    title: 'We can see the cost as it happens',
    body: 'Every job, every part and every return visit, in one place. That is the only way anyone can quote a fixed monthly price and stand behind it.',
  },
  {
    title: 'The evidence is a by-product',
    body: 'Photographs, timestamps and notes are captured because the work needs them, not because a regulator asked afterwards.',
  },
  {
    title: 'The trade sees what the resident said',
    body: 'Description, photographs and service history arrive with the job, which is most of the difference between a first-time fix and a second visit.',
  },
];

// ---------------------------------------------------------------------------
// What we cover, and how.
//
// This section used to be "beyond reactive repairs" and jumped straight into the extras,
// which meant the page never said what the thing you are buying actually IS - so "beyond"
// had nothing to be beyond. It now runs in the order a buyer thinks in: what the plan
// covers, what you can add to it, and what gets quoted separately.
//
// NO PRICES ON THIS PAGE. Every figure lives on /pricing, so there is one place to keep
// current and no chance of two pages disagreeing. The repair value THRESHOLDS stay,
// because they are scope rather than price: they are the only difference between the three
// plans, and the sentence does not mean anything without them.
// ---------------------------------------------------------------------------

// Read from data/plans.js so these can never drift from the pricing page.
const planLine = plans
  .map((p) => `${p.name} (up to \u00a3${p.threshold.toLocaleString('en-GB')})`)
  .join(', ');

const inPlan = [
  'Heating: radiators, valves, pumps, cylinders, thermostats and controls',
  'Plumbing and drainage: leaks, taps, showers, toilets, waste pipes and blockages',
  'Electrical: fault finding, sockets, switches, lighting and consumer units',
  'Locks and doors, windows and window hardware',
  'Carpentry, tiling, flooring and localised decoration',
  'General household fixtures and fittings',
];

const addOns = [
  {
    what: 'Electrical Compliance Cover',
    sub: 'EICRs and statutory inspection of the fixed installation, to BS 7671. Minimum three-year term.',
  },
  {
    what: 'Gas Boiler Cover',
    sub: 'Annual service, safety certification and breakdown cover on the boiler itself.',
  },
  {
    what: 'Communal reporting for blocks',
    sub: 'Residents report communal issues in the same app, tracked against the block rather than a home.',
  },
];

const variable = [
  {
    what: 'Any repair above your plan threshold',
    sub: 'Scoped and quoted before anything starts, and only done with your approval.',
  },
  {
    what: 'Communal areas and plant',
    sub: 'Reactive and planned. Lifts, plant rooms, amenity space, car parks and roofs.',
  },
  {
    what: 'Voids',
    sub: 'Turnaround works between tenancies, on the same trades network and the same record.',
  },
  {
    what: 'Capital and retrofit works',
    sub: 'Defined projects, scoped and scheduled, evidenced the same way a repair is.',
  },
  {
    what: 'Insurance works',
    sub: 'Escape of water, fire and impact damage, managed alongside the reactive service.',
  },
  {
    what: 'Damp and mould',
    sub: 'A defined three-stage procedure that sits outside every plan.',
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
        image="/images/photos/evo-trades-two-operatives-van.webp"
        imageAlt="Two EVO operatives at the back of their van on a residential street"
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
            {whyOwnIt.map((item, i) => (
              <div className="ev2-band-item" key={item.title}>
                <span className="ev2-band-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
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
              src="/images/photos/evo-operative-radiator-repair.webp"
              alt="An EVO operative fitting a valve to a radiator in a resident's home"
              caption="Mostly small regional firms, working in their own area."
              width={1074}
              height={807}
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

      {/* ISHA deck, gap E: the deck sells a materially wider service than the site admitted
          to. The TBC that used to sit here asked EVO to confirm "the scope and pricing
          model" as though nobody knew it - it was in Schedule 4 and in the brief all along,
          nobody had brought it onto the page.

          Three groups rather than four cards, in the order a buyer thinks in. The old
          "building safety" card claimed EVO covers "the building safety obligations that sit
          with higher-risk blocks": that is not confirmed (open item G) and clause 6.4 says
          the opposite about the duty, so the claim is gone and the carve-out is stated. */}
      <section className="section" aria-labelledby="wider-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we cover</p>
            <h2 id="wider-title">One fixed fee for the repairs. Everything else is quoted before it starts.</h2>
            <p className="lead">
              You pay one monthly fee per home and report as many repairs as you need to. There are three plans and they
              differ in one way only: the value of repair the fee covers. The trades are the same on all three.
            </p>
          </div>

          <div className="scope3">
            <div className="scope-col scope-col--plan">
              <span className="scope-tag">In your plan</span>
              <h3>Reactive repairs, however many</h3>
              <p>
                Resident-reported, like-for-like repairs under your plan&rsquo;s value threshold. No cap on the number of
                them, so your cost stays the same in a bad winter.
              </p>
              <ul className="scope-list">
                {inPlan.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="scope-note">
                <strong>{planLine}.</strong> Same trades on all three, and you can move up at any time.
              </p>
            </div>

            <div className="scope-col">
              <span className="scope-tag">Add to your plan</span>
              <h3>Compliance and communal</h3>
              <p>A published monthly price per home, on the same invoice as the plan.</p>
              <ul className="scope-list scope-list--detail">
                {addOns.map((a) => (
                  <li key={a.what}>
                    <strong>{a.what}</strong>
                    <span>{a.sub}</span>
                  </li>
                ))}
              </ul>
              <p className="scope-note">
                <Link href="/pricing" className="text-link">
                  See what each one costs
                </Link>
              </p>
            </div>

            <div className="scope-col">
              <span className="scope-tag">Variable works</span>
              <h3>Quoted before we start</h3>
              <p>
                Scoped, priced and approved by you before anyone begins. Never absorbed into the monthly fee, and never
                started without your sign-off.
              </p>
              <ul className="scope-list scope-list--detail">
                {variable.map((v) => (
                  <li key={v.what}>
                    <strong>{v.what}</strong>
                    <span>{v.sub}</span>
                  </li>
                ))}
              </ul>
              <p className="scope-note">
                On building safety, nothing we do transfers your statutory duties as landlord or accountable person. We hold
                the evidence; the duty stays with you. See{' '}
                <Link href="/compliance" className="text-link">
                  compliance
                </Link>{' '}
                and{' '}
                <Link href="/damp-and-mould" className="text-link">
                  damp and mould
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The old headline here was "Four things you cannot buy anywhere else", which was
          untrue: HomeServe does all four, from its own published terms. The argument is now
          two groups instead of four exclusives, which is both honest and stronger - it is
          the only version where every cell survives being read next to that company's own
          mark. Addendum v2 section 2. */}
      <section className="section section--grey" aria-labelledby="compare-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The comparison</p>
            <h2 id="compare-title">Two kinds of supplier exist. Neither of them does both.</h2>
            <p className="lead">
              Most of what housing providers are offered is <strong>software to manage repairs across a portfolio</strong>, which
              does not do the repair. The alternative is <strong>home emergency cover</strong>, which does the repair but only for
              heating, plumbing and electrics, one property at a time. EVO is the only one that does both.
            </p>
          </div>
          <ComparisonTable />
          <p className="lead mt-3" style={{ fontWeight: 700, color: 'var(--navy-deep)' }}>
            Most alternatives help you manage the problem. We take it off your hands.
          </p>
        </div>
      </section>

      {/* The EVO explainer video was removed on 25 September: it is out of date and shows
          an older model. VimeoFacade and the explainerVideo entry in data/testimonials.js
          are deliberately left in place so a new film drops straight back in here. */}

      <ClosingCta />
    </>
  );
}
