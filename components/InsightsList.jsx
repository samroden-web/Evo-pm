'use client';

import { useState } from 'react';
import InsightCard from './InsightCard';

export default function InsightsList({ articles, tags }) {
  const [tag, setTag] = useState(null);
  const shown = tag ? articles.filter((a) => a.tags?.includes(tag)) : articles;
  const usedTags = tags.filter((t) => articles.some((a) => a.tags?.includes(t)));
  return (
    <>
      <ul className="tag-list" aria-label="Filter by topic">
        <li>
          <button type="button" className="tag" aria-pressed={tag === null} onClick={() => setTag(null)}>
            All
          </button>
        </li>
        {usedTags.map((t) => (
          <li key={t}>
            <button type="button" className="tag" aria-pressed={tag === t} onClick={() => setTag(t)}>
              {t}
            </button>
          </li>
        ))}
      </ul>
      <div className="grid-3 insights-list">
        {shown.map((a) => (
          <InsightCard key={a.slug} a={a} />
        ))}
      </div>
    </>
  );
}
