import Link from 'next/link';
import { sectors } from './SectorTiles';

// Homepage, section 10. A thin strip rather than a section: the sector pages are in
// the nav now, so this exists to qualify the reader, not to route them.
export default function WhoStrip() {
  return (
    <section className="ev2-whostrip" aria-label="Who we help">
      <div className="container">
        <span className="ev2-whostrip-t">Built for landlords with 100 to 5,000 homes.</span>
        <span className="ev2-whostrip-links">
          {sectors.map((s) => (
            <Link key={s.href} href={s.href}>
              {s.title}
            </Link>
          ))}
        </span>
      </div>
    </section>
  );
}
