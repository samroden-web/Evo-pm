import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import PhoneStepStrip from '@/components/PhoneStepStrip';
import FullJourney from '@/components/FullJourney';
import ComparisonTable from '@/components/ComparisonTable';
import Photo from '@/components/Photo';
import ClosingCta from '@/components/ClosingCta';
import { orgTypes, addons, communalCharges, defaultOrgType } from '@/data/plans';

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

// Everything beyond in-plan reactive repairs, in the two states it can be in. The layout
// is the answer to the question a housing director is actually asking, which is not "can
// you do it" but "what does it cost".
//
// Prices come from data/plans.js and nowhere else. The communal charges are Schedule 4 and
// were cleared for publication on 25 September.
const org = orgTypes.find((o) => o.id === defaultOrgType) || orgTypes[0];

// Whole pounds lose the .00: a column reading 19.00 / 18.00 / 100 / 6 looks like two
// different kinds of number.
const money = (n) => `\u00a3${Number.isInteger(n) ? n : n.toFixed(2)}`;

const priced = [
  {
    what: 'Electrical Compliance Cover',
    sub: 'EICRs, fixed installation and safety devices, to BS 7671. Minimum three-year term.',
    price: money(org.addons.electrical),
    unit: 'per home, per month',
  },
  {
    what: 'Gas Boiler Cover',
    sub: 'Annual service, safety certification and breakdown cover on the boiler itself.',
    price: money(org.addons.gasBoiler),
    unit: 'per home, per month',
  },
  ...communalCharges.map((c) => ({
    what: c.label,
    sub: c.covers,
    price: money(c.amount),
    unit: c.per,
  })),
];

const quoted = [
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
    what: 'Damp and mould programmes',
    sub: 'A defined three-stage procedure that sits outside every plan.',
    price: '£129 initial visit',
  },
  {
    what: 'Any repair above your plan threshold',
    sub: 'Scoped and quoted before anything starts, and only done with your approval.',
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

      {/* ISHA deck, gap E: the deck sells a materially wider service than the site admitted
          to. The TBC that used to sit here asked for "the scope and pricing model" as though
          nobody knew it. It was in Schedule 4 and in the brief all along - everything beyond
          in-plan reactive repairs is quoted before work starts, and the compliance and
          communal charges have real published prices. So this is two lanes now, priced
          against quoted, rather than four cards that dodge the question.

          The old "building safety" card claimed EVO covers "the building safety obligations
          that sit with higher-risk blocks". That is not confirmed (open item G) and clause
          6.4 says the opposite about the duty itself, so the claim is gone and the carve-out
          is stated instead. */}
      <section className="section" aria-labelledby="wider-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Beyond reactive repairs</p>
            <h2 id="wider-title">The plan covers the homes. We can cover the rest of the building too.</h2>
            <p className="lead">
              Reactive repairs inside the plan is where most clients start. It is not the limit of what we run, and putting the
              rest with the same supplier is usually the point at which the coordination overhead disappears. Everything here
              is in one of two states, and both are on the table before you sign anything.
            </p>
          </div>

          <div className="lanes">
            <div className="lane lane--priced">
              <span className="lane-head">Priced, per month</span>
              <h3>Add it to the plan</h3>
              <p>A published price you can put straight into a budget, on the same invoice as the plan.</p>
              <ul className="lane-list">
                {priced.map((r) => (
                  <li key={r.what}>
                    <span className="lane-what">
                      {r.what}
                      <span className="lane-sub">{r.sub}</span>
                    </span>
                    <span className="lane-price">
                      {r.price}
                      <span className="lane-sub">{r.unit}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="lane-note">
                All prices are plus VAT. Electrical Compliance Cover carries a minimum three-year term. Remedial works found
                during an inspection are quoted separately.
              </p>
            </div>

            <div className="lane lane--quoted">
              <span className="lane-head">Quoted before we start</span>
              <h3>Scoped, priced and approved by you</h3>
              <p>
                Never absorbed into the monthly fee and never started without your sign-off. Major works are not hidden in a
                subscription.
              </p>
              <ul className="lane-list">
                {quoted.map((r) => (
                  <li key={r.what}>
                    <span className="lane-what">
                      {r.what}
                      <span className="lane-sub">{r.sub}</span>
                    </span>
                    {r.price ? <span className="lane-price">{r.price}</span> : null}
                  </li>
                ))}
              </ul>
              <p className="lane-note">
                On building safety, nothing we do transfers your statutory duties as landlord or accountable person. We hold the
                evidence; the duty stays with you. See{' '}
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
