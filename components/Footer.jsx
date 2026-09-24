import Link from 'next/link';
import { footerNav, company, social, awards, contact } from '@/data/site';
import { frameworkLogos, accreditationLogos } from '@/data/logos';
import LogoStrip from './LogoStrip';
import Tbc from './Tbc';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/brand/evo-logo-horizontal-white.png" alt="EVO" width="91" height="40" />
            <p>A fully managed, fixed-price repairs service for housing landlords.</p>
            <p>
              Sales: <a href={`mailto:${contact.sales.email}`}>{contact.sales.email}</a>
              <br />
              Residents: <a href="/residents">get help with a repair</a>
            </p>
            <p>
              Phone: <Tbc>sales and resident numbers</Tbc>
            </p>
            <ul className="footer-social" style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 16 }}>
              {social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-cols">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h2>{col.heading}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-awards" aria-label="Awards">
          {awards.map((a) => (
            <Link key={a.id} href={a.href}>
              <strong>{a.name}</strong>
              {a.category}, won with {a.client}
            </Link>
          ))}
        </div>

        <div className="footer-logos">
          <LogoStrip logos={[...frameworkLogos, ...accreditationLogos]} color label="Frameworks and accreditations" swipe />
        </div>

        <div className="footer-bottom">
          <p className="mb-0">
            © {new Date().getFullYear()} {company.legalName}, company number {company.companyNumber}.{' '}
            {company.registeredOfficeConfirmed ? (
              <>Registered office: {company.address}.</>
            ) : (
              <>
                {company.address}. <Tbc>registered office</Tbc>
              </>
            )}
          </p>
          <ul>
            <li>
              <Link href="/terms-of-use">Terms of use</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
