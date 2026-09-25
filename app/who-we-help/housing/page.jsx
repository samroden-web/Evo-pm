import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import EveryPlan from '@/components/EveryPlan';
import LogoStrip from '@/components/LogoStrip';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import Tbc from '@/components/Tbc';
import { cta } from '@/data/site';
import { clientLogos, withFiles } from '@/data/logos';
import { testimonials } from '@/data/testimonials';

export const metadata = {
  title: 'Repairs for housing associations and councils | EVO',
  description:
    "Fixed-price repairs for housing associations and councils, with the evidence for consumer standards, TSMs and Awaab's Law recorded as the work happens.",
  alternates: { canonical: '/who-we-help/housing' },
};

const PAIRS = [
  [
    'Work spread across a dozen contractors, each with their own paperwork and their own idea of a photograph',
    'One supplier, one record, one invoice',
  ],
  [
    'Evidence assembled after the complaint lands, from emails and memory',
    'Photographs, timestamps and notes captured on the job, as it happens',
  ],
  [
    'No-access visits paid for twice, and the resident blamed for both',
    'Timeslots the resident picks, live tracking, and a reminder before arrival',
  ],
  [
    'You find out a target was missed when the quarterly report lands',
    'A dashboard you can open at any hour, showing the same data we see',
  ],
];

const VALUE = [
  ['The repairs themselves', 'Included'],
  ['A repairs coordinator', 'Included'],
  ['Out-of-hours cover', 'Included'],
  ['Contractor vetting, insurance checks and management', 'Included'],
  ['Compliance evidence and reporting', 'Included'],
  ['Software, and an app for residents', 'Included'],
];

const SIZES = [
  {
    when: 'A scheme, or a few hundred homes',
    what: 'A part-time coordinator and an out-of-hours line',
    note: "Usually someone's job alongside three other jobs, and a phone that rings at 2am.",
  },
  {
    when: 'A few thousand homes',
    what: 'A repairs team, a contractor framework, and the software to run both',
    note: 'The point at which managing suppliers becomes a full-time function in its own right.',
  },
  {
    when: 'Ten thousand and above',
    what: 'A directly employed workforce, or a tier one contract',
    note: 'Fixed overhead either way, and in the second case a supplier who does not answer to your residents.',
  },
];

export default function HousingPage() {
  return (
    <>
      <PageHero
        eyebrow="Housing associations &amp; councils"
        title="Repairs, compliance and the evidence — from one supplier."
        lead="For housing associations and councils working to the consumer standards, Awaab's Law and the Housing Ombudsman."
        crumbs={[{ label: 'Who we help' }, { label: 'Housing associations & councils' }]}
        image="/images/photos/evo-operative-arriving-terraced-street.webp"
        imageAlt="An EVO operative walking up the path of a brick terraced home"
        imageWidth={1600}
        imageHeight={685}
        priority
        captionLabel="On site"
        caption="Directly employed, DBS-checked, in EVO uniform"
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

      <section className="ev2-band" aria-label="What you are graded on">
        <div className="container">
          <p className="eyebrow">Why repairs stopped being an operational matter</p>
          <h2>Four things you are now graded on, and repairs sits under all of them.</h2>
          <div className="ev2-band-grid">
            <div className="ev2-band-item">
              <h3>Consumer standards</h3>
              <p>
                The Safety and Quality Standard covers repairs and stock condition. Gradings are published, and they are
                read.
              </p>
            </div>
            <div className="ev2-band-item">
              <h3>Tenant Satisfaction Measures</h3>
              <p>Repairs satisfaction and time taken are reported every year and compared across the sector.</p>
            </div>
            <div className="ev2-band-item">
              <h3>Awaab&rsquo;s Law</h3>
              <p>In force for damp and mould, and widening to further hazards on 30 November 2026.</p>
            </div>
            <div className="ev2-band-item">
              <h3>The Ombudsman</h3>
              <p>
                Determinations turn on whether you can show what happened and when, not on whether the repair was
                eventually done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="The change"
            title="Same repairs. Different consequences."
            lead="Nothing about a leaking pipe has changed. What changed is that you now have to prove how you handled it, to a regulator, an ombudsman and a board, sometimes years later."
          />
          <div className="ev2-pairs mt-3">
            <div className="ev2-pair ev2-pair-head">
              <div>How most portfolios run today</div>
              <div>With EVO</div>
            </div>
            {PAIRS.map(([a, b]) => (
              <div className="ev2-pair" key={a}>
                <div className="ev2-a">{a}</div>
                <div className="ev2-b">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="The commercial case"
            title="Value goes beyond the repairs line."
            lead="Comparing EVO to a contractor's schedule of rates compares the wrong things. The repairs are one line in a list of costs you are already carrying."
          />
          <div className="ev2-pairs mt-3">
            <div className="ev2-pair ev2-pair-head">
              <div>Running it yourself</div>
              <div>With EVO</div>
            </div>
            {VALUE.map(([a, b]) => (
              <div className="ev2-pair" key={a}>
                <div className="ev2-a">{a}</div>
                <div className="ev2-b">{b}</div>
              </div>
            ))}
            <div className="ev2-pair ev2-pair--total">
              <div>At least one hire, plus every repair</div>
              <div className="ev2-b">One fixed monthly fee</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Scale" title="What EVO replaces depends on your size." />
          <div className="grid grid-3 mt-3">
            {SIZES.map((s) => (
              <div className="card" key={s.when}>
                <p className="eyebrow">{s.when}</p>
                <h3>{s.what}</h3>
                <p className="mb-0 muted">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="Proof" title="Portfolios already running this way." />
          <div className="figures mt-3">
            <div className="stat stat--orange">
              <span className="num">90%+</span>
              <span className="stat-label">First-time fix across the portfolio</span>
            </div>
            <div className="stat stat--orange">
              <span className="num">1,414</span>
              <span className="stat-label">Homes at IDS, pilot to contract</span>
            </div>
            <div className="stat stat--orange">
              <span className="num">6&ndash;7 days</span>
              <span className="stat-label">Average damp and mould resolution</span>
            </div>
            <div className="stat stat--orange">
              <span className="num">1,000+</span>
              <span className="stat-label">Damp and mould cases in 18 months</span>
            </div>
          </div>
          <div className="mt-3">
            <LogoStrip logos={withFiles(clientLogos)} label="EVO clients" color />
          </div>
          <div className="mt-3 max-640">
            <Quote t={testimonials.richardSmith} large />
          </div>
          <p className="mt-3 mb-0">
            <Link href="/case-studies" className="text-link">
              Read the case studies
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Damp and mould"
            title="The audit trail, shown rather than described."
            lead="Every case carries its own record: the reading that triggered the work, the treatment, and the state it was left in. It is the same evidence an Ombudsman determination turns on."
          />
          <figure className="ev3-triptych mt-3">
            <img
              src="/images/photos/evo-damp-before-during-after.webp"
              alt="The same bedroom corner photographed before treatment, during treatment and after"
              width="1500"
              height="500"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Before &mdash; moisture reading taken</span>
              <span>During &mdash; three-stage treatment</span>
              <span>After &mdash; made good, and recorded</span>
            </figcaption>
          </figure>
          <p className="mt-2">
            <Link href="/damp-and-mould" className="text-link">
              The damp and mould procedure
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="Integration"
            title="Your housing management system stays where it is."
            lead="Job data flows back into the system your team already uses, so nobody re-keys anything and you keep one source of truth."
          />
          <Tbc block>
            Which housing management systems the integration supports. Rubixx is named as a worked example for ISHA; the
            full list is outstanding.
          </Tbc>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Social value"
            title="Delivered, not promised."
            lead="Social value is scored in every public tender and most housing association ones. Ours is a consequence of how the network is built rather than a programme bolted on beside it."
          />
          <ul className="tag-list mt-3">
            <li className="tag">Local employment</li>
            <li className="tag">A route into the supply chain for sole traders and micro businesses</li>
            <li className="tag">Community events</li>
            <li className="tag">Digital skills sessions for residents</li>
            <li className="tag">Work experience</li>
            <li className="tag">Residents joining the trade network</li>
          </ul>
          <div className="ev3-split ev3-split--narrow mt-3">
            <Photo
              src="/images/photos/evo-resident-engagement-session.webp"
              alt="EVO running a resident engagement session on an estate"
              caption="Resident session, run on site."
              width={900}
              height={1200}
              sizes="(min-width: 880px) 40vw, 100vw"
            />
            <div>
              <h3>The one that is unusual</h3>
              <p>
                Most of our network is small regional firms, by design. That gives sole traders and micro businesses a
                route into a supply chain they could not otherwise reach, because they cannot meet a tier-one PQQ on
                their own.
              </p>
              <p className="mb-0">
                We also find tradespeople living in the homes we look after. Giving them work in their own community is
                the most direct social value there is, and it is the item an evaluation panel remembers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="Procurement" title="The parts an evaluation panel scores." />
          <div className="grid grid-2 mt-3">
            <div className="card">
              <h3>Frameworks</h3>
              <p className="mb-0">
                South East Consortium DPS. Social Housing Emerging Disruptors 3. Procurement for Housing.{' '}
                <Tbc>still current?</Tbc>
              </p>
            </div>
            <div className="card">
              <h3>Accreditation</h3>
              <p className="mb-0">
                Constructionline, ISO 9001, ISO 14001 and ISO 45001. <Tbc>Gold or Silver</Tbc>
              </p>
            </div>
            <div className="card">
              <h3>Health and safety</h3>
              <p className="mb-0">
                Five years with no serious incident. An external health and safety advisor, annual PQQ re-checks on
                every contractor, and photographs before and after every job.
              </p>
            </div>
            <div className="card">
              <h3>Net zero</h3>
              <p className="mb-0">
                Net zero by 2030, an all-electric vehicle fleet, and ISO 14001 targets. Fewer wasted journeys is the
                part that shows up first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <EveryPlan />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHead
            eyebrow="The part software cannot do"
            title="Someone who is actually there."
            lead="A named EVO caretaker on the scheme, who residents recognise and can stop on the path. Not a number that routes to a call centre, and not a supplier who appears only when something has already gone wrong."
          />
          <div className="ev3-split mt-3">
            <Photo
              src="/images/photos/evo-caretaker-on-estate.webp"
              alt="An EVO caretaker talking with an older resident outside low-rise brick flats"
              width={1100}
              height={618}
            />
            <Photo
              src="/images/photos/evo-operative-resident-doorstep.webp"
              alt="An EVO operative talking with a resident on her doorstep"
              width={900}
              height={675}
            />
          </div>
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
