import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Tbc from '@/components/Tbc';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'Who we are | EVO',
  description: 'The people behind EVO: our board, operations team, helpdesk and developers.',
  alternates: { canonical: '/about/who-we-are' },
};

// Board as listed on the current site. Brief 6.12: EVO will send an updated team list.
// Replace or extend this list when it arrives (add photos to /public/images/team/).
const board = [
  { name: 'Steve Norris', role: 'Chairman' },
  { name: 'Steven Rae', role: 'CEO and CTO' },
  { name: 'Mark Iandoli', role: 'Co-founder and COO' },
  { name: 'Craig Calder', role: 'Commercial Director' },
  { name: 'Kate Davies', role: 'Non-Executive Director' },
  { name: 'Tim Marchant', role: 'Investor Director' },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="The people behind EVO."
        lead="Property professionals, a hands-on operations team and the developers who build our technology."
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Who we are' }]}
      />
      <section className="section">
        <div className="container">
          <Photo
            src="/images/photos/evo-operations-team.webp"
            alt="The EVO operations team standing together in the office"
            caption="The EVO operations team."
            width={1600}
            height={945}
            sizes="(min-width: 1200px) 1160px, 100vw"
          />
          <h2 className="mt-4">Board</h2>
          <div className="grid-3 mt-2 grid-2-mobile">
            {board.map((p) => (
              <div className="card card--grey" key={p.name}>
                <h3 className="mb-0">{p.name}</h3>
                <p className="muted mb-0">{p.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <Tbc block>Updated team list, bios and photos (EVO to send). Development and helpdesk teams to follow.</Tbc>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
