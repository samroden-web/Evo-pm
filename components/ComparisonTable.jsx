import {
  competitors,
  comparisonBands,
  comparisonFootnotes,
  comparisonSource,
  comparisonVerdicts,
} from '@/data/competitors';

// The comparison, rebuilt from the verification study. Addendum v2 section 2.
//
// WHAT CHANGED AND WHY IT MATTERS. This replaced a categories-only table whose headline
// was "Four things you cannot buy anywhere else". That headline was untrue - HomeServe
// does four of them - and the "Home emergency cover" column was wrong on five of nine
// rows. The argument is now two groups rather than four exclusives: software manages a
// whole portfolio but does not mend; home emergency cover mends but only three trades,
// one property at a time. EVO is the only supplier in both halves. Every cell in this
// version is defensible, which is the only reason it can carry competitors' logos.
//
// THREE STATES, NEVER TWO. 'y' evidenced, 'n' evidenced absent, 'u' unverified. A blank
// cell in a published table reads as "no", so 'u' gets its own mark and the key is
// printed on the face of the table. Rendering an unverified as a blank would assert
// something EVO cannot stand behind, next to that company's own mark.
//
// THE LOGOS NEVER CARRY MEANING ALONE. Every column shows the company name whether or not
// its mark downloaded, the marks have empty alt text so screen readers hear the name once,
// and a failed fetch costs polish rather than comprehension.

// Equal AREA, not equal height - the same rule as the client logo strip. A wide wordmark
// and a square app icon capped at one height look nothing like the same size.
const MARK_AREA = 760;

function markHeight(c) {
  if (!c.width || !c.height) return undefined;
  return Math.round(Math.sqrt(MARK_AREA / (c.width / c.height)));
}

function Cell({ v }) {
  if (v === 'y') {
    return (
      <>
        <span className="cmp-y" aria-hidden="true">
          &#10003;
        </span>
        <span className="visually-hidden">Yes</span>
      </>
    );
  }
  if (v === 'u') {
    return (
      <>
        <span className="cmp-u" aria-hidden="true">
          &ndash;
        </span>
        <span className="visually-hidden">Not published by that supplier</span>
      </>
    );
  }
  if (v && typeof v === 'object' && v.q) {
    return <span className="cmp-q">{v.q}</span>;
  }
  return <span className="visually-hidden">Does not offer it</span>;
}

export default function ComparisonTable() {
  return (
    <>
      <div className="cmp-wrap" tabIndex={0} role="group" aria-label="Comparison table, scrolls sideways">
        <table className="cmp">
          <caption className="visually-hidden">
            EVO compared with five named suppliers across eleven capabilities, grouped into what most
            suppliers give you, where home emergency cover stops, and where software stops.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="cmp-cap">
                Capability
              </th>
              {/* THE EVO COLUMN RENDERS THE SAME FOUR SLOTS AS EVERY OTHER COLUMN.
                  It used to render the mark alone. With `vertical-align: bottom` on the
                  header cells, a cell holding one 26px element sits that element at the
                  BOTTOM of a 122px row, while every competitor's mark sits near the top of
                  its own four-slot stack - so the EVO logo hung 52px below the rest and
                  threw the whole bar out. Measured, not guessed.
                  Same fix as Fixflo's: render every slot in every column, empty or not, so
                  the row has one structure. The name slot stays empty here because the mark
                  is a wordmark and printing "EVO" under it would say it twice. */}
              <th scope="col" className="cmp-evo">
                <span className="cmp-grp">&nbsp;</span>
                <span className="cmp-mark cmp-mark--evo">
                  <img src="/images/brand/evo-logo-horizontal-white.png" alt="EVO" width="91" height="40" />
                </span>
                <span className="cmp-name">&nbsp;</span>
                <span className="cmp-note">&nbsp;</span>
              </th>
              {competitors.map((c) => (
                <th scope="col" key={c.key}>
                  {/* EVERY column renders EVERY slot, even when it is empty.
                      Sam spotted that Fixflo's name sat out of line with the rest and it
                      threw the whole header off. The cause: this column has no mark (its
                      published logo is a wordmark, so printing it would say "Fixflo" twice)
                      and it is the only one with a note. So it had two fewer pixels above
                      and a line more below, and no amount of vertical-align could rescue
                      that - bottom-aligning pushed the name UP on the taller cell, which is
                      what made it the odd one out.
                      Rendering the empty slots means every header has the same structure and
                      the names sit on one line whatever each column happens to carry. */}
                  <span className="cmp-grp">{c.group}</span>
                  <span className="cmp-mark">
                    {c.src && !c.markIsWordmark ? (
                      <img
                        src={c.src}
                        alt=""
                        width={c.width}
                        height={c.height}
                        loading="lazy"
                        decoding="async"
                        style={{ maxHeight: markHeight(c), maxWidth: 58 }}
                      />
                    ) : null}
                  </span>
                  <span className="cmp-name">{c.name}</span>
                  <span className="cmp-note">{c.note || '\u00a0'}</span>
                </th>
              ))}
            </tr>
          </thead>
          {comparisonBands.map((band) => (
            <tbody key={band.label}>
              <tr className="cmp-band">
                <th scope="rowgroup">{band.label}</th>
                <td className="cmp-evo" />
                <td colSpan={competitors.length} />
              </tr>
              {band.rows.map((row) => (
                <tr key={row.capability}>
                  <th scope="row">{row.capability}</th>
                  <td className="cmp-evo">
                    <Cell v={row.evo || 'y'} />
                  </td>
                  {competitors.map((c) => (
                    <td key={c.key}>
                      <Cell v={row.cells[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      <div className="cmp-key">
        <span>
          <span className="cmp-y" aria-hidden="true">
            &#10003;
          </span>
          Evidenced
        </span>
        <span>
          <span className="cmp-u" aria-hidden="true">
            &ndash;
          </span>
          Not published by that supplier
        </span>
        <span>Blank: does not offer it</span>
      </div>

      <div className="cmp-foot">
        {comparisonFootnotes.map((f) => (
          <p key={f}>{f}</p>
        ))}
        <p className="source">{comparisonSource}</p>
      </div>

      <div className="cmp-verdicts">
        {comparisonVerdicts.map((v) => (
          <div className={`cmp-verdict ${v.win ? 'cmp-verdict--win' : ''}`} key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
