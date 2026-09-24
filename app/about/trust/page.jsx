import PageHero from '@/components/PageHero';
import TrustBands from '@/components/TrustBands';
import Quote from '@/components/Quote';
import ClosingCta from '@/components/ClosingCta';
import { testimonials } from '@/data/testimonials';

export const metadata = {
  title: 'Clients, frameworks and accreditations | EVO',
  description:
    'EVO works with local authority housing companies, housing associations, charities and institutional landlords, and is on the main public-sector frameworks for repairs and maintenance.',
  alternates: { canonical: '/about/trust' },
};

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust and credibility"
        title="Clients, frameworks and accreditations."
        lead="We work with local authority housing companies, housing associations, charities and institutional landlords, and we are on the main public-sector frameworks for repairs and maintenance."
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Trust and accreditations' }]}
      />
      <TrustBands />
      <section className="section section--grey" aria-label="Testimonials">
        <div className="container">
          <div className="grid-2 swipe-mobile">
            <Quote t={testimonials.richardSmith} card />
            <Quote t={testimonials.michaelWestbrook} card />
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
