import Image from 'next/image';
import Illustration from '@/components/Illustration';

// A drawing and a photograph, side by side, in the same circle at the same diameter.
//
// Sam, 28 September 2026: "if we can mix real people and cartoons on the website, that would
// be good." This is the mechanism, and the idea is EVO's own rather than anything invented
// here. A sweep of the live evo-pm.com found 58 elements at a 100px border radius - by a wide
// margin the most common shape on the site. Every team headshot is a 156px circle; every
// illustration is a circular vignette. The circle is the brand device, so a drawing and a
// photograph put in the same circle at the same size stop looking like two design systems
// arguing and start looking like one.
//
// WHAT EACH SIDE IS FOR, AND WHY IT IS NOT DECORATION. The drawing carries the situation -
// the kind of place, the kind of reader. The photograph carries the evidence that EVO turns
// up to it. Put next to each other they make an argument that neither makes alone: this is
// your stock, and these are the actual people who arrive at it. That is why the photograph
// keeps its caption and real alt text while the drawing is decorative.
//
// The photograph is CROPPED to the circle and the drawing is CONTAINED in it. See
// globals.css: these vignettes have orange squares floating outside the disc, and cropping
// one would cut them off.
export default function MixedPair({ art, photo, photoAlt, photoWidth, photoHeight, caption, size = 240 }) {
  // The caption sits OUTSIDE the flex row rather than in it as a full-width item. The
  // obvious version - `flex: 1 0 100%` on the caption - does not work, and the reason is
  // worth knowing: a flex item's hypothetical main size is its basis clamped by max-width,
  // so `flex-basis: 100%` with `max-width: 52ch` resolves to 52ch, which fits beside two
  // 240px circles inside a 1200px container. It sat as a third column, and no amount of
  // extra specificity fixed it because specificity was never the problem.
  return (
    <div className="mixed-pair">
      <div className="circle-row mixed-pair__row">
        <Illustration name={art} size={size} />
        <figure className="brand-circle brand-circle--photo" style={{ '--circle-size': `${size}px` }}>
          <Image
            src={photo}
            alt={photoAlt}
            width={photoWidth}
            height={photoHeight}
            sizes={`(max-width: 560px) 45vw, ${size}px`}
          />
        </figure>
      </div>
      {caption && <p className="mixed-pair__caption">{caption}</p>}
    </div>
  );
}
