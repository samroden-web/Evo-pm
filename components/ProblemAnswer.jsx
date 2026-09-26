import Icon from './Icon';
import Caretaker from './Caretaker';

// Homepage: the problem and the answer to it.
//
// THE ORDER IS NOT THE BRIEF'S, AND THAT IS DELIBERATE. HOME-05 lists the four problems
// Evidence, Ownership, Cost, Quality. That opens on the most abstract of the four, and the
// opening line has to be the one a housing director recognises in a second. The order here
// is Ownership, Quality, Evidence, Cost:
//
//   Ownership opens because it is the root cause of the other three.
//   Quality follows as its direct consequence, and it is the one residents feel.
//   Evidence third is the escalation from operational to regulatory, and it picks up the
//     WhyNow band directly above it ("Meeting them is one job. Evidencing them is another").
//   Cost closes in the boardroom and hands straight over to the plans teaser below.
//
// Operational, then regulatory, then financial. The brief's requirement is that problem n
// is paired with answer n, and every pair below is intact - only the running order moved.
//
// THREE LINES OF COPY ARE NOT THE BRIEF'S EITHER. Sam's call, 26 September:
//
//   "The evidence sits in four different places" is out. "Four" is a specific the reader
//   cannot check, so it invites arithmetic instead of recognition; "evidence" is our word
//   rather than theirs; and it was the only one of the four with no verb of failure -
//   "nobody owns", "nobody can tell", "keep coming back", then "sits". Replaced with
//   "Proving what happened takes days", which is the cost the reader actually pays.
//
//   The Quality answer led on "a focus on quality and lasting repairs" - an intention where
//   the other three promise outcomes. It now leads on first-time fix, which is what the
//   property history actually buys, and closes on the incentive: under a fixed monthly
//   price a return visit is EVO's cost, not the client's. That is a structural argument no
//   per-job contractor can make, and it is stronger than any warranty claim. The warranty
//   is mentioned without its length here; the twelve-month term is stated in full on the
//   comparison, which is where a term belongs.
//
//   The Evidence and Cost answers now name the EVO Dashboard. Selling the software is not
//   the thing GLOBAL-04 warns against - being mistaken for a software company is. "We built
//   the technology, and we run it for you" is the line that holds both.
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
//   4 kept the pairing inside one element and put problem left, answer right. The structure
//   was right - Sam confirmed it on a phone - but on a laptop it read as basic, and the
//   measurements said why: the problem was set LARGER than the answer, the two halves were
//   two near-white warm tints four percent apart, the left panel was 43% of the row carrying
//   six words, and the theme strip stopped dead at the gutter halfway across the card.
//
//   This version keeps that structure and changes the treatment. The problem half is navy
//   with large white type; the answer is a white card floating on it. Dark to light does the
//   work that a tinted panel and a 24px chevron could not, and it needs no label to explain
//   itself - which is why "The problem" is now read only by screen readers on a laptop, and
//   visible on a phone where the two halves stack and the colour alone is not enough.

const PAIRS = [
  {
    key: 'Ownership',
    icon: 'route',
    // HOME-05 problem 2, HOME-06 answer 2. Both verbatim - the strongest pair in the brief.
    problem: 'Nobody owns a repair from start to finish.',
    lead: 'Every repair managed from start to finish.',
    body: 'We triage, coordinate the trades, keep residents updated and see each job through to completion, with one point of contact throughout.',
  },
  {
    key: 'Quality',
    icon: 'warranty',
    // HOME-05 problem 4 verbatim. The answer is rewritten - see the note above.
    problem: 'The same jobs keep coming back.',
    lead: 'More repairs fixed on the first visit.',
    body: 'The full history of the home reaches the trade before they arrive, so the right person turns up with the right parts. Every repair is warrantied, and a return visit costs us rather than you — we are paid to get it right, not to find more work.',
  },
  {
    key: 'Evidence',
    icon: 'camera',
    // Both rewritten - see the note above.
    problem: 'Proving what happened takes days.',
    lead: 'The evidence builds itself, as the work happens.',
    body: 'Photographs, timestamps and no-access visits recorded against the property in the EVO Dashboard, alongside live repairs and compliance for every home. We built the technology, and we run it for you.',
  },
  {
    key: 'Cost',
    icon: 'wallet',
    // HOME-05 problem 3 and HOME-06 answer 3, with the Dashboard added to the tail.
    problem: 'Nobody can tell the board what next year will cost.',
    lead: 'A clear monthly cost per property.',
    body: 'No per-job pricing and no limit on the number of repairs in your plan. Anything outside it is scoped and approved before we start, and the Dashboard gives the board the same numbers we work to.',
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
              {/* Head and problem are ONE element, not two grid areas. As two, the head sat
                  in an auto row and the problem in a 1fr row, so when the answer card was the
                  taller half - which it is on three rows out of four - the leftover height
                  fell below the problem as up to 80px of empty navy. In one element the pair
                  centres against the card as a group. */}
              <div className="pa-row__problem">
                <span className="pa-row__head">
                  <span className="pa-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pa-theme">{key}</span>
                </span>
                {/* Visible on a phone, where the halves stack and the dark-to-light change
                    is no longer a left-to-right movement. Screen-reader only on a laptop. */}
                <span className="pa-tag pa-tag--problem">The problem</span>
                <p>{problem}</p>
              </div>

              <div className="pa-row__answer">
                {/* Decorative. It sits on the card's left edge on a laptop and above it on a
                    phone, so it always points the way the eye is about to travel. */}
                <span className="pa-turn" aria-hidden="true">
                  <span className="pa-chev" />
                </span>
                <span className="pa-tag pa-tag--evo">
                  <Icon name={icon} size={17} />
                  With EVO
                </span>
                <p className="pa-lead">{lead}</p>
                <p className="pa-body">{body}</p>
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
