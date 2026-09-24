import Link from 'next/link';
import { cta } from '@/data/site';

// HOME-10. Do not add any other pilot terms (no discount, no "month 11" review, no "clean exit").
export default function PilotSection({ grey = false }) {
  return (
    <section className={`section ${grey ? 'section--grey' : ''}`} aria-labelledby="pilot-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The 12-month pilot</p>
          <h2 id="pilot-title">Try EVO before you commit.</h2>
          <p className="lead">See it working on your own homes, with your own residents and your own numbers.</p>
        </div>
        <div className="card card--shadow pilot-card">
          <div>
            <h3>How it works</h3>
            <ul className="tick-list">
              <li>12 months, on homes you choose</li>
              <li>Live within 60 days</li>
              <li>Monthly KPI reports from the first month</li>
              <li>The standard monthly fee, with the option to upgrade your plan at any time</li>
              <li>At the end of the 12 months, you decide whether to widen it</li>
            </ul>
          </div>
          <div>
            <h3>What you come away with</h3>
            <ul className="tick-list">
              <li>Real performance data from your own homes</li>
              <li>Resident feedback</li>
              <li>A cost comparison with your current service</li>
              <li>Evidence to take to your board</li>
            </ul>
          </div>
        </div>
        <div className="pilot-panel">
          <p>Don&apos;t take our word for it. Test it on your own portfolio.</p>
          <Link href={cta.pilot.href} className="btn btn-primary">
            {cta.pilot.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
