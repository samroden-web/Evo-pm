import Image from 'next/image';
import Link from 'next/link';
import Laptop from './Laptop';

// Brief 6.6: three blocks, labels in one colour.
export const audiences = [
  {
    id: 'living',
    label: 'For residents',
    product: 'EVO Living App',
    href: '/products/living-app',
    lead: 'A repair reported in half a minute, and the resident told what is happening until it is done.',
    points: [
      'Report a problem in under 30 seconds',
      'Real-time job tracking and messaging',
      'Phone, WhatsApp or email for residents who prefer them',
      '24/7 emergency response',
    ],
    img: '/images/app/living-app-home-framed.webp',
    w: 652,
    h: 1271,
    alt: 'EVO Living App home screen with Report a problem and Emergency buttons',
  },
  {
    id: 'dashboard',
    label: 'For landlords and property managers',
    product: 'EVO Dashboard',
    href: '/products/dashboard',
    lead: 'A single place for property data, compliance, repairs and full service history.',
    points: [
      'Real-time visibility on every job',
      'Combined compliance and repairs view',
      'Asset data and enriched property records',
      'Digital billing and audit trail',
    ],
    laptop: true,
    alt: 'The EVO Dashboard showing a property record with details, location map and property attributes',
  },
  {
    id: 'trades',
    label: 'For accredited trades',
    product: 'EVO Trades App',
    href: '/products/trades-app',
    lead: 'Skill-based job assignment with full property context, boosting first-time fix and accountability.',
    points: [
      'Skill-matched job dispatch',
      'Detailed access and service history',
      'Live updates back to residents',
      'A vetted, ISO-accredited network',
    ],
    img: '/images/app/trades-app-home-framed.webp',
    w: 652,
    h: 1271,
    alt: 'EVO Trades App home screen with new, upcoming and completed jobs',
  },
];

export default function Audiences() {
  return (
    <div className="grid-3 swipe-mobile">
      {audiences.map((a) => (
        <article className="card card--shadow" key={a.id} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
            {a.laptop ? (
              <div style={{ width: '100%', maxWidth: 300 }}>
                <Laptop alt={a.alt} sizes="300px" />
              </div>
            ) : (
              <Image src={a.img} alt={a.alt} width={a.w} height={a.h} style={{ maxHeight: 220, width: 'auto' }} sizes="(min-width: 1000px) 30vw, 60vw" />
            )}
          </div>
          <p className="eyebrow">{a.label}</p>
          <h3>{a.product}</h3>
          <p>{a.lead}</p>
          <ul className="tick-list tick-list--compact">
            {a.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mb-0" style={{ marginTop: 'auto' }}>
            <Link href={a.href} className="text-link">
              More about the {a.product}
            </Link>
          </p>
        </article>
      ))}
    </div>
  );
}
