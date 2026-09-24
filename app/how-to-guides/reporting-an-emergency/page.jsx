import GuidePage from '@/components/GuidePage';
import { emergencyGuide } from '@/data/guides';

export const metadata = {
  title: 'Reporting an emergency in the EVO Living App | EVO',
  description: 'How to report a property emergency in the EVO Living App. Emergency requests are logged and approved straight away, 24 hours a day.',
  alternates: { canonical: '/how-to-guides/reporting-an-emergency' },
};

export default function EmergencyGuidePage() {
  return <GuidePage guide={emergencyGuide} imagePrefix="emergency-step" emergencyPanel />;
}
