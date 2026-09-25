import Link from 'next/link';
import PageHero from '@/components/PageHero';
import MailingListForm from '@/components/MailingListForm';
import ClosingCta from '@/components/ClosingCta';
import { newsletters } from '@/data/newsletters';

export const metadata = {
  title: 'The EVO newsletter | EVO',
  description:
    'One email a month since September 2023: what changed in repairs, compliance and regulation, and what it means in practice. Subscribe to the EVO newsletter.',
  alternates: { canonical: '/insights/newsletters' },
};

// A sign-up page, and nothing else. Sam's call, 25 September.
//
// The first version listed all 34 back issues. They could not be linked, because every
// newsletter page on the current site returns a 500 — and a list you cannot click reads
// as broken however carefully the copy explains it. The answer is not a better
// explanation, it is not to list them: the page's job is to get the next issue into
// someone's inbox, and the back catalogue was never doing that job.
//
// The 34 old issue URLs still 301 here (next.config.mjs), so nothing 404s and a saved
// link lands somewhere sensible. data/newsletters.js keeps the record of what was
// published and when, which is where to start if EVO ever recovers the content from
// Mailchimp's campaign archive.

const COVERS = [
  'What actually changed in regulation that month, rather than what was announced',
  'What it means in practice for repairs, compliance and evidence',
  'What we are seeing across the portfolio, including the things that are not working',
];

export default function NewslettersPage() {
  const first = newsletters[0];
  const latest = newsletters[newsletters.length - 1];

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The EVO newsletter."
        lead={`One email a month, and short. We have been sending it since ${first.label} — ${newsletters.length} issues, most recently ${latest.label}.`}
        crumbs={[{ href: '/insights', label: 'Insights' }, { label: 'Newsletter' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ fontSize: '1.5rem' }}>Subscribe</h2>
              <p>You can stop at any point, and we do not pass your address to anyone.</p>
              <MailingListForm cta="Subscribe" />
            </div>

            <div className="card card--grey">
              <p className="eyebrow">What is in it</p>
              <ul className="tick-list mb-0">
                {COVERS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4 mb-0">
            Longer pieces go in{' '}
            <Link href="/insights" className="text-link">
              Insights
            </Link>
            , which is free to read and needs no sign-up.
          </p>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
