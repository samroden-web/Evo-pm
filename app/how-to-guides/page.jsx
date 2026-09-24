import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AppBadges from '@/components/AppBadges';
import { livingAppGuide, emergencyGuide } from '@/data/guides';

export const metadata = {
  title: 'How-to guides | EVO',
  description: 'Step-by-step guides to the EVO Living App: reporting a repair, booking appointments and reporting an emergency.',
  alternates: { canonical: '/how-to-guides' },
};

// Kept at /how-to-guides because the app and the PDF guides link here.
export default function HowToGuidesPage() {
  const guides = [livingAppGuide, emergencyGuide];
  return (
    <>
      <PageHero
        eyebrow="Residents"
        title="How-to guides"
        lead="Step-by-step guides to getting repairs done with the EVO Living App."
        crumbs={[{ href: '/residents', label: 'Residents' }, { label: 'How-to guides' }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {guides.map((g) => (
              <div className="card card--shadow" key={g.slug}>
                <h2 style={{ fontSize: '1.4rem' }}>{g.title}</h2>
                <p>{g.intro}</p>
                <div className="btn-row" style={{ marginTop: 12 }}>
                  <Link href={`/how-to-guides/${g.slug}`} className="btn btn-primary btn-small">
                    Read the guide
                  </Link>
                  <a href={g.pdf} className="btn btn-secondary btn-small">
                    Download the PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Future guides (landlord dashboard guide, trades app guide) stay hidden until the content exists. */}
          <div className="card card--grey mt-3">
            <h2 style={{ fontSize: '1.3rem' }}>Get the EVO Living App</h2>
            <AppBadges app="living" />
          </div>
        </div>
      </section>
    </>
  );
}
