import Link from 'next/link';
import PageHero from '@/components/PageHero';
import MailingListForm from '@/components/MailingListForm';
import ClosingCta from '@/components/ClosingCta';
import Tbc from '@/components/Tbc';
import { newsletters, newslettersByYear } from '@/data/newsletters';

export const metadata = {
  title: 'Newsletter archive | EVO',
  description:
    'Every issue of the EVO newsletter since September 2023 — what changed in repairs, compliance and regulation, and what EVO has been doing about it.',
  alternates: { canonical: '/insights/newsletters' },
};

// The 34 old newsletter URLs 301 here (see next.config.mjs), because every one of them
// returns a 500 on the current site. Listing the issues keeps the record intact and
// gives those redirects somewhere real to land, rather than 34 dead ends.
export default function NewslettersPage() {
  const years = newslettersByYear();
  const restored = newsletters.filter((n) => n.restored).length;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The newsletter archive."
        lead={`${newsletters.length} issues since September 2023. What changed in repairs, compliance and regulation that month, and what we did about it.`}
        crumbs={[{ href: '/insights', label: 'Insights' }, { label: 'Newsletters' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ fontSize: '1.5rem' }}>Get the next one</h2>
              <p>
                Once a month, and short. No more than the issues above suggest, and you can stop at any point.
              </p>
              <MailingListForm cta="Subscribe" />
            </div>
            <div className="card card--grey">
              <p className="eyebrow">Reading the back issues</p>
              <p className="mb-0">
                We are restoring the archive. Each issue is listed below with its date, and the back issues will become readable
                again as they are recovered &mdash; the links you may already have saved will keep working either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          {years.map(({ year, items }) => (
            <div key={year} className="mt-3">
              <h2 className="ev3-team-head">{year}</h2>
              <ul className="ev3-issues">
                {items.map((n) => (
                  <li key={n.slug}>
                    <span className="ev3-issue-n">{n.n}</span>
                    {n.restored ? (
                      <Link href={`/insights/newsletters/${n.slug}`} className="text-link">
                        {n.label}
                      </Link>
                    ) : (
                      <span>{n.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {restored === 0 && (
            <Tbc block>
              Newsletter content to recover. All 34 issue pages on the current site return a 500 error, so there was nothing to
              migrate. The copy will still be in the platform the newsletters were emailed from &mdash; add it to
              data/newsletters.js and each issue becomes a page of its own.
            </Tbc>
          )}

          <p className="mt-3 mb-0">
            <Link href="/insights" className="text-link">
              All insights
            </Link>
          </p>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
