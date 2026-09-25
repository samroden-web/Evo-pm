/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Brief section 4: keep old URLs working with 301s
      { source: '/about/how-we-do-it', destination: '/how-it-works', statusCode: 301 },
      { source: '/newsletters', destination: '/insights/newsletters', statusCode: 301 },
      { source: '/faqs', destination: '/faqs/residents', statusCode: 301 },
      { source: '/faqs/landlords', destination: '/faqs/landlords-and-property-managers', statusCode: 301 },
      { source: '/faqs/property-managers', destination: '/faqs/landlords-and-property-managers', statusCode: 301 },
      { source: '/download-sign-up', destination: '/renters-rights-guide', statusCode: 301 },
      {
        source: '/sectors/private-landlords-and-agents',
        destination: '/who-we-help/landlords-and-agents',
        statusCode: 301,
      },

      // Products absorbed into How it works (map, page 01). The three app pages were
      // 95 to 122 words each and repeated the cards they linked from; the hub carried
      // the same H1 as How it works, word for word.
      { source: '/products', destination: '/how-it-works', statusCode: 301 },
      { source: '/products/overview', destination: '/how-it-works', statusCode: 301 },
      { source: '/products/living-app', destination: '/how-it-works#living-app', statusCode: 301 },
      { source: '/products/dashboard', destination: '/how-it-works#dashboard', statusCode: 301 },
      { source: '/products/trades-app', destination: '/how-it-works#trades-app', statusCode: 301 },

      // Five About pages become one. The four children are now sections with anchors,
      // so an old link still lands on the right part of the page.
      { source: '/about/what-we-do', destination: '/how-it-works', statusCode: 301 },
      { source: '/about/why-we-do-it', destination: '/about', statusCode: 301 },
      { source: '/about/who-we-are', destination: '/about#who-we-are', statusCode: 301 },
      { source: '/about/trust', destination: '/about#trust', statusCode: 301 },

      // Three case study pages become one scrolling page with deep anchors, so a
      // prospect can still be sent straight to IDS.
      { source: '/case-studies/ids', destination: '/case-studies#ids', statusCode: 301 },
      { source: '/case-studies/bd-reside', destination: '/case-studies#bd-reside', statusCode: 301 },

      // Live URLs found in evo-pm.com/sitemap.xml that the rebuild had nowhere to send.
      { source: '/login', destination: 'https://app.evo-pm.com', statusCode: 301 },
      { source: '/newsletter-sign-up', destination: '/insights/newsletters', statusCode: 301 },
      // All 34 newsletter issue pages 500 on the current site, so there is no content to
      // move. Every old issue URL lands on the archive page rather than 404ing.
      { source: '/newsletters/:slug', destination: '/insights/newsletters', statusCode: 301 },
      { source: '/newsletter-sign-up/confirmation', destination: '/insights/newsletters', statusCode: 301 },
      { source: '/download-sign-up/confirmation', destination: '/renters-rights-guide', statusCode: 301 },
      { source: '/crowdfunding-qa', destination: '/about', statusCode: 301 },

      // Careers, Investors and Partners were eighteen words each. An empty page reads
      // worse than no page. Off until there is something to say.
      { source: '/careers', destination: '/about', statusCode: 301 },
      { source: '/investors', destination: '/about', statusCode: 301 },
      { source: '/partners', destination: '/contact', statusCode: 301 },

      // Six sector pages become three under /who-we-help (addendum v2, section 3).
      { source: '/sectors', destination: '/who-we-help/housing', statusCode: 301 },
      { source: '/sectors/housing-associations', destination: '/who-we-help/housing', statusCode: 301 },
      { source: '/sectors/local-authorities', destination: '/who-we-help/housing', statusCode: 301 },
      { source: '/sectors/build-to-rent', destination: '/who-we-help/build-to-rent', statusCode: 301 },
      { source: '/sectors/landlords', destination: '/who-we-help/landlords-and-agents', statusCode: 301 },
      { source: '/sectors/letting-agents', destination: '/who-we-help/landlords-and-agents', statusCode: 301 },

      // Live URLs with nowhere to land (gap review, section 1.3).
      { source: '/pricing/landlord-plans', destination: '/pricing', statusCode: 301 },
      { source: '/pricing/letting-agent-plans', destination: '/pricing', statusCode: 301 },
      { source: '/pricing/housing-association-plans', destination: '/pricing', statusCode: 301 },
      { source: '/pricing/local-authority-plans', destination: '/pricing', statusCode: 301 },
      { source: '/pricing/build-to-rent-plans', destination: '/pricing', statusCode: 301 },
    ];
  },

  // Security headers. A site selling compliance should not be missing the cheap ones, and
  // a procurement team's security questionnaire asks about them by name.
  //
  // Deliberately NOT included: a Content-Security-Policy. Next.js needs nonces for its
  // inline bootstrap script, and a CSP written without them silently breaks the page for
  // real visitors while looking fine in a build. It is worth doing properly as its own
  // change, with the report-only header first.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Stop browsers guessing a file is something other than its declared type.
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Send the origin but not the path to other sites, so resident-facing URLs do
          // not leak into third-party referrer logs.
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Nothing on this site needs to be framed by anyone else.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // No page here uses a camera, microphone or location.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // HTTPS only, including subdomains. Vercel already serves HSTS; stating it here
          // means it travels with the app if it is ever hosted elsewhere.
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
        ],
      },
    ];
  },
};

export default nextConfig;
