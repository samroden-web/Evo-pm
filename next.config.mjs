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
      { source: '/products/overview', destination: '/products', statusCode: 301 },
      { source: '/download-sign-up', destination: '/renters-rights-guide', statusCode: 301 },
      { source: '/sectors/private-landlords-and-agents', destination: '/who-we-help/landlords-and-agents', statusCode: 301 },

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
};

export default nextConfig;
