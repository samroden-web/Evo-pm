import Image from 'next/image';
import Link from 'next/link';
import Laptop from './Laptop';
import PageHero from './PageHero';
import ClosingCta from './ClosingCta';
import { audiences } from './Audiences';

export default function ProductPage({ id, crumb, children, extra }) {
  const a = audiences.find((x) => x.id === id);
  return (
    <>
      <PageHero eyebrow={a.label} title={a.product} lead={a.lead} crumbs={[{ href: '/products', label: 'Products' }, { label: crumb }]}>
        {extra}
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>What it does</h2>
              <ul className="tick-list">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {children}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {a.laptop ? (
                <div style={{ width: '100%', maxWidth: 520 }}>
                  <Laptop alt={a.alt} sizes="(min-width: 900px) 520px, 90vw" />
                </div>
              ) : (
                <Image src={a.img} alt={a.alt} width={a.w} height={a.h} style={{ maxHeight: 520, width: 'auto' }} sizes="(min-width: 900px) 40vw, 80vw" />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section section--grey section--tight">
        <div className="container center">
          <p className="lead">The EVO Living App, the EVO Dashboard and the EVO Trades App work as one system.</p>
          <Link href="/how-it-works" className="text-link">
            See how it works
          </Link>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
