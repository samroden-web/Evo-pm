import MigratePage from '@/components/MigratePage';

export const metadata = { title: 'Privacy policy | EVO', alternates: { canonical: '/privacy-policy' } };

export default function PrivacyPolicyPage() {
  return <MigratePage title="Privacy policy" crumbs={[{ label: 'Privacy policy' }]} currentUrl="evo-pm.com/privacy-policy" />;
}
