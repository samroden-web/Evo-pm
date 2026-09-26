import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Tbc from '@/components/Tbc';
import { IconBadge } from '@/components/Icon';
import { cta } from '@/data/site';

export const metadata = {
  title: 'Compliance: statutory and regulatory | EVO',
  description:
    'Statutory compliance is work we do — gas, EICRs, PAT, alarms. Regulatory compliance is a duty that stays with you, and we hold the evidence for it.',
  alternates: { canonical: '/compliance' },
};

const REGULATORY = [
  {
    icon: 'shieldCheck',
    k: 'Consumer standards',
    h: 'Graded C1 to C4, and published.',
    b: 'The Safety and Quality Standard covers repairs and stock condition. Inspections look for evidence that the standard is met, not assurances that it is.',
  },
  {
    icon: 'chart',
    k: 'Tenant Satisfaction Measures',
    h: 'Reported annually, compared across the sector.',
    b: 'Repairs satisfaction and time taken are two of the measures. Both are outcomes of how repairs actually run, not of how they are reported.',
  },
  {
    icon: 'clock',
    k: "Awaab's Law",
    h: 'Fixed timescales, widening on 30 November 2026.',
    b: 'In force for damp and mould today. Phase 2 extends to cold, heat, fire, electrical and structural hazards. Meeting the timescale is one job; evidencing it is another.',
  },
  {
    icon: 'scales',
    k: 'The Housing Ombudsman',
    h: 'Determinations turn on the record.',
    b: 'Complaint handling is judged on whether you can show what happened and when — not on whether the repair was eventually done.',
  },
];

const RECORDED = [
  ['At report', 'What the resident said, in their words, with their photographs and a timestamp.'],
  ['At triage', 'The priority applied, the timescale that follows from it, and who made the call.'],
  ['On attendance', 'Arrival time, the trade who attended, and photographs before work starts.'],
  ['On completion', 'What was done, what was used, photographs after, and the resident’s rating.'],
  [
    'On no access',
    'The visit, the evidence of attendance, and the attempt to make contact. The record landlords most often cannot produce.',
  ],
  ['On repeat', 'Any return visit linked to the original job, so repeat work is visible rather than buried.'],
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Two kinds of compliance, split properly."
        lead="One is a certificate with a date on it. The other is a judgement the Regulator makes about you. Suppliers who blur the two are usually overclaiming on the second."
        crumbs={[{ label: 'Compliance' }]}
      >
        <div className="btn-row mt-3">
          <Link href={cta.review.href} className="btn btn-primary">
            {cta.review.label}
          </Link>
          <Link href="/damp-and-mould" className="btn btn-secondary">
            Damp and mould
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <IconBadge name="wrench" />
              <p className="eyebrow">Statutory</p>
              <h3>Gas, electrical, alarms.</h3>
              <p>
                <strong>We do the work.</strong> Inspection, certification and the remedials that follow, carried out by
                the same trades who do your repairs — so a failed check becomes a job rather than a letter.
              </p>
              <p className="mb-0">Available as an add-on to any plan, or as variable works.</p>
            </div>
            <div className="card card--grey">
              <IconBadge name="clipboard" />
              <p className="eyebrow">Regulatory</p>
              <h3>The Regulator, TSMs, Awaab&rsquo;s Law.</h3>
              <p>
                <strong>You hold the duty. We hold the proof.</strong> The duty never transfers and we will not pretend
                otherwise. What changes is whether the evidence exists when someone asks for it.
              </p>
              <p className="mb-0">Recorded as the work happens, not assembled afterwards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="Statutory, in detail"
            title="The certificates, and the work behind them."
            lead="A certificate is the easy part. The hard part is the remedial that the certificate triggers, and getting it done inside the window."
          />
          <div className="grid-2 mt-3">
            <div className="card">
              <IconBadge name="flame" />
              <h3>Gas</h3>
              <ul className="tick-list mb-0">
                <li>Annual gas safety inspection and certificate</li>
                <li>Annual boiler service</li>
                <li>Breakdown repairs, parts and labour</li>
                <li>Controls, flue and associated components</li>
              </ul>
            </div>
            <div className="card">
              <IconBadge name="bolt" />
              <h3>Electrical</h3>
              <ul className="tick-list mb-0">
                <li>EICR inspection and certification</li>
                <li>PAT testing</li>
                <li>Smoke and heat alarm testing</li>
                <li>Visual electrical safety inspection</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 mb-0">
            <Link href="/pricing" className="text-link">
              Electrical and gas cover pricing
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Regulatory, in detail"
            title="Four things you are judged on. One evidence trail."
            lead="They are usually managed separately, by different people, against different deadlines. They all draw on the same underlying record."
          />
          <div className="grid-2 mt-3">
            {REGULATORY.map((r) => (
              <div className="card" key={r.k}>
                <IconBadge name={r.icon} />
                <p className="eyebrow">{r.k}</p>
                <h3>{r.h}</h3>
                <p className="mb-0">{r.b}</p>
              </div>
            ))}
          </div>
          <Tbc block>Which Tenant Satisfaction Measures EVO reports against, stated precisely.</Tbc>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="The evidence"
            title="What gets recorded, and when."
            lead="Nothing here is assembled after a complaint. It is captured as the job runs, because that is the only way it is worth anything eighteen months later."
          />
          <div className="grid-3 mt-3">
            {RECORDED.map(([k, v]) => (
              <div className="tile" key={k}>
                <p className="eyebrow">{k}</p>
                <p className="mb-0">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Damp and mould"
            title="The one we are asked about most."
            lead="A defined procedure rather than a repaint: a moisture reading that decides whether treatment can start, a three-stage treatment, and the before, during and after evidence."
          />
          <div className="statrow mt-3">
            <div>
              <span className="stat stat--orange">1,000+</span>
              <span className="stat-label">Cases handled in 18 months</span>
            </div>
            <div>
              <span className="stat stat--orange">6&ndash;7 days</span>
              <span className="stat-label">Average damp and mould resolution</span>
            </div>
            <div>
              <span className="stat stat--orange">20%</span>
              <span className="stat-label">Moisture threshold below which treatment proceeds</span>
            </div>
          </div>
          <p className="mt-3 mb-0">
            <Link href="/damp-and-mould" className="text-link">
              The full damp and mould procedure
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="Where the line sits"
            title="We are careful about what we do and do not take on."
            lead="It matters more here than anywhere else on this site, because the wrong claim would leave you exposed rather than covered."
          />
          <div className="grid-2 mt-3">
            <div className="card">
              <IconBadge name="shieldCheck" />
              <h3>What we take on</h3>
              <ul className="tick-list mb-0">
                <li>Carrying out statutory inspections and the remedials that follow</li>
                <li>Delivering repairs inside the timescales that apply</li>
                <li>Recording the evidence, as the work happens</li>
                <li>Reporting it to you in a form you can hand to a regulator or a board</li>
              </ul>
            </div>
            <div className="card card--grey">
              <IconBadge name="scales" />
              <h3>What stays with you</h3>
              {/* This list deliberately has no ticks. The paired card opposite is a list of
                  things EVO does; ticking the duties that stay with the landlord would read
                  as though we were claiming them. */}
              <ul className="plain-list mb-0">
                <li>
                  The legal duty, in every case. It does not transfer to a supplier and nobody can take it from you.
                </li>
                <li>The decision on what work is done, and when</li>
                <li>Your relationship with the Regulator and the Ombudsman</li>
                <li>The consumer standards judgement itself</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHead
            eyebrow="Before 30 November"
            title="Can you evidence a repair from eighteen months ago?"
            lead="That is the question Awaab's Law phase 2 turns into a practical one. If the answer involves searching an inbox, the evidence does not exist in any useful sense."
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
