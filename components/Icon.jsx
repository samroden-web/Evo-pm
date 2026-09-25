// One icon set for the whole site.
//
// WHY THIS EXISTS. There were two icon files before this one. `Icons.jsx` held interface
// marks (tick, caret, menu, play, app store badges) and `Icons2.jsx` held seven editorial
// marks - and `Icons2` was used on the homepage and nowhere else. Every other page on the
// site rendered exactly three SVGs, which were the header logo and the footer chrome. So
// the problem was never that the icons were badly formatted; on most pages there were none.
//
// RULES, so this stays one system rather than becoming a third set:
//
//   - 24x24 viewBox, 1.75 stroke, round caps and joins, no fills.
//   - `currentColor` throughout, so an icon takes the colour of whatever it sits in and
//     never needs a variant for the orange band or the navy band.
//   - Geometry only. No icon carries a word, a number or a brand mark.
//   - Named by MEANING, not by picture: `warranty`, not `certificate`. When the copy
//     changes, the name usually still fits.
//
// Add an icon by adding one entry to PATHS. Anything that asks for a name which is not
// there renders nothing rather than throwing, because a missing icon must never take a
// page down.

const PATHS = {
  // --- compliance and evidence ---
  shield: <path d="M12 3 4.5 6v5.5c0 4.3 3.1 7.9 7.5 9 4.4-1.1 7.5-4.7 7.5-9V6L12 3Z" />,
  shieldCheck: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.3 3.1 7.9 7.5 9 4.4-1.1 7.5-4.7 7.5-9V6L12 3Z" />
      <path d="m9 11.8 2.1 2.1L15.2 9.8" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6v3H9z" />
      <path d="M15 5.5h2.5v14h-11v-14H9" />
      <path d="M9.5 11.5h5M9.5 15h3.5" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 8.5h3l1.5-2h8l1.5 2h3v10h-17z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4.5v15M7 19.5h10M4 9h16M12 4.5 4 9M12 4.5 20 9" />
      <path d="M4 9 1.8 13.8h4.4zM20 9l-2.2 4.8h4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5V4.5M4 19.5h16" />
      <path d="M8 16V11M12.5 16V7.5M17 16v-3.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  warranty: (
    <>
      <circle cx="12" cy="10" r="5.2" />
      <path d="m9 14.6-1.2 5.4L12 18.3l4.2 1.7-1.2-5.4" />
    </>
  ),
  file: (
    <>
      <path d="M6.5 3.5h7l4.5 4.5v12h-11.5z" />
      <path d="M13.5 3.5V8H18" />
      <path d="M9 13h6M9 16.3h4" />
    </>
  ),

  // --- the trades ---
  wrench: <path d="M15.6 4.4a4.8 4.8 0 0 0-5.8 6.2L4 16.4 6.6 19l5.8-5.8a4.8 4.8 0 0 0 6.2-5.8l-2.8 2.8-2.4-.6-.6-2.4z" />,
  bolt: <path d="M13.5 3 5.5 13.2h5.2L10 21l8.2-10.4H13z" />,
  flame: <path d="M12 3c2.2 3 3.3 5 3.3 6.4 0 1-.5 1.8-1.4 2.3.5-1.8-.3-3.3-1.9-4.6.2 2.4-1 3.6-2.3 5-.9 1-1.7 2-1.7 3.4A5.8 5.8 0 0 0 12 21a5.8 5.8 0 0 0 6-5.5c0-4-3-7.6-6-12.5Z" />,
  droplet: <path d="M12 3.2c3.4 4 5.4 6.8 5.4 9.3A5.4 5.4 0 0 1 12 18a5.4 5.4 0 0 1-5.4-5.5c0-2.5 2-5.3 5.4-9.3Z" />,
  lock: (
    <>
      <path d="M5.8 10.5h12.4v9.2H5.8z" />
      <path d="M8.6 10.5V7.9a3.4 3.4 0 0 1 6.8 0v2.6" />
    </>
  ),
  paint: (
    <>
      <path d="M4 4.5h12v5H4z" />
      <path d="M16 7h3.2v4.2H12v2.6" />
      <path d="M10.4 14.2h3.2v5.6h-3.2z" />
    </>
  ),

  // --- people and places ---
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 9.6v10h12v-10" />
    </>
  ),
  building: (
    <>
      <path d="M5 20V5.5h9V20M14 10h5v10" />
      <path d="M8 9h3M8 12.5h3M8 16h3M16.5 13.5h1M16.5 17h1" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3.2" />
      <path d="M3.8 19.5c0-3.1 2.6-5.2 5.7-5.2s5.7 2.1 5.7 5.2" />
      <path d="M16 6.2a3 3 0 0 1 0 5.9M17.4 14.8c1.8.6 2.8 2.2 2.8 4.7" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 10.5 6.6 7l3.4 2.4h4L17.4 7 21 10.5" />
      <path d="M6.6 7v8.4l5.4 3.6 5.4-3.6V7" />
      <path d="M10 12.4h4" />
    </>
  ),
  van: (
    <>
      <path d="M2.8 6.5h10.4v9.8H2.8zM13.2 9.5h3.6l2.8 3.3v3.5h-6.4" />
      <circle cx="7" cy="18" r="1.9" />
      <circle cx="16.6" cy="18" r="1.9" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c3.8-4.4 5.7-7.5 5.7-9.7A5.7 5.7 0 0 0 12 5.5a5.7 5.7 0 0 0-5.7 5.8c0 2.2 1.9 5.3 5.7 9.7Z" />
      <circle cx="12" cy="11.1" r="2.1" />
    </>
  ),

  // --- money, time, service ---
  wallet: (
    <>
      <path d="M4 7.5h14.5v11H4z" />
      <path d="M4 7.5 15 4.2v3.3" />
      <circle cx="15.4" cy="13" r="1.1" />
    </>
  ),
  calendar: (
    <>
      <path d="M4.5 6.5h15v13h-15z" />
      <path d="M4.5 10.5h15M9 4.5v4M15 4.5v4" />
    </>
  ),
  phone: <path d="M6.2 3.8 9 4.6l1.1 3.6-2 1.6a11 11 0 0 0 5.1 5.1l1.6-2 3.6 1.1.8 2.8a2 2 0 0 1-2 2.1C10.4 19 5 13.6 4.1 5.8a2 2 0 0 1 2.1-2Z" />,
  mail: (
    <>
      <path d="M3.5 6h17v12h-17z" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  chat: <path d="M4 5.5h16v10.2h-9.4L6 19.4v-3.7H4z" />,
  bell: (
    <>
      <path d="M6.6 16.5V11a5.4 5.4 0 0 1 10.8 0v5.5h1.8H4.8z" />
      <path d="M10.3 19.2a1.9 1.9 0 0 0 3.4 0" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 2.8 20h18.4z" />
      <path d="M12 10v4.4M12 17.2v.1" />
    </>
  ),
  star: <path d="m12 4 2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7 1-5.6-4.1-4 5.6-.8z" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6" />
      <path d="m15.2 15.2 4.4 4.4" />
    </>
  ),
  phoneApp: (
    <>
      <path d="M7.5 3h9v18h-9z" />
      <path d="M10.6 5.6h2.8M12 18.2v.1" />
    </>
  ),
  dashboard: (
    <>
      <path d="M3.5 4.5h17v15h-17z" />
      <path d="M3.5 9h17M9 9v10.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="18" cy="18" r="2.3" />
      <path d="M8.3 6H14a3.4 3.4 0 0 1 0 6.8h-4a3.4 3.4 0 0 0 0 6.8h5.7" />
    </>
  ),
  leaf: (
    <>
      <path d="M19.5 4.5c0 8.3-4 12-9 12a5.5 5.5 0 0 1-5.5-5.5c0-4.6 5.3-6.5 14.5-6.5Z" />
      <path d="M4.5 19.5C7 14 11 10.6 16 8.8" />
    </>
  ),
  hardHat: (
    <>
      <path d="M3.5 16.5h17" />
      <path d="M5.5 15.5v-2.8a6.5 6.5 0 0 1 13 0v2.8" />
      <path d="M10 7.2V4.6h4v2.6" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5h6.5a2.5 2.5 0 0 1 2.5 2.5v12a2 2 0 0 0-2-2H4z" />
      <path d="M20 4.5h-6.5A2.5 2.5 0 0 0 11 7v12a2 2 0 0 1 2-2h7z" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M9.7 9.6A2.4 2.4 0 0 1 14.4 10c0 1.6-2.4 2-2.4 3.4M12 16.6v.1" />
    </>
  ),
};

export const iconNames = Object.keys(PATHS);

export default function Icon({ name, size = 24, className = '', title }) {
  const d = PATHS[name];
  // A name that does not exist renders nothing rather than throwing. A typo in an icon
  // name must never take a page down.
  if (!d) return null;
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {d}
    </svg>
  );
}

// The badge is the default way an icon appears above a card heading: an orange-soft disc
// with the icon in orange ink. One treatment everywhere, so a page never looks like two
// designers worked on it.
export function IconBadge({ name, className = '' }) {
  if (!PATHS[name]) return null;
  return (
    <span className={`icon-badge ${className}`}>
      <Icon name={name} size={22} />
    </span>
  );
}
