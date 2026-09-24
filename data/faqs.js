// FAQs. Answers can contain a `tbc` note, which shows as a TBC tag while SHOW_TBC is on.
import { pricingFaqs } from './plans';
import { apps } from './site';

const REGISTRATION_URL = apps.living.registration;

export const faqCategories = [
  { slug: 'residents', label: 'Residents' },
  { slug: 'landlords-and-property-managers', label: 'Landlords and property managers' },
  { slug: 'trades-service', label: 'Trades and service' },
  { slug: 'platform-information', label: 'Platform information' },
  { slug: 'company-information', label: 'Company information' },
  { slug: 'terms-conditions', label: 'Terms and conditions' },
];

export const faqs = {
  residents: [
    {
      q: 'How do I register for the EVO Living App?',
      a: 'Your landlord or managing agent works with EVO to look after repairs in your home, so you should already be registered with us. If you have not, fill in our online registration form.',
      link: { href: REGISTRATION_URL, label: 'Register for the EVO Living App', external: true },
    },
    {
      q: 'How do I report a repair?',
      a: 'Open the EVO Living App and tap "Report a Problem". You can do this at any time, day or night. Choose the issue, describe it and add a photo. If you cannot use the app, you can phone, use WhatsApp or email us.',
      contactLine: true,
    },
    {
      q: 'How do I report damp or mould?',
      a: 'Report it in the EVO Living App. Choose the category, describe what you can see and add a photo. You will get a reference number straight away. If you cannot use the app, call us.',
      contactLine: true,
      link: { href: '/damp-and-mould', label: 'How we handle damp and mould' },
    },
    {
      q: 'How do I request an emergency response?',
      a: 'Tap "Emergency" in the EVO Living App. Your request goes straight to our emergency response team, 24 hours a day. You can also call us. Out of hours, calls go through to our emergency support team.',
      contactLine: true,
      link: { href: '/how-to-guides/reporting-an-emergency', label: 'Step-by-step guide to reporting an emergency' },
    },
    {
      q: 'What qualifies for an emergency response?',
      a: 'An emergency is a sudden state of danger that needs immediate attention. This includes:',
      list: [
        'your only toilet not working',
        'burst pipes or flooding',
        'a security breach, such as a door or window that will not lock',
        'complete loss of heating',
        'total loss of power',
        'pest infestations that cause a health risk',
      ],
      tbc: 'should damp and mould presenting a serious risk be listed here?',
    },
    {
      q: 'Can I choose my appointment time?',
      a: 'Yes. Once your repair is approved, you choose the timeslots that suit you in the app. You can manage your appointments in the app under Appointments, or contact the helpdesk.',
      tbc: 'number of timeslots: "three or more" or "up to 5"',
    },
    {
      q: 'Where can I find information about my home?',
      a: 'The EVO Living App has a Documents section (for example your tenancy agreement and manuals) and an FAQs section with guidance on your home. What you see depends on what your landlord or property manager has shared.',
    },
    {
      q: 'Are your tradespeople qualified?',
      a: 'Yes. Every tradesperson is vetted, DBS-checked and qualified for the work. Gas engineers are Gas Safe registered and electricians are NICEIC members.',
    },
    {
      q: 'Will I know who is coming?',
      a: 'Yes. Once you have chosen your appointment, a local, accredited tradesperson is matched to the job and you are told who is coming in the app. On the day, you can track their arrival.',
    },
    {
      q: 'How do I know my data is safe?',
      a: 'The EVO platform uses Transport Layer Security (TLS) encryption with server authentication, so information passed between you and us is protected. EVO holds ISO 27001 certification for information security.',
    },
  ],
  'landlords-and-property-managers': [
    ...pricingFaqs,
    {
      q: 'Who do I contract with?',
      a: 'Your contract is directly with EVO. We provide the technology, the helpdesk, contractor management and the repairs as one service.',
    },
    {
      q: 'What if we already have a management contract?',
      a: 'EVO can work alongside an existing managing agent or letting agent contract for repairs and emergency response. Your property managers get direct access to the EVO Dashboard and our team.',
    },
    {
      q: 'Can we try EVO first?',
      a: 'Yes. Our 12-month pilot runs on homes you choose, goes live within 60 days and reports monthly KPIs from the first month.',
      link: { href: '/contact?enquiry=pilot', label: 'Talk about a 12-month pilot' },
    },
    {
      q: 'Do you provide a tenant find service?',
      a: 'No. EVO is a repairs and maintenance service. We do not provide lettings services.',
    },
    {
      q: 'What is the warranty period?',
      a: 'Every job comes with a 12-month warranty. If a repair fails inside the year, we come back and it costs you nothing.',
    },
    {
      q: 'Can you help with compliance?',
      a: 'Yes. Electrical Compliance Cover and Gas Boiler Cover can be added to any plan, covering EICRs, gas safety inspections, servicing and certification, with the records held in the EVO Dashboard.',
      link: { href: '/pricing', label: 'See compliance cover prices' },
    },
    {
      q: 'How do you check your tradespeople?',
      a: 'We work with around 100 vetted contractors, mostly small regional firms. Each one is checked for insurance, accreditation and competence before their first job, and anyone who falls below standard stops getting work. Trades are DBS-checked.',
    },
    {
      q: 'How do I know my data is safe?',
      a: 'The EVO platform uses Transport Layer Security (TLS) encryption with server authentication. EVO holds ISO 27001 certification for information security.',
    },
  ],
};

// Categories whose content has not been migrated yet show a placeholder.
export const faqsPendingMigration = ['trades-service', 'platform-information', 'company-information', 'terms-conditions'];
