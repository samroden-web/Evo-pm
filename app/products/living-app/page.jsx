import Link from 'next/link';
import ProductPage from '@/components/ProductPage';
import AppBadges from '@/components/AppBadges';

export const metadata = {
  title: 'EVO Living App for residents | EVO',
  description: 'Residents report a repair in under 30 seconds, track the job in real time and get 24/7 emergency response with the EVO Living App.',
  alternates: { canonical: '/products/living-app' },
};

export default function LivingAppPage() {
  return (
    <ProductPage id="living" crumb="EVO Living App" extra={<AppBadges app="living" />}>
      <p>
        Residents can also open documents, user guides and FAQs about their home, and see their past and upcoming appointments.
      </p>
      <p>
        <Link href="/how-to-guides/using-the-evo-living-app" className="text-link">
          How to use the EVO Living App
        </Link>
      </p>
      <p>
        <Link href="/how-to-guides/reporting-an-emergency" className="text-link">
          Reporting an emergency
        </Link>
      </p>
    </ProductPage>
  );
}
