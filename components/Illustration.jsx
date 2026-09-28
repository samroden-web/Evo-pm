import Image from 'next/image';
import { illustrations, ILLUSTRATION_DIR } from '@/data/illustrations';

// EVO's own circular illustrations, from the live evo-pm.com. See data/illustrations.js for
// where they come from, why they are here, and the GLOBAL-09 overrule that allows them.
//
// PAIRS WITH components/Photo.jsx. Both render into the same .brand-circle device, at the same
// diameter, so a drawing and a photograph can sit side by side in a .circle-row and read as one
// family - which is how EVO's own site uses them. The difference is the crop: a photograph is
// cropped to the circle, a drawing is CONTAINED in it, because these are drawn as vignettes
// with orange squares deliberately floating outside the disc and cropping would cut them off.
//
// Decorative by default. Most of these repeat a point the surrounding copy already makes, and
// an illustration of a house next to a heading that says "housing" earns a screen-reader user
// nothing. Pass `decorative={false}` where the drawing is genuinely carrying information, and
// the alt text from the catalogue is used.
export default function Illustration({ name, size = 320, decorative = true, className = '', priority = false }) {
  const art = illustrations[name];
  if (!art) {
    // Loud rather than silent: a typo here would otherwise render an invisible gap.
    throw new Error(
      `Illustration "${name}" is not in data/illustrations.js. Available: ${Object.keys(illustrations).join(', ')}`
    );
  }
  return (
    <div
      className={`brand-circle brand-circle--art ${className}`.trim()}
      style={{ '--circle-size': `${size}px` }}
    >
      <Image
        src={`${ILLUSTRATION_DIR}/${art.file}`}
        alt={decorative ? '' : art.alt}
        aria-hidden={decorative ? 'true' : undefined}
        width={art.width}
        height={art.height}
        sizes={`(max-width: 560px) 45vw, ${size}px`}
        priority={priority}
      />
    </div>
  );
}
