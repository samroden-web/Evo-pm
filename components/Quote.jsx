import Tbc from './Tbc';

// Testimonials not yet cleared for web use (TBC item 4) carry a TBC tag.
//
// photo (Sam, 27 September): "mark doesnt have a profile picture next to his quote". He did
// not, because the founder quote was hand-written into the page as a literal object while his
// photograph lives in data/team.js - so the two could never meet. Rather than paste a path in,
// the quote now takes an optional photo and the page passes it straight from the team record,
// which means it cannot drift out of step with the team grid and it appears the moment the
// photo file lands. A person's face beside their own words is worth the small component change,
// and it is a pattern we will want again.
export default function Quote({ t, large = false, card = false, photo = null, photoAlt = '' }) {
  if (!t) return null;
  return (
    <figure className={`quote ${large ? 'quote--large' : ''} ${card ? 'quote--card' : ''}`}>
      <blockquote>
        <p>{t.quote}</p>
      </blockquote>
      <figcaption className={photo ? 'quote-by quote-by--photo' : 'quote-by'}>
        {/* A plain img, not next/image: it is a 56px circle, so there is nothing to optimise
            and a lot to go wrong. */}
        {photo && (
          <img
            className="quote-by__face"
            src={photo}
            alt={photoAlt || t.name}
            width="56"
            height="56"
            loading="lazy"
            decoding="async"
          />
        )}
        <span className="quote-by__who">
          {t.name}, {t.role}
          {t.cleared === false && <Tbc>clearance for web use</Tbc>}
          {t.attributionTbc && <Tbc>{t.attributionTbc}</Tbc>}
        </span>
      </figcaption>
    </figure>
  );
}
