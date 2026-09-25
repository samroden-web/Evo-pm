import Link from 'next/link';
import PageHero from '@/components/PageHero';
import InsightsList from '@/components/InsightsList';
import { sortedInsights, insightTags } from '@/data/insights';

export const metadata = {
  title: 'Insights | EVO',
  description: 'Articles on repairs, compliance, damp and mould, and the social and private rented sectors from the EVO team.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Insights"
        lead="Repairs, compliance, damp and mould, and what is changing for landlords."
        crumbs={[{ label: 'Insights' }]}
      >
        <p className="mt-2">
          <Link href="/insights/newsletters" className="text-link">
            Newsletters
          </Link>
        </p>
      </PageHero>
      <section className="section">
        <div className="container">
          {/* The migration is done: all 75 articles came across on 25 September, on their
              original slugs. The note that used to sit here is no longer true. */}
          <InsightsList articles={sortedInsights()} tags={insightTags.filter((t) => t !== 'Newsletters')} />
        </div>
      </section>
    </>
  );
}
