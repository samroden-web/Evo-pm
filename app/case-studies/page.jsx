import PageHero from '@/components/PageHero';
import CaseStudyCards from '@/components/CaseStudyCards';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'Case studies | EVO',
  description: 'How IDS and B&D Reside moved their repairs to EVO: faster repairs, higher first-time fix and residents kept informed.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Already delivering for social landlords."
        lead="Both of these started as pilots on a share of the homes, and both went on to full contracts."
        crumbs={[{ label: 'Case studies' }]}
      />
      <section className="section">
        <div className="container">
          <CaseStudyCards />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
