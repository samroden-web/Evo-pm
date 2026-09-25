// Renders a body written as an array of blocks. Used by insights articles, the legal
// pages and the longer FAQ answers, so all three read the same and there is one
// renderer to fix rather than three.
//
// Block format:
//   '## '       h2 (or h3, if headingLevel is 3)
//   '### '      h3
//   '- '        bullet          consecutive bullets group into one list
//   '1. '       numbered        consecutive numbers group into one list
//   '| a | b |' table row       consecutive rows group into one table, first row is the head
//   anything else               paragraph
//
// Inline **bold** and *italic* are rendered. Bare URLs and email addresses are linked,
// because the legal pages quote them as plain text and a privacy notice that tells you
// to email someone should let you click it.

const URL_OR_EMAIL = /(https?:\/\/[^\s)<>,]+[^\s).,;:<>]|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

function autolink(text, keyPrefix) {
  return String(text)
    .split(URL_OR_EMAIL)
    .filter((p) => p !== '')
    .map((p, i) => {
      const k = `${keyPrefix}-a${i}`;
      if (/^https?:\/\//.test(p)) {
        return (
          <a key={k} href={p} target="_blank" rel="noopener noreferrer">
            {p.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </a>
        );
      }
      if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(p)) {
        return (
          <a key={k} href={`mailto:${p}`}>
            {p}
          </a>
        );
      }
      return <span key={k}>{p}</span>;
    });
}

export function inline(text, keyPrefix) {
  // Split on **bold** and *italic* without pulling in a markdown dependency.
  const parts = String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.filter(Boolean).map((p, i) => {
    const k = `${keyPrefix}-${i}`;
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={k}>{autolink(p.slice(2, -2), k)}</strong>;
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <em key={k}>{autolink(p.slice(1, -1), k)}</em>;
    return autolink(p, k);
  });
}

const isBullet = (b) => /^- /.test(b);
const isNumber = (b) => /^\d+\.\s/.test(b);
const isRow = (b) => /^\|.*\|\s*$/.test(b);
const isDivider = (b) => /^\|[\s|:-]+\|\s*$/.test(b);
const cells = (row) =>
  row
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((c) => c.trim());

export default function Blocks({ body, headingLevel = 2 }) {
  if (!body || !body.length) return null;
  const H2 = headingLevel === 3 ? 'h3' : 'h2';
  const H3 = headingLevel === 3 ? 'h4' : 'h3';
  const out = [];
  let i = 0;
  while (i < body.length) {
    const b = body[i];

    if (isBullet(b)) {
      const items = [];
      const start = i;
      while (i < body.length && isBullet(body[i])) items.push(body[i++].slice(2));
      out.push(
        <ul className="tick-list" key={`ul-${start}`}>
          {items.map((t, n) => (
            <li key={n}>{inline(t, `b${start}-${n}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (isNumber(b)) {
      const items = [];
      const start = i;
      while (i < body.length && isNumber(body[i])) items.push(body[i++].replace(/^\d+\.\s/, ''));
      out.push(
        <ol key={`ol-${start}`}>
          {items.map((t, n) => (
            <li key={n}>{inline(t, `n${start}-${n}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (isRow(b)) {
      const rows = [];
      const start = i;
      while (i < body.length && isRow(body[i])) {
        if (!isDivider(body[i])) rows.push(cells(body[i]));
        i++;
      }
      if (rows.length) {
        const [head, ...rest] = rows;
        out.push(
          <div className="table-wrap" key={`tb-${start}`}>
            <table>
              <thead>
                <tr>
                  {head.map((c, n) => (
                    <th key={n}>{inline(c, `th${start}-${n}`)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rest.map((r, rn) => (
                  <tr key={rn}>
                    {r.map((c, n) => (
                      <td key={n}>{inline(c, `td${start}-${rn}-${n}`)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (b.startsWith('### ')) {
      out.push(<H3 key={i}>{inline(b.slice(4), `h3${i}`)}</H3>);
    } else if (b.startsWith('## ')) {
      out.push(<H2 key={i}>{inline(b.slice(3), `h2${i}`)}</H2>);
    } else if (b.trim() !== '') {
      out.push(<p key={i}>{inline(b, `p${i}`)}</p>);
    }
    i++;
  }
  return out;
}
