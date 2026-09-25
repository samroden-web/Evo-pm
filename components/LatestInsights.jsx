import Link from 'next/link';
import InsightCard from './InsightCard';
import { sortedInsights } from '@/data/insights';

// HOME-13: latest three insights.
export default function LatestInsights({ tag, title = 'Latest insights', grey = false }) {
  let list = sortedInsights();
  if (tag) list = list.filter((a) => a.tags?.includes(tag));
  list = list.slice(0, 3);
  if (!list.length) return null;
  return (
    <section className={`section ${grey ? 'section--grey' : ''}`} aria-labelledby="insights-title">
      <div className="container">
        <div
          className="section-head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            flexWrap: 'wrap',
            gap: 16,
            maxWidth: 'none',
          }}
        >
          <div>
            <h2 id="insights-title" className="mb-0">
              {title}
            </h2>
          </div>
          <Link href="/insights" className="text-link">
            All insights
          </Link>
        </div>
        <div className="grid-3 swipe-mobile">
          {list.map((a) => (
            <InsightCard key={a.slug} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
