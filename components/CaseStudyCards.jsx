import Link from 'next/link';

// HOME-09
export const caseStudies = [
  {
    id: 'ids',
    href: '/case-studies#ids',
    client: 'Industrial Dwellings Society (IDS)',
    summary: 'Repair resolution times halved. 95% first-time fix. 1,414 homes, from a 25% pilot.',
    stat: { value: 'Halved', label: 'Repair resolution times' },
    // ids-resident-engagement-day is 1000x1333, PORTRAIT, and this card is a landscape
    // box - half the picture was being cropped away. This one is landscape and is also an
    // IDS photograph, so the card still shows the right client.
    image: '/images/photos/ids-evo-housing-executive-awards-2025.webp',
    alt: 'The IDS and EVO teams with their award at the Housing Executive Awards 2025',
  },
  {
    id: 'bd-reside',
    href: '/case-studies#bd-reside',
    client: 'B&D Reside, Barking and Dagenham',
    summary: '96% first-time fix in the pilot. From 380 pilot homes to more than 2,500 contracted.',
    stat: { value: '96%', label: 'First-time fix in the pilot' },
    image: '/images/photos/evo-bd-reside-team.webp',
    alt: 'The EVO and B&D Reside teams together outside',
  },
];

export default function CaseStudyCards({ lead = 'ids' }) {
  const ordered = lead === 'bd-reside' ? [...caseStudies].reverse() : caseStudies;
  return (
    <div className="grid-2 swipe-mobile">
      {ordered.map((c) => (
        <Link key={c.id} href={c.href} className="card card-link card--shadow">
          <span className="eyebrow">Case study</span>
          <h3>{c.client}</h3>
          <span className="stat">{c.stat.value}</span>
          <span className="stat-label">{c.stat.label}</span>
          <p>{c.summary}</p>
          <span className="text-link">Read the case study</span>
        </Link>
      ))}
    </div>
  );
}
