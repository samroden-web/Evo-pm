import Link from 'next/link';
import SectionHead from './SectionHead';

// HOME-05
export const problems = [
  'The evidence sits in four different places.',
  'Nobody owns a repair from start to finish.',
  'Nobody can tell the board what next year will cost.',
  'The same jobs keep coming back.',
];

const context = [
  {
    value: 'C1 to C4',
    label: 'Regulatory gradings',
    head: 'You are graded on it now.',
    body: 'Since April 2024, and published for anyone to read, with repairs and damp and mould at the centre.',
  },
  {
    value: '30 Nov 2026',
    label: "Awaab's Law, phase 2",
    head: 'And you have to prove it.',
    body: 'Fixed timescales extend beyond damp and mould to further hazards including excess cold and heat, fire, electrical and structural. Meeting them is one job. Evidencing them is another.',
    link: { href: '/damp-and-mould', label: 'How we handle damp, mould and hazards' },
  },
  {
    value: '£10bn',
    label: 'Sector repairs spend',
    head: 'Out of a budget that has stopped stretching.',
    body: 'A record, up 13% in a year, while operations generate 87p for every £1 of interest owed.',
  },
];

export default function ProblemSection() {
  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The problem</p>
          <h2 id="problem-title">Repairs stopped being a maintenance line. It became a governance one.</h2>
          <p className="lead">
            For most landlords it is still run the way it was ten years ago: a contractor or two, a spreadsheet, an
            inbox, and a small team holding it together. What has changed is everything around it.
          </p>
        </div>
        <div className="grid-3 swipe-mobile">
          {context.map((c) => (
            <div className="tile" key={c.label}>
              <span className="stat stat--orange">{c.value}</span>
              <span className="stat-label">{c.label}</span>
              <h3 style={{ fontSize: '1.08rem' }}>{c.head}</h3>
              <p>{c.body}</p>
              {c.link && (
                <p>
                  <Link className="text-link" href={c.link.href}>
                    {c.link.label}
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="source">
          Source: Regulator of Social Housing, 2025 Global Accounts. MHCLG, Awaab&apos;s Law guidance.
        </p>
        <div className="problem-panel">
          <h3 className="visually-hidden">Four problems</h3>
          <ProblemList />
        </div>
      </div>
    </section>
  );
}

// The four problems as headings only, lined up with the four answers (HOME-05 / HOME-06).
export function ProblemList() {
  return (
    <ol className="problem-list">
      {problems.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ol>
  );
}
