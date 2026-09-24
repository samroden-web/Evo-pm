import Link from 'next/link';
import { formatDate } from '@/data/insights';

export default function InsightCard({ a }) {
  return (
    <Link href={`/insights/${a.slug}`} className="insight-card">
      <div className="insight-card__img">
        {a.image ? (
          <img src={a.image} alt="" loading="lazy" decoding="async" />
        ) : (
          <img className="mark" src="/images/brand/evo-logomark.svg" alt="" />
        )}
      </div>
      <div className="insight-card__body">
        <span className="insight-card__meta">
          {[formatDate(a.date), a.tags?.[0]].filter(Boolean).join(' · ')}
        </span>
        <h3>{a.title}</h3>
        {a.excerpt && <p>{a.excerpt}</p>}
      </div>
    </Link>
  );
}
