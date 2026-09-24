import ProductPage from '@/components/ProductPage';
import AppBadges from '@/components/AppBadges';

export const metadata = {
  title: 'EVO Trades App for accredited trades | EVO',
  description: 'Skill-matched job dispatch with full property context, live updates to residents and completion evidence, in the EVO Trades App.',
  alternates: { canonical: '/products/trades-app' },
};

export default function TradesAppPage() {
  return (
    <ProductPage id="trades" crumb="EVO Trades App" extra={<AppBadges app="trades" />}>
      <p>
        Tradespeople accept jobs in the app, send arrival updates to the resident on the day, and add completion notes, photos and
        video when the job is done, so there is a clear record of the work.
      </p>
      <p>
        We work with around 100 vetted contractors, mostly small regional firms who know their area. Each one is checked for insurance,
        accreditation and competence before their first job.
      </p>
    </ProductPage>
  );
}
