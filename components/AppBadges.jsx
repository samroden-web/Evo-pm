import { apps } from '@/data/site';
import { AppleIcon, PlayStoreIcon } from './Icons';

export default function AppBadges({ app = 'living' }) {
  const a = apps[app];
  const label = app === 'living' ? 'EVO Living' : 'EVO Trades';
  return (
    <div className="app-badges">
      <a className="app-badge" href={a.appStore} target="_blank" rel="noopener noreferrer" aria-label={`Download ${label} on the App Store`}>
        <AppleIcon />
        <span>
          <small>Download on the</small>App Store
        </span>
      </a>
      <a className="app-badge" href={a.googlePlay} target="_blank" rel="noopener noreferrer" aria-label={`Get ${label} on Google Play`}>
        <PlayStoreIcon />
        <span>
          <small>Get it on</small>Google Play
        </span>
      </a>
    </div>
  );
}
