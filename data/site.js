// Site-wide settings, contact details and navigation.
// Everything EVO still has to confirm is marked TBC (brief section 9).

// While true, unconfirmed items show as yellow "TBC" tags so EVO can review them on a
// preview deploy. Set to false before launch: every TBC tag then disappears.
export const SHOW_TBC = true;

export const SITE_URL = 'https://evo-pm.com';

export const company = {
  name: 'EVO',
  legalName: 'Evo Digital Technologies Limited',
  companyNumber: '11477247',
  address: 'STC House, 7 Elmfield Road, Bromley, BR1 1LT',
  // TBC item 15: registered office to be confirmed by EVO.
  registeredOfficeConfirmed: false,
};

export const contact = {
  sales: {
    name: 'Mark Iandoli',
    title: 'Co-founder and COO',
    email: 'mark.iandoli@evo-pm.com',
    phone: null, // TBC item 1
  },
  // TBC item 2: sales@evo-pm.com (brochure) or hello@evo-pm.com (current site)
  salesEmail: null,
  salesEmailOptions: ['sales@evo-pm.com', 'hello@evo-pm.com'],
  // TBC item 1: 020 8691 9293 (site and guides) or 020 8691 9239 (brochure)
  salesPhone: null,
  residentPhone: null,
  phoneOptions: ['020 8691 9293', '020 8691 9239'],
  // Brief section 2 lists helpdesk@ as the resident helpdesk. TBC item 2 is whether living@ is also used.
  residentEmail: 'helpdesk@evo-pm.com',
  residentEmailConfirmed: false,
  // TBC item 12: Mon to Fri, 8am or 9am to 5pm
  helpdeskHours: null,
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

export const mainNav = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Plans & pricing', href: '/pricing' },
  {
    label: 'Who we help',
    href: '/who-we-help/housing',
    children: [
      { label: 'Housing associations & councils', href: '/who-we-help/housing' },
      { label: 'Build to Rent & institutional PRS', href: '/who-we-help/build-to-rent' },
      { label: 'Landlords & managing agents', href: '/who-we-help/landlords-and-agents' },
    ],
  },
  {
    label: 'Compliance',
    href: '/compliance',
    children: [
      { label: 'Statutory and regulatory', href: '/compliance' },
      { label: 'Damp & mould', href: '/damp-and-mould' },
    ],
  },
  {
    label: 'Case studies',
    href: '/case-studies',
    children: [
      { label: 'Industrial Dwellings Society (IDS)', href: '/case-studies/ids' },
      { label: 'B&D Reside', href: '/case-studies/bd-reside' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'What we do', href: '/about/what-we-do' },
      { label: 'Why we do it', href: '/about/why-we-do-it' },
      { label: 'Who we are', href: '/about/who-we-are' },
      { label: 'Trust and accreditations', href: '/about/trust' },
      { label: 'Our products', href: '/products' },
    ],
  },
  { label: 'Insights', href: '/insights' },
  { label: 'Residents', href: '/residents' },
];

export const footerNav = [
  {
    heading: 'EVO',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Plans & pricing', href: '/pricing' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Damp & mould', href: '/damp-and-mould' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Products', href: '/products' },
      { label: 'Insights', href: '/insights' },
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
    heading: 'Residents',
    links: [
      { label: 'Residents hub', href: '/residents' },
      { label: 'Join the trades network', href: '/trades' },
      { label: 'How-to guides', href: '/how-to-guides' },
      { label: 'Resident FAQs', href: '/faqs/residents' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Trust and accreditations', href: '/about/trust' },
      { label: 'Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investors', href: '/investors' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

// GLOBAL-06: each award is only ever shown against the client it was won with.
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
  pilot: { label: 'Talk about a 12-month pilot', href: '/contact?enquiry=pilot' },
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
