import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Tbc from '@/components/Tbc';
import { contact, company } from '@/data/site';

export const metadata = {
  title: 'Contact EVO | Book a portfolio review, pilot or demo',
  description: 'Book a portfolio review, talk about a 12-month pilot or book a demo of EVO.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's look at your portfolio."
        lead="Book a portfolio review, talk about a 12-month pilot or book a demo. Tell us a little about your homes and we will come back to you."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section">
        <div className="container">
          <div className="split split--top split--wide-left">
            <ContactForm />
            <aside className="stack">
              <div className="contact-card">
                <h2 style={{ fontSize: '1.3rem' }}>Talk to Mark</h2>
                <p className="mb-0">
                  <strong style={{ color: '#fff' }}>{contact.sales.name}</strong>
                  <br />
                  {contact.sales.title}
                  <br />
                  <a href={`mailto:${contact.sales.email}`}>{contact.sales.email}</a>
                  <br />
                  Phone: <Tbc>sales phone number</Tbc>
                </p>
              </div>
              <div className="card card--grey">
                <h2 style={{ fontSize: '1.1rem' }}>General enquiries</h2>
                <p>
                  Email: <Tbc>sales@ or hello@evo-pm.com</Tbc>
                </p>
                <p className="mb-0">
                  {company.legalName}
                  <br />
                  {company.address}
                </p>
              </div>
              <div className="card card--grey">
                <h2 style={{ fontSize: '1.1rem' }}>Are you a resident?</h2>
                <p>This form is not to be used for reporting repair or maintenance issues.</p>
                <Link href="/residents" className="text-link">
                  Report a repair
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
