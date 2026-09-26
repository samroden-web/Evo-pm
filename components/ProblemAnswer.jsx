import Icon from './Icon';
import Caretaker from './Caretaker';

// Homepage: the problem and the answer to it.
//
// THE CONTENT IS NOW THE BRIEF'S, IN FULL. This block had been running on copy that drifted
// away from the approved text, and the drift was in both halves:
//
//   HOME-05 states the four problems as HEADINGS, not sentences - "Nobody can tell the board
//   what next year will cost." The site had explanatory versions of each, which are softer
//   and longer.
//
//   HOME-06 gives each answer a BOLD LEAD-IN plus a supporting sentence - "A clear monthly
//   cost per property. No per-job pricing and no limit on the number of repairs in your
//   plan." The site had one short line per answer and none of the supporting detail, which
//   is why the solution side had nothing to say for itself.
//
// Quoted copy in the brief is approved copy, so both halves below are a return to it rather
// than a rewrite. The pairing of problem n to answer n is the brief's too: HOME-05 says the
// four problems are "lined up with the four answers in HOME-06".
//
// THE LAYOUT, and the three versions that failed before it:
//
//   1 and 2 (a table, then two lanes with a spine) put the pairing in the LAYOUT - a problem
//   and its answer were two cells that happened to sit level. Fine at 1440px; every narrower
//   screen had to break the row apart and the pairing went with it.
//
//   3 (one card per pair, halves stacked) fixed that, but made both halves the same shape and
//   weight, so it read as two related notes rather than a problem and its fix.
//
//   This version is Sam's: one row per pair, problem LEFT and answer RIGHT on a laptop, both
//   stacked under the theme on a phone. The pairing still lives inside one element so it
//   cannot break, and left-to-right is the reading order that says "this, then that" without
//   needing to be explained.

const PAIRS = [
  {
    key: 'Evidence',
    icon: 'camera',
    // HOME-05, problem 1.
    problem: 'The evidence sits in four different places.',
    // HOME-06, answer 1.
    lead: 'Clear visibility, with the evidence built in.',
    body: 'Live repairs, compliance and the full history of every home in one place, with the audit trail recorded as the work happens.',
  },
  {
    key: 'Ownership',
    icon: 'route',
    problem: 'Nobody owns a repair from start to finish.',
    lead: 'Every repair managed from start to finish.',
    body: 'We triage, coordinate the trades, keep residents updated and see each job through to completion, with one point of contact throughout.',
  },
  {
    key: 'Cost',
    icon: 'wallet',
    problem: 'Nobody can tell the board what next year will cost.',
    lead: 'A clear monthly cost per property.',
    body: 'No per-job pricing and no limit on the number of repairs in your plan. Anything outside it is scoped and approved before we start.',
  },
  {
    key: 'Quality',
    icon: 'warranty',
    problem: 'The same jobs keep coming back.',
    lead: 'A focus on quality and lasting repairs.',
    body: 'Vetted trades are matched to each job with the full property history, and repeat visits are tracked as a measure in their own right.',
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
          {/* HOME-06 body, verbatim. */}
          <p className="lead">
            EVO provides a fully managed, end-to-end repairs and maintenance service. The helpdesk, contractor
            management, resident communication and performance oversight come together in one service, from one
            supplier, for one fixed monthly price per property. We take responsibility for managing and delivering
            every repair, supported by our own technology, our operations team and our approved contractor network. We
            are not a software company.
          </p>
        </div>

        <ol className="pa-list">
          {PAIRS.map(({ key, icon, problem, lead, body }, i) => (
            <li className="pa-row" key={key}>
              <div className="pa-row__head">
                <span className="pa-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="pa-theme">{key}</span>
              </div>

              <div className="pa-row__problem">
                <span className="pa-tag">The problem</span>
                <p>{problem}</p>
              </div>

              {/* Decorative: the labels and the colour change carry the meaning on their own,
                  and on a phone the arrow turns to point down instead. */}
              <div className="pa-row__turn" aria-hidden="true">
                <span className="pa-chev" />
              </div>

              <div className="pa-row__answer">
                <span className="pa-tag pa-tag--evo">
                  <Icon name={icon} size={15} />
                  With EVO
                </span>
                <p>
                  <strong>{lead}</strong> {body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* The Caretaker closes this argument rather than opening a new one, so it sits
            inside the same section. As its own band it carried a full section's padding
            either side of what is really the last line of the argument above it. */}
        <Caretaker bare />
      </div>
    </section>
  );
}
