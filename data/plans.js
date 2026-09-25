// Plan explorer data (brief Appendix A). This is the single place prices live.
// Update a price here and it changes everywhere on the site.
// All prices are per home per month, plus VAT. null = Price on application.
//
// ONE PRICE LIST, 25 September 2026.
// The site used to show three price columns — affordable housing, PRS, Build to Rent —
// and a switcher to move between them. Two problems with that. It invited a reader to
// work out which column they were in and why someone else paid less, and it did not
// match practice: the September 2026 managed services agreement charges the affordable
// housing rates, and B&D Reside is all new stock on the same rates. What actually moves
// a price is the stock review, not the badge on the landlord.
//
// So there is now one published list, at the affordable housing rates — the highest of
// the three — with the caveat below carrying the real variables. Nobody is ever quoted
// upwards from the website, and the conversation about their stock happens in the room
// where it belongs.
//
// orgTypes is kept, with a single entry, so nothing that imports it breaks and a second
// list can come back if EVO ever wants one.

export const vatNote = 'All prices are per home per month, plus VAT.';

// Shown at the top of the pricing page and under the homepage figure. Deliberately does
// NOT promise that newer stock is cheaper: B&D Reside is entirely new stock and pays the
// standard rate, and very old stock can move the other way.
export const priceCaveat =
  'These are our standard prices. Your own price is set after a stock review \u2014 the age and condition of the homes, and the size of the portfolio, can all move it.';

export const orgTypes = [
  {
    id: 'standard',
    label: 'Standard',
    description: 'All landlords',
    managedTechnology: 23.0,
    plans: { home500: 25.0, home1000: 32.0, homeTrust: null },
    addons: { electrical: 19.0, gasBoiler: 18.0 },
  },
];

// Charged once per client rather than per home, so it has to be shown separately or the
// per-home figure reads as the whole bill. It is in Schedule 4 of the managed services
// agreement and a client finds out about it at contract stage otherwise.
export const clientStandingCharge = {
  amount: 400,
  label: 'Client account charge',
  per: 'per client, per month',
  covers: 'A named account manager, a monthly KPI pack, quarterly service reviews and an annual data audit.',
};

// Answers the obvious objection to a fixed price: fixed for how long? The cap is good
// news, so it is stated rather than buried.
export const priceReview =
  'Your price is fixed for the first 12 months. Any annual review after that is capped at CPI plus 1%, and takes effect on 1 April.';

export const defaultOrgType = 'standard';

export const plans = [
  {
    id: 'home500',
    name: 'Home 500',
    threshold: 500,
    thresholdLabel: 'Up to £500 + VAT per repair',
    coverage: 'Covers up to 85% of reactive repairs',
    tag: 'Entry level',
    short: 'Our entry-level plan. Lower-value, high-volume day-to-day repairs.',
    description:
      'Our entry-level reactive repairs and maintenance plan, covering a wide range of day-to-day repairs up to £500 plus VAT per repair. Covers heating, plumbing, drainage, electrical, locksmith, carpentry, tiling, windows, flooring and decorating repairs, and general household fixture maintenance.',
  },
  {
    id: 'home1000',
    name: 'Home 1000',
    threshold: 1000,
    thresholdLabel: 'Up to £1,000 + VAT per repair',
    coverage: 'Covers up to 95% of reactive repairs',
    tag: 'Most popular',
    short:
      'Our most popular plan. A broader mix of reactive works, including selected replacements where repair is not viable.',
    description:
      'Our most popular plan. An enhanced reactive repairs and maintenance service covering a wider range of repairs up to £1,000 plus VAT per repair. Covers the same categories, plus selected replacements where repair is not viable.',
  },
  {
    id: 'homeTrust',
    name: 'Home Trust',
    threshold: 2500,
    thresholdLabel: 'Up to £2,500 + VAT per repair',
    coverage: 'Covers up to 99% of reactive repairs',
    tag: 'New build and BTR',
    short: 'Designed for new-build and Build to Rent. The fewest exceptions.',
    description:
      'Designed for new-build developments and Build to Rent portfolios. Because these homes have newer systems, fixtures and infrastructure, Home Trust covers everything within scope up to £2,500 plus VAT per repair (total labour and materials), without the layered thresholds or exclusions that older stock needs.',
    priceLabel: 'Price on application',
  },
];

export const managedTechnologyFeatures = [
  {
    group: 'Platform features',
    items: [
      'Cloud digital dashboard',
      'Secure document storage, 2GB per home',
      'Repair and compliance service history',
      'Smart key exchange',
      'Automated SMS notifications',
      'Dynamic appointment scheduling',
      'Remote video triage',
    ],
  },
  {
    group: 'Resident support',
    items: [
      { text: 'Dedicated, experienced helpdesk', tbc: 'helpdesk hours, 8am or 9am to 5pm' },
      'EVO Living App (iOS and Android)',
      '24/7 home emergency response',
    ],
  },
  {
    group: 'Platform and support',
    items: ['Access to accredited tradespeople', 'Warranty on jobs', 'Access to a highly qualified team'],
  },
];

export const commonToAllPlans =
  'Repairs are resident-reported, reactive and like-for-like. Excluded: major renewals and component replacements, structural repairs, full installations, boiler replacements, rewires, roofing works, damp and mould remediation, and planned investment programmes.';

// Same list for all three plans. Only the threshold changes.
export const planScope = [
  {
    category: 'Heating repairs',
    items: [
      'Radiator valves and adjustments',
      'Radiator bleeding and system balancing',
      'Circulating pump repairs',
      'Electric cylinder and water heater elements',
      'Panel heater and storage heater repairs',
      'Minor heating pipework repairs',
      'Heating system pressure issues',
      'Motorised valve repairs or replacements',
      'Thermostat and programmer replacements',
      'Expansion vessel replacement (accessible units)',
      'Heating pipework repairs up to 10 metres',
      'Replacement of standard room thermostats and heating timers',
      'Replacement of heating control valves',
      'Repair or replacement of heating valve motors',
      'Advanced heating system fault diagnosis',
      'Repairs to accessible heating pipework',
    ],
  },
  {
    category: 'Plumbing and drainage',
    items: [
      'Locating and repairing minor leaks',
      'Tap repairs and replacements',
      'Shower valve and shower component repairs',
      'Silicone seal replacement around sanitary fittings',
      'Bath panel repairs or replacement',
      'Waste pipe and trap repairs',
      'Toilet mechanism repairs',
      'Isolation valve installation or replacement',
      'Internal drain blockage clearance',
      'Replacement of internal pipework where accessible',
      'Full toilet replacement where repair is not viable',
      'Internal waste pipe repairs',
      'Shower screen replacement',
      'Larger reinstatement works following leaks',
      'Replacement of standard bathroom basin and pedestal',
      'Replacement of float valves in internal water storage tanks',
    ],
  },
  {
    category: 'Electrical repairs',
    items: [
      'Light fittings, switches and socket faceplates',
      'Fused spurs, dimmers and pull cords',
      'Bathroom extractor fans',
      'Faulty circuit breakers (MCBs)',
      'Electrical fault diagnosis',
      'Electric shower repairs',
      'Smoke and heat alarm replacement',
      'Minor electrical component replacements',
      'Replacement of RCD safety switches within existing consumer units',
      'Electrical fault finding and diagnostics',
      'Minor remedial wiring repairs',
      'Replacement of damaged spur wiring to fixed appliances',
      'Replacement of electric showers',
      'Replacement of standard kitchen extractor fans',
    ],
  },
  {
    category: 'Locksmith and door hardware',
    items: [
      'Yale cylinders and mortice locks',
      'Door alignment and locking adjustments',
      'Replacement of faulty door handles or locking components',
      'Forced entry where locks fail due to wear and tear',
    ],
  },
  {
    category: 'Carpentry',
    items: [
      'Kitchen unit repairs and adjustments',
      'Worktop resealing',
      'Internal door hardware repairs',
      'Securing skirting boards and bannisters',
      'Loft hatch repairs',
      'Replacement of standard hollow-core internal doors',
      'Replacement of standard kitchen cabinet doors',
      'Partial replacement of standard laminate worktops',
    ],
  },
  {
    category: 'Tiling',
    items: [
      'Replacing loose or damaged tiles',
      'Re-grouting and resealing tiled areas',
      'Silicone seal replacement',
      'Replacement of tiles with Aqua boards or UPVC in wet areas only, including ledges',
    ],
  },
  {
    category: 'Windows',
    items: [
      'Window hinge and handle replacement',
      'Trickle vent repairs',
      'Locking mechanism adjustments',
      'Minor glazing seal replacement',
      'Replacement of standard window restrictors',
      'Broader adjustment and realignment work',
    ],
  },
  {
    category: 'Flooring',
    items: [
      'Vinyl or laminate flooring repairs',
      'Replacement of threshold strips and trims',
      'Minor floorboard repairs',
      'Broader reinstatement allowance following leak damage',
      'Localised accessible subfloor repairs',
    ],
  },
  {
    category: 'Decorating',
    items: [
      'Localised decoration following repairs or leaks',
      'Stain blocking and patch painting',
      'Making good after maintenance works',
      'Broader reinstatement following internal leak damage',
    ],
  },
];

export const addons = [
  {
    id: 'electrical',
    name: 'Electrical Compliance Cover',
    note: 'Minimum three-year term.',
    intro:
      'A fully managed electrical compliance service to help housing providers keep homes safe, meet regulatory requirements and see the position across their whole portfolio. Inspection, testing, certification and reporting come together in one digitally managed service, with complete audit trails and real-time compliance visibility.',
    includes: [
      'Electrical Installation Condition Reports (EICRs)',
      'Portable Appliance Testing (PAT)',
      'Smoke and heat alarm testing',
      'Visual electrical safety inspections',
      'Remedial works and follow-on actions (quoted separately)',
      'Compliance reporting and certification',
    ],
    detail: [
      {
        title: 'Service parameters',
        body: 'Statutory inspection, testing and certification for residential rental properties, covering the fixed electrical installation and associated safety devices. Carried out to BS 7671 (IET Wiring Regulations) and relevant statutory requirements, including the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 where applicable. Minimum three-year term unless otherwise agreed in writing. Remedial works identified during inspection are not included unless separately authorised.',
      },
      {
        title: 'EICR',
        items: [
          'Full inspection and testing of the fixed installation',
          'Verification of earthing and bonding',
          'Inspection of consumer units, protective devices and circuit integrity',
          'Defects classified under BS 7671 (C1, C2, C3, FI)',
          'Formal EICR issued',
          'Digital certification for landlord and regulatory records',
        ],
      },
      {
        title: 'PAT',
        items: [
          'Visual inspection of landlord-supplied portable appliances',
          'Earth continuity, insulation resistance and polarity testing where applicable',
          'Pass/fail labelling',
          'Asset register and certification report',
        ],
      },
      {
        title: 'Smoke and heat alarm testing',
        items: [
          'Functional testing of installed smoke alarms and heat detectors',
          'Verification of correct positioning',
          'Battery check and replacement where applicable (standard batteries only)',
          'Confirmation of interlinking where installed',
        ],
      },
      {
        title: 'Visual electrical safety inspection',
        items: [
          'Sockets, switches and accessible wiring',
          'Signs of overheating, damage or deterioration',
          'Exposed cabling and containment where accessible',
          'Reporting of safety concerns needing further investigation',
        ],
      },
      {
        title: 'Reporting and certification',
        items: [
          'Certification to current regulatory requirements',
          'Digital copies for landlord records',
          'Advisory notes for non-compliance or recommended improvements',
          'Remedial quotation on request where C1 or C2 defects are found',
        ],
      },
      {
        title: 'Standard exclusions',
        items: [
          'Remedial repair works unless separately authorised',
          'Consumer unit upgrades or replacements',
          'Full or partial rewires',
          'Replacement of fixed wiring accessories unless agreed separately',
          'Attendance for Distribution Network Operator (DNO) issues',
          'Testing of tenant-owned appliances',
          'Works needing specialist access equipment beyond standard safe access',
        ],
      },
    ],
  },
  {
    id: 'gasBoiler',
    name: 'Gas Boiler Cover',
    note: null,
    intro:
      'A fully managed service to keep heating systems safe, compliant and working throughout the year, with complete visibility across servicing, repairs and compliance, supported by real-time reporting and full audit trails.',
    includes: [
      'Annual gas safety inspection',
      'Annual boiler service',
      'Boiler breakdown repairs (parts and labour included)',
      'Basic boiler controls',
      'Standard flue and associated components',
      'Compliance reporting and certification',
      'Resident appointment management',
    ],
    detail: [
      {
        title: 'Service parameters',
        body: 'Protection against unexpected boiler breakdown, and statutory compliance through annual servicing and safety certification. Covers the specified domestic gas boiler at the registered address and its directly associated components. Repairs are subject to economic viability and manufacturer guidance.',
      },
      {
        title: 'Annual gas safety inspection',
        items: [
          'Annual Landlord Gas Safety Record (CP12), in line with the Gas Safety Regulations',
          'Inspection of boiler, gas supply and flue integrity',
          'Safety device and tightness testing where required',
          'Visual inspection of accessible gas pipework',
        ],
      },
      {
        title: 'Annual boiler service',
        items: [
          'Inspection and cleaning of accessible burner components',
          'Heat exchanger inspection (where accessible)',
          'Flue gas analysis and combustion testing',
          'Condensate trap inspection and cleaning',
          'Expansion vessel pressure test (where accessible)',
          'System pressure and control checks',
        ],
      },
      {
        title: 'Boiler breakdown repairs (parts and labour included)',
        items: [
          'Printed circuit board (PCB)',
          'Gas valve',
          'Fan assembly',
          'Diverter valve',
          'Pressure relief valve',
          'Thermistors and sensors',
          'Ignition leads and electrodes',
          'Flow switches and internal pump (where integral)',
          'Air pressure switches',
          'Heat exchanger (subject to economic viability)',
        ],
      },
      {
        title: 'Basic boiler controls',
        items: [
          'Replacement of standard (non-smart) room thermostat',
          'Replacement of mechanical or digital programmer',
          'Replacement of boiler-mounted time clocks',
          'Resetting and recommissioning after breakdown',
        ],
      },
      {
        title: 'Standard flue and associated components',
        items: [
          'Repair or replacement of standard horizontal flue sections',
          'Flue brackets and supports',
          'Accessible flue seals',
          'Minor repositioning for safe operation (within safe access limits)',
        ],
      },
      {
        title: 'Standard exclusions',
        items: [
          'Full boiler replacement',
          'Heating system redesign or conversion',
          'Radiators and radiator valves',
          'Pipework beyond the immediate boiler connections',
          'Underfloor heating',
          'Power flushing and sludge-related damage',
          'External gas supply pipework',
          'Smart heating upgrades',
          'Faults that existed before cover started',
        ],
      },
    ],
  },
];

export const pricingFaqs = [
  {
    q: 'What counts as a repair "within the plan"?',
    a: 'A resident-reported reactive repair whose total labour and materials cost is under your plan threshold.',
  },
  {
    q: 'What happens if a repair costs more than the threshold?',
    a: 'We scope and quote it before any work starts, and it only goes ahead with your approval.',
  },
  {
    q: 'Is there a limit on the number of repairs?',
    a: 'No. The monthly fee is the same however many repairs are reported within your plan.',
  },
  { q: 'Can we change plan later?', a: 'Yes. You can upgrade your plan at any time.' },
  {
    q: 'Is damp and mould included?',
    a: 'No. It is handled under our damp and mould procedure and quoted separately. See the damp and mould page.',
    link: { href: '/damp-and-mould', label: 'Damp and mould' },
  },
];

// Helpers
export function getOrgType(id) {
  return orgTypes.find((t) => t.id === id) || orgTypes.find((t) => t.id === defaultOrgType);
}

export function formatPrice(n) {
  return `£${n.toFixed(2)}`;
}

// Combined price per home per month (Managed Technology + plan). null for POA.
export function combinedPrice(typeId, planId) {
  const t = getOrgType(typeId);
  const p = t.plans[planId];
  return p == null ? null : t.managedTechnology + p;
}
