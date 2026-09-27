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
        {/* Sam, 27 September: "i also dont think we need the boards Bios all written out like
            that ... if somebody hovers evo/ clicks a board member their bio comes up".
            Click, not hover. Hover has no meaning on a phone, which is where a good share of
            this traffic is, and it hides content behind a gesture a keyboard user cannot make.
            A native <details> does exactly what he asked, works on touch and with a keyboard,
            is readable by a screen reader, and needs no JavaScript at all - so it cannot break
            the way a hand-rolled toggle can. The bio is still in the HTML, so it is still
            indexed and still findable with the browser's own find-in-page. */}
        {p.bio && (
          <details className="ev3-person-more">
            <summary>
              Biography
              <span aria-hidden="true" className="ev3-person-more__chev" />
            </summary>
            <p className="ev3-person-bio">{p.bio}</p>
          </details>
        )}
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
            {/* Not `large` any more. Sam: "maybe we can put the smaller like the others".
                The board keeps its own row and heading, so it still reads as the board, but
                seven expanded biographies were making this section 3,479px deep on a laptop
                and 6,609px on a phone - by far the largest block on the site. */}
            {board.map((p) => (
              <Person key={p.name} p={p} />
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
