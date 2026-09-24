import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import PilotSection from '@/components/PilotSection';
import ClosingCta from '@/components/ClosingCta';
import { testimonials } from '@/data/testimonials';

export const metadata = {
  title: 'B&D Reside case study: from a 380-home pilot to 4,500+ homes | EVO',
  description:
    'B&D Reside in Barking and Dagenham: 96% first-time fix in the pilot, average resolution under 6 days from 28-plus, and 80% app adoption in nine months.',
  alternates: { canonical: '/case-studies/bd-reside' },
};

export default function BdResidePage() {
  return (
    <>
      <PageHero
        eyebrow="Case study"
        title="B&D Reside, Barking and Dagenham."
        lead="Residents used to ring or email the council and wait. A 380-home pilot began in June 2023 and was covered by Inside Housing in April 2024. EVO now holds an eight-year contract with B&D Reside for more than 4,500 homes, onboarding in phases."
        crumbs={[{ href: '/case-studies', label: 'Case studies' }, { label: 'B&D Reside' }]}
      />

      <section className="section section--navy" aria-labelledby="bd-results">
        <div className="container">
          <h2 id="bd-results" className="visually-hidden">
            Results
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
          <div className="split">
            <Quote t={testimonials.michaelWestbrook} large />
            <div className="card card--grey">
              <p className="eyebrow">Award</p>
              <h2 style={{ fontSize: '1.5rem' }}>Housing Digital Innovation Awards 2024</h2>
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
