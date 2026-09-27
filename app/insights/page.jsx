import Link from 'next/link';
import PageHero from '@/components/PageHero';
import InsightsList from '@/components/InsightsList';
import { sortedInsights, insightTags } from '@/data/insights';

export const metadata = {
  title: 'Insights | EVO',
  description:
    'Articles on repairs, compliance, damp and mould, and the social and private rented sectors from the EVO team.',
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
          {/* The article cards are h3s, so without this the page ran h1 straight to h3 and the
              heading outline broke - found by the launch audit, same fault as /how-it-works and
              /compliance. Hidden, because the filter row above it already says what this is. */}
          <h2 className="visually-hidden">All articles</h2>
          <InsightsList articles={sortedInsights()} tags={insightTags.filter((t) => t !== 'Newsletters')} />
        </div>
      </section>
    </>
  );
}
