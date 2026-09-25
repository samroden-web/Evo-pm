// Site-wide settings, contact details and navigation.
// Everything EVO still has to confirm is marked TBC (brief section 9).

// While true, unconfirmed items show as yellow "TBC" tags so EVO can review them on a
// preview deploy. Set to false before launch: every TBC tag then disappears.
export const SHOW_TBC = true;

export const SITE_URL = 'https://evo-pm.com';

// Resolved 25 September 2026 from EVO's own /faqs/company-information page, which is the
// authoritative public statement of all of this and had been sitting behind a "content to
// be migrated" placeholder. It settles three TBCs that had been open since the brief:
//
//   TBC 1  Phone. The brochure's 020 8691 9239 is a typo. EVO publishes one main number,
//          020 8691 9293, and says voice calls to the SMS line divert to it.
//   TBC 2  Email. hello@evo-pm.com, not sales@. EVO states that official email only ever
//          comes from the evo-pm.com domain, so sales@ is not in use.
//   TBC 15 Registered office. 4th Floor, 100 Fenchurch Street, London EC3M 5JD. The
//          Bromley address is the head office, and it is by appointment only — which is
//          why it should not be the address a visitor is given to turn up at.
//
// Still worth a second pair of eyes from EVO, because a phone number on every page is
// expensive to get wrong.
export const company = {
  name: 'EVO',
  legalName: 'Evo Digital Technologies Limited',
  companyNumber: '11477247',
  vatNumber: 'GB367308775',
  icoNumber: 'ZB172988',
  // The group holding company, for the corporate-information answer.
  groupName: 'EVOAI LIMITED',
  groupCompanyNumber: '11453099',
  registeredOffice: '4th Floor, 100 Fenchurch Street, London EC3M 5JD',
  // Head office. Visits by appointment only, so never present it as a drop-in address.
  address: 'STC House, 7 Elmfield Road, Bromley, BR1 1LT',
  addressByAppointmentOnly: true,
  registeredOfficeConfirmed: true,
};

export const contact = {
  sales: {
    name: 'Mark Iandoli',
    title: 'Co-founder and COO',
    email: 'mark.iandoli@evo-pm.com',
    phone: '020 8691 9293',
  },
  salesEmail: 'hello@evo-pm.com',
  salesPhone: '020 8691 9293',
  residentPhone: '020 8691 9293',
  // Published alongside the main number on EVO's company-information page.
  smsNumber: '07441 471580',
  whatsappNumber: '07723 502080',
  // Brief section 2 lists helpdesk@ as the resident helpdesk. TBC item 2 is whether living@ is also used.
  residentEmail: 'helpdesk@evo-pm.com',
  residentEmailConfirmed: false,
  // TBC item 12: Mon to Fri, 8am or 9am to 5pm
  helpdeskHours: null,
  callsRecorded: true,
};

export const apps = {
  living: {
    name: 'EVO Living App',
    appStore: 'https://apps.apple.com/gb/app/evo-living-residents-app/id1176982988',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.evoai.residentapp',
    // Resident registration form (Typeform)
    registration: 'https://evoforms.typeform.com/to/Mzgrw4ZQ?typeform-source=evo-pm.com',
  },
  trades: {
    name: 'EVO Trades App',
    appStore: 'https://apps.apple.com/gb/app/evo-services-contractor-app/id1176982984',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.evoai.contractorapp&gl=GB',
  },
};

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/evopm/' },
  { label: 'Facebook', href: 'https://www.facebook.com/evoprop' },
  { label: 'X (Twitter)', href: 'https://twitter.com/evo_pm' },
];

// THE AGREED SITE MAP, 22 September, as drawn: six tabs, two dropdowns, three utility
// links and one button. The order is the buying path — what it is, what it costs, the
// thing you are graded on, proof, who you are.
//
//   How it works · Plans & pricing · Who we help ▾ · Compliance · Case studies · About ▾
//   ... then Residents · Trades · Client login, top right, and Book a portfolio review.
//
// Two things the map settles that the build had drifted from:
//   - Insights is DEMOTED under About. Every article keeps its URL and its search
//     value; the latest three still surface on the homepage. It does not earn a tab.
//   - Residents is a UTILITY link, not a tab. The main nav is the buying path, and a
//     resident is not the buyer. It stays prominent in the footer.
export const mainNav = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Plans & pricing', href: '/pricing' },
  {
    label: 'Who we help',
    href: '/who-we-help/housing',
    children: [
      {
        label: 'Housing associations & councils',
        href: '/who-we-help/housing',
      },
      {
        label: 'Build to Rent & institutional PRS',
        href: '/who-we-help/build-to-rent',
      },
      {
        label: 'Landlords & managing agents',
        href: '/who-we-help/landlords-and-agents',
      },
    ],
  },
  // Flat, per the map. Damp and mould keeps its own URL and its own search ground, and
  // is reached from inside the Compliance page rather than from a dropdown.
  { label: 'Compliance', href: '/compliance' },
  { label: 'Case studies', href: '/case-studies' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About EVO', href: '/about' },
      { label: 'Insights', href: '/insights' },
    ],
  },
];

// Site map, "Resident zone and utility — off the main nav". Client login is on the
// current site as "MARS" and was missing from the rebuild entirely; MARS is named
// once, in the Dashboard block on How it works.
export const utilityNav = [
  { label: 'Residents', href: '/residents' },
  { label: 'Trades', href: '/trades' },
  { label: 'Client login', href: 'https://app.evo-pm.com', external: true },
];

// The footer site map MIRRORS the main navigation, in the same order. It used to be a
// different shape entirely — four columns invented for the footer — which is what made
// it feel like it belonged to an older version of the site. Insights sits under About
// here exactly as it does in the header, and the utility links keep their own column.
export const footerNav = [
  {
    heading: 'The service',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Plans & pricing', href: '/pricing' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Damp & mould', href: '/damp-and-mould' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    heading: 'Who we help',
    links: [
      { label: 'Housing associations & councils', href: '/who-we-help/housing' },
      { label: 'Build to Rent & institutional PRS', href: '/who-we-help/build-to-rent' },
      { label: 'Landlords & managing agents', href: '/who-we-help/landlords-and-agents' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'About EVO', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Residents & trades',
    links: [
      { label: 'Residents hub', href: '/residents' },
      { label: 'Resident FAQs', href: '/faqs/residents' },
      { label: 'How-to guides', href: '/how-to-guides' },
      { label: 'Join the trades network', href: '/trades' },
      { label: 'Client login', href: 'https://app.evo-pm.com' },
    ],
  },
];

export const awards = [
  {
    id: 'housing-executive-2025',
    name: 'Housing Executive Awards 2025',
    category: 'Partnership of the Year',
    client: 'IDS',
    line: 'Housing Executive Awards 2025, Partnership of the Year. Won with IDS in October 2025, for the innovation, collaboration and measurable impact of the service.',
    href: '/insights/ids-and-evo-s-transformative-partnership-is-recognised-at-the-housing-executive-awards',
  },
  {
    id: 'housing-digital-2024',
    name: 'Housing Digital Innovation Awards 2024',
    category: 'Best Repairs and Maintenance Innovation',
    client: 'B&D Reside',
    line: 'Housing Digital Innovation Awards 2024, Best Repairs and Maintenance Innovation, won with B&D Reside.',
    href: '/insights/bd-reside-and-evo-win-at-the-housing-digital-awards',
  },
];

// Section 2 headline figures. Always shown together with "Across the EVO portfolio."
export const headlineFigures = [
  { value: '6,000+', label: 'Homes managed' },
  { value: '90%+', label: 'First time fix rate' },
  { value: '<10 days', label: 'Average repair resolution' },
  { value: '90%+', label: 'Resident satisfaction' },
];

// GLOBAL-10: the three primary calls to action. All go to the contact form with the
// enquiry type pre-selected.
export const cta = {
  review: { label: 'Book a portfolio review', href: '/contact?enquiry=review' },
  pilot: {
    label: 'Talk about a 12-month pilot',
    href: '/contact?enquiry=pilot',
  },
  demo: { label: 'Book a demo', href: '/contact?enquiry=demo' },
};

export const banner = {
  before: {
    text: "Awaab's Law phase 2 starts on 30 November 2026. See how we handle damp, mould and hazards.",
  },
  after: {
    text: "Awaab's Law now covers more hazards. See how we handle them.",
  },
  switchDate: '2026-11-30T00:00:00Z',
  href: '/damp-and-mould',
};
