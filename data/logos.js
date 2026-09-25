// Client, framework and accreditation logos.
// src: null means the file is still to come. The logo strip then shows the name in a
// neutral tile with a TBC tag, so nothing breaks. Drop the file into /public and set src.
//
// `withFiles` is what the homepage uses. Six of the eleven client logos are still
// placeholders, and a band of yellow TBC boxes directly under the headline figures
// undercuts the figures rather than supporting them. The full client list, placeholders
// and all, still appears on /about, which is where EVO wants to see what is outstanding.

export const clientLogos = [
  { name: 'B&D Reside', src: '/images/logos/clients/bd-reside.png', width: 320, height: 200 },
  { name: 'IDS', src: '/images/logos/clients/ids.png', width: 320, height: 200 },
  // TBC item 16: clean file to follow (the current logo shows a ghosted duplicate).
  { name: 'Thames Reach', src: '/images/logos/clients/thames-reach.png', width: 320, height: 200 },
  { name: 'Soho Housing', src: '/images/logos/clients/soho-housing.png', width: 320, height: 200 },
  { name: 'LRM', src: '/images/logos/clients/lrm.png', width: 320, height: 200 },
  { name: 'British Land', src: '/images/logos/clients/british-land.png', width: 320, height: 200 },
  { name: 'Capital Letters', src: '/images/logos/clients/capital-letters.png', width: 320, height: 200 },
  { name: 'Resonance', src: '/images/logos/clients/resonance.png', width: 320, height: 200 },
  // Added 24 Sep 2026 (addendum v2, section 1): recent wins.
  { name: 'Greenhill Housing', src: '/images/logos/clients/greenhill-housing.png', width: 551, height: 265 },
  { name: 'Storm Housing Group', src: '/images/logos/clients/storm-housing-group.png', width: 320, height: 200 },
  { name: 'J49', src: '/images/logos/clients/j49.png', width: 431, height: 440 },
];

// Only the logos we actually hold files for. Used on the homepage.
export const withFiles = (logos) => logos.filter((l) => l.src);

export const frameworkLogos = [
  { name: 'G-Cloud supplier', src: '/images/logos/accreditations/g-cloud.png', width: 600, height: 179 },
  {
    name: 'Crown Commercial Service supplier',
    src: '/images/logos/accreditations/crown-commercial-service.png',
    width: 600,
    height: 247,
  },
  // TBC item 13: keep only if EVO confirms these are current. Set show: true to display.
  { name: 'South East Consortium', src: '/images/logos/accreditations/south-east-consortium.png', width: 740, height: 204, show: true },
  { name: 'Procurement for Housing', src: '/images/logos/accreditations/procurement-for-housing.png', width: 575, height: 238, show: true },
];

export const accreditationLogos = [
  {
    name: 'ISO 9001, 14001 and 45001',
    src: '/images/logos/accreditations/iso-9001-14001-45001.png',
    width: 500,
    height: 205,
  },
  { name: 'ISO 27001', src: '/images/logos/accreditations/iso-27001.png', width: 600, height: 391 },
  {
    name: 'Constructionline Gold member',
    src: '/images/logos/accreditations/constructionline-gold.png',
    width: 270,
    height: 179,
  },
  { name: 'Acclaim Accreditation', src: '/images/logos/accreditations/acclaim.png', width: 357, height: 121 },
  { name: 'Property Redress Scheme', src: '/images/logos/accreditations/prs.webp', width: 600, height: 170 },
  { name: 'Cyber Essentials', src: null, tbc: 'logo file to follow' },
  { name: 'Living Wage Employer', src: null, tbc: 'logo file to follow' },
];

export const awardBadges = { src: '/images/awards/award-badges-light.png', width: 684, height: 99 };
