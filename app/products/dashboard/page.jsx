import ProductPage from '@/components/ProductPage';
import Tbc from '@/components/Tbc';

export const metadata = {
  title: 'EVO Dashboard for landlords and property managers | EVO',
  description:
    'A single place for property data, compliance, repairs and full service history, with real-time visibility on every job and a digital audit trail.',
  alternates: { canonical: '/products/dashboard' },
};

export default function DashboardPage() {
  return (
    <ProductPage id="dashboard" crumb="EVO Dashboard">
      <ul className="tick-list">
        <li>Reminders for upcoming safety inspections and routine servicing</li>
        <li>Every job logged with completion notes and photos</li>
        <li>Gas safety and electrical testing records stored in one place</li>
        <li>12-month warranty on every job</li>
      </ul>
      <p>
        <Tbc>current dashboard screenshots: compliance view, and a completed job with its evidence</Tbc>
      </p>
    </ProductPage>
  );
}
