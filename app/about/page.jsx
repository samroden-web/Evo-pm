import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import TrustBands from '@/components/TrustBands';
import LatestInsights from '@/components/LatestInsights';
import ClosingCta from '@/components/ClosingCta';
import Tbc from '@/components/Tbc';
import Team from '@/components/Team';
import { board, development, operations } from '@/data/team';

export const metadata = {
  title: 'About EVO',
  description:
    'Why EVO exists, the people behind it, the social value a repairs contract puts back, and the health, safety and environment record a PQQ asks about.',
  alternates: { canonical: '/about' },
};

// Rebuilt 25 September 2026 to the agreed About mockup: five pages into one.
//
// The hub, Why we do it, Who we are and Trust are merged. Two sections that existed in
// neither — social value, and health, safety and environment — come across from Steve's
// ISHA deck. Both are scored in every council and housing association tender and neither
// appeared anywhere on the site outside a single sector page.
//
// The founder quote lands here. It was on the homepage between the solution and the
// plans, answering an About question in a buying position.
//
// The H1 is no longer the homepage's own headline, word for word.

const SOCIAL_VALUE = [
  [
    'A route into the supply chain',
    'For sole traders and micro businesses who cannot meet tier-one PQQ requirements on their own. Our network is mostly small regional firms, by design.',
  ],
  [
    'Local tradespeople employed',
    'In and around the properties we look after, rather than travelling in from another county.',
  ],
  [
    'Residents joining our trade network',
    'We often find tradespeople living in the homes we manage. Giving them work in their own community is the most direct social value there is.',
  ],
  ['Digital and admin skills sessions', 'Run on site, for residents who want them.'],
  ['Community events', 'Supported alongside your own engagement programme.'],
  ['Work experience', 'With EVO and with our caretakers.'],
  ['Community improvement projects', 'Playgrounds and communal amenities, agreed with you.'],
];

const HEALTH_SAFETY = [
  'Five years of operation with no serious incident',
  'ISO 45001 accredited, with an external health and safety advisor overseeing all activity',
  'A PQQ issued to every contractor before onboarding, and re-checked annually for insurance, accreditation and competence',
  'RAMS, CDM and COSHH applied as required',
  'Photographs before and after every job, so working conditions and the state the site was left in are both on record',
  'All trades DBS-checked',
];

const ENVIRONMENT = [
  'Net zero by 2030',
  'ISO 14001 accredited, with our environmental impact assessed and reduction targets set',
  'Moving to an all-electric vehicle fleet',
  'Materials sourced ethically, with recycled materials used from local suppliers',
  'Minimum plastic packaging, and waste minimised on every job',
  'Recycling promoted internally and with our customers and suppliers',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EVO"
        title="Everyone deserves a safe, well-kept home."
        lead="EVO is a fully managed, fixed-price repairs service for housing landlords, built by people who spent their careers in property maintenance watching the same system fail the same people. Five years old, around 6,000 homes, and still run by the people who started it."
        crumbs={[{ label: 'About' }]}
        image="/images/photos/evo-operations-team.webp"
        imageAlt="The EVO operations team standing together in the office"
        imageWidth={1600}
        imageHeight={945}
        priority
      />

      {/* Why we do it — reframed. The old copy opened on the sector being in crisis,
          which tells a housing director their own industry is broken. */}
      <section className="section" aria-labelledby="why-title">
        <div className="container container--narrow prose">
          <p className="eyebrow">Why we do it</p>
          <h2 id="why-title">Repairs are the part of housing that residents actually feel.</h2>
          <p>
            A resident does not experience their landlord&rsquo;s strategy, their development pipeline or their board
            papers. They experience whether the heating works, whether anyone turned up, and whether they were told what
            was happening. Repairs is where trust is built or lost, and for years it has been the part of the sector run
            with the least technology and the least accountability.
          </p>
          <p className="mb-0">
            We did not set out to build software. We set out to fix the way the work gets done, and found there was
            nothing on the market that would let us do it. So we built that too, and it is the reason we can put a fixed
            price on a repairs service at all.
          </p>
        </div>
      </section>

      {/* The founder quote, moved off the homepage. */}
      {/* The founder quote is the page's pull-quote moment. It used to be white text on a
          navy band; it is now the same warm card the homepage uses for a client quote, so
          a quote looks like a quote wherever you are on the site. */}
      <section className="section section--warm" aria-label="Why EVO was founded">
        <div className="container container--narrow">
          <Quote
            large
            card
            t={{
              quote:
                'I spent twenty-five years in UK property maintenance and kept seeing the same gap. Add up the helpdesk, the chasing, the compliance reporting and the mark-up on every job, and repairs were costing landlords close to double what they thought. Residents could not get a repair done easily, and good contractors spent more time quoting than working. One broken system, and nothing built to fix it. So we built EVO.',
              name: 'Mark Iandoli',
              role: 'Co-founder and COO',
            }}
          />
        </div>
      </section>

      {/* Who we are. */}
      <section className="section" id="who-we-are" aria-labelledby="who-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who we are</p>
            <h2 id="who-title">The people behind EVO.</h2>
            <p className="lead">
              An operations business first. Most of our people come from trades, housing or repairs management rather
              than from technology, and the company is still run by the people who started it.
            </p>
          </div>
          <div className="mt-3">
            <Team board={board} development={development} operations={operations} />
          </div>
          <p className="mt-3">
            We are members of the <strong>CIH Repairs and Maintenance Community</strong>, informing government and
            sharing best practice, and of the <strong>PropTech Peer Group</strong>, working to bring effective
            innovation to the housing sector.
          </p>
          <Tbc block>
            Team photographs. The files are on the current site but could not be pulled into this repo automatically
            &mdash; run
            <code> tools/fetch-team-photos.sh </code> from a machine with internet access and they drop straight into
            /public/images/team. Sam Roden&rsquo;s photograph and the board biographies for Steve Norris are still to
            come.
          </Tbc>
        </div>
      </section>

      {/* Social value — from the ISHA deck, and absent from the site until now. */}
      <section className="section section--grey" id="social-value" aria-labelledby="sv-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Social value</p>
            <h2 id="sv-title">What running your repairs puts back.</h2>
            <p className="lead">
              Social value is scored in your procurement, so it should be specific rather than aspirational. This is
              what we actually do, and it is negotiable at contract stage.
            </p>
          </div>
          <div className="ev3-split ev3-split--narrow mt-3">
            <Photo
              src="/images/photos/evo-resident-engagement-session.webp"
              alt="EVO running a resident engagement session on an estate"
              caption="Resident session, run on site."
              width={900}
              height={1200}
              sizes="(min-width: 880px) 38vw, 100vw"
            />
            <ul className="tick-list mb-0">
              {SOCIAL_VALUE.map(([t, d]) => (
                <li key={t}>
                  <strong>{t}.</strong> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Health, safety and environment — also PQQ-scored, also missing until now. */}
      <section className="section" id="health-safety" aria-labelledby="hse-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Health, safety and environment</p>
            <h2 id="hse-title">The bits your PQQ asks about.</h2>
          </div>
          <div className="grid-2 mt-3">
            <div className="card">
              <h3>Health and safety</h3>
              <ul className="tick-list mb-0">
                {HEALTH_SAFETY.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="card card--grey">
              <h3>Environment</h3>
              <ul className="tick-list mb-0">
                {ENVIRONMENT.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust: clients, frameworks, accreditations, awards. */}
      <section className="section section--grey section--tight" id="trust" aria-labelledby="trust-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Trust and credibility</p>
            <h2 id="trust-title">Clients, frameworks and accreditations.</h2>
            <p className="lead mb-0">
              We work with local authority housing companies, housing associations, charities and institutional
              landlords, and we are on the main public-sector frameworks for repairs and maintenance.
            </p>
          </div>
        </div>
      </section>
      <TrustBands />

      <section className="section section--tight">
        <div className="container">
          <p className="mb-0">
            <Link href="/how-it-works" className="text-link">
              How the service actually runs
            </Link>
          </p>
        </div>
      </section>

      {/* Insights sits under About in the navigation, so About has to link to it. */}
      <LatestInsights />

      <ClosingCta />
    </>
  );
}
