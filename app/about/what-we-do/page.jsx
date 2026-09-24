import PageHero from '@/components/PageHero';
import SolutionSection from '@/components/SolutionSection';
import Photo from '@/components/Photo';
import PlansTeaser from '@/components/PlansTeaser';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'What we do | EVO',
  description:
    'EVO brings the technology, the helpdesk, contractor coordination and the repairs together in one service, for one fixed monthly price per home.',
  alternates: { canonical: '/about/what-we-do' },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What you are buying"
        title="We do not just manage your repairs. We deliver them."
        lead="A software provider leaves you still needing the contractors and the team to run it. A traditional contractor gives you a rate card and no total until the year ends. A managing agent adds a margin to every invoice. EVO brings the technology, the helpdesk, contractor coordination and the repairs together in one service, and takes responsibility for delivering it."
        crumbs={[{ href: '/about', label: 'About' }, { label: 'What we do' }]}
      />
      <SolutionSection />
      <section className="section section--grey" aria-labelledby="team-behind">
        <div className="container">
          <div className="split">
            <div>
              <h2 id="team-behind">Technology, with a hands-on team behind it.</h2>
              <p className="lead">
                Our technology gives you clear visibility of every job, every property and every result, and makes it easy for
                residents to report a repair and stay informed. Behind it is a hands-on team, with a dedicated account manager and
                day-to-day contractor coordination.
              </p>
            </div>
            <Photo
              src="/images/photos/evo-operative-radiator-repair.webp"
              alt="An EVO operative repairing a radiator"
              caption="An EVO operative at work."
              width={1074}
              height={807}
            />
          </div>
        </div>
      </section>
      <PlansTeaser grey={false} />
      <ClosingCta />
    </>
  );
}
