import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import EveryPlan from '@/components/EveryPlan';
import Icon, { IconBadge } from '@/components/Icon';
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
        imageAlt="An EVO operative in branded kit repairing a radiator in a modern flat"
        imageWidth={1500}
        imageHeight={750}
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
              <p>Uplift in retention where repairs were brought up to this standard, at a portfolio managed by LRM.</p>
            </div>
            {/* Restored 26 September on Sam's instruction. */}
            <div className="ev2-band-item">
              <span className="ev2-figure">&lt;10 days</span>
              <p>
                Average repair resolution across the EVO portfolio, so a renewal conversation is never about an open
                job.
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
          {/* The brochure's "What good repairs are worth" six, which had not been used
              anywhere on the site. This section was a single paragraph before. */}
          <ul className="wwh-worth mt-3">
            {[
              ['chat', 'Fewer complaints', 'Because the resident can see what is happening without asking.'],
              [
                'calendar',
                'Fewer no-access visits',
                'The resident picks the slot, so somebody is in when the trade arrives.',
              ],
              ['bell', 'Fewer emergency call-outs', 'Small faults get fixed before they become the 2am kind.'],
              [
                'handshake',
                'One supplier',
                'Not a reactive contractor, a compliance consultant and a helpdesk that never speak.',
              ],
              [
                'dashboard',
                'One source of data',
                'Every job, cost and certificate against the property, for the whole building.',
              ],
              ['van', 'Fewer wasted journeys', 'The right trade, with the property history, carrying the right parts.'],
            ].map(([icon, t, d]) => (
              <li key={t}>
                <Icon name={icon} size={20} />
                <div>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </div>
              </li>
            ))}
          </ul>
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
          {/* The plant and communal scope copy is restored on Sam's instruction, 26 September.
              The in-scope / quoted-separately lists below stay, because they were filling a
              placeholder rather than replacing approved copy. */}
          <SectionHead
            eyebrow="Scope"
            title="Communal areas and plant, not just the flats."
            lead="Lifts, plant rooms, amenity space, car parks and roofs, reactive and planned, on the same contract as the homes. One supplier for the whole building rather than a reactive contractor, a planned maintenance contractor and a compliance consultant who never speak to each other."
          />
          <div className="mt-3">
            <div className="wwh-inout">
              <div className="wwh-inout-col wwh-inout-col--in">
                <h3>
                  <Icon name="shieldCheck" size={18} /> On the same account
                </h3>
                <ul className="tick-list">
                  <li>Communal reporting for every block, so residents raise it themselves</li>
                  <li>Reactive repairs in the homes, to your plan threshold</li>
                  <li>Statutory compliance &mdash; gas, electrical, smoke and CO, PAT</li>
                  <li>24/7 emergency cover across the building, every night of the year</li>
                  <li>One helpdesk, one record and one invoice for all of it</li>
                </ul>
              </div>
              <div className="wwh-inout-col wwh-inout-col--out">
                <h3>
                  <Icon name="file" size={18} /> Quoted before we start
                </h3>
                <ul className="tick-list tick-list--out">
                  <li>Planned and cyclical programmes</li>
                  <li>Capital and retrofit works</li>
                  <li>Major renewals, structural works, roofing and rewires</li>
                  <li>Insurance works</li>
                  <li>Anything above your plan threshold</li>
                </ul>
                <p className="wwh-inout-note mb-0">
                  Never hidden in the monthly fee, and never started without your approval.{' '}
                  <Link href="/pricing" className="text-link">
                    Communal charges are published in full
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-3">
              <Photo
                src="/images/photos/evo-engineer-gas-safety-check.webp"
                alt="An EVO engineer completing a gas safety check on a tablet at a boiler"
                caption="Statutory checks recorded on the job, not written up afterwards."
                width={1400}
                height={700}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          {/* The 99% coverage line is restored on Sam's instruction, 26 September. */}
          <SectionHead
            eyebrow="The plan"
            title="Home Trust, written for newer stock."
            lead="Newer systems, fixtures and infrastructure fail differently from ageing ones, so Home Trust covers everything in scope up to £2,500 plus VAT per repair — roughly 99% of reactive work — without the layered thresholds older stock needs. One fixed price per home, per month."
          />
          <div className="wwh-grid mt-3">
            {[
              [
                'lock',
                'The security scope newer blocks actually need',
                'Home Trust is the only plan covering multi-point door locking, window locks, window restrictors and door alignment affecting security.',
              ],
              [
                'wallet',
                'One threshold, not three',
                'Up to £2,500 plus VAT on every repair in scope, so a failed integrated appliance does not become a conversation about which tier it falls in.',
              ],
              [
                'clock',
                'No limit on the number of repairs',
                'Within the plan, a busy month costs the same as a quiet one. Your budget is the number of homes, not the number of jobs.',
              ],
            ].map(([icon, t, d]) => (
              <div className="wwh-card" key={t}>
                <IconBadge name={icon} />
                <h3>{t}</h3>
                <p className="mb-0">{d}</p>
              </div>
            ))}
          </div>
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
          {/* The placeholder that stood here said this page had no named Build to Rent client,
              because the addendum's open item L reads LRM, British Land and Capital Letters
              as institutional PRS rather than purpose-built BTR. Sam resolved it on
              26 September: the two are not separate markets in practice, so the open item
              was wrong rather than the page. Clearance for the quotes was confirmed
              25 September, and the attribution question was settled the day before - the
              portfolio is British Land's, LRM is the managing agent, and Craig Jackson is
              LRM's property manager. */}
          <SectionHead
            eyebrow="Proof"
            title="Portfolios already running this way."
            lead="Institutional stock, managed at portfolio scale, where the resident experience is the product rather than a cost line."
          />
          <div className="wwh-grid mt-3">
            <div className="wwh-card">
              <IconBadge name="building" />
              <h3>British Land, through LRM</h3>
              <p className="mb-0">
                A PRS portfolio run for more than three years, with repairs, compliance and a full service history on
                every property in one place.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="users" />
              <h3>Capital Letters</h3>
              <p className="mb-0">
                A London-wide partnership housing people out of temporary accommodation, where a slow repair has
                consequences well beyond a renewal.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="chart" />
              <h3>6,000+ homes</h3>
              <p className="mb-0">
                Across the EVO portfolio, at 90%+ first-time fix and under ten days average resolution, on one fixed
                price per home.
              </p>
            </div>
          </div>
          <div className="quote quote--card quote--large mt-3">
            <blockquote>
              <p>
                Over the past year we have had a 30% increase in retention... This is due to us bringing EVO on board
                and the technological advancements they have introduced.
              </p>
            </blockquote>
            <figcaption>Craig Jackson, Property Manager, LRM</figcaption>
          </div>
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
