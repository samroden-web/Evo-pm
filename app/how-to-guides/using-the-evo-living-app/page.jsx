import GuidePage from '@/components/GuidePage';
import { livingAppGuide } from '@/data/guides';

export const metadata = {
  title: 'How to use the EVO Living App | EVO',
  description: 'Report a problem, choose your appointment, see who is coming and track the repair in the EVO Living App, step by step.',
  alternates: { canonical: '/how-to-guides/using-the-evo-living-app' },
};

export default function LivingAppGuidePage() {
  return (
    <GuidePage guide={livingAppGuide} imagePrefix="living-app-step">
      <div className="card mt-3">
        <h2 style={{ fontSize: '1.2rem' }}>Also in the app</h2>
        <ul className="tick-list mb-0">
          {livingAppGuide.alsoInApp.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </GuidePage>
  );
}
