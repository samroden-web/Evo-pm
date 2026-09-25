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

// Body format: an array of blocks. See data/insights.js for the full key.
//   '## '  h2        '### ' h3        '- ' bullet        '1. ' numbered
//   '| a | b |'  table row       anything else  paragraph
// Consecutive bullets, numbers and table rows are grouped into one list or table.
// Inline **bold** and *italic* are rendered.

function inline(text, keyPrefix) {
  // Split on **bold** and *italic* without a markdown dependency.
  const parts = String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.filter(Boolean).map((p, i) => {
    const k = `${keyPrefix}-${i}`;
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={k}>{p.slice(2, -2)}</strong>;
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <em key={k}>{p.slice(1, -1)}</em>;
    return <span key={k}>{p}</span>;
  });
}

const isBullet = (b) => /^- /.test(b);
const isNumber = (b) => /^\d+\.\s/.test(b);
const isRow = (b) => /^\|.*\|\s*$/.test(b);
const isDivider = (b) => /^\|[\s|:-]+\|\s*$/.test(b);
const cells = (row) =>
  row
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((c) => c.trim());

function Body({ body }) {
  const out = [];
  let i = 0;
  while (i < body.length) {
    const b = body[i];

    if (isBullet(b)) {
      const items = [];
      while (i < body.length && isBullet(body[i])) items.push(body[i++].slice(2));
      out.push(
        <ul className="tick-list" key={`ul-${i}`}>
          {items.map((t, n) => (
            <li key={n}>{inline(t, `b${i}-${n}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (isNumber(b)) {
      const items = [];
      while (i < body.length && isNumber(body[i])) items.push(body[i++].replace(/^\d+\.\s/, ''));
      out.push(
        <ol key={`ol-${i}`}>
          {items.map((t, n) => (
            <li key={n}>{inline(t, `n${i}-${n}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (isRow(b)) {
      const rows = [];
      while (i < body.length && isRow(body[i])) {
        if (!isDivider(body[i])) rows.push(cells(body[i]));
        i++;
      }
      if (rows.length) {
        const [head, ...rest] = rows;
        out.push(
          <div className="table-wrap" key={`tb-${i}`}>
            <table>
              <thead>
                <tr>
                  {head.map((c, n) => (
                    <th key={n}>{inline(c, `th${i}-${n}`)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rest.map((r, rn) => (
                  <tr key={rn}>
                    {r.map((c, n) => (
                      <td key={n}>{inline(c, `td${i}-${rn}-${n}`)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (b.startsWith('### ')) {
      out.push(<h3 key={i}>{inline(b.slice(4), `h3${i}`)}</h3>);
    } else if (b.startsWith('## ')) {
      out.push(<h2 key={i}>{inline(b.slice(3), `h2${i}`)}</h2>);
    } else {
      out.push(<p key={i}>{inline(b, `p${i}`)}</p>);
    }
    i++;
  }
  return out;
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
