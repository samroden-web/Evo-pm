import Link from 'next/link';
import { footerNav, company, social, awards, contact } from '@/data/site';
import { frameworkLogos, accreditationLogos, awardBadges } from '@/data/logos';
import LogoStrip from './LogoStrip';

// Rebuilt 25 September 2026 (Sam, point 13).
//
// Three things were wrong with it. It was the largest block of navy left on the site,
// which cut against the whole reason Treatment B went warm. Its columns were a shape
// invented for the footer rather than the agreed site map. And its logo strip mixed real
// logos at four different optical sizes with four yellow TBC tags, which would have left
// four holes the moment TBC was switched off.
//
// Now: a warm dark ground that belongs to the palette, columns that mirror the header,
// logos normalised to one height with the unavailable ones simply not listed, and the
// awards carrying the same laurel mark as the hero.

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/brand/evo-logo-horizontal-white.png" alt="EVO" width="91" height="40" />
            <p>A fully managed, fixed-price repairs service for housing landlords.</p>
            {/* One address, one number, one link. The block carried a sales email, a
                residents link, a phone number and a WhatsApp number, and Residents
                already has a column of its own further along. */}
            <p>
              <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
              <br />
              <a href={`tel:+44${contact.salesPhone.replace(/\D/g, '').replace(/^0/, '')}`}>{contact.salesPhone}</a>
              <br />
              <Link href="/contact">Contact us</Link>
            </p>
            <ul
              className="footer-social"
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                gap: 16,
              }}
            >
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

        {/* The real winner badges, which exist only as light artwork for a dark ground —
            which is exactly what this is. The text beside them is not decoration: an
            award is never shown without the client it was won with. */}
        <div className="footer-awards" aria-label="Awards">
          {awardBadges && (
            <img
              src={awardBadges.src}
              alt="Housing Executive Awards 2025 winner and Housing Digital Innovation Awards 2024 winner"
              width={awardBadges.width}
              height={awardBadges.height}
              loading="lazy"
            />
          )}
          <ul>
            {awards.map((a) => (
              <li key={a.id}>
                <Link href={a.href}>
                  <strong>{a.name}</strong> {a.category}, won with {a.client}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-logos">
          <LogoStrip
            logos={[...frameworkLogos, ...accreditationLogos]}
            color
            label="Frameworks and accreditations"
            swipe
            hideMissing
            normalise
          />
        </div>

        <div className="footer-bottom">
          <p className="mb-0">
            {/* Registered office only. The head office is by appointment and lives on the
                contact page; two addresses in a footer is noise. */}
            © {new Date().getFullYear()} {company.legalName}, company number {company.companyNumber}. VAT{' '}
            {company.vatNumber}. Registered office: {company.registeredOffice}.
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
