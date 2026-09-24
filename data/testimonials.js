// Written testimonials.
// Approved quotes (brief section 2) still need clearance for web use (TBC item 4).
// Set `cleared: true` once EVO confirms each one.

export const testimonials = {
  richardSmith: {
    quote:
      'Partnering with EVO has been a key step forward in advancing our digital transformation. After a successful pilot, we have now rolled it out across all 1,414 properties, which has helped us respond to repairs more quickly and efficiently whilst enhancing the quality of our services and the homes we provide.',
    name: 'Richard Smith',
    role: 'Director of Operations, IDS',
    cleared: false,
  },
  michaelWestbrook: {
    quote:
      'The digitisation of the repairs process is key, especially as our tenants are in employment and need an efficient repairs process that works around their job.',
    name: 'Michael Westbrook',
    role: 'Managing Director, B&D Reside',
    cleared: false,
  },
  garethBrown: {
    quote:
      'Performance and communication have turned around completely. Satisfaction is regularly over 90% and resident trust has grown hugely.',
    name: 'Gareth Brown',
    role: 'Head of Contract Management, IDS',
    cleared: false,
  },
  rebeccaJoseph: {
    quote: 'I was pleased to get regular updates. Thank you EVO.',
    name: 'Rebecca Joseph',
    role: 'IDS resident',
    cleared: false,
  },
  craigJackson: {
    quote:
      'Over the past year we have had a 30% increase in retention... This is due to us bringing EVO on board and the technological advancements they have introduced.',
    name: 'Craig Jackson',
    role: 'Property Manager, LRM',
    cleared: false,
    // TBC item 4 CLOSED (24 Sep 2026). The portfolio is British Land's; LRM is the
    // managing agent; Craig Jackson is LRM's property manager and is the person who
    // said it. Both earlier sources were right about different parties. The current
    // homepage's "Property Manager, British Land" is the one that is wrong.
    // `cleared` stays false: written sign-off for web use is a separate item.
  },
};

// The regulator quote is a published judgement, attributed exactly as the brief sets out.
export const regulatorQuote = {
  quote:
    'IDS has taken action to improve delivery of its repairs and maintenance services, although further work is necessary to ensure this is available to all tenants and can be evidenced through improved outcomes. Through closer working with its contractors and the introduction of a new piloted repairs service, we saw evidence of improvement. Plans are now in place to roll out this approach across its remaining estates.',
  name: 'Regulator of Social Housing',
  role: 'Regulatory judgement on IDS, October 2024',
  cleared: true,
};

// Moved from the homepage to /sectors/landlords (brief HOME, "Remove from the homepage").
// These are already live on the current site.
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

// Video testimonials (HOME-03). Do not publish a slot until every field is filled.
// Vimeo is the host (same as the existing explainer). Add the Vimeo ID, poster image
// (put it in /public/images/video/) and transcript page or file URL.
export const videoTestimonials = [
  { id: 'VT-1', vimeoId: null, name: null, title: null, organisation: null, pullQuote: null, poster: null, transcript: null },
  { id: 'VT-2', vimeoId: null, name: null, title: null, organisation: null, pullQuote: null, poster: null, transcript: null },
  { id: 'VT-3', vimeoId: null, name: null, title: null, organisation: null, pullQuote: null, poster: null, transcript: null },
];

export function isVideoReady(v) {
  return ['vimeoId', 'name', 'title', 'organisation', 'pullQuote', 'poster', 'transcript'].every((k) => Boolean(v[k]));
}

// The 90-second explainer (Vimeo 782482168) moves to /how-it-works (TBC item 6).
export const explainerVideo = {
  vimeoId: '782482168',
  title: 'EVO explainer video',
};
