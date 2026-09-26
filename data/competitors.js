// The comparison table. One file, because every cell here is a factual claim about a
// named company and they all need to be changeable in one place when the six-month
// review comes round.
//
// SOURCING RULE. Every verdict comes from that company's own published material,
// checked first-hand. See the project doc "EVO - Competitor comparison verification".
// Three states, and the last two must never be merged:
//
//   'y'   evidenced that they do it
//   'n'   evidenced that they do NOT do it, usually because they say so themselves
//   'u'   UNVERIFIED - no evidence found either way
//
// A blank cell in a published table reads as "no". So 'u' renders as its own mark with
// the key printed on the face of the table. Rendering an unverified as a blank is the
// single biggest exposure in the whole section, because it asserts something EVO cannot
// stand behind next to somebody else's logo.
//
// A cell may also carry a short qualifier string instead of a mark, where the honest
// answer is "yes, but". Those are the most valuable cells in the table.

// src is filled in by tools/link-competitor-logos.mjs from whatever actually downloaded.
// Null means the column renders the name alone, which is why the name is always present
// and the logo never carries meaning on its own.
export const competitors = [
  {
    key: 'plentific',
    name: 'Plentific',
    group: 'Platform',
    domain: 'plentific.com',
    src: '/images/logos/competitors/plentific.png',
    width: 32,
    height: 32,
  },
  {
    key: 'askporter',
    name: 'askporter',
    group: 'Platform',
    domain: 'askporter.com',
    src: '/images/logos/competitors/askporter.png',
    width: 128,
    height: 128,
  },
  {
    key: 'fixflo',
    name: 'Fixflo',
    // The published mark is a WORDMARK, not a symbol, so showing it above the name prints
    // "Fixflo" twice. markIsWordmark tells the table to use the name alone. If a proper
    // symbol file arrives from their brand page, drop this flag and it renders like the
    // others.
    markIsWordmark: true,
    // Aareon acquired Help Me Fix on 1 September 2025 and Fixflo's AI triage IS Help Me
    // Fix's Aidenn. Showing them as two independent competitors is the error an informed
    // buyer in this sector spots immediately, so they are one column with a footnote.
    note: 'incl. Help Me Fix',
    group: 'Platform',
    domain: 'fixflo.com',
    src: '/images/logos/competitors/fixflo.png',
    width: 128,
    height: 128,
  },
  {
    key: 'checkatrade',
    name: 'Checkatrade',
    group: 'Marketplace',
    domain: 'checkatrade.com',
    src: '/images/logos/competitors/checkatrade.png',
    width: 180,
    height: 180,
  },
  {
    key: 'homeserve',
    name: 'HomeServe',
    group: 'Emergency cover',
    domain: 'homeserve.com',
    src: '/images/logos/competitors/homeserve.png',
    width: 32,
    height: 32,
  },
];

// Three bands. The bands are the argument: most suppliers give you the first four, then
// the table splits into where emergency cover stops and where software stops, and EVO is
// the only column present in both halves.
export const comparisonBands = [
  {
    label: 'What most suppliers give you',
    rows: [
      {
        capability: 'An app for residents',
        cells: {
          plentific: 'y',
          // Markets having no app as a feature: residents reach them by WhatsApp, SMS,
          // email or web "without an app or a login". Generous to them, but true.
          askporter: { q: 'by design, none' },
          fixflo: 'y',
          checkatrade: 'y',
          homeserve: 'y',
        },
      },
      {
        capability: 'AI-assisted triage',
        cells: { plentific: 'y', askporter: 'y', fixflo: 'y', checkatrade: 'u', homeserve: 'u' },
      },
      {
        capability: 'Enriched property data',
        cells: { plentific: 'y', askporter: 'y', fixflo: 'y', checkatrade: 'u', homeserve: 'u' },
      },
      {
        capability: 'A trades network',
        // Not one thing. Fixflo and Plentific have vetted attending networks; askporter's
        // network is Checkatrade's. Help Me Fix's own trades are remote video engineers,
        // which is why the merged column rests on Fixflo's attending network.
        cells: { plentific: 'y', askporter: 'y', fixflo: 'y', checkatrade: 'y', homeserve: 'y' },
      },
    ],
  },
  {
    label: 'Where home emergency cover stops',
    rows: [
      {
        capability: 'Trades it will actually attend and fix',
        evo: { q: 'Every trade' },
        cells: {
          plentific: 'n',
          askporter: 'n',
          fixflo: 'n',
          checkatrade: 'n',
          homeserve: { q: 'Heating, plumbing, electrics' },
        },
      },
      {
        capability: 'Sold as a portfolio service to landlords, not a per-property policy',
        cells: { plentific: 'y', askporter: 'y', fixflo: 'y', checkatrade: 'y', homeserve: 'n' },
      },
    ],
  },
  {
    label: 'Where software stops',
    rows: [
      {
        capability: 'A fixed price that covers the repairs themselves',
        // All of these have genuinely fixed SOFTWARE pricing. The test is printed under
        // the table, because without it these cells are not fair.
        cells: {
          plentific: 'n',
          askporter: 'n',
          fixflo: 'n',
          checkatrade: 'n',
          homeserve: { q: 'within claim limits' },
        },
      },
      {
        capability: 'Carries out the repair itself',
        // Plentific's own contractor terms, in capitals: "PLENTIFIC IS NOT A PARTY TO ANY
        // CONTRACT BETWEEN THE CLIENT AND CONTRACTOR." The strongest evidence in the study.
        cells: { plentific: 'n', askporter: 'n', fixflo: 'n', checkatrade: 'n', homeserve: 'y' },
      },
      {
        capability: 'A 12-month warranty on the work',
        // Plentific, Fixflo and askporter publish no warranty terms at all. That is
        // unverified, not absent, and it is the weakest column in the table.
        cells: {
          plentific: 'u',
          askporter: 'u',
          fixflo: 'u',
          checkatrade: { q: '6 months, capped' },
          homeserve: 'y',
        },
      },
      {
        capability: '24/7 emergency response',
        // askporter is the most contestable cell EVO would publish: their private landlord
        // page says a vetted trade is reachable at 11pm on Sunday, their housing page
        // lists an out-of-hours partnership as coming soon. Hence the qualifier.
        cells: {
          plentific: 'u',
          askporter: { q: 'partial' },
          fixflo: { q: 'triage only' },
          checkatrade: 'u',
          homeserve: 'y',
        },
      },
      {
        capability: 'Fully managed, end to end',
        cells: {
          plentific: 'n',
          askporter: 'n',
          fixflo: 'n',
          checkatrade: 'n',
          homeserve: { q: 'per property' },
        },
      },
    ],
  },
];

export const comparisonFootnotes = [
  'Help Me Fix was acquired by Aareon, Fixflo’s parent company, in September 2025, and its Aidenn technology now sits in both products. They are shown as one supplier because they are one company.',
  '“A fixed price that covers the repairs themselves” is the test in the fifth row. Every supplier here has fixed pricing for its own software or policy; only EVO’s fixed price includes the cost of the repairs.',
];

export const comparisonSource = 'EVO competitor analysis, March 2026, from each supplier’s own published material. Reviewed every six months.';

export const comparisonVerdicts = [
  {
    title: 'Software manages. It does not mend.',
    body:
      'Plentific’s own contractor terms state, in capitals, that Plentific is not a party to any contract between the client and the contractor. That is the whole category in one sentence.',
  },
  {
    title: 'Emergency cover mends, but narrowly.',
    body:
      'HomeServe genuinely attends, genuinely guarantees the work for twelve months and genuinely runs 24/7. For boilers, pipes and wiring, one property at a time, within claim limits. Not for a door, a roof, a worktop or damp.',
  },
  {
    title: 'EVO is both, for a whole portfolio, at one price per home.',
    body:
      'Every trade, every home, one fixed monthly fee, a twelve-month warranty on the repair itself, and the evidence trail your Regulator will ask for.',
    win: true,
  },
];
