import { TickIcon } from './Icons';

// Brief 6.6 (brochure page 9). Categories only: no competitor names or logos.
const cols = ['Repairs platforms', 'Repairs software', 'Trades marketplaces', 'Home emergency cover'];
// Y = yes, S = some providers in that category, '' = no
const rows = [
  ['An app for residents', 'Y', 'Y', 'Y', 'Y'],
  ['AI-assisted triage', 'Y', '', '', ''],
  ['Enriched property data', 'Y', 'S', '', ''],
  ['A trades network', 'Y', 'S', 'Y', 'Y'],
  ['Budget certainty', '', '', 'Y', ''],
  ['Carries out the repair itself', '', '', '', ''],
  ['12-month warranty on the work', '', '', '', ''],
  ['24/7 emergency response', '', '', '', ''],
  ['Fully managed, end to end', '', '', '', ''],
];

function Cell({ v }) {
  if (v === 'Y')
    return (
      <span className="tick" role="img" aria-label="Yes">
        <TickIcon />
      </span>
    );
  if (v === 'S')
    return (
      <span className="tick tick--some" role="img" aria-label="Some providers">
        <TickIcon color="currentColor" />
      </span>
    );
  return <span className="visually-hidden">No</span>;
}

export default function ComparisonTable() {
  return (
    <>
      <div className="table-wrap">
        <table className="data compare">
          <caption className="visually-hidden">EVO compared with the main alternatives across nine capabilities</caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              <th scope="col" className="col-evo">
                EVO
              </th>
              {cols.map((c) => (
                <th scope="col" key={c}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([cap, ...vals], i) => (
              <tr key={cap} className={i >= 5 ? 'shaded' : ''}>
                <th scope="row">{cap}</th>
                <td className="col-evo">
                  <Cell v="Y" />
                </td>
                {vals.map((v, j) => (
                  <td key={j}>
                    <Cell v={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="legend">
        <span>
          <span className="tick">
            <TickIcon />
          </span>
          Offered
        </span>
        <span>
          <span className="tick tick--some">
            <TickIcon color="currentColor" />
          </span>
          Offered by some providers in the category
        </span>
        <span>Shaded rows: only EVO delivers these.</span>
      </div>
      <p className="source">Source: EVO competitor analysis, March 2026.</p>
    </>
  );
}
