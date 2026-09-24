import Link from 'next/link';
import PageHero from '@/components/PageHero';
import MailingListForm from '@/components/MailingListForm';

export const metadata = {
  title: 'Free Landlords Guide to the Renters Rights Act | EVO',
  description:
    'Sign up to the EVO mailing list for industry news, legislative changes and events, and get a free copy of our Landlords Guide to the Renters Rights Act.',
  alternates: { canonical: '/renters-rights-guide' },
};

// Replaces the old /download-sign-up page (redirected in next.config.mjs).
export default function RentersRightsGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Free guide for landlords"
        title="The Landlords Guide to the Renters Rights Act."
        lead="Sign up to our mailing list to stay up to date with industry news, legislative changes, events and comment, and receive a free copy of our Landlords Guide to the Renters Rights Act. You can unsubscribe at any time."
        crumbs={[{ href: '/who-we-help/landlords-and-agents', label: 'Landlords & managing agents' }, { label: 'Renters Rights Act guide' }]}
      />
      <section className="section">
        <div className="container">
          <div className="split split--top split--wide-left">
            <div className="card card--shadow">
              <h2 style={{ fontSize: '1.4rem' }}>Sign up to our mailing list</h2>
              <MailingListForm />
            </div>
            <aside className="stack">
              <div className="card card--grey">
                <h2 style={{ fontSize: '1.15rem' }}>Want the headlines first?</h2>
                <p>Read our article on what the Renters Rights Act means for landlords and how to prepare.</p>
                <Link href="/insights/the-renters-rights-act-what-uk-landlords-need-to-know-and-how-to-prepare" className="text-link">
                  The Renters Rights Act: what UK landlords need to know
                </Link>
              </div>
              <div className="card card--grey">
                <h2 style={{ fontSize: '1.15rem' }}>Repairs and compliance, taken off your hands</h2>
                <p>See how EVO works for private landlords, from one fixed monthly price per home.</p>
                <Link href="/who-we-help/landlords-and-agents" className="text-link">
                  EVO for private landlords
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
