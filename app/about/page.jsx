import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import TrustBands from '@/components/TrustBands';
import LatestInsights from '@/components/LatestInsights';
import ClosingCta from '@/components/ClosingCta';
import Team from '@/components/Team';
import { IconBadge } from '@/components/Icon';
import Illustration from '@/components/Illustration';
import { board, development, operations } from '@/data/team';

// Mark's photograph comes from his team record, so the quote and the team grid can never
// disagree and the face appears the moment tools/fetch-team-photos.sh has run.
const mark = board.find((m) => m.name === 'Mark Iandoli');

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

// Sam, 27 September: "our model and software is the only company out there that fixes for
// all 3" - the landlord, the contractor and the tenant. It is the best single argument EVO
// has, because it is not a claim about software, it is a description of who each part of the
// service is built for, and the three apps exist to prove it.
// Written in EVO's own voice rather than attributed to Mark. He has a quote that makes this
// point and it is not in my hands yet; inventing his words would be worse than waiting for
// them. When they arrive they replace the closing line below.
const THREE_PARTIES = [
  {
    icon: 'phoneApp',
    who: 'For the resident',
    what: 'EVO Living App',
    body: 'A repair reported in under thirty seconds, and then told what is happening until it is done. Phone, WhatsApp and email stay open for anyone who would rather not use an app.',
  },
  {
    icon: 'van',
    who: 'For the trade',
    what: 'EVO Trades App',
    body: 'The job, the history of the home and the access details in one place before they set off, so the right person arrives able to finish it rather than quote for it.',
  },
  {
    icon: 'dashboard',
    who: 'For the landlord',
    what: 'EVO Dashboard',
    body: 'Every report, photograph, cost and sign-off recorded against the property as it happens, in a form your statutory reporting and the Regulator will both accept.',
  },
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
        lead="EVO is a fully managed, fixed-price repairs service for housing landlords, built by people who spent their careers in property maintenance watching the same system fail the same people. Incorporated in 2018, around 6,000 homes, and still run by the people who started it."
        crumbs={[{ label: 'About' }]}
        image="/images/photos/evo-operative-arriving-terraced-street.webp"
        imageAlt="An EVO operative arriving at a terraced street to carry out a repair"
        imageWidth={1600}
        imageHeight={685}
        priority
      />

      {/* WHY WE DO IT, and the founder quote, now one section.
          Sam, 27 September: "the second banner down comes in a bit cold, i think marks quote
          and picture part of it would make it better". He was right and the fix is better than
          warming it up. This was a narrow column of prose with nothing in it but prose, and the
          founder quote sat in a section of its own immediately below - two screens of scrolling
          that were making the same argument. They are now one row: the reasoning on the left,
          the man who lived it on the right, with his face beside his words. One section fewer,
          and the cold open is gone because there is a person in it. */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="why-split">
            <div className="why-split__text prose">
              <p className="eyebrow">Why we do it</p>
              <h2 id="why-title">Repairs are the part of housing that residents actually feel.</h2>
              <p>
                A resident does not experience their landlord&rsquo;s strategy, their development pipeline or their
                board papers. They experience whether the heating works, whether anyone turned up, and whether they were
                told what was happening. Repairs is where trust is built or lost, and for years it has been the part of
                the sector run with the least technology and the least accountability.
              </p>
              <p>
                We did not set out to build software. We set out to fix the way the work gets done, and found there was
                nothing on the market that would let us do it. So we built that too, and it is the reason we can put a
                fixed price on a repairs service at all.
              </p>
              {/* This link had a whole section of the page to itself, for one line of text.
                  It belongs at the end of the argument it answers. */}
              <p className="mb-0">
                <Link href="/how-it-works" className="text-link">
                  How the service actually runs
                </Link>
              </p>
            </div>
            <Quote
              large
              card
              photo={mark?.photo || null}
              photoAlt="Mark Iandoli, co-founder and COO of EVO"
              t={{
                quote:
                  'I spent twenty-five years in UK property maintenance and kept seeing the same gap. Add up the helpdesk, the chasing, the compliance reporting and the mark-up on every job, and repairs were costing landlords close to double what they thought. Residents could not get a repair done easily, and good contractors spent more time quoting than working. One broken system, and nothing built to fix it. So we built EVO.',
                name: 'Mark Iandoli',
                role: 'Co-founder and COO',
              }}
            />
          </div>
        </div>
      </section>

      {/* THE SOFTWARE, AND WHO IT IS FOR.
          Sam, 27 September: "think about how to best incorporate the software point, and how we
          have spent over £4m creating our own software from scratch that makes everything so
          effcient and bnetter for all parties."
          The difficulty is that GLOBAL-04 forbids describing EVO as a software company, and a
          section that opens on £4m of technology does exactly that. So the figure is framed as
          what it bought rather than what it is: the reason a fixed price is possible, and the
          reason all three parties get something. The three cards are the proof - one for each
          party, each naming the product that serves them. Sold hard, and still not a software
          company. */}
      <section className="section section--warm" aria-labelledby="software-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The technology underneath</p>
            <h2 id="software-title">Over &pound;4m building our own software, so the service can be what it is.</h2>
            <p className="lead">
              Nothing on the market did what we needed, so we built it ourselves rather than licensing somebody
              else&rsquo;s. That is what makes a single fixed monthly price possible, and what makes the evidence exist
              without anybody having to assemble it. We are not a software company &mdash; we are the company that had
              to write the software to run the service properly.
            </p>
          </div>
          <div className="three-parties mt-3">
            {THREE_PARTIES.map((p) => (
              <div className="card card--party" key={p.who}>
                <IconBadge name={p.icon} />
                <p className="eyebrow">{p.who}</p>
                <h3>{p.what}</h3>
                <p className="mb-0">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="three-parties__note">
            A repair involves three people, and most suppliers are built for one of them. Fixing it for the landlord and
            not the resident just moves the complaint. This is the part that took &pound;4m and eight years.
          </p>
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
          {/* EVO's own drawing, alongside the real headshots. This is exactly how their
              live /about/who-we-are page does it - one illustration and twenty-eight
              photographs of actual people on the same page - and it is the clearest
              statement of the rule the whole site now follows: drawings carry the idea,
              photographs carry the people. */}
          <div className="ev3-who-art">
            <Illustration name="evo-hero-home" size={210} />
            <p className="mb-0">
              An operations business with a technology arm, not the other way round.
            </p>
          </div>
          <div className="mt-3">
            <Team board={board} development={development} operations={operations} />
          </div>
          {/* THE TEAM PHOTOGRAPH, moved down from the hero.
              Sam, 27 September: "do we want that photo as the top of the about us page? the team
              is a lot bigger now and i may make us feel small?" Fair, and it was doing more harm
              than that - it is also the site's link-preview image, so it was the first thing
              anyone saw of EVO in a shared link. The hero now leads on the work. The photograph
              is not wasted: down here it is captioned as the operations team rather than read as
              the whole company, which is what it actually is.
              Sam: if there is a newer all-hands shot, it drops straight in here. */}
          <div className="mt-3 photo-inset">
            <Photo
              src="/images/photos/evo-operations-team.webp"
              alt="The EVO operations team standing together in the office"
              caption="The operations team, who run the repairs desk day to day."
              width={1600}
              height={945}
              sizes="(min-width: 900px) 820px, 100vw"
            />
          </div>
          <p className="mt-3 mb-0">
            We are members of the <strong>CIH Repairs and Maintenance Community</strong>, informing government and
            sharing best practice, and of the <strong>PropTech Peer Group</strong>, working to bring effective
            innovation to the housing sector.
          </p>
          {/* The block of TBC that was here said the team photographs could not be downloaded.
              They can, and they are: 29 of 29 land from tools/fetch-team-photos.sh on every
              deploy. What is genuinely outstanding is now tracked per person in data/team.js -
              Steve Norris's biography and Sam Roden's photograph - which is where it belongs and
              where it will actually be noticed when it is filled in. */}
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
          {/* Same treatment as the statutory/regulatory pair on /compliance, for the same
              reason Sam gave there: "the icons above the titles waste a lot of space and the
              whole deisng of the page looks a bit basic". .split-halves rather than .grid-2 so
              the two cards are a deliberate pair, and the badge sits beside the heading instead
              of stacked above it. */}
          <div className="split-halves mt-3">
            <div className="card card--hse">
              <IconBadge name="shieldCheck" />
              <h3>Health and safety</h3>
              <ul className="tick-list tick-list--compact mb-0">
                {HEALTH_SAFETY.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="card card--grey card--hse">
              <IconBadge name="leaf" />
              <h3>Environment</h3>
              <ul className="tick-list tick-list--compact mb-0">
                {ENVIRONMENT.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST. This was a section containing nothing but a heading and one sentence, followed
          by TrustBands, which is itself three more sections - four sections for one idea, which
          is the same fault as the "What changed." screen on /case-studies. The heading now sits
          inside the first band, so the idea and its evidence are in the same block. */}
      <TrustBands
        id="trust"
        eyebrow="Trust and credibility"
        title="Clients, frameworks and accreditations."
        lead="We work with local authority housing companies, housing associations, charities and institutional landlords, and we are on the main public-sector frameworks for repairs and maintenance."
      />

      {/* Insights sits under About in the navigation, so About has to link to it. */}
      <LatestInsights />

      <ClosingCta />
    </>
  );
}
