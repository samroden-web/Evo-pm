import { initials } from '@/data/team';
import Tbc from './Tbc';

// The team, as EVO shows it today: board, development, operations and helpdesk.
// Every person on the current site is here — Sam's instruction was not to take anyone
// away, because it matters to the people in it.
//
// Each card works with or without a photograph. Until the files land it shows the
// person's initials on a warm tile, which reads as deliberate rather than broken.

function Person({ p, large = false }) {
  return (
    <div className={`ev3-person ${large ? 'ev3-person--large' : ''}`}>
      <div className="ev3-person-photo">
        {p.photo ? (
          <img src={p.photo} alt={p.name} loading="lazy" decoding="async" />
        ) : (
          <span aria-hidden="true">{initials(p.name)}</span>
        )}
      </div>
      <div className="ev3-person-text">
        <h3>{p.name}</h3>
        <p className="ev3-person-role">{p.role}</p>
        {p.bio && <p className="ev3-person-bio">{p.bio}</p>}
        {p.tbc && (
          <p className="mb-0">
            <Tbc>{p.tbc}</Tbc>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Team({ board = [], development = [], operations = [] }) {
  return (
    <>
      {board.length > 0 && (
        <>
          <h3 className="ev3-team-head">Board</h3>
          <div className="ev3-team ev3-team--board">
            {board.map((p) => (
              <Person key={p.name} p={p} large />
            ))}
          </div>
        </>
      )}

      {operations.length > 0 && (
        <>
          <h3 className="ev3-team-head">Operations, compliance and the helpdesk</h3>
          <div className="ev3-team">
            {operations.map((p) => (
              <Person key={p.name} p={p} />
            ))}
          </div>
        </>
      )}

      {development.length > 0 && (
        <>
          <h3 className="ev3-team-head">Technology</h3>
          <div className="ev3-team">
            {development.map((p) => (
              <Person key={p.name} p={p} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
