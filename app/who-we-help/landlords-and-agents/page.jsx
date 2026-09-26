import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Icon, { IconBadge } from '@/components/Icon';
import EveryPlan from '@/components/EveryPlan';
import LogoStrip from '@/components/LogoStrip';
import Quote from '@/components/Quote';
import { cta } from '@/data/site';
import { clientLogos, withFiles } from '@/data/logos';
import { testimonials, landlordTestimonials } from '@/data/testimonials';

export const metadata = {
  title: 'Repairs for landlords and managing agents | EVO',
  description:
    'A fixed-price repairs service for landlords and managing agents: accredited trades, out-of-hours cover, and one live record all three parties can see.',
  alternates: { canonical: '/who-we-help/landlords-and-agents' },
};

const TIME = [
  [
    'search',
    'Finding someone',
    'Ringing round for a trade who is free, qualified and willing to travel. We match by skill and area from an accredited network, so that call never happens.',
  ],
  [
    'calendar',
    'Chasing',
    'Scheduling, rescheduling, and finding out afterwards that nobody was in. Booked to a slot the tenant picked, tracked, and no-access recorded rather than argued about.',
  ],
  [
    'chat',
    'Explaining',
    'The tenant rings because they do not know what is happening. Now they can see it happening, so they stop ringing.',
  ],
  [
    'camera',
    'Proving',
    'Digging through old emails when a deposit, a dispute or an inspection asks what was done. Every job leaves its own record as it happens.',
  ],
];

const SEEN = [
  {
    who: 'The tenant',
    icon: 'dashboard',
    title: 'Knows where it is up to',
    items: [
      'Reports it in about thirty seconds, with a photograph',
      'Picks an appointment slot that suits them',
      'Sees who is coming and when',
      'Rates the job once it is done',
    ],
  },
  {
    who: 'The managing agent',
    icon: 'building',
    title: 'Sees every property at once',
    items: [
      'Every open job across every property, live',
      'Full service history by address',
      'Invoices and job reports to download',
      "No compiling an update from three contractors' emails",
    ],
  },
  {
    who: 'The landlord',
    icon: 'home',
    title: 'Sees their own, in full',
    items: [
      'The same live record for their properties',
      'What was reported, what was done, what it cost',
      'As much or as little involvement as they want',
      'No need to ask the agent what is happening',
    ],
  },
];

export default function LandlordsAndAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Landlords &amp; managing agents"
        title="Repairs, handled. Without the phone calls."
        lead="Your tenant reports it on the app. An accredited trade is matched, priced and dispatched. Everyone who needs to see it can — without a single round of email and telephone tennis."
        crumbs={[{ label: 'Who we help' }, { label: 'Landlords & managing agents' }]}
        image="/images/photos/evo-operative-at-front-door.webp"
        imageAlt="A tradesman arriving at a resident's front door, phone in hand"
        imageWidth={1500}
        imageHeight={843}
        priority
        captionLabel="Booked by the tenant"
        caption="A slot they chose, so the door gets answered"
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

      <section className="ev2-band" aria-label="Where the time goes">
        <div className="container">
          <p className="eyebrow">Where the time actually goes</p>
          <h2>Repairs are rarely difficult. They are just relentless.</h2>
          <div className="ev2-band-grid">
            {TIME.map(([icon, t, d]) => (
              <div className="ev2-band-item" key={t}>
                <IconBadge name={icon} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="The bit that usually goes missing"
            title="Everyone sees the same job."
            lead="Where an agent sits between the landlord and the property, information normally stops at whoever happened to receive the email. It does not here. The same live record is open to all three parties — nobody waits for a monthly update, and nobody has to ask."
          />
          <div className="ev2-seen mt-3">
            {SEEN.map((c) => (
              <div className="ev2-seen-col" key={c.who}>
                <IconBadge name={c.icon} />
                <p className="eyebrow mb-0">{c.who}</p>
                <h3>{c.title}</h3>
                <ul className="plain-list">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <figure className="photo mt-3">
            <img
              src="/images/app/evo-dashboard-job-record.webp"
              alt="The EVO Dashboard showing a job record with costs, timings and property details"
              width="1100"
              height="782"
              loading="lazy"
              decoding="async"
            />
            <figcaption>One job record, open to the landlord, the agent and us at the same time.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          {/* Restored on Sam's instruction, 26 September. I had rewritten this against
              Schedule 2, which lists different inclusion counts per plan; Sam is content
              the original is right. */}
          <SectionHead
            eyebrow="The price"
            title="What the fee covers, and what it does not."

            lead="One fixed price per home, per month. The scope is identical across Home 500, Home 1000 and Home Trust — only the repair threshold changes. Anything outside it is quoted in writing before anyone starts, so there are no invoices to argue about afterwards."
          />
          <div className="grid-2 mt-3">
            <div className="card">
              <IconBadge name="shieldCheck" />
              <p className="eyebrow">In the plan — covered by the monthly fee</p>
              <ul className="tick-list mb-0">
                <li>Reactive repairs up to the plan threshold, parts and labour</li>
                <li>All in-scope trades: plumbing, electrical, heating, carpentry, locks, drainage and the rest</li>
                <li>Out-of-hours and emergency response</li>
                <li>The Living App for tenants and the Dashboard for you</li>
                <li>The record on every job, kept for as long as you need it</li>
              </ul>
            </div>
            <div className="card card--grey">
              <IconBadge name="file" />
              <p className="eyebrow">Outside the plan — quoted before any work</p>
              {/* The placeholder asked for the out-of-scope list to be confirmed against the
                  plan data. It already existed, approved, in the brief - PRICE-07 and the
                  PRICE-08 footnote - and the list below is those two combined. The old
                  bullets included "anything the plan lists as out of scope", which is a
                  placeholder pretending to be an answer. */}
              <ul className="plain-list mb-0">
                <li>Anything above the plan threshold for that repair</li>
                <li>Major renewals, structural repairs and roofing works</li>
                <li>Boiler replacements and rewires</li>
                <li>Planned, cyclical and capital works, including retrofit</li>
                <li>Damp and mould remediation programmes</li>
                <li>Insurance works, and damage beyond fair wear and tear</li>
              </ul>
              <p className="mt-2 mb-0 muted">
                Quoted openly, before we start. Major works are never hidden in the monthly fee, and nothing proceeds on
                assumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Where to start"
            title="Start with some of the properties, not some of the service."
            lead="The model only works if we run the whole repairs service for a property. Dispatch, delivery, out-of-hours and the record are one thing, not four — so we do not take out-of-hours on its own, or act as overflow for someone else's team. What does scale is how many properties you hand over."
          />
          <ul className="tick-list mt-3">
            <li>
              <strong>A single block or scheme.</strong> The usual starting point, and enough to see how it runs.
            </li>
            <li>
              <strong>A region.</strong> Often the properties furthest from where your own people actually are.
            </li>
            <li>
              <strong>A new instruction.</strong> Easier before a way of working is embedded than after.
            </li>
            <li>
              <strong>The whole portfolio.</strong> When you are ready, and not before.
            </li>
          </ul>
          <p className="mt-3 mb-0">
            Everything you keep, you carry on running exactly as you do now. The two sit side by side without
            interfering.
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="Statutory compliance"
            title="Your legal duties, on the same account."
            lead="Gas safety certificates, EICRs, and smoke and carbon monoxide alarms are your obligation whether the tenancy is managed or not, and they are the first thing asked for when something goes wrong. Add gas or electrical cover to any plan and the inspection, the certificate and any resulting repair sit in the same record as everything else, with the renewal date tracked rather than remembered."
          />
          <div className="btn-row mt-3">
            <Link href="/damp-and-mould" className="btn btn-secondary">
              The damp and mould procedure
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
          <SectionHead eyebrow="Proof" title="Agents already running this way." />
          <div className="mt-3">
            <Quote t={testimonials.craigJackson} large />
          </div>
          <div className="mt-3">
            <LogoStrip logos={withFiles(clientLogos)} label="EVO clients" />
          </div>

          <h3 className="ev3-team-head mt-4">What landlords and agents say</h3>
          <div className="ev3-quotes">
            {landlordTestimonials.map((t) => (
              <blockquote className="ev3-quote" key={t.name + t.role}>
                <p>{t.quote}</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Obligation"
            title="The Renters' Rights Act lands here too."
            lead="Standards and timescales that used to sit with social landlords increasingly apply across the private rented sector. The duty follows the property. If you manage it, the phone call follows you as well."
          />
          {/* The placeholder asked for legal review before publishing anything specific
              about the Act's duties or timescales. That caution stands - and the way to
              honour it is not to publish a placeholder, it is to say nothing specific about
              the Act. So this block makes no claim about what the Act requires or when.
              Every line below is about what EVO does, which needs no legal review, and the
              detail about the legislation is left to the guide. Moving that guide's sign-up
              here from the site-wide banner is also the brief's own instruction (6.5). */}
          <div className="wwh-inout mt-3">
            <div className="wwh-inout-col wwh-inout-col--in">
              <h3>
                <Icon name="shieldCheck" size={18} /> What we hold for you
              </h3>
              <ul className="tick-list mb-0">
                <li>A dated record of every report, visit, and completion, per property</li>
                <li>Photographs and timestamps captured as the work happens, not written up later</li>
                <li>No-access visits recorded &mdash; the evidence hardest to produce after the fact</li>
                <li>Gas, electrical, smoke and CO certificates against the same property record</li>
                <li>Exportable, so it goes to a tenant, a court or a new agent without a rebuild</li>
              </ul>
            </div>
            <div className="wwh-inout-col wwh-inout-col--out">
              <h3>
                <Icon name="book" size={18} /> Where the duty sits
              </h3>
              <p className="mb-0">
                With you, as it always has. Nothing in a repairs contract moves a landlord&rsquo;s legal obligations
                onto a supplier, and we would not claim otherwise. What changes is whether you can show what was done
                and when, without going looking for it.
              </p>
              <p className="wwh-inout-note mb-0">
                Our landlord&rsquo;s guide to the Act covers the duties and the dates in full.{' '}
                <Link href="/insights" className="text-link">
                  Read the guides
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHead
            eyebrow="Next step"
            title="Start with a portfolio review."
            lead="We look at the homes you look after, the current spend and the last twelve months of repairs, and tell you what we would do differently."
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
