import PageHero from '@/components/PageHero';
import Quote from '@/components/Quote';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'Why we do it | EVO',
  description: 'Why EVO exists: residents deserve a repair they can get done easily, and landlords deserve to know what repairs really cost.',
  alternates: { canonical: '/about/why-we-do-it' },
};

// Brief HOME "Remove from the homepage": the old "UK housing sector is in crisis" copy moves here, softened.
export default function WhyWeDoItPage() {
  return (
    <>
      <PageHero
        eyebrow="Why we do it"
        title="Everyone deserves a safe, well-kept home."
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Why we do it' }]}
      />
      <section className="section">
        <div className="container container--narrow prose">
          <p className="lead">
            Housing providers are under pressure from rising costs and tighter regulation, and residents feel it most when a repair is
            slow or goes wrong. We believe all residents deserve to live in good quality, safe and secure homes.
          </p>
          <p>
            For too long, repairs have been run through disconnected processes, driven mainly by emails and phone calls. That makes the
            experience slow and frustrating for residents, landlords and tradespeople alike.
          </p>
          <p>
            Most residents and landlords want the same thing: a repair done well, and done on time. What usually gets in the way is
            communication. Our aim is a simple, convenient and transparent repairs process, with meaningful and regular communication to
            everyone about the status and progress of every job.
          </p>
          <div className="callout mt-2 mb-0">
            <p>
              At EVO we are passionate about rebalancing these relationships and dealing with the cause of the issue rather than trying
              to deal with the symptoms by throwing more people, resources or money at the problem.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--grey">
        <div className="container container--narrow">
          <Quote
            large
            t={{
              quote:
                'I spent twenty-five years in UK property maintenance and kept seeing the same gap. Add up the helpdesk, the chasing, the compliance reporting and the mark-up on every job, and repairs were costing landlords close to double what they thought. Residents could not get a repair done easily, and good contractors spent more time quoting than working. One broken system, and nothing built to fix it. So we built EVO.',
              name: 'Mark Iandoli',
              role: 'Co-founder and COO',
            }}
          />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
