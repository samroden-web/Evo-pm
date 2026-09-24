// Resident guides (brief Appendix C). Rebuilt from the PDFs as web pages.

export const livingAppGuide = {
  slug: 'using-the-evo-living-app',
  title: 'How to use the EVO Living App',
  intro:
    'The EVO Living App lets you report a problem, ask for emergency help, manage your appointments, and see documents and FAQs about your home.',
  pdf: '/downloads/how-to-use-the-evo-living-app.pdf',
  steps: [
    { title: 'Tap "Report a Problem"', text: 'On the app home screen, tap "Report a Problem".' },
    {
      title: 'Choose the category',
      text: 'Select the category. If the issue does not fit one, scroll down and select "Something else".',
    },
    { title: 'Describe it and add a photo', text: 'Give as much detail as possible and add a photo.' },
    {
      title: 'Get your reference number',
      text: 'Once the report is submitted, you get a confirmation and a reference number.',
    },
    {
      title: 'Choose your timeslots',
      text: 'Once the repair is approved, choose the timeslots that suit you.',
      tbc: 'number of timeslots: "three or more" or "up to 5"',
    },
    {
      title: 'Use our key solution if no one is home',
      text: 'If no one can be home, use our key solution: leave your keys at a safe, verified location for the tradesperson to collect and return when the repair is done.',
    },
    {
      title: 'See who is coming',
      text: 'An accredited, vetted tradesperson is matched to the appointment, and you are told who is coming.',
    },
    {
      title: 'Track the repair and tell us how it went',
      text: 'On the day, track where the tradesperson is and the status of the repair. When the job is done, you are asked to complete a short satisfaction survey.',
    },
  ],
  alsoInApp: [
    'Documents and user guides',
    'Answers to frequently asked questions',
    'The How to Rent checklist',
    'Your past and upcoming appointments',
  ],
};

export const emergencyGuide = {
  slug: 'reporting-an-emergency',
  title: 'Reporting an emergency in the EVO Living App',
  intro:
    'Report a property emergency in the EVO Living App without hunting for callout numbers or old paperwork. Emergency requests are logged and approved straight away, 24 hours a day.',
  pdf: '/downloads/solving-property-emergencies-with-the-evo-app.pdf',
  steps: [
    { title: 'Tap "Emergency"', text: 'On the app home screen, tap "Emergency".' },
    { title: 'Confirm it is an emergency', text: 'Read the notice and tap continue to confirm it is an emergency.' },
    { title: 'Choose the category', text: 'Select the category.' },
    { title: 'Describe it and add a photo', text: 'Give as much detail as possible and add a photo.' },
    {
      title: 'Send your request',
      text: 'Tap "Send request". Your job is logged and approved straight away, and our emergency response team will attend as soon as possible. While you wait, we may arrange a video call to see if the issue can be fixed remotely.',
    },
  ],
};

// C.3 The full EVO process (How it works graphic)
export const fullJourney = [
  { who: 'Resident', text: 'Residents download the EVO Living App and are verified.' },
  { who: 'Resident', text: 'Residents can open documents and FAQs that help them understand their home.' },
  { who: 'Resident', text: 'Repairs are reported quickly and easily, as they happen.' },
  {
    who: 'EVO',
    text: 'The repair is approved, the resident picks appointment slots, and the job is matched to the next available, suitably qualified tradesperson.',
  },
  { who: 'EVO', text: 'A video call may be set up to resolve the issue remotely, or to help the resident fix it themselves.' },
  {
    who: 'Trades',
    text: 'The tradesperson accepts the job in the EVO Trades App and sends arrival updates to the resident on the day.',
  },
  {
    who: 'Trades',
    text: 'When the job is done, the tradesperson adds completion notes, photos and video, so there is a clear record of the work.',
  },
  { who: 'EVO', text: "The job goes through EVO's quality checks and is signed off." },
  { who: 'EVO', text: "EVO's customer satisfaction team surveys the resident on how the job was handled." },
  { who: 'Landlord', text: 'The landlord sees all job data, management information and KPIs in the EVO Dashboard.' },
];
