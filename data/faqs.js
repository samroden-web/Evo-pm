// FAQs. Answers can contain a `tbc` note, which shows as a TBC tag while SHOW_TBC is on.
import { pricingFaqs } from './plans';
import { apps } from './site';

const REGISTRATION_URL = apps.living.registration;

export const faqCategories = [
  { slug: 'residents', label: 'Residents' },
  {
    slug: 'landlords-and-property-managers',
    label: 'Landlords and property managers',
  },
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
      link: {
        href: REGISTRATION_URL,
        label: 'Register for the EVO Living App',
        external: true,
      },
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
      link: {
        href: '/how-to-guides/reporting-an-emergency',
        label: 'Step-by-step guide to reporting an emergency',
      },
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
      link: {
        href: '/contact?enquiry=pilot',
        label: 'Talk about a 12-month pilot',
      },
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
  'trades-service': [
    {
      q: 'Who do I contract with?',
      a: 'Your job contract is directly with EVO as we act on behalf of Landlords and Property Managers, assisting their residents with repairs and services. Evo is the customer and recipient of any services you provide to us via our platform. Note that only our support team have authority to instruct any works that you ultimately carry out for us.',
    },
    {
      q: 'How long is the standard contract?',
      a: 'The contract offered is on a job-by job basis. Jobs are issued via our platform to the marketplace based on skill, location and time of day. Upon registration you will select the skills that match the service that you wish to provide and can be edited at any time. Some skills require specific qualifications and accreditations such as GasSafe for heating engineers and NICEIC (or equivalent) for electrical works.',
    },
    {
      q: 'How do I receive jobs?',
      a: 'Jobs issued to the marketplace platform using our CrowdFix feature and will appear as New Jobs on your Service Provider app provided that the job meets your skills, operating area and operating time. You may (from time to time) be assigned specific jobs directly if you are an approved and specified provider.',
    },
    {
      q: 'What about out-of-hours jobs?',
      a: 'You can elect to receive emergency jobs via your app settings under Availability & Settings. Here you can set your normal working hours, and change the notification tones received for standard jobs and emergency jobs. If you have selected that you are available for out-of-hours emergency jobs they will appear on the Service Provider App. Emergency Jobs must be attended to within 2 hours of acceptance.',
    },
    {
      q: 'Do I have to pay any set fees when providing my services through EVO?',
      a: 'No, we do not charge a commission on jobs. EVO provide a rate card that we pay for each skill, area and time based on 1st hour then per minute thereafter. Some jobs are fixed price and/or fixed time; however, you will be notified of these before accepting the job.',
    },
    {
      q: 'What are the benefits for me joining EVO?',
      a: 'Not only will you have access to many additional jobs in your local area, completing more jobs and opting-in for Automatic Self Billing means you will not have to invoice us for the works completed and streamlines payment terms, meaning you get paid quicker. Along with additional jobs, our system automatically monitors all jobs on acceptance rate, success and completion time to ensure our best Service Professionals get the most jobs. Remember with EVO our job notifications are real jobs not time wasting leads.',
    },
    {
      q: 'When do I get paid for jobs carried out?',
      body: [
        'Dependent on the services you provide our standard payment terms are 30 days from payment notification. If applicable, you can opt-in for automatic Self-Billing which will include you in our weekly payment run ensuring payments within 15-21 days of successful job completion in app.',
        'The payment received will represent either the fixed price for the job or the time worked on a job by job basis plus any approved expenses uploaded through your EVO Services App.',
      ],
    },
    {
      q: 'How do I get paid?',
      a: 'We make payments to our service providers via FASTER PAYMENT direct to your bank.',
    },
    {
      q: 'If I have to provide materials, how are these reimbursed?',
      a: 'Parts and materials used are uploaded through the app on job completion. All expenses are verified by our back-office staff to ensure compliance and protect against fraud. Accepted expenses for materials are included within your payment.',
    },
    {
      q: 'Do I need to hold any qualifications, accreditations or licences to join EVO?',
      a: 'This depends on the jobs that you wish to accept. If you wish to carry out gas works then you must be GasSafe, as such NICEIC (or equivalent) for electrical works. Depending on your particular skill and business sector contractors may need to provide a valid in date basic DBS check, and for some clients a full enhanced DBS is required. Contractors must hold a minimum public liability insurance of £2 million. We also require you to upload your driving licence for identification and your bank details for automatic settlement of payment.',
      link: {
        href: apps.trades.appStore,
        label: 'Download the EVO Services App',
        external: true,
      },
    },
    {
      q: 'How do I know my data is safe?',
      a: 'Our mobile apps and platform utilise some of the most advanced technology for Internet security available today. When you access our site using a supported web browser, Transport Layer Security (TLS) and Secure Socket Layer (SSL) technology protects your information using both server authentication and data encryption. On any of our sites you will see a small lock icon in the address bar of your browser display, indicating that a secure connection has been established to our servers.',
    },
  ],
  'platform-information': [
    {
      q: 'How does EVO keep our data secure?',
      body: [
        "We make it a priority to take our users' security, privacy, and data integrity concerns seriously. We strive to ensure that user data is kept securely, backed up safely and that we collect only as much personal data as is required to provide our services to users in an efficient and effective manner.",
        'EVO uses some of the most advanced technology for Internet security that is commercially available today. This Security Statement and backup policy is aimed at being transparent about our security and integrity infrastructure and practices, to help reassure you that your data is appropriately protected. Our full Security Statement and backup policy is available on request.',
        "EVO is registered with the Information Commissioner's Office (ICO) Registration No. ZB172988 with the Data Protection Officer (DPO) being Steven Rae.",
      ],
      tbc: 'the Security Statement and backup policy document, so it can be linked here rather than requested',
    },
    {
      q: 'Which third parties process our data?',
      body: [
        'Evo Digital Technologies Limited (Evo) engages with a set of subprocessors to provide our services. A subprocessor is a third-party data processor engaged by Evo who has, potentially will have access to, or who will process Evo service data (which may contain personal data).',
        'Evo works with the following third parties to provide specific functionality as part of our services. As part of this functionality, these services have or potentially will have access to or process Evo service data.',
        'Below you will find links to external websites. Although we make every effort to ensure these links are accurate, up to date and relevant, Evo cannot take responsibility for pages maintained by external providers.',
        'Evo is not responsible for the contents, credibility nor accessibility of the linked websites and does not necessarily endorse the views expressed within them. Listing shall not be taken as endorsement of any kind.',
        'Third Party Processors List:',
        '- Aircall - Voice & Communications Provider (Ireland)',
        '- Apple - General Business Services (United States, Ireland)',
        '- DocuSign - Document Sharing and Digital Signatures (United States)',
        '- FrontApp - Email and Communications Management (United States)',
        '- GoCardless - Direct Debit Processing (United Kingdom)',
        '- Google - General Business Services (United States, Ireland)',
        '- Google Cloud Platform - Cloud Service Provider (United States, Ireland)',
        '- Microsoft - General Business Services (United States)',
        '- Revolut - Payment Infrastructure Provider (United Kingdom)',
        '- Slack - Internal Communication Tool (United States)',
        '- Stripe - Payment Infrastructure Provider (United States)',
        '- Twilio Sendgrid - Voice and Messaging Service Provider (United States)',
        '- Xero - Accounting (New Zealand)',
        '- Your TradeBase - Estimation Management (United Kingdom)',
        '- Zoom - Video Conferencing & Communications (United States)',
        '- Zoho - CRM (United States)',
        'Updates: Information correct as of 1 April 2024',
      ],
      tbc: 'this subprocessor list is dated 1 April 2024. UK GDPR expects it to be current, and it is one of the first things an information governance team checks, so it needs reviewing before launch',
    },
  ],
  'company-information': [
    {
      q: 'Which EVO company am I dealing with?',
      body: [
        'EVOAI LIMITED is a private company limited by shares. Incorporated in England and Wales with company registration number 11453099.',
        'EVOAI LIMITED is a holding company for our subsidiary trading entities which form the EVO group of companies. We use a number of different brands to promote our business operations. Generally we are simply known as EVO.',
        'All digital products, service plans and software solutions are provided by EVO Digital Technologies Limited with company registration number 11477247.',
        'Our official registered office is located at 4th Floor, 100 Fenchurch Street, London EC3M 5JD. VAT Registration No. GB367308775',
        "EVO is registered with the Information Commissioner's Office (ICO) Registration No. ZB172988 with the Data Protection Officer (DPO) being Steven Rae.",
        'All repairs, maintenance, servicing and larger works are provided through our UK wide network of accredited trades partners. The connected house device is a registered trademark of EVOAI LIMITED and is our official logo used to promote our brand across all our businesses.',
      ],
    },
    {
      q: 'How do I contact EVO?',
      body: [
        'Main Telephone +44 (0)20 8691 9293',
        'Telephone calls made into and out of our offices may be recorded for quality and training purposes.',
        'Official SMS Number +44 (0)7441 471580',
        'Received messages will be replied to with an automated confirmation message.',
        'Any voice calls made to this number are automatically diverted to our main telephone number.',
        'Official WhatsApp Number +44 (0)7723 502080',
        'We are able to receive and reply to WhatsApp messages, however we are not able to initiate outbound messages due to restrictions applied by WhatsApp. All received messages are replied to with an automated confirmation message. This number does not accept Voice calls.',
        'Official Email: hello@evo-pm.com',
        'All official email communications sent from EVO will only come from the evo-pm.com domain. Any views expressed in the messages are those of the individual sender, except where specifically stated, and may not reflect the views of the Company.',
        'Digital Platforms',
        'evo-pm.com is where our products live, and it is common practice for companies to choose different domains, or sub-domains for sending emails and hosting landing pages. Doing so allows us to protect the original domain from security threats. Our platform resides on and can be accessed by visiting https://app.evo-pm.com',
        'Payments',
        'Our digital payment form is provided by Revolut and can be accessed here',
        'Social Media Channels',
        'Our official Facebook page is located at fb.com/evoprop',
        'Our official Twitter page is located at twitter.com/evo_pm',
        'Our official LinkedIn page is located at linkedin.com/company/9366607',
        'Our official YouTube channel is located at youtube.com/@evo-pm',
      ],
    },
    {
      q: 'Where is EVO based?',
      body: [
        'EVO',
        'STC House',
        '7 Elmfield Road',
        'Bromley BR1 1LT',
        'By appointment only.',
        'The closest station is less than a 3 minute walk from Bromley South with fast direct trains from London Victoria in under 20 minutes.',
        'On Street Parking is available outside and there are many multi-story carparks within a 5 minute walk.',
      ],
    },
    {
      q: 'What accreditations and registrations does EVO hold?',
      body: [
        'Evo are duly registered with the following government bodies and trade associations for the following schemes.',
        '- PRS - PRS013045',
        '- ICO - ZB172988',
        '- ISO 9001 - 379312022',
        '- ISO 14001 - 379312022',
        '- ISO 45001 - 379312022',
        '- ISO 27001 - 399882022',
        '- ConstructionLine - 1208510',
        '- Acclaim - 1208510',
        '- Social Value - 1208510',
        '- NAPIT - NAP/61569/21/1',
      ],
      tbc: 'Constructionline tier (Gold or Silver) against registration 1208510, and whether the ISO certificate numbers are still current',
    },
  ],
  'terms-conditions': [
    {
      q: 'How does a resident request an emergency response?',
      a: 'If a resident has an issue that requires urgent assistance, they can report this through the EVO Living App using the Emergency button. Events of this category are automatically assigned to the nearest accredited tradesman 24 hours a day.',
    },
    {
      q: "What is EVO's 24/7 Safe & Secure Response service?",
      body: [
        "EVO's 24/7 Safe & Secure Response service is a dedicated emergency response service provided to the residents of EVO's customers.",
        "An emergency is deemed as 'a sudden state of danger requiring immediate attention'. This is further clarified as a danger to the property or occupants such as a burst pipe, internal flood, lack of facilities to the only available toilet or the inability to secure any exterior doors or windows which would compromise the security of the property.",
      ],
    },
    {
      q: 'What are the out-of-hours service objectives?',
      a: 'Operatives will aim to first time fix where they can as they all carry an extensive van stock, but in the event this is not possible, the operative will make safe.',
    },
    {
      q: 'Which services are covered out of hours?',
      body: [
        'The 24/7 Safe & Secure Response service currently covers:',
        '- Plumbing',
        '- Carpentry',
        '- Locksmith',
        '- Gas and heating',
        '- Electrics',
        '- Drainage',
        '- Door entry',
        '- Fire alarms',
        '- Water delivery',
        '- Temporary heating',
      ],
    },
    {
      q: 'How is out-of-hours work charged?',
      a: 'During normal operating hours (8am to 5pm, Monday to Friday) every emergency response job is charged at your standard contracted rate for services, as set out in your service plan. Work outside those hours carries an agreed uplift on your contracted rate, also set out in your service plan.',
      tbc: 'whether to publish the out-of-hours uplift percentages here. They are on the current site and have been verified word for word, but they sit alongside rate card material that is not for publication, so this is a commercial decision rather than a migration one',
    },
    {
      q: 'What is excluded from the 24/7 Safe & Secure Response service?',
      a: 'Key exclusions include: events within the first 72 hours of service inception; pre-existing faults or issues; wilful negligence or faulty workmanship; properties left unoccupied for over 30 consecutive days; and non-operational appliances (such as cookers, ovens, fridges etc).',
      tbc: 'the full Schedule 1 (what qualifies as an emergency), Schedule 2 (general terms) and Schedule 3 (exclusions), plus the Living App, Services App and Customer terms. These are contractual documents and should come from the legal originals rather than be lifted off the live page',
    },
  ],
};

// All six categories are now migrated: the four that had been standing on production as
// a yellow placeholder came across from evo-pm.com on 25 September 2026. What is still
// outstanding inside them is marked with a per-answer `tbc` note instead, so the pages
// are real and the gaps are specific.
export const faqsPendingMigration = [];
