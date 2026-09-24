import MigratePage from '@/components/MigratePage';

export const metadata = { title: 'Partners | EVO', alternates: { canonical: '/partners' } };

export default function PartnersPage() {
  return <MigratePage title="Partners" crumbs={[{ label: 'Partners' }]} currentUrl="evo-pm.com/partners" />;
}
