import Link from 'next/link';
import { cta } from '@/data/site';

// HOME-14
export default function ClosingCta() {
  const options = [
    {
      title: 'A portfolio review',
      body: 'Thirty minutes. We work out what repairs cost you today, all in, and what EVO would cost on the same stock. No charge, and the numbers are yours.',
      ...cta.review,
    },
    {
      title: 'A conversation about the pilot',
      body: 'What scope would make sense on your stock, and how quickly it could be running.',
      ...cta.pilot,
    },
    {
      title: 'A demo',
      body: 'Thirty minutes on the platform. No portfolio data needed.',
      ...cta.demo,
    },
  ];
  return (
    <section className="section section--navy" aria-labelledby="closing-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Get in touch</p>
          <h2 id="closing-title">Let&apos;s look at your portfolio.</h2>
        </div>
        <div className="cta-options swipe-mobile">
          {options.map((o, i) => (
            <div className="cta-option" key={o.title}>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
              <Link href={o.href} className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}>
                {o.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
