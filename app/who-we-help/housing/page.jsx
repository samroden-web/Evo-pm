import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import { IconBadge } from '@/components/Icon';
import EveryPlan from '@/components/EveryPlan';
import LogoStrip from '@/components/LogoStrip';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import Tbc from '@/components/Tbc';
import { cta } from '@/data/site';
import { clientLogos, withFiles, frameworkLogos, accreditationLogos } from '@/data/logos';
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
              <IconBadge name="shieldCheck" />
              <h3>Consumer standards</h3>
              <p>
                The Safety and Quality Standard covers repairs and stock condition. Gradings are published, and they are
                read.
              </p>
            </div>
            <div className="ev2-band-item">
              <IconBadge name="chart" />
              <h3>Tenant Satisfaction Measures</h3>
              <p>Repairs satisfaction and time taken are reported every year and compared across the sector.</p>
            </div>
            <div className="ev2-band-item">
              <IconBadge name="clock" />
              <h3>Awaab&rsquo;s Law</h3>
              <p>In force for damp and mould, and widening to further hazards on 30 November 2026.</p>
            </div>
            <div className="ev2-band-item">
              <IconBadge name="scales" />
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
          <div className="grid-3 mt-3">
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
          <div className="statrow statrow--orange mt-3">
            <div>
              <span className="stat stat--orange">90%+</span>
              <span className="stat-label">First-time fix across the portfolio</span>
            </div>
            <div>
              <span className="stat stat--orange">1,414</span>
              <span className="stat-label">Homes at IDS, pilot to contract</span>
            </div>
            <div>
              <span className="stat stat--orange">6&ndash;7 days</span>
              <span className="stat-label">Average damp and mould resolution</span>
            </div>
            <div>
              <span className="stat stat--orange">1,000+</span>
              <span className="stat-label">Damp and mould cases in 18 months</span>
            </div>
          </div>
          <div className="mt-3">
            <LogoStrip logos={withFiles(clientLogos)} label="EVO clients" />
          </div>
          <div className="mt-3 max-640">
            <Quote t={testimonials.richardSmith} large />
          </div>

          {/* THE REGULATOR'S OWN WORDS, added 26 September. This was sitting unused in the
              brief and it is the strongest single piece of proof EVO has for this audience:
              a published regulatory judgement needs no clearance, and a housing director
              weighs the Regulator differently from a supplier testimonial. The brief says
              "attribute exactly", so the quotation and the attribution are verbatim. The
              line underneath is the brochure's, also flagged as liftable verbatim. */}
          <div className="reg-judgement mt-3">
            <p className="eyebrow">What the Regulator said</p>
            <blockquote>
              <p>
                IDS has taken action to improve delivery of its repairs and maintenance services, although further work
                is necessary to ensure this is available to all tenants and can be evidenced through improved outcomes.
                Through closer working with its contractors and the introduction of a new piloted repairs service, we
                saw evidence of improvement. Plans are now in place to roll out this approach across its remaining
                estates.
              </p>
            </blockquote>
            <figcaption>Regulator of Social Housing, regulatory judgement on IDS, October 2024</figcaption>
            <p className="reg-judgement__after mb-0">
              The piloted repairs service was EVO. It reached every IDS home three months later.
            </p>
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
          {/* The placeholder here asked for the full list of supported systems. There isn't
              one in any source document - the only sentence that exists anywhere is "Rubixx
              named as a worked example", and the addendum calls this a top-three
              procurement question the site currently answers with silence. Silence is worse
              than a scoped answer, so this says exactly what can be stood behind: how the
              integration works, Rubixx as the worked example, and an invitation to ask about
              a specific system rather than a list we cannot yet publish. */}
          <div className="wwh-grid mt-3">
            <div className="wwh-card">
              <IconBadge name="route" />
              <h3>Your system stays the system of record</h3>
              <p className="mb-0">
                We do not ask you to migrate, and we do not ask your team to work in two places. Job data flows back so
                the record in your housing management system is the complete one.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="file" />
              <h3>Rubixx as the worked example</h3>
              <p className="mb-0">
                It is the integration we are most often asked about and the one we use to show how the flow works, end
                to end, from a resident report to a closed job in your system.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="chat" />
              <h3>Tell us what you run</h3>
              <p className="mb-0">
                Every landlord&rsquo;s stack is different. Name your system on a portfolio review and we will tell you
                straight what we can integrate today and what would need building.
              </p>
            </div>
          </div>
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
          <SectionHead
            eyebrow="Procurement"
            title="The parts an evaluation panel scores."
            lead="The questions that carry weight in a tender, answered here rather than in a clarification round."
          />
          <div className="wwh-grid mt-3">
            <div className="wwh-card">
              <IconBadge name="handshake" />
              <h3>Frameworks</h3>
              {/* "still current?" removed 26 September - Sam confirmed both are current. */}
              <p className="mb-0">
                South East Consortium DPS. Social Housing Emerging Disruptors 3. Procurement for Housing. Crown
                Commercial Service supplier, and G-Cloud.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="warranty" />
              <h3>Accreditation</h3>
              {/* GOLD, and the level is back. The docs had this as an open item because the
                  ISHA deck says Silver while the brief and footer say Gold. It is settled by
                  EVO's own artwork: public/images/logos/accreditations/constructionline-gold.png,
                  fetched from the live site, is the badge reading "Constructionline Gold
                  Member". A certification badge EVO publishes about itself outranks a line in
                  a slide deck. The badge is now shown below rather than just described. */}
              <p className="mb-0">
                Constructionline Gold and Acclaim. ISO 9001, 14001, 45001 and 27001. Cyber Essentials. Living Wage
                Employer. Property Redress Scheme.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="hardHat" />
              <h3>Health and safety</h3>
              <p className="mb-0">
                Five years with no serious incident. An external health and safety advisor, annual PQQ re-checks on
                every contractor, and photographs before and after every job.
              </p>
            </div>
            <div className="wwh-card">
              <IconBadge name="leaf" />
              <h3>Net zero</h3>
              <p className="mb-0">
                Net zero by 2030, an all-electric vehicle fleet, and ISO 14001 targets. Fewer wasted journeys is the
                part that shows up first.
              </p>
            </div>
          </div>

          {/* The badges themselves, added 26 September. This section had four cards
              DESCRIBING the accreditations in comma-separated prose, which is the hardest
              possible form for the one reader it is written for - somebody scanning to
              confirm a specific certification is held. The marks are already in the repo and
              already rendered in the footer; an evaluation panel recognises them faster than
              it reads a sentence. */}
          <div className="ev3-accreds mt-3">
            <LogoStrip
              logos={[...frameworkLogos, ...accreditationLogos]}
              color
              label="Frameworks and accreditations"
              swipe
              hideMissing
              normalise
            />
          </div>

          {/* The three contract details a buyer raises late, added 26 September. All three
              come from the signed managed services agreement rather than marketing copy,
              and the ground-truth note flags each as something the site should say out
              loud: paired attendance is "a good detail for the housing page", pre-existing
              faults are "worth a line so it is not a surprise", and exclusivity is "not
              mentioned anywhere on the site; a buyer will want to know". Answering them
              here is cheaper than answering them in a clarification round. */}
          <div className="wwh-detail mt-3">
            <p className="eyebrow">Asked late, answered early</p>
            <dl>
              <div>
                <dt>Paired attendance, without you having to explain why</dt>
                <dd>
                  Where a property or a resident is flagged, we attend in pairs. You do not have to give us a reason and
                  we do not ask for one.
                </dd>
              </div>
              <div>
                <dt>Pre-existing faults stay yours, and we say so upfront</dt>
                <dd>
                  Set against the stock condition data you give us at onboarding, so the line between an inherited
                  defect and a new repair is drawn before we start rather than argued afterwards.
                </dd>
              </div>
              <div>
                <dt>We are your exclusive provider within plan scope</dt>
                <dd>
                  For the term, for the repairs the plan covers. It is what makes a fixed price per home possible, and
                  you should know it before you sign rather than after.
                </dd>
              </div>
            </dl>
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
