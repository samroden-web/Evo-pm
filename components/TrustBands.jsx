import LogoStrip from './LogoStrip';
import { clientLogos, frameworkLogos, accreditationLogos } from '@/data/logos';
import { awards } from '@/data/site';
import Link from 'next/link';

// Brief 6.9: three bands, white or light grey.
export default function TrustBands({ showAwards = true }) {
  return (
    <>
      <section className="section section--tight" aria-labelledby="clients-band">
        <div className="container">
          <h2 id="clients-band" className="center" style={{ fontSize: '1.5rem' }}>
            Clients we work with
          </h2>
          <div className="mt-2">
            <LogoStrip logos={clientLogos} label="Clients" row />
          </div>
        </div>
      </section>
      <section className="section section--tight section--grey" aria-labelledby="frameworks-band">
        <div className="container">
          <h2 id="frameworks-band" className="center" style={{ fontSize: '1.5rem' }}>
            Frameworks
          </h2>
          <div className="mt-2">
            <LogoStrip logos={frameworkLogos} color label="Frameworks" swipe />
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="accreditations-band">
        <div className="container">
          <h2 id="accreditations-band" className="center" style={{ fontSize: '1.5rem' }}>
            Accreditations and awards
          </h2>
          <div className="mt-2">
            <LogoStrip logos={accreditationLogos} color label="Accreditations" swipe />
          </div>
          {showAwards && (
            <div className="grid-2 mt-3 swipe-mobile">
              {awards.map((a) => (
                <Link key={a.id} href={a.href} className="card card-link">
                  <span className="eyebrow">Award, with {a.client}</span>
                  <h3>{a.name}</h3>
                  <p>{a.category}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
