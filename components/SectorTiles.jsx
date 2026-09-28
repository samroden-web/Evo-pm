import Link from 'next/link';
import Illustration from '@/components/Illustration';

// HOME-11: tiles for the three audiences, matching the /who-we-help dropdown.
// Six sector pages became three on 24 September 2026 (addendum v2, section 3):
// housing associations and local authorities were near word-for-word identical,
// and private landlords and letting agents were the same pitch told twice.
//
// EVO's own circular drawings were added on 28 September 2026 with the brand match. This is
// the natural home for them: their site uses exactly these three drawings to head exactly
// these three audiences, so the reader who knows EVO arrives at a picture they recognise. The
// drawings are decorative - the heading beside each one already says who it is for, so
// announcing "illustration of a block of flats" to a screen-reader user adds nothing.
//
// The photography is untouched. Each of these three pages still opens on a real photograph of
// EVO working, with a caption saying what it is: drawings do the qualifying, photographs do
// the proving. That division is EVO's own - their /about/who-we-are runs one drawing and
// twenty-eight real headshots on the same page.
export const sectors = [
  {
    href: '/who-we-help/housing',
    title: 'Housing associations & councils',
    body: 'Repairs run end to end, with the evidence you need for the consumer standards and Awaab’s Law.',
    art: 'evo-housing-association',
  },
  {
    href: '/who-we-help/build-to-rent',
    title: 'Build to Rent & institutional PRS',
    body: 'Home Trust, written for newer stock, with a resident experience that supports retention.',
    art: 'evo-build-to-rent',
  },
  {
    href: '/who-we-help/landlords-and-agents',
    title: 'Landlords & managing agents',
    body: 'Accredited trades, out-of-hours cover, and one live record the tenant, the agent and the landlord can all see.',
    art: 'evo-landlords',
  },
];

export default function SectorTiles() {
  return (
    <div className="sector-tiles swipe-mobile">
      {sectors.map((s) => (
        <Link key={s.href} href={s.href} className="sector-tile sector-tile--art">
          <Illustration name={s.art} size={150} />
          <h3>{s.title}</h3>
          <p className="mb-0">{s.body}</p>
          <span className="go">Find out more</span>
        </Link>
      ))}
    </div>
  );
}
