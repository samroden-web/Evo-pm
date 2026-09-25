import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import EveryPlan from '@/components/EveryPlan';
import Tbc from '@/components/Tbc';
import Photo from '@/components/Photo';
import { cta } from '@/data/site';

export const metadata = {
  title: 'Repairs for Build to Rent and institutional PRS | EVO',
  description:
    'A fully managed, fixed-price repairs service for Build to Rent and institutional private rented portfolios, with a resident experience that supports retention.',
  alternates: { canonical: '/who-we-help/build-to-rent' },
};

const STEPS = [
  ['Reports it from the sofa', 'About thirty seconds, with a photograph, at whatever hour it happened.'],
  ['Picks a slot that suits them', 'Rather than waiting in all day for a window nobody committed to.'],
  ['Watches the trade arrive', 'Live, like a delivery. They know who is coming and when.'],
  ['Rates the job', 'And you see the score, by building, without asking for a report.'],
];

export default function BuildToRentPage() {
  return (
    <>
      <PageHero
        eyebrow="Build to Rent &amp; institutional PRS"
        title="Your residents judge you on repairs."
        lead="The repair is the part of the building your residents actually interact with. It gets talked about in the lift, written into a review, and remembered when the renewal lands."
        crumbs={[{ label: 'Who we help' }, { label: 'Build to Rent & institutional PRS' }]}
        image="/images/photos/evo-operative-radiator-repair.webp"
        imageAlt="An EVO operative repairing a radiator in a modern flat"
        imageWidth={1074}
        imageHeight={807}
        priority
        captionLabel="In the flat"
        caption="Newer stock, fewer exceptions, one fixed price"
      >
        <div className="btn-row mt-3">
          <Link href={cta.review.href} className="btn btn-primary">
            {cta.review.label}
          </Link>
          <Link href="/pricing" className="btn btn-secondary">
            See plans &amp; pricing
          </Link>
        </div>
      </PageHero>

      <section className="ev2-band" aria-label="What good repairs are worth">
        <div className="container">
          <p className="eyebrow">What good repairs are worth</p>
          <h2>Retention is decided long before the renewal letter goes out.</h2>
          <div className="ev2-band-grid">
            <div className="ev2-band-item">
              <span className="ev2-figure">30%</span>
              <p>
                Uplift in retention where repairs were brought up to this standard, at a portfolio managed by LRM. <Tbc>clearance to name the client</Tbc>
              </p>
            </div>
            <div className="ev2-band-item">
              <span className="ev2-figure">4.8/5</span>
              <p>
                Average resident rating of a completed repair. <Tbc>needs sourcing</Tbc>
              </p>
            </div>
            <div className="ev2-band-item">
              <span className="ev2-figure">90%+</span>
              <p>Fixed on the first visit, so the resident tells the story once.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="The standard you are actually held to"
            title="You are not being compared to another landlord."
            lead="Your residents compare the repair to every other service on their phone — the delivery they can track, the appointment they can move, the driver they can see approaching. That is a higher bar than the sector standard, and it is the one they apply when they decide whether to stay."
          />
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="The resident experience" title="Four things, and none of them is a phone call." />
          <div className="steps-row mt-3">
            {STEPS.map(([t, d], i) => (
              <div className="step-card" key={t}>
                <span className="num">{i + 1}</span>
                <h3>{t}</h3>
                <p className="mb-0">{d}</p>
              </div>
            ))}
          </div>
          <div className="ev3-screens ev3-screens--narrow mt-3">
            <figure>
              <img
                src="/images/app/living-app-home.webp"
                alt="The EVO Living App home screen"
                width="420"
                height="884"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Your building, in their pocket</figcaption>
            </figure>
            <figure>
              <img
                src="/images/app/living-app-report-a-problem.webp"
                alt="Reporting a problem in the EVO Living App"
                width="420"
                height="884"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Reported without a phone call</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Scope"
            title="Communal areas and plant, not just the flats."
            lead="Lifts, plant rooms, amenity space, car parks and roofs, reactive and planned, on the same contract as the homes. One supplier for the whole building rather than a reactive contractor, a planned maintenance contractor and a compliance consultant who never speak to each other."
          />
          <div className="ev3-split ev3-split--reverse mt-3">
            <Photo
              src="/images/photos/evo-engineer-gas-safety-check.webp"
              alt="An EVO engineer completing a gas safety check on a tablet at a boiler"
              caption="Statutory checks recorded on the job, not written up afterwards."
              width={900}
              height={675}
              sizes="(min-width: 880px) 46vw, 100vw"
            />
            <Tbc block>Confirm which communal and plant works are in scope, and how planned maintenance is priced.</Tbc>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="The plan"
            title="Home Trust, written for newer stock."
            lead="Newer systems, fixtures and infrastructure fail differently from ageing ones, so Home Trust covers everything in scope up to £2,500 plus VAT per repair — roughly 99% of reactive work — without the layered thresholds older stock needs. One fixed price per home, per month."
          />
          <div className="btn-row mt-3">
            <Link href="/pricing" className="btn btn-secondary">
              See Home Trust pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <EveryPlan />
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="Proof" title="Portfolios already running this way." />
          <Tbc block>
            This page has no named Build to Rent client. LRM, British Land and Capital Letters sit on the Landlords &amp; managing agents page, because the
            contractual relationship is with LRM as managing agent and that stock is PRS rather than purpose-built Build to Rent. Either a named Build to Rent
            operator or a stronger evidenced claim is needed before launch.
          </Tbc>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHead
            eyebrow="Next step"
            title="Start with a portfolio review."
            lead="We look at your buildings, your current spend and your last twelve months of repairs, and tell you what we would do differently."
          />
          <div className="btn-row mt-3">
            <Link href={cta.review.href} className="btn btn-primary">
              {cta.review.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
