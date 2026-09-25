// Line icons for the homepage problem-and-answer strip. Drawn inline rather than
// loaded, so they inherit currentColor and cost nothing.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function EvidenceIcon() {
  return (
    <svg {...base}>
      <path d="M4 7.6 12 3.6l8 4L12 11.6 4 7.6Z" />
      <path d="M4 12.6 12 16.6l8-4" />
      <path d="m9.2 19.4 1.9 1.9 3.7-3.9" />
    </svg>
  );
}

export function OwnershipIcon() {
  return (
    <svg {...base}>
      <path d="M3.5 10.6 12 4l8.5 6.6" />
      <path d="M5.6 9v9.4a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V9" />
      <path d="m9.3 14.4 1.8 1.8 3.6-3.8" />
    </svg>
  );
}

export function CostIcon() {
  return (
    <svg {...base}>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5.4" />
      <path d="M14.4 9.1a2.9 2.9 0 0 0-5 2v4.5" />
      <path d="M8.7 13h4" />
      <path d="M8.7 15.9h6.3" />
    </svg>
  );
}

export function QualityIcon() {
  return (
    <svg {...base}>
      <path d="M20.2 12a8.2 8.2 0 1 1-2.7-6.1" />
      <path d="M20.4 4.3v4.4h-4.4" />
      <path d="m8.8 12.3 2 2 4.2-4.4" />
    </svg>
  );
}

// The award mark. The awarding bodies do not publish a winner badge we are licensed to
// use, so this is drawn in EVO's own hand. A rosette rather than a wreath: at 26px a
// laurel turns into a squiggle, and a rosette still reads as "this was won".
export function LaurelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m12 6.2 1.05 2.02 2.25.32-1.65 1.57.4 2.23L12 11.29l-2.05 1.05.4-2.23L8.7 8.54l2.25-.32L12 6.2Z"
        fill="currentColor"
      />
      <path d="M8.6 14.4 7 22l5-2.4 5 2.4-1.6-7.6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

// Compliance band. A shield for the work EVO does, a ledger for the record the landlord
// has to be able to produce. Two different ideas, so two different shapes.
export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 4.5 6v5.6c0 4.3 3 8.2 7.5 9.4 4.5-1.2 7.5-5.1 7.5-9.4V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2.2 2.3 4.2-4.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LedgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3.5h11a2 2 0 0 1 2 2v15H8a2 2 0 0 1-2-2v-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M6 3.5a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.5 8.5h6M9.5 12h6M9.5 15.5h3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
