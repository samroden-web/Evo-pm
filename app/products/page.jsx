import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'EVO products: Living App, Dashboard and Trades App | EVO',
  description: 'The technology EVO uses to deliver repairs: the EVO Living App for residents, the EVO Dashboard for landlords and the EVO Trades App for trades.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our technology"
        title="One platform, built for the three people a repair involves."
        lead="We own our technology. It is how we deliver a fully managed repairs service, not what we sell on its own."
        crumbs={[{ label: 'Products' }]}
      />
      <section className="section">
        <div className="container">
          <Audiences />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
