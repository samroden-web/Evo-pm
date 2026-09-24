import Tbc from './Tbc';

// Testimonials not yet cleared for web use (TBC item 4) carry a TBC tag.
export default function Quote({ t, large = false, card = false }) {
  if (!t) return null;
  return (
    <figure className={`quote ${large ? 'quote--large' : ''} ${card ? 'quote--card' : ''}`}>
      <blockquote>
        <p>{t.quote}</p>
      </blockquote>
      <figcaption>
        {t.name}, {t.role}
        {t.cleared === false && <Tbc>clearance for web use</Tbc>}
        {t.attributionTbc && <Tbc>{t.attributionTbc}</Tbc>}
      </figcaption>
    </figure>
  );
}
