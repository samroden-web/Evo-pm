import MigratePage from '@/components/MigratePage';

export const metadata = { title: 'Newsletters | EVO', alternates: { canonical: '/insights/newsletters' } };

export default function NewslettersPage() {
  return (
    <MigratePage title="Newsletters" crumbs={[{ href: '/insights', label: 'Insights' }, { label: 'Newsletters' }]} currentUrl="evo-pm.com/newsletters" />
  );
}
