import Quote from './Quote';
import { testimonials } from '@/data/testimonials';

// Brief 6.5 (brochure page 8): value by portfolio size, and the LRM outcome block.
export default function ValueBySize() {
  const sizes = [
    {
      size: 'A scheme, or a few hundred homes',
      head: 'EVO is your repairs department.',
      body: 'You cannot justify a repairs team, and you cannot hire half a person. One coordinator costs more than this whole service, before a single repair is paid for.',
    },
    {
      size: 'A few thousand homes',
      head: 'Your team stops chasing.',
      body: 'We take the logging, chasing and evidence-gathering, so your people can focus on asset management, planned programmes and residents.',
    },
    {
      size: 'Ten thousand and above',
      head: 'A benchmark on your own homes.',
      body: 'Keep your repairs function and let EVO run part of the portfolio at a fixed price, measured the same way as your own service, for a year.',
    },
  ];
  return (
    <>
      <section className="section section--navy" aria-labelledby="value-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Value for money</p>
            <h2 id="value-title">Value goes beyond the repairs line.</h2>
            <p className="lead">
              A fair comparison looks at the full cost of running a repairs service, not just the contractor invoice.
              EVO brings together the technology, helpdesk, contractor management and service oversight that would
              otherwise sit across several budgets.
            </p>
          </div>
          <div className="grid-3 swipe-mobile">
            {sizes.map((s) => (
              <div className="tile" key={s.size}>
                <p className="eyebrow">{s.size}</p>
                <h3>{s.head}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 mb-0">
            B&amp;D Reside has its own teams and started with a 380-home pilot. Using EVO has never meant replacing
            anyone.
          </p>
        </div>
      </section>
      <section className="section section--grey" aria-labelledby="outcomes-title">
        <div className="container">
          <div className="split">
            <div>
              <h2 id="outcomes-title">What good repairs are worth.</h2>
              <p className="lead">
                Residents who are happy with repairs stay longer, complain less and are easier to work with. That is
                where the value stops being about the repairs budget.
              </p>
              <span className="stat stat--orange" style={{ fontSize: 'clamp(3rem,7vw,4.5rem)' }}>
                30%
              </span>
              <span className="stat-label">Increase in tenant retention in a year, at LRM</span>
            </div>
            <Quote t={testimonials.craigJackson} card />
          </div>
        </div>
      </section>
    </>
  );
}
