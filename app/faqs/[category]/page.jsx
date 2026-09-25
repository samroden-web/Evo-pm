import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Tbc from '@/components/Tbc';
import Blocks from '@/components/Blocks';
import JsonLd, { faqJsonLd } from '@/components/JsonLd';
import { faqCategories, faqs, faqsPendingMigration } from '@/data/faqs';
import { contact } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return faqCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = faqCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `FAQs: ${cat.label} | EVO`,
    description: `Answers to common questions from ${cat.label.toLowerCase()} about EVO: the repairs service, the apps, how jobs are handled and what is covered.`,
    alternates: { canonical: `/faqs/${category}` },
  };
}

function ContactLine() {
  return (
    <p>
      Phone: {contact.residentPhone || <Tbc>resident phone number</Tbc>}. Email:{' '}
      <a href={`mailto:${contact.residentEmail}`}>{contact.residentEmail}</a>{' '}
      {!contact.residentEmailConfirmed && <Tbc>helpdesk@ or living@evo-pm.com</Tbc>}
    </p>
  );
}

export default async function FaqPage({ params }) {
  const { category } = await params;
  const cat = faqCategories.find((c) => c.slug === category);
  if (!cat) notFound();
  const items = faqs[category] || [];
  const pending = faqsPendingMigration.includes(category);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title={`Frequently asked questions: ${cat.label.toLowerCase()}`}
        crumbs={[{ label: 'FAQs' }, { label: cat.label }]}
      />
      <section className="section">
        <div className="container">
          <div className="split split--top split--wide-right">
            <nav aria-label="FAQ categories" className="faq-nav">
              <ul className="tag-list" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                {faqCategories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/faqs/${c.slug}`}
                      className="tag"
                      aria-current={c.slug === category ? 'page' : undefined}
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              {pending && (
                <Tbc block>{`Content to be migrated from the current site (evo-pm.com/faqs/${category})`}</Tbc>
              )}
              {items.length > 0 && (
                <div className="accordion">
                  {items.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <div className="accordion__body">
                        {/* Short answers are a single string. The longer ones migrated from the
                            current site carry a `body` block array instead, rendered the same way
                            article and legal text is. */}
                        {f.a && <p>{f.a}</p>}
                        {f.body && <Blocks body={f.body} headingLevel={3} />}
                        {f.list && (
                          <ul className="tick-list tick-list--compact">
                            {f.list.map((l) => (
                              <li key={l}>{l}</li>
                            ))}
                          </ul>
                        )}
                        {f.contactLine && <ContactLine />}
                        {f.tbc && (
                          <p>
                            <Tbc>{f.tbc}</Tbc>
                          </p>
                        )}
                        {f.link &&
                          (f.link.external ? (
                            <a href={f.link.href} className="text-link" target="_blank" rel="noopener noreferrer">
                              {f.link.label} (opens in a new tab)
                            </a>
                          ) : (
                            <Link href={f.link.href} className="text-link">
                              {f.link.label}
                            </Link>
                          ))}
                      </div>
                    </details>
                  ))}
                </div>
              )}
              {category === 'residents' && (
                <div className="note mt-2">
                  Helpdesk hours: {contact.helpdeskHours || <Tbc>Monday to Friday, 8am or 9am to 5pm</Tbc>}.
                  Emergencies: 24 hours a day.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {items.length > 0 && <JsonLd data={faqJsonLd(items)} />}
    </>
  );
}
