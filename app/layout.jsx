import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, company, social, contact } from '@/data/site';

// Quicksand (SIL Open Font Licence), self-hosted from the EVO brand pack.
const quicksand = localFont({
  src: './fonts/Quicksand-Variable.ttf',
  variable: '--font-quicksand',
  weight: '300 700',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EVO | Fully managed, fixed-price repairs for housing landlords',
    template: '%s',
  },
  description:
    'EVO is a fully managed, fixed-price repairs service for housing associations, local authorities and Build to Rent, with its own technology, helpdesk and vetted trades.',
  openGraph: {
    type: 'website',
    siteName: 'EVO',
    locale: 'en_GB',
    images: [{ url: '/images/photos/evo-operations-team.webp', width: 1600, height: 945, alt: 'The EVO operations team' }],
  },
  twitter: { card: 'summary_large_image', site: '@evo_pm' },
};

export const viewport = {
  themeColor: '#1f2d3d',
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EVO',
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/evo-logo-horizontal.svg`,
  email: contact.sales.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'STC House, 7 Elmfield Road',
    addressLocality: 'Bromley',
    postalCode: 'BR1 1LT',
    addressCountry: 'GB',
  },
  sameAs: social.map((s) => s.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={quicksand.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Banner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
