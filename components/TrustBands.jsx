import LogoStrip from './LogoStrip';
import { clientLogos, frameworkLogos, accreditationLogos } from '@/data/logos';
import { awards } from '@/data/site';
import Link from 'next/link';

// Brief 6.9: three bands, white or light grey.
//
// 27 September: the page that uses this had a section above it carrying nothing but a heading
// and one sentence, and then these three sections - four sections for one idea. The intro is
// now optional props rendered inside the first band, so the claim and its evidence sit together.
export default function TrustBands({ showAwards = true, id, eyebrow, title, lead }) {
  return (
    <>
      <section className="section section--tight" id={id} aria-labelledby={title ? 'trust-intro' : 'clients-band'}>
        <div className="container">
          {title && (
            <div className="section-head">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h2 id="trust-intro">{title}</h2>
              {lead && <p className="lead mb-0">{lead}</p>}
            </div>
          )}
          <h2 id="clients-band" className={title ? 'center h-band' : 'center'} style={{ fontSize: '1.5rem' }}>
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
            {/* normalise, added 27 September. Every other strip on the site already has it; this
                one did not, and the South East Consortium mark is the widest on the site at
                740x204 (3.6:1), so capped to a common HEIGHT it rendered far larger than the
                square badges beside it. Equal area is what the eye reads as the same size. */}
            <LogoStrip logos={frameworkLogos} color label="Frameworks" swipe normalise />
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
