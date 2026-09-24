import Image from 'next/image';
import Link from 'next/link';
import PageHero from './PageHero';
import AppBadges from './AppBadges';
import JsonLd from './JsonLd';
import Tbc from './Tbc';
import { SITE_URL } from '@/data/site';

// Rebuilt resident guide (brief 6.7) with HowTo structured data.
export default function GuidePage({ guide, imagePrefix, emergencyPanel = false, children }) {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.intro,
    step: guide.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
      image: `${SITE_URL}/images/guides/${imagePrefix}-${i + 1}.webp`,
    })),
  };
  return (
    <>
      <PageHero
        eyebrow="How-to guide"
        title={guide.title}
        lead={guide.intro}
        crumbs={[{ href: '/residents', label: 'Residents' }, { href: '/how-to-guides', label: 'How-to guides' }, { label: guide.title }]}
      >
        <div className="btn-row">
          <a href={guide.pdf} className="btn btn-secondary">
            Download the PDF version
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <ol className="guide-steps">
            {guide.steps.map((s, i) => (
              <li key={i}>
                <Image
                  src={`/images/guides/${imagePrefix}-${i + 1}.webp`}
                  alt={`EVO Living App screen for step ${i + 1}: ${s.title}`}
                  width={420}
                  height={870}
                  sizes="200px"
                />
                <div>
                  <span className="num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                  {s.tbc && <Tbc>{s.tbc}</Tbc>}
                </div>
              </li>
            ))}
          </ol>

          {emergencyPanel && (
            <div className="callout mt-3">
              <h2 style={{ fontSize: '1.2rem' }}>What counts as an emergency?</h2>
              <p>
                An emergency is a sudden state of danger that needs immediate attention, such as a burst pipe or flooding, a total loss
                of power or heating, your only toilet not working, or a home you cannot secure.
              </p>
              <Link href="/faqs/residents" className="text-link">
                See the full list in the resident FAQs
              </Link>
            </div>
          )}

          {children}

          <div className="grid-2 mt-3">
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.2rem' }}>Cannot use the app?</h2>
              <p className="mb-0">
                Call us on <Tbc>resident phone number</Tbc>. For help using the app, email <Tbc>resident email address</Tbc>.
              </p>
            </div>
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.2rem' }}>Get the EVO Living App</h2>
              <AppBadges app="living" />
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={howTo} />
    </>
  );
}
