import MigratePage from '@/components/MigratePage';

export const metadata = { title: 'Investors | EVO', alternates: { canonical: '/investors' } };

export default function InvestorsPage() {
  return <MigratePage title="Investors" crumbs={[{ label: 'Investors' }]} currentUrl="evo-pm.com/investors" />;
}
