import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Figures from '@/components/Figures';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'About EVO',
  description: 'EVO is a fully managed, fixed-price repairs service for housing landlords that owns its own technology.',
  alternates: { canonical: '/about' },
};

const links = [
  { href: '/about/what-we-do', title: 'What we do', body: 'We do not just manage your repairs. We deliver them.' },
  { href: '/about/why-we-do-it', title: 'Why we do it', body: 'Everyone deserves a safe, well-kept home, and a repair they can get done easily.' },
  { href: '/about/who-we-are', title: 'Who we are', body: 'The people behind EVO.' },
  { href: '/about/trust', title: 'Trust and accreditations', body: 'Clients, frameworks and accreditations.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EVO"
        title="A fully managed, fixed-price repairs service for housing landlords."
        lead="We combine purpose-built technology, repairs expertise and a fully managed service to give landlords greater control and residents a better repairs experience. We are not a software company."
        crumbs={[{ label: 'About' }]}
      />
      <Figures />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="card card-link card--shadow">
                <h2 style={{ fontSize: '1.4rem' }}>{l.title}</h2>
                <p>{l.body}</p>
                <span className="text-link">Read more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
