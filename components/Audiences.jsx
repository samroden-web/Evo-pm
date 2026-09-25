import Image from 'next/image';
import Link from 'next/link';
import Laptop from './Laptop';

// Brief 6.6: three blocks, labels in one colour.
export const audiences = [
  {
    id: 'living',
    label: 'For residents',
    product: 'EVO Living App',
    anchor: 'living-app',
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
    more: 'Residents can also open documents, user guides and FAQs about their home, and see their past and upcoming appointments.',
    links: [
      { href: '/residents', label: 'The residents hub' },
      { href: '/how-to-guides/using-the-evo-living-app', label: 'How to use the EVO Living App' },
    ],
  },
  {
    id: 'dashboard',
    label: 'For landlords and property managers',
    product: 'EVO Dashboard',
    anchor: 'dashboard',
    lead: 'A single place for property data, compliance, repairs and full service history.',
    points: [
      'Real-time visibility on every job',
      'Combined compliance and repairs view',
      'Asset data and enriched property records',
      'Digital billing and audit trail',
    ],
    laptop: true,
    alt: 'The EVO Dashboard showing a property record with details, location map and property attributes',
    more: 'Clients log in to the Dashboard at app.evo-pm.com, where it is labelled MARS. It holds the property record, the compliance position and the full service history alongside the live jobs.',
    links: [{ href: '/compliance', label: 'What the compliance view covers' }],
  },
  {
    id: 'trades',
    label: 'For accredited trades',
    product: 'EVO Trades App',
    anchor: 'trades-app',
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
    more: 'Jobs are offered only into the hours a firm has made available, in their area and for their trade, and arrive with the access details and the service history attached.',
    links: [{ href: '/trades', label: 'Join the trades network' }],
  },
];

export default function Audiences() {
  return (
    <div className="grid-3 swipe-mobile">
      {audiences.map((a) => (
        <article className="card card--shadow" id={a.anchor} key={a.id} style={{ display: 'flex', flexDirection: 'column' }}>
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
          {a.more && <p>{a.more}</p>}
          <p className="mb-0" style={{ marginTop: 'auto' }}>
            {a.links.map((l) => (
              <Link key={l.href} href={l.href} className="text-link" style={{ display: 'block' }}>
                {l.label}
              </Link>
            ))}
          </p>
        </article>
      ))}
    </div>
  );
}
