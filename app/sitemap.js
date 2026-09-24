import { SITE_URL } from '@/data/site';
import { insights } from '@/data/insights';
import { faqCategories } from '@/data/faqs';

const staticRoutes = [
  '',
  '/how-it-works',
  '/pricing',
  '/who-we-help/housing',
  '/who-we-help/build-to-rent',
  '/who-we-help/landlords-and-agents',
  '/damp-and-mould',
  '/case-studies',
  '/case-studies/ids',
  '/case-studies/bd-reside',
  '/about',
  '/about/what-we-do',
  '/about/why-we-do-it',
  '/about/who-we-are',
  '/about/trust',
  '/products',
  '/products/living-app',
  '/products/trades-app',
  '/products/dashboard',
  '/insights',
  '/insights/newsletters',
  '/residents',
  '/trades',
  '/how-to-guides',
  '/how-to-guides/using-the-evo-living-app',
  '/how-to-guides/reporting-an-emergency',
  '/contact',
  '/renters-rights-guide',
  '/partners',
  '/careers',
  '/investors',
  '/terms-of-use',
  '/privacy-policy',
];

export default function sitemap() {
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now })),
    ...faqCategories.map((c) => ({ url: `${SITE_URL}/faqs/${c.slug}`, lastModified: now })),
    ...insights.map((a) => ({ url: `${SITE_URL}/insights/${a.slug}`, lastModified: a.date ? new Date(a.date) : now })),
  ];
}
