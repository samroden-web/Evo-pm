import MigratePage from '@/components/MigratePage';

export const metadata = { title: 'Careers | EVO', alternates: { canonical: '/careers' } };

export default function CareersPage() {
  return <MigratePage title="Careers" crumbs={[{ label: 'Careers' }]} currentUrl="evo-pm.com/careers" />;
}
