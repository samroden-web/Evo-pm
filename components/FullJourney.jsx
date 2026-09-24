import { fullJourney } from '@/data/guides';

// Appendix C.3 as a vertical process graphic (replaces the old "EVO Process" diagram).
export default function FullJourney({ twoColumn = false }) {
  return (
    <ol className={`vtimeline ${twoColumn ? 'vtimeline--2col' : ''}`}>
      {fullJourney.map((s, i) => (
        <li key={i}>
          <span className="num" aria-hidden="true">
            {i + 1}
          </span>
          <span className="who">{s.who}</span>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
