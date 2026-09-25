// The EVO newsletter archive, as listed in evo-pm.com/sitemap.xml on 25 September 2026.
//
// WHY THERE IS NO CONTENT HERE.
// All 34 newsletter pages on the current site return a 500 server error. The page shell
// renders — Sam confirmed he sees a title and a photograph — but the newsletter itself
// never appears. That is a live fault on the current site, not something the rebuild
// introduced, and it means there is nothing to migrate: a crawler asking for any of
// these URLs today gets an error, so they carry no search value to preserve either.
//
// What this file does is keep the record. Every issue is listed with its number, its
// month and its original URL, so nothing is quietly lost. The old URLs 301 to the
// archive page rather than 404ing.
//
// TO RESTORE THE CONTENT: these went out by email, so the original copy almost
// certainly still exists in the sending platform's campaign archive. Add `body` to an
// entry (same block format as data/insights.js) and set `restored: true`, and it
// becomes a real page at /insights/newsletters/<slug> with its own link from the list.

export const newsletters = [
  { n: 1, slug: 'newsletter-1-september-2023', label: 'September 2023', date: '2023-09-01' },
  { n: 2, slug: 'newsletter-2-october-2023', label: 'October 2023', date: '2023-10-01' },
  { n: 3, slug: 'newsletter-3-november-2023', label: 'November 2023', date: '2023-11-01' },
  { n: 4, slug: 'newsletter-4-december-2023', label: 'December 2023', date: '2023-12-01' },
  { n: 5, slug: 'newsletter-5-january-2024', label: 'January 2024', date: '2024-01-01' },
  { n: 6, slug: 'newsletter-6-february-2024', label: 'February 2024', date: '2024-02-01' },
  { n: 7, slug: 'newsletter-7-march-2024', label: 'March 2024', date: '2024-03-01' },
  { n: 8, slug: 'newsletter-8-april-2024', label: 'April 2024', date: '2024-04-01' },
  { n: 9, slug: 'newsletter-9-may-2024', label: 'May 2024', date: '2024-05-01' },
  { n: 10, slug: 'newsletter-10-june-2024', label: 'June 2024', date: '2024-06-01' },
  { n: 11, slug: 'newsletter-11-july-2024', label: 'July 2024', date: '2024-07-01' },
  { n: 12, slug: 'newsletter-12-august-2024', label: 'August 2024', date: '2024-08-01' },
  { n: 13, slug: 'newsletter-13-september-2024', label: 'September 2024', date: '2024-09-01' },
  { n: 14, slug: 'newsletter-14-october-2024', label: 'October 2024', date: '2024-10-01' },
  { n: 15, slug: 'newsletter-15-november-2024', label: 'November 2024', date: '2024-11-01' },
  { n: 16, slug: 'newsletter-16-december-2024', label: 'December 2024', date: '2024-12-01' },
  { n: 17, slug: 'newsletter-17-january-2025', label: 'January 2025', date: '2025-01-01' },
  { n: 18, slug: 'newsletter-18-february-2025', label: 'February 2025', date: '2025-02-01' },
  { n: 19, slug: 'newsletter-19-march-2025', label: 'March 2025', date: '2025-03-01' },
  { n: 20, slug: 'newsletter-20-april-2025', label: 'April 2025', date: '2025-04-01' },
  { n: 21, slug: 'newsletter-21-may-2025', label: 'May 2025', date: '2025-05-01' },
  { n: 22, slug: 'newsletter-22-june-2025', label: 'June 2025', date: '2025-06-01' },
  { n: 23, slug: 'newsletter-23-july-2025', label: 'July 2025', date: '2025-07-01' },
  { n: 24, slug: 'newsletter-24-august-2025', label: 'August 2025', date: '2025-08-01' },
  { n: 25, slug: 'newsletter-25-september-2025', label: 'September 2025', date: '2025-09-01' },
  { n: 26, slug: 'newsletter-26-october-2025', label: 'October 2025', date: '2025-10-01' },
  // No issue 27 for November 2025 on the current site — the numbering jumps to December.
  { n: 27, slug: 'newsletter-27-december-2025', label: 'December 2025', date: '2025-12-01' },
  { n: 28, slug: 'newsletter-28-january-2026', label: 'January 2026', date: '2026-01-01' },
  { n: 29, slug: 'newsletter-29-february-2026', label: 'February 2026', date: '2026-02-01' },
  { n: 30, slug: 'newsletter-30-marchapril-2026', label: 'March and April 2026', date: '2026-03-01' },
  { n: 31, slug: 'newsletter-31-may-2026', label: 'May 2026', date: '2026-05-01' },
  { n: 32, slug: 'newsletter-32-june-2026', label: 'June 2026', date: '2026-06-01' },
  { n: 33, slug: 'newsletter-33-july-2026', label: 'July 2026', date: '2026-07-01' },
  { n: 34, slug: 'newsletter-34-august-2026', label: 'August 2026', date: '2026-08-01' },
].map((x) => ({ ...x, restored: false, body: null }));

export function newslettersByYear() {
  const years = {};
  for (const n of newsletters) {
    const y = n.date.slice(0, 4);
    (years[y] = years[y] || []).push(n);
  }
  return Object.entries(years)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([year, items]) => ({ year, items: items.slice().reverse() }));
}
