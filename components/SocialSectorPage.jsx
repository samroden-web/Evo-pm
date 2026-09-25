import Link from 'next/link';
import PageHero from './PageHero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ValueBySize from './ValueBySize';
import CaseStudyCards from './CaseStudyCards';
import PlansTeaser from './PlansTeaser';
import PilotSection from './PilotSection';
import ClosingCta from './ClosingCta';
import { cta } from '@/data/site';

// Shared structure for the Housing Associations and Local Authorities pages (brief 6.5):
// headline, the problem, what EVO does, evidencing the consumer standards and Awaab's Law,
// value by portfolio size, a case study card, plans teaser, pilot, CTA.
export default function SocialSectorPage({ eyebrow, title, lead, crumbLabel, leadCase }) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        crumbs={[{ href: '/sectors', label: 'Who we help' }, { label: crumbLabel }]}
      >
        <div className="btn-row">
          <Link href={cta.review.href} className="btn btn-primary">
            {cta.review.label}
          </Link>
          <Link href="/pricing" className="btn btn-secondary">
            See plans and pricing
          </Link>
        </div>
      </PageHero>

      <section className="section section--tight" aria-labelledby="lead-case">
        <div className="container">
          <h2 id="lead-case" className="visually-hidden">
            Case studies
          </h2>
          <CaseStudyCards lead={leadCase} />
        </div>
      </section>

      <div className="section--grey">
        <ProblemSection />
      </div>

      <SolutionSection showPhoto={false} />

      <section className="section section--grey" aria-labelledby="evidence-title">
        <div className="container">
          <div className="split split--top">
            <div>
              <p className="eyebrow">Consumer standards and Awaab&apos;s Law</p>
              <h2 id="evidence-title">The evidence is recorded as the work happens.</h2>
            </div>
            <div>
              <p>
                The Regulator&apos;s consumer standards have been in force since April 2024, with gradings C1 to C4
                published for anyone to read. Repairs and damp and mould are at the centre of them.
              </p>
              <p>
                Every report, message, appointment, photograph and sign-off lives in one system. Live repairs,
                compliance and the full history of every home sit in the EVO Dashboard, with the audit trail recorded as
                the work happens.
              </p>
              <p>
                Damp and mould follows its own defined process, from the first report to the final check, so you can
                show what was done and when against the Awaab&apos;s Law timescales.
              </p>
              <Link href="/damp-and-mould" className="text-link">
                How we handle damp and mould
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ValueBySize />

      <PlansTeaser grey={false} />
      <PilotSection grey />
      <ClosingCta />
    </>
  );
}
