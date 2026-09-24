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
