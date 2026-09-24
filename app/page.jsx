import Link from 'next/link';
import Image from 'next/image';
import Figures from '@/components/Figures';
import Laptop from '@/components/Laptop';
import VideoTestimonials from '@/components/VideoTestimonials';
import LogoStrip from '@/components/LogoStrip';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import PlansTeaser from '@/components/PlansTeaser';
import CaseStudyCards from '@/components/CaseStudyCards';
import PilotSection from '@/components/PilotSection';
import SectorTiles from '@/components/SectorTiles';
import LatestInsights from '@/components/LatestInsights';
import ClosingCta from '@/components/ClosingCta';
import Quote from '@/components/Quote';
import Tbc from '@/components/Tbc';
import { clientLogos, frameworkLogos, accreditationLogos } from '@/data/logos';
import { testimonials } from '@/data/testimonials';
import { cta } from '@/data/site';

export const metadata = {
  title: 'EVO | Fully managed, fixed-price repairs for housing landlords',
  description:
    'A fully managed, fixed-price repairs service for housing associations, local authorities and Build to Rent. One monthly price per home, a 12-month warranty on every job and 24/7 emergency cover.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* HOME-01 Hero */}
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Fully managed repairs for housing landlords</p>
            <h1>A fully managed, fixed-price repairs service for housing landlords.</h1>
            <p className="lead">
              We combine purpose-built technology, repairs expertise and a fully managed service to give landlords greater control
              and residents a better repairs experience.
            </p>
            <div className="btn-row">
              <Link href={cta.review.href} className="btn btn-primary">
                {cta.review.label}
              </Link>
              <Link href="/pricing" className="btn btn-secondary btn-on-dark">
                See plans and pricing
              </Link>
            </div>
            {/* GLOBAL-06: interim combined badge. Each award is labelled with the client it was won with. */}
            <div className="award-strip">
              <Image
                src="/images/awards/award-badges-interim.png"
                alt="Housing Executive Awards 2025 winner and Housing Digital Innovation Awards 2024 winner badges"
                width={684}
                height={99}
                style={{ height: 52, width: 'auto' }}
                priority
              />
              <p>
                Housing Executive Awards 2025, Partnership of the Year, with IDS. Housing Digital Innovation Awards 2024, Best
                Repairs and Maintenance Innovation, with B&amp;D Reside.
              </p>
            </div>
          </div>
          <div className="home-hero__visual" aria-hidden="true">
            <Laptop alt="" priority sizes="(min-width: 960px) 470px, 80vw" />
            <Image
              className="home-hero__phone"
              src="/images/app/living-app-home-framed.webp"
              alt=""
              width={652}
              height={1271}
              priority
              sizes="190px"
            />
          </div>
        </div>
      </section>

      {/* HOME-02 Figures */}
      <Figures />

      {/* HOME-03 Video testimonials */}
      <VideoTestimonials />

      {/* HOME-04 Client logos */}
      <section className="section section--tight" aria-labelledby="clients-title">
        <div className="container">
          <h2 id="clients-title" className="center" style={{ fontSize: '1.4rem' }}>
            Trusted by housing providers across London
          </h2>
          <div className="mt-2">
            <LogoStrip logos={clientLogos} label="Clients" row />
          </div>
        </div>
      </section>

      {/* HOME-05 The problem */}
      <div className="section--grey">
        <ProblemSection />
      </div>

      {/* HOME-06 The solution */}
      <SolutionSection />

      {/* HOME-07 Founder quote */}
      <section className="section section--tight section--grey" aria-label="From our co-founder">
        <div className="container">
          <div className="founder">
            <Tbc block>Mark Iandoli portrait</Tbc>
            <Quote
              large
              t={{
                quote:
                  'I spent twenty-five years in UK property maintenance and kept seeing the same gap. Add up the helpdesk, the chasing, the compliance reporting and the mark-up on every job, and repairs were costing landlords close to double what they thought. Residents could not get a repair done easily, and good contractors spent more time quoting than working. One broken system, and nothing built to fix it. So we built EVO.',
                name: 'Mark Iandoli',
                role: 'Co-founder and COO',
              }}
            />
          </div>
        </div>
      </section>

      {/* HOME-08 Plans teaser */}
      <PlansTeaser grey={false} />

      {/* HOME-09 Proof */}
      <section className="section section--grey" aria-labelledby="proof-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Proven in practice</p>
            <h2 id="proof-title">Already delivering for social landlords.</h2>
          </div>
          <CaseStudyCards />
          <div className="mt-3 max-640">
            <Quote t={testimonials.garethBrown} />
          </div>
        </div>
      </section>

      {/* HOME-10 Pilot */}
      <PilotSection />

      {/* HOME-11 Who we help, and HOME-12 Frameworks and accreditations in the same band */}
      <section className="section section--grey" aria-labelledby="who-title">
        <div className="container">
          <div className="section-head">
            <h2 id="who-title">Who we help</h2>
          </div>
          <SectorTiles />
          <hr className="band-divider" />
          <h2 id="frameworks-title" className="center" style={{ fontSize: '1.3rem' }}>
            Frameworks and accreditations
          </h2>
          <div className="mt-2">
            <LogoStrip logos={[...frameworkLogos, ...accreditationLogos]} color label="Frameworks and accreditations" swipe />
          </div>
          <p className="center mt-2 mb-0">
            <Link href="/about/trust" className="text-link">
              Clients, frameworks and accreditations
            </Link>
          </p>
        </div>
      </section>

      {/* HOME-13 Insights */}
      <LatestInsights />

      {/* HOME-14 Closing CTA */}
      <ClosingCta />
    </>
  );
}
