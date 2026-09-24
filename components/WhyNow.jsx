import Link from 'next/link';

// Homepage, section 4. The regulatory context sits in its own thin band rather than
// under "the problem". It sets the stakes before anyone is told they have a problem,
// which is the right order: a housing director does not need persuading that the
// Regulator exists.
const CONTEXT = [
  {
    value: 'C1 to C4',
    label: 'Regulatory grading',
    head: 'You are graded on it now.',
    body: 'Published since April 2024 for anyone to read, with repairs and damp and mould at the centre.',
  },
  {
    value: '30 Nov 2026',
    label: "Awaab's Law, phase 2",
    head: 'And you have to prove it.',
    body: 'Fixed timescales extend to cold, heat, fire, electrical and structural hazards. Meeting them is one job. Evidencing them is another.',
  },
  {
    value: '£10bn',
    label: 'Sector repairs spend',
    head: 'From a budget that has stopped stretching.',
    body: 'A record, up 13% in a year, while operations generate 87p for every £1 of interest owed.',
  },
];

export default function WhyNow() {
  return (
    <section className="ev2-whynow" aria-labelledby="whynow-title">
      <div className="container">
        <p className="eyebrow">Why repairs matter more than ever</p>
        <h2 id="whynow-title">Repairs stopped being a maintenance line. It became a governance one.</h2>
        <div className="ev2-whynow-grid">
          {CONTEXT.map((c) => (
            <div className="ev2-whynow-item" key={c.label}>
              <span className="ev2-whynow-num">{c.value}</span>
              <span className="ev2-whynow-label">{c.label}</span>
              <h3>{c.head}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
        <p className="source">
          Regulator of Social Housing, 2025 Global Accounts. MHCLG, Awaab&rsquo;s Law guidance.{' '}
          <Link href="/damp-and-mould" className="text-link">
            How we handle damp, mould and hazards
          </Link>
        </p>
      </div>
    </section>
  );
}
