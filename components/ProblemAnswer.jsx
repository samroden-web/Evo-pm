import { EvidenceIcon, OwnershipIcon, CostIcon, QualityIcon } from './Icons2';
import Caretaker from './Caretaker';

// Homepage, section 5. Problem and solution line up row by row, so each objection is
// answered beside it rather than forty lines later. Copy is the brochure's, pages 2
// and 3, so the site and the brochure say the same words.
//
// Redrawn 25 September 2026 as two lanes rather than a table (Sam, point 8). The tick
// and cross glyphs are gone — the lanes carry that meaning, and two columns of symbols
// was most of what made it read as a spreadsheet. The theme now sits under the disc on
// the spine instead of inside it, where it was 8px tall and unreadable.
const PAIRS = [
  {
    key: 'Evidence',
    Icon: EvidenceIcon,
    bad: 'Your repairs evidence is scattered across systems, folders and inboxes.',
    good: 'Every repair, certificate and complaint in one place, ready for audit.',
  },
  {
    key: 'Ownership',
    Icon: OwnershipIcon,
    bad: 'No one owns a repair from report to completion.',
    good: 'EVO owns every repair, from report to completion.',
  },
  {
    key: 'Cost',
    Icon: CostIcon,
    bad: "Per-job pricing makes next year's repairs bill impossible to predict.",
    good: 'One fixed monthly price per property, known before the year starts.',
  },
  {
    key: 'Quality',
    Icon: QualityIcon,
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
          <h2 id="answer-title">EVO takes the repairs function off your hands and runs it end to end.</h2>
          <p className="lead">
            One service, one supplier and one fixed monthly price per property: the helpdesk, contractor management,
            resident communication and performance oversight, all together. We take responsibility for managing and
            delivering every repair, supported by our own technology, our operations team and our approved contractor
            network. We are not a software company.
          </p>
        </div>

        <div className="ev2-pa">
          {/* Two headings, one per lane. The empty middle cell that used to sit here was
              what made the orange block start halfway across the table. */}
          <div className="ev2-pa-head">
            <div>The problem today</div>
            <div>The EVO solution</div>
          </div>
          {PAIRS.map(({ key, Icon, bad, good }) => (
            <div className="ev2-pa-row" key={key}>
              <div className="ev2-pa-bad">{bad}</div>
              <div className="ev2-pa-mid">
                <span className="ev2-pa-dot">
                  <Icon />
                  <i>{key}</i>
                  <span className="ev2-pa-arrow" aria-hidden="true" />
                </span>
              </div>
              <div className="ev2-pa-good">{good}</div>
            </div>
          ))}
        </div>

        {/* The Caretaker closes this argument rather than opening a new one, so it sits
            inside the same section (Sam, point 3). As its own band it carried a full
            section's padding either side of what is really the last line of the table
            above it. */}
        <Caretaker bare />
      </div>
    </section>
  );
}
