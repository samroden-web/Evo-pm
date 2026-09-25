import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import PilotSection from '@/components/PilotSection';
import ClosingCta from '@/components/ClosingCta';
import { testimonials, regulatorQuote } from '@/data/testimonials';

export const metadata = {
  title: 'Case studies: IDS and B&D Reside | EVO',
  description:
    'Two social landlords who moved their repairs to EVO. IDS: resolution times halved, 95% first-time fix, 1,414 homes on a five-year contract. B&D Reside: 96% first-time fix in the pilot, from 380 homes to more than 4,500.',
  alternates: { canonical: '/case-studies' },
};

// Rebuilt 25 September 2026. Three pages into one, per the agreed map.
//
// The hub was 143 words that repeated the homepage proof block word for word, then asked
// for another click. Both studies are now sections of one scrolling page, each with its
// own anchor, so a prospect can still be sent straight to /case-studies#ids.
//
// The H1 is no longer the homepage's own proof heading, word for word.

const IDS_START = [
  'Slow repair resolution times',
  'Limited real-time visibility',
  'Inconsistent communication with residents',
  'Fragmented manual processes',
  'Difficulty tracking compliance',
  'No budget certainty',
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Two landlords, two pilots, two full contracts."
        lead="Neither started with a commitment. Both started on a share of the homes, ran for long enough to produce their own numbers, and then widened."
        crumbs={[{ label: 'Case studies' }]}
        image="/images/photos/evo-bd-reside-team.webp"
        imageAlt="The EVO and B&D Reside teams together outdoors"
        imageWidth={1285}
        imageHeight={704}
        priority
      >
        <div className="btn-row mt-3">
          <Link href="#ids" className="btn btn-secondary">
            Industrial Dwellings Society
          </Link>
          <Link href="#bd-reside" className="btn btn-secondary">
            B&amp;D Reside
          </Link>
        </div>
      </PageHero>

      {/* ---------------- IDS ---------------- */}

      <section className="section" id="ids" aria-labelledby="ids-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Case study one</p>
            <h2 id="ids-title">Industrial Dwellings Society</h2>
            <p className="lead">
              Pioneers of affordable housing since 1885, and running repairs until 2023 the way everyone else did. 1,414 homes,
              now on a five-year contract.
            </p>
          </div>

          <div className="ev3-split ev3-split--narrow mt-3">
            <Photo
              src="/images/photos/ids-resident-engagement-day.webp"
              alt="EVO and IDS staff at the IDS resident engagement day, Navarino Mansions"
              caption="IDS resident engagement day, Navarino Mansions."
              width={900}
              height={1200}
              sizes="(min-width: 880px) 38vw, 100vw"
            />
            <div>
              <h3>Where they started</h3>
              <ul className="tick-list mb-0">
                {IDS_START.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="ids-timeline">
        <div className="container container--narrow">
          <h3 id="ids-timeline">From a quarter of the homes to every one</h3>
          <ol className="vtimeline vtimeline--dates mt-2">
            <li>
              <span className="num" aria-hidden="true">
                1
              </span>
              <span className="date">October 2023</span>
              <h3>Pilot across 25% of homes</h3>
              <p>
                The Living App in residents&apos; hands, automated triage and appointment scheduling, digital satisfaction surveys,
                and one repairs, property and compliance platform — with non-digital channels kept for residents who wanted them.
              </p>
            </li>
            <li>
              <span className="num" aria-hidden="true">
                2
              </span>
              <span className="date">October 2024</span>
              <h3>The Regulator records evidence of improvement</h3>
              <p>
                The Regulator records evidence of improvement from the new pilot service, and notes plans to roll it out across the
                remaining estates.
              </p>
            </li>
            <li>
              <span className="num" aria-hidden="true">
                3
              </span>
              <span className="date">January 2025</span>
              <h3>Rolled out across all 1,414 IDS homes</h3>
              <p>On a five-year contract.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-label="Regulator of Social Housing judgement">
        <div className="container container--narrow">
          <Quote t={regulatorQuote} large />
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="ids-results">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">IDS, eighteen months later</p>
            <h2 id="ids-results">What changed.</h2>
          </div>
          <div className="grid-3 grid-2-mobile">
            <div className="tile">
              <span className="stat">Halved</span>
              <span className="stat-label">Repair resolution times</span>
            </div>
            <div className="tile">
              <span className="stat">95%</span>
              <span className="stat-label">First-time fix rate</span>
            </div>
            <div className="tile">
              <span className="stat">90%+</span>
              <span className="stat-label">Resident satisfaction, regularly</span>
            </div>
          </div>
          <p className="lead mt-3 mb-0">
            Full compliance visibility, better data, more trust from residents, and a shift from reacting to planning.
          </p>
        </div>
      </section>

      <section className="section section--grey" aria-label="What IDS says">
        <div className="container">
          <div className="grid-2 swipe-mobile">
            <Quote t={testimonials.garethBrown} card />
            <Quote t={testimonials.rebeccaJoseph} card />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ids-award">
        <div className="container">
          <div className="ev3-split">
            <div>
              <p className="eyebrow">Award-winning partnership</p>
              <h3 id="ids-award">Housing Executive Awards 2025, Partnership of the Year.</h3>
              <p className="lead">
                Won with IDS in October 2025, for the innovation, collaboration and measurable impact of the service.
              </p>
              <p className="mb-0">
                <Link href="/insights/ids-evo-transforming-repairs-and-maintenance-through-digital-partnership" className="text-link">
                  IDS &amp; EVO: transforming repairs and maintenance through digital partnership
                </Link>
              </p>
            </div>
            <Photo
              src="/images/photos/ids-evo-housing-executive-awards-2025.webp"
              alt="The IDS and EVO teams on stage with their award at the Housing Executive Awards 2025"
              caption="IDS and EVO at the Housing Executive Awards 2025."
              width={1128}
              height={663}
              sizes="(min-width: 880px) 46vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ---------------- B&D Reside ---------------- */}

      <section className="section section--grey" id="bd-reside" aria-labelledby="bd-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Case study two</p>
            <h2 id="bd-title">B&amp;D Reside, Barking and Dagenham</h2>
            <p className="lead mb-0">
              Residents used to ring or email the council and wait. A 380-home pilot began in June 2023 and was covered by Inside
              Housing in April 2024. EVO now holds an eight-year contract with B&amp;D Reside for more than 4,500 homes, onboarding
              in phases.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="bd-results">
        <div className="container">
          <h2 id="bd-results" className="visually-hidden">
            B&amp;D Reside results
          </h2>
          <div className="grid-4 grid-2-mobile">
            <div className="tile">
              <span className="stat">96%</span>
              <span className="stat-label">First-time fix in the pilot</span>
            </div>
            <div className="tile">
              <span className="stat">Under 6 days</span>
              <span className="stat-label">Average resolution, from 28-plus</span>
            </div>
            <div className="tile">
              <span className="stat">80%</span>
              <span className="stat-label">App adoption in nine months</span>
            </div>
            <div className="tile">
              <span className="stat">380 to 4,500+</span>
              <span className="stat-label">Pilot homes to contracted homes</span>
            </div>
          </div>
          <div className="mt-3">
            <Photo
              src="/images/photos/evo-bd-reside-team.webp"
              alt="The EVO and B&D Reside teams together outdoors, many wearing pink B&D Reside t-shirts"
              caption="EVO and the B&D Reside team."
              width={1285}
              height={704}
              sizes="(min-width: 1200px) 1160px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section" aria-label="What B&D Reside says">
        <div className="container">
          <div className="ev3-split">
            <Quote t={testimonials.michaelWestbrook} large />
            <div className="card card--grey">
              <p className="eyebrow">Award</p>
              <h3>Housing Digital Innovation Awards 2024</h3>
              <p className="mb-0">Best Repairs and Maintenance Innovation, won with B&amp;D Reside.</p>
            </div>
          </div>
        </div>
      </section>

      <PilotSection grey />
      <ClosingCta />
    </>
  );
}
