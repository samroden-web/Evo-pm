import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Tbc from '@/components/Tbc';
import ClosingCta from '@/components/ClosingCta';
import Blocks from '@/components/Blocks';
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

// Anything older than eighteen months gets a dated notice. EVO has been publishing since
// 2022, when it was a different and much lighter product, so older posts describe plans,
// prices and a service scope that no longer match the rest of the site. A reader who
// arrives from a search result has no way of knowing that; the date alone does not tell
// them, because people do not read dates.
//
// This is the standard way a publisher handles an archive, and it covers the whole class
// of problem rather than only the stale lines somebody happened to notice.
const STALE_AFTER_MONTHS = 18;

function isDated(iso) {
  if (!iso) return false;
  const months = (Date.now() - new Date(iso + 'T12:00:00Z').getTime()) / (1000 * 60 * 60 * 24 * 30.44);
  return months > STALE_AFTER_MONTHS;
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) notFound();
  const dated = isDated(a.date);
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
            {dated && (
              <p className="ev3-dated">
                Published {formatDate(a.date)}. EVO&rsquo;s plans, prices and service have changed since — see{' '}
                <Link href="/pricing">current plans and pricing</Link> or{' '}
                <Link href="/how-it-works">how the service works today</Link>.
              </p>
            )}
            {a.image && <img src={a.image} alt="" style={{ borderRadius: 14, marginBottom: 24 }} />}
            {a.body ? (
              <Blocks body={a.body} />
            ) : (
              <Tbc block>{`Article text and cover image to be migrated from evo-pm.com/insights/${a.slug}`}</Tbc>
            )}
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
