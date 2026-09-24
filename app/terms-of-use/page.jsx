import MigratePage from '@/components/MigratePage';

export const metadata = { title: 'Terms of use | EVO', alternates: { canonical: '/terms-of-use' } };

export default function TermsOfUsePage() {
  return <MigratePage title="Terms of use" crumbs={[{ label: 'Terms of use' }]} currentUrl="evo-pm.com/terms-of-use" />;
}
