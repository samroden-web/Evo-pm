import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Tbc from '@/components/Tbc';
import ClosingCta from '@/components/ClosingCta';
import { insights, formatDate } from '@/data/insights';

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `${a.title} | EVO`,
    description: a.excerpt || a.title,
    alternates: { canonical: `/insights/${slug}` },
  };
}

// Body format: an array of strings. Lines starting "## " become headings, "### " sub-headings.
function Body({ body }) {
  return body.map((block, i) => {
    if (block.startsWith('### ')) return <h3 key={i}>{block.slice(4)}</h3>;
    if (block.startsWith('## ')) return <h2 key={i}>{block.slice(3)}</h2>;
    return <p key={i}>{block}</p>;
  });
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <PageHero
        eyebrow={[formatDate(a.date), a.tags?.[0]].filter(Boolean).join(' · ') || 'Insights'}
        title={a.title}
        lead={a.excerpt}
        crumbs={[{ href: '/insights', label: 'Insights' }, { label: a.title }]}
      />
      <section className="section">
        <div className="container">
          <article className="prose">
            {a.image && <img src={a.image} alt="" style={{ borderRadius: 14, marginBottom: 24 }} />}
            {a.body ? <Body body={a.body} /> : <Tbc block>{`Article text and cover image to be migrated from evo-pm.com/insights/${a.slug}`}</Tbc>}
            {a.tbc && (
              <p className="mt-2">
                <Tbc>{a.tbc}</Tbc>
              </p>
            )}
            <p className="mt-3">
              <Link href="/insights" className="text-link">
                All insights
              </Link>
            </p>
          </article>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
