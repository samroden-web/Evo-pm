import Icon from './Icon';
import Caretaker from './Caretaker';

// Homepage, section 5. Four objections, each answered next to it rather than forty lines
// later. Copy is the brochure's, pages 2 and 3, so the site and the brochure say the same
// words.
//
// THIRD design of this block, and the first two failed the same way, so the reason is
// recorded here rather than rediscovered a fourth time.
//
// It was a table, then two lanes with a spine down the middle. In both, a problem and its
// answer were two cells that happened to sit level with each other - the PAIRING lived in
// the layout, not in the content. That holds together at 1440px and nowhere else. On a
// phone the lanes stacked, the spine had nothing to run down, each theme label printed
// across its own icon, and the orange "The EVO solution" heading was explicitly hidden by a
// media query. A phone reader got 2,500px of alternating grey and orange blocks with
// nothing to say which was which.
//
// Each pair is now ONE card holding both halves. There is no arrangement in which they can
// be separated, so the pairing cannot break at any width. The before-and-after is carried
// by the ground changing from grey to orange down the card, which needs no spine, no arrow
// and no connecting line - precisely the three things that kept failing.

const PAIRS = [
  {
    key: 'Evidence',
    icon: 'camera',
    bad: 'Your repairs evidence is scattered across systems, folders and inboxes.',
    good: 'Every repair, certificate and complaint in one place, ready for audit.',
  },
  {
    key: 'Ownership',
    icon: 'route',
    bad: 'No one owns a repair from report to completion.',
    good: 'EVO owns every repair, from report to completion.',
  },
  {
    key: 'Cost',
    icon: 'wallet',
    bad: "Per-job pricing makes next year's repairs bill impossible to predict.",
    good: 'One fixed monthly price per property, known before the year starts.',
  },
  {
    key: 'Quality',
    icon: 'warranty',
    bad: 'The same repairs keep coming back, and you pay twice.',
    good: 'Fixed first time, with repeat visits tracked and followed up.',
  },
];

export default function ProblemAnswer() {
  return (
    <section className="section" aria-labelledby="answer-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The problem, and the solution</p>
          <h2 id="answer-title" className="h2--wide">
            EVO takes the repairs function off your hands and runs it end to end.
          </h2>
          <p className="lead">
            One service, one supplier and one fixed monthly price per property: the helpdesk, contractor management,
            resident communication and performance oversight, all together. We take responsibility for managing and
            delivering every repair, supported by our own technology, our operations team and our approved contractor
            network. We are not a software company.
          </p>
        </div>

        <div className="pa-grid">
          {PAIRS.map(({ key, icon, bad, good }) => (
            <article className="pa-card" key={key}>
              <header className="pa-card__head">
                <Icon name={icon} size={20} />
                <h3>{key}</h3>
              </header>
              <div className="pa-card__now">
                <span className="pa-tag">Today</span>
                <p>{bad}</p>
              </div>
              <div className="pa-card__evo">
                <span className="pa-tag pa-tag--evo">With EVO</span>
                <p>{good}</p>
              </div>
            </article>
          ))}
        </div>

        {/* The Caretaker closes this argument rather than opening a new one, so it sits
            inside the same section. As its own band it carried a full section's padding
            either side of what is really the last line of the argument above it. */}
        <Caretaker bare />
      </div>
    </section>
  );
}
