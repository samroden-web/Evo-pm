// Written testimonials.
//
// CLEARANCE: confirmed by Sam on 25 September 2026 for every quote in this file,
// including the three added that day from the brochure and the proposal (Matthew
// Lismore, Daniel O'Mahoney and Nasir) and the IDS internal audit line. That closes
// TBC item 4 and the clearance list in the brochure's second-round review.
//
// The audit line is worth a note of its own: it is a finding from IDS's internal audit
// rather than a quote given for publication, so the permission that matters there is
// IDS's, not the speaker's. Recorded as cleared on Sam's confirmation.

export const testimonials = {
  richardSmith: {
    quote:
      'Partnering with EVO has been a key step forward in advancing our digital transformation. After a successful pilot, we have now rolled it out across all 1,414 properties, which has helped us respond to repairs more quickly and efficiently whilst enhancing the quality of our services and the homes we provide.',
    name: 'Richard Smith',
    role: 'Director of Operations, IDS',
    cleared: true,
  },
  michaelWestbrook: {
    quote:
      'The digitisation of the repairs process is key, especially as our tenants are in employment and need an efficient repairs process that works around their job.',
    name: 'Michael Westbrook',
    role: 'Managing Director, B&D Reside',
    cleared: true,
  },
  garethBrown: {
    quote:
      'Performance and communication have turned around completely. Satisfaction is regularly over 90% and resident trust has grown hugely.',
    name: 'Gareth Brown',
    role: 'Head of Contract Management, IDS',
    cleared: true,
  },
  rebeccaJoseph: {
    quote:
      'The contractor who attended was friendly, professional, had a nice smile and a job well done. I was pleased to get regular updates. Thank you EVO.',
    name: 'Rebecca Joseph',
    role: 'IDS resident',
    cleared: true,
  },
  craigJackson: {
    quote:
      'Digital is the way forward. Over the past year we have had a 30% increase in retention. This is a big customer service result for us as tenants who are happy in a property are not moving as much. This is due to bringing EVO on board and the technological advancements they have introduced.',
    name: 'Craig Jackson',
    role: 'Property Manager, LRM',
    cleared: true,
    // TBC item 4 CLOSED (24 Sep 2026). The portfolio is British Land's; LRM is the
    // managing agent; Craig Jackson is LRM's property manager and is the person who
    // said it. Both earlier sources were right about different parties. The current
    // homepage's "Property Manager, British Land" is the one that is wrong.
    // `cleared` stays false: written sign-off for web use is a separate item.
  },

  // ---- Added 25 September 2026, from the 12-page brochure (v2, May 2026) and the
  // Client Proposal Template v9. None of these were on the site or in this file.

  richardSmithPartnership: {
    quote:
      "It's a true partnership built on openness and innovation. Together we're shaping a service that genuinely responds to residents' needs.",
    name: 'Richard Smith',
    role: 'Director of Operations, IDS',
    cleared: true,
  },
  michaelWestbrookLong: {
    quote:
      "The digitisation of the repairs process is key to ensuring no one is left behind. EVO's technology allows us to gather data that will help us continue to improve customer experience, predict trends and ultimately budget more accurately.",
    name: 'Michael Westbrook',
    role: 'Managing Director, B&D Reside',
    cleared: true,
  },
  // The residents' association voice. Different from a landlord and much harder to
  // dismiss — the gap review flagged it as missing from the site entirely.
  matthewLismore: {
    quote: 'This is not a step change in RMS delivery, this is a staircase change!',
    name: 'Matthew Lismore',
    role: 'Weavers Quarter Residents Association, B&D Reside',
  },

  // Residents. Named, and each one about a specific repair rather than the service in
  // the abstract, which is what makes them worth publishing.
  danielOMahoney: {
    quote:
      'The companies you used were really good — excellent service. My toilet is fixed and the guys you sent were fantastic. EVO you are the best!',
    name: "Daniel O'Mahoney",
    role: 'IDS resident',
    cleared: true,
  },
  nasir: {
    quote:
      'Since you have taken over the estate you guys are doing fantastic work. You are really informative and I hope that you stay forever.',
    name: 'Nasir',
    role: 'B&D Reside resident',
    cleared: true,
  },
  residentApp: {
    quote:
      'Last week I used the EVO App to request help with my kitchen sink drainage. It was very easy to use the app by giving a description of the problem plus photos. I was impressed. Thank you.',
    name: 'Resident',
    role: 'Reported through the EVO Living App',
    cleared: true,
  },
};

// Not a testimonial: a finding from the client's own internal audit of the partnership.
// Third-party validation of the evidence trail, which is the hardest thing on the
// Compliance page to prove. From the 12-page brochure.
export const internalAudit = {
  quote: 'Very robust compared to other organisations in the sector.',
  name: 'Internal audit of the EVO and IDS partnership',
  role: 'Quoted in the EVO corporate brochure',
  cleared: true,
};

// The regulator quote is a published judgement, attributed exactly as the brief sets out.
export const regulatorQuote = {
  quote:
    'IDS has taken action to improve delivery of its repairs and maintenance services, although further work is necessary to ensure this is available to all tenants and can be evidenced through improved outcomes. Through closer working with its contractors and the introduction of a new piloted repairs service, we saw evidence of improvement. Plans are now in place to roll out this approach across its remaining estates.',
  name: 'Regulator of Social Housing',
  role: 'Regulatory judgement on IDS, October 2024',
  cleared: true,
};

// Moved off the homepage (brief HOME, "Remove from the homepage") and now shown on
// /who-we-help/landlords-and-agents, which is the audience they were written by.
//
// These seven are already published on evo-pm.com today, so they carry no `cleared`
// flag: the clearance question is whether EVO may publish them on the web, and EVO is
// publishing them on the web.
export const landlordTestimonials = [
  {
    quote: 'Great communication and service. Genuinely delighted and far outperforms others in this space. Highly recommended!',
    name: 'Andrew Milsom',
    role: 'Private landlord',
  },
  {
    quote:
      "They're fast, professional, easy to contact, and their prices seem very reasonable. We still use them now to address any issues that come up in our UK flats. All-in-all, they've been brilliant",
    name: 'Simon Craig',
    role: 'Private landlord',
  },
  {
    quote:
      "As an overseas landlord, it's very important to have someone you trust with your property completely. Great service, communication and workmanship.",
    name: 'Jean',
    role: 'Private landlord in Ireland',
  },
  {
    quote: 'Extremely professional service! Work is completed in a timely manner & to a high standard!',
    name: 'Carol',
    role: 'Property Manager, Nelsons',
  },
  {
    quote:
      'Fast efficient service and friendly staff. Work is completed to a high standard and they normally attend to things within a couple of days',
    name: 'Rick',
    role: 'London landlord',
  },
  {
    quote:
      'A wonderful company to deal with. All the way from the director to the front desk, absolute professionalism, efficiency and you get what you pay for with these guys - which is quality!',
    name: 'Tamer',
    role: 'Property Manager, Conran',
  },
  {
    quote:
      "Evo truly deserves all five stars! As a private landlord, I've used other property managing agents before but I've never come across someone as friendly and helpful as Debbie!",
    name: 'Yeo',
    role: 'London landlord',
  },
];

// Video testimonials: replaced by the resident vox pop reel.
//
// The brief specified two or three landscape client videos and the build carried three
// empty TBC slots. What EVO actually has is one reel — 2 min 19 sec, shot vertical, of
// residents talking about the app in their own homes. Three landscape cards is the
// wrong container for that, so components/ResidentVideo.jsx plays the single reel
// instead and the empty slots are gone.
//
// The file lives at /public/video/evo-resident-voxpop.mp4 (11MB, 720x1280, compressed
// from a 512MB master) rather than on Vimeo, which avoids a third-party player and its
// consent banner for the sake of one clip.

// The 90-second explainer (Vimeo 782482168) moves to /how-it-works (TBC item 6).
export const explainerVideo = {
  vimeoId: '782482168',
  title: 'EVO explainer video',
};
