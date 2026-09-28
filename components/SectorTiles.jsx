import Link from 'next/link';

// HOME-11: tiles for the three audiences, matching the /who-we-help dropdown.
// Six sector pages became three on 24 September 2026 (addendum v2, section 3):
// housing associations and local authorities were near word-for-word identical,
// and private landlords and letting agents were the same pitch told twice.
export const sectors = [
  {
    href: '/who-we-help/housing',
    title: 'Housing associations & councils',
    body: 'Repairs run end to end, with the evidence you need for the consumer standards and Awaab’s Law.',
  },
  {
    href: '/who-we-help/build-to-rent',
    title: 'Build to Rent & institutional PRS',
    body: 'Home Trust, written for newer stock, with a resident experience that supports retention.',
  },
  {
    href: '/who-we-help/landlords-and-agents',
    title: 'Landlords & managing agents',
    body: 'Accredited trades, out-of-hours cover, and one live record the tenant, the agent and the landlord can all see.',
  },
];

export default function SectorTiles() {
  return (
    <div className="sector-tiles swipe-mobile">
      {sectors.map((s) => (
        <Link key={s.href} href={s.href} className="sector-tile">
          <h3>{s.title}</h3>
          <p className="mb-0">{s.body}</p>
          <span className="go">Find out more</span>
        </Link>
      ))}
    </div>
  );
}
