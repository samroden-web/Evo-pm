import Link from 'next/link';
import Illustration from '@/components/Illustration';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
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
              {/* Sam, 28 September: "take marks details off. they should use the generic routes
                  to report things. make it easier upfront to distinguish if its a resident, or
                  something else."
                  Mark's direct line and personal address are gone - a named individual at the top
                  of a contact page collects everything, including the repair reports this page
                  explicitly is not for, and it does not scale past him. What replaces it is the
                  question the page should have asked first: which of the two are you? Residents
                  go one way, everybody else the other, before they reach the form. */}
              <div className="contact-card">
                <h2 style={{ fontSize: '1.3rem' }}>Which are you?</h2>
                <p>
                  <strong style={{ color: '#fff' }}>A resident with a repair?</strong>
                  <br />
                  Report it in the EVO Living App, or email{' '}
                  <a href={`mailto:${contact.residentEmail}`}>{contact.residentEmail}</a>. Do not use the form on this
                  page. It does not reach the repairs team.
                </p>
                <p className="mb-0">
                  <strong style={{ color: '#fff' }}>A landlord, agent or supplier?</strong>
                  <br />
                  The form is for you. Or email <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>, or
                  call <a href="tel:+442086919293">{contact.salesPhone}</a>.
                </p>
              </div>
              {/* Their own drawing of two people at a laptop, under the "which are you?"
                  card. A contact page is the one page where every visitor has already
                  decided to talk to somebody, so nothing here is a claim under scrutiny -
                  and a page that is otherwise addresses and phone numbers can carry it. */}
              <Illustration name="evo-team-group" size={190} className="section-art" />
              {/* All of this was TBC until EVO's own company-information page was migrated
                  on 25 September 2026. That page is the authority on it. */}
              <div className="card card--grey">
                <h2 style={{ fontSize: '1.1rem' }}>General enquiries</h2>
                <p>
                  {/* Sam, 27 September: hello@ for normal comms, helpdesk@ for repairs, worded
                      the way evo-pm.com/contact does it today. Saying which is which on the page
                      is the point - two addresses with no explanation is worse than one. */}
                  General enquiries: <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
                  <br />
                  Phone: <a href="tel:+442086919293">{contact.salesPhone}</a>
                  <br />
                  WhatsApp: {contact.whatsappNumber}
                  <br />
                  SMS: {contact.smsNumber}
                </p>
                <p className="small muted">
                  Calls to and from our offices may be recorded for quality and training purposes.
                </p>
                <p className="mb-0">
                  {company.legalName}
                  <br />
                  {company.address}
                  <br />
                  <span className="muted">Head office, visits by appointment only.</span>
                  <br />
                  <span className="muted">Registered office: {company.registeredOffice}.</span>
                </p>
              </div>
              {/* The "Are you a resident?" card that was here said the same thing as the card at
                  the top of this column, two boxes apart. One place, at the top, where the
                  question is actually asked. */}
              <div className="card card--grey">
                <h2 style={{ fontSize: '1.1rem' }}>Residents</h2>
                <p>Everything about reporting a repair, the app, and what happens next.</p>
                <Link href="/residents" className="text-link">
                  Go to the residents page
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
