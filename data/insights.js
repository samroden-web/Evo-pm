// Insights articles.
// The slugs match the current site so existing links keep working.
// Article bodies still need to be migrated from the current CMS: paste each article's
// text into `body` (an array of paragraphs, or ['## Heading', 'Paragraph', ...]) and
// add the cover image to /public/images/insights/<slug>.webp and set `image`.

export const insightTags = ['Social housing', 'Private landlords', 'EVO news', 'Damp and mould', 'Newsletters'];

export const insights = [
  {
    slug: 'managing-the-impact-of-drought-on-social-housing',
    title: 'Managing the Impact of Drought on Social Housing',
    date: '2026-08-19',
    excerpt:
      'Drought might first appear to be an environmental or water supply issue, but prolonged dry conditions can have much wider consequences for social housing.',
    tags: ['Social housing'],
    image: '/images/insights/managing-the-impact-of-drought-on-social-housing.webp',
    body: null,
  },
  {
    slug: 'repairs-culture-in-social-housing-why-2026-is-a-turning-point',
    title: 'Repairs Culture in Social Housing: Why 2026 is a Turning Point',
    date: '2026-07-23',
    excerpt:
      'Repairs are one of the clearest tests of trust in social housing. When they are delayed or left unresolved, trust can quickly break down.',
    tags: ['Social housing'],
    image: '/images/insights/repairs-culture-in-social-housing-why-2026-is-a-turning-point.webp',
    body: null,
  },
  {
    slug: 'ai-in-social-housing-delivering-efficiency-with-empathy',
    title: 'AI in Social Housing: Delivering Efficiency with Empathy',
    date: '2026-06-22',
    excerpt: null,
    tags: ['Social housing'],
    image: '/images/insights/ai-in-social-housing-delivering-efficiency-with-empathy.webp',
    body: null,
    // TBC item 18: the article quotes repairs spend of "around £9 billion". The latest figure is £10.0bn.
    tbc: 'update the £9bn figure to £10.0bn if EVO agrees',
  },
  {
    slug: 'how-housing-associations-can-evidence-repairs-compliance',
    title: 'How Housing Associations Can Evidence Repairs Compliance',
    date: '2026-03-25',
    excerpt:
      "Repairs compliance is becoming increasingly challenging to manage, not because the work isn't being done, but because it cannot always be clearly evidenced.",
    tags: ['Social housing', 'Damp and mould'],
    image: '/images/insights/how-housing-associations-can-evidence-repairs-compliance.webp',
    body: null,
  },
  {
    slug: 'reactive-vs-planned-repairs-in-social-housing-how-landlords-can-reduce-reactive-maintenance-costs',
    title: 'Reactive vs Planned Repairs in Social Housing',
    date: '2026-03-20',
    excerpt: null,
    tags: ['Social housing'],
    image: '/images/insights/reactive-vs-planned-repairs-in-social-housing-how-landlords-can-reduce-reactive-maintenance-costs.webp',
    body: null,
  },
  {
    slug: 'end-of-tenancy-cleaning-laws-uk-2026-guide-for-housing-associations',
    title: 'End of Tenancy Cleaning Laws UK: 2026 Guide',
    date: '2026-03-16',
    excerpt: null,
    tags: ['Social housing'],
    image: '/images/insights/end-of-tenancy-cleaning-laws-uk-2026-guide-for-housing-associations.webp',
    body: null,
  },
  {
    slug: 'a-wetter-england-how-social-landlords-can-future-proof-properties-against-persistent-rainfall',
    title: 'A Wetter England: Future-Proofing Properties Against Persistent Rainfall',
    date: '2026-02-24',
    excerpt: null,
    tags: ['Social housing', 'Damp and mould'],
    image: '/images/insights/a-wetter-england-how-social-landlords-can-future-proof-properties-against-persistent-rainfall.webp',
    body: null,
  },
  {
    slug: 'the-renters-rights-act-what-uk-landlords-need-to-know-and-how-to-prepare',
    title: 'The Renters Rights Act: What UK Landlords Need to Know',
    date: '2026-02-16',
    excerpt: "The Renters Rights Act represents the most significant reform of England's private rented sector in decades.",
    tags: ['Private landlords'],
    image: '/images/insights/the-renters-rights-act-what-uk-landlords-need-to-know-and-how-to-prepare.webp',
    body: null,
  },
  {
    slug: 'ids-evo-transforming-repairs-and-maintenance-through-digital-partnership',
    title: 'IDS & EVO: Transforming Repairs and Maintenance Through Digital Partnership',
    date: '2026-01-06',
    excerpt: null,
    tags: ['EVO news', 'Social housing'],
    image: '/images/insights/ids-evo-transforming-repairs-and-maintenance-through-digital-partnership.webp',
    body: null,
  },
  {
    slug: 'ids-and-evo-s-transformative-partnership-is-recognised-at-the-housing-executive-awards',
    title: "IDS and EVO's Transformative Partnership is Recognised at the Housing Executive Awards",
    date: '2025-10-17',
    excerpt: null,
    tags: ['EVO news'],
    image: '/images/insights/ids-and-evo-s-transformative-partnership-is-recognised-at-the-housing-executive-awards.webp',
    body: null,
  },
  {
    slug: 'window-safety-locks-improving-safety-in-social-housing-blocks',
    title: 'Window Safety Locks: Improving Safety in Social Housing Blocks',
    date: '2025-10-06',
    excerpt: null,
    tags: ['Social housing'],
    image: '/images/insights/window-safety-locks-improving-safety-in-social-housing-blocks.webp',
    body: null,
  },
  {
    slug: 'what-is-the-meaning-of-fair-wear-and-tear',
    title: 'What Is The Meaning of Fair Wear and Tear?',
    date: '2025-08-20',
    excerpt: null,
    tags: ['Private landlords'],
    image: '/images/insights/what-is-the-meaning-of-fair-wear-and-tear.webp',
    body: null,
  },
  {
    slug: 'bd-reside-and-evo-win-at-the-housing-digital-awards',
    title: 'B&D Reside and EVO Win at the Housing Digital Awards',
    date: null, // TBC: date from the current site
    excerpt: null,
    tags: ['EVO news'],
    image: null,
    body: null,
  },
  // The remaining older articles (pages 2 to 7 of the current Insights page) still need adding.
];

// Suggested new article (brief 6.13). EVO to supply the text. Not published until body exists.
export const suggestedArticles = [
  {
    slug: 'awaabs-law-phase-2-what-changes-on-30-november-2026',
    title: "Awaab's Law phase 2: what changes on 30 November 2026",
    tags: ['Damp and mould', 'Social housing'],
  },
];

export function sortedInsights() {
  return [...insights].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function formatDate(iso) {
  if (!iso) return null;
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
