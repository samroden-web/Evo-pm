import Link from 'next/link';
import Image from 'next/image';
import { cta } from '@/data/site';

// Homepage, section 13. The pilot block and the closing CTA were two sections saying
// the same thing in different words. Merged into one ladder: See it, Try it, Start it.
const DOORS = [
  {
    step: 'Step one, or skip it',
    name: 'See it',
    body: 'Thirty minutes on the platform. No portfolio data needed. Or a portfolio review: what repairs cost you today, all in, against what EVO would cost on the same stock.',
    ...cta.demo,
  },
  {
    step: 'Most start here',
    name: 'Try it',
    body: 'A 12-month pilot on homes you choose, at the standard monthly fee, with the option to upgrade your plan at any time. At the end, you decide whether to widen it.',
    ...cta.pilot,
    mid: true,
  },
  {
    step: 'If you already know',
    name: 'Start it',
    body: 'Straight to a full contract from day one, on the plan that fits your stock. Mobilisation runs the same way, just across everything rather than a sample.',
    ...cta.review,
  },
];

const PILOT_STEPS = [
  ['Choose', 'We agree the homes and the scope with you.'],
  ['60 days', 'Live, with residents reporting through the app.'],
  ['Monthly', 'KPI reporting from the first month.'],
  ['Decide', 'Review, then choose whether to roll it out.'],
];

export default function GettingStarted() {
  return (
    <section className="ev2-start" aria-labelledby="start-title">
      <div className="container">
        <p className="eyebrow">Getting started</p>
        <h2 id="start-title">
          See it. Try it. <em>Or start straight away.</em>
        </h2>
        <p className="ev2-start-lead">
          However you want to begin, you see the results on your own homes, with your own residents and your own numbers.
        </p>

        <div className="ev2-doors">
          {DOORS.map((d) => (
            <Link href={d.href} key={d.name} className={`ev2-door ${d.mid ? 'ev2-door--mid' : ''}`}>
              <span className="ev2-door-step">{d.step}</span>
              <span className="ev2-door-name">{d.name}</span>
              <span className="ev2-door-body">{d.body}</span>
              <span className="ev2-door-go">{d.label}</span>
            </Link>
          ))}
        </div>

        <div className="ev2-pilotstrip">
          <div>
            <p className="eyebrow">How a pilot works</p>
            <div className="ev2-pilot-steps">
              {PILOT_STEPS.map(([k, v]) => (
                <div key={k}>
                  <b>{k}</b>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/photos/ids-resident-engagement-day.webp"
            alt="An EVO team member with residents at an engagement day"
            width={1200}
            height={800}
            sizes="(min-width: 900px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
