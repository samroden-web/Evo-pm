import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import PilotSection from '@/components/PilotSection';
import ClosingCta from '@/components/ClosingCta';
import { testimonials, regulatorQuote } from '@/data/testimonials';

export const metadata = {
  title: 'IDS case study: repair times halved | EVO',
  description:
    'Industrial Dwellings Society moved from a 25% pilot to all 1,414 homes with EVO. Repair resolution times halved, 95% first-time fix and resident satisfaction over 90%.',
  alternates: { canonical: '/case-studies/ids' },
};

const startingPoint = [
  'Slow repair resolution times',
  'Limited real-time visibility',
  'Inconsistent communication with residents',
  'Fragmented manual processes',
  'Difficulty tracking compliance',
  'No budget certainty',
];

export default function IdsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case study"
        title="Industrial Dwellings Society"
        lead="Pioneers of affordable housing since 1885. Running repairs, until 2023, the way everyone else did."
        crumbs={[{ href: '/case-studies', label: 'Case studies' }, { label: 'IDS' }]}
      />

      <section className="section" aria-labelledby="start-title">
        <div className="container">
          <div className="split split--top">
            <div>
              <h2 id="start-title">Where they started</h2>
              <ul className="tick-list">
                {startingPoint.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <Photo
              src="/images/photos/ids-resident-engagement-day.webp"
              alt="EVO and IDS staff standing together at the IDS resident engagement day, Navarino Mansions"
              caption="IDS resident engagement day, Navarino Mansions."
              width={1000}
              height={1333}
              style={{ maxHeight: 560, objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="timeline-title">
        <div className="container container--narrow">
          <h2 id="timeline-title">From pilot to every home</h2>
          <ol className="vtimeline vtimeline--dates mt-2">
            <li>
              <span className="num" aria-hidden="true">
                1
              </span>
              <span className="date">October 2023</span>
              <h3>Pilot across 25% of homes</h3>
              <p>
                The Living App in residents&apos; hands, automated triage and appointment scheduling, digital satisfaction surveys, and
                one repairs, property and compliance platform, with non-digital channels kept for residents who wanted them.
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

      <section className="section section--navy" aria-labelledby="results-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Eighteen months later</p>
            <h2 id="results-title">What changed since using EVO.</h2>
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
          <p className="lead mt-3">
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

      <section className="section" aria-labelledby="award-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Award-winning partnership</p>
              <h2 id="award-title">Housing Executive Awards 2025, Partnership of the Year.</h2>
              <p className="lead">
                Won with IDS in October 2025, for the innovation, collaboration and measurable impact of the service.
              </p>
              <p>
                <Link href="/insights/ids-evo-transforming-repairs-and-maintenance-through-digital-partnership" className="text-link">
                  IDS &amp; EVO: Transforming Repairs and Maintenance Through Digital Partnership
                </Link>
              </p>
            </div>
            <Photo
              src="/images/photos/ids-evo-housing-executive-awards-2025.webp"
              alt="The IDS and EVO teams on stage with their award at the Housing Executive Awards 2025"
              caption="IDS and EVO at the Housing Executive Awards 2025."
              width={1128}
              height={663}
            />
          </div>
        </div>
      </section>

      <PilotSection grey />
      <ClosingCta />
    </>
  );
}
