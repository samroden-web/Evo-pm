import Link from 'next/link';
import Image from 'next/image';
import Figures from '@/components/Figures';
import LogoStrip from '@/components/LogoStrip';
import WhyNow from '@/components/WhyNow';
import ProblemAnswer from '@/components/ProblemAnswer';
import Caretaker from '@/components/Caretaker';
import PlansTeaser from '@/components/PlansTeaser';
import CaseStudyCards from '@/components/CaseStudyCards';
import VideoTestimonials from '@/components/VideoTestimonials';
import ComplianceBand from '@/components/ComplianceBand';
import WhoStrip from '@/components/WhoStrip';
import TrustBlock from '@/components/TrustBlock';
import LatestInsights from '@/components/LatestInsights';
import GettingStarted from '@/components/GettingStarted';
import Quote from '@/components/Quote';
import { clientLogos } from '@/data/logos';
import { testimonials } from '@/data/testimonials';
import { cta } from '@/data/site';

export const metadata = {
  title: 'EVO | Fully managed, fixed-price repairs for housing landlords',
  description:
    'A fully managed, fixed-price repairs service for housing associations, local authorities and Build to Rent. One monthly price per home, a 12-month warranty on every job and 24/7 emergency cover.',
  alternates: { canonical: '/' },
};

// Rebuilt 24 September 2026 to the agreed homepage mockup.
//
// What changed from the draft:
//  - The regulatory context is its own thin band ("Why repairs matter more than ever")
//    rather than sitting under "the problem". It sets the stakes before anyone is told
//    they have a problem, which is the right order for a housing director.
//  - Problem and answer line up row by row, replacing the four numbered solution
//    points. Same job, half the space, and each objection answered beside it.
//  - Video testimonials move down into the proof block. They were second on the page,
//    above the problem and the solution, so a first-time visitor was asked to watch a
//    video before knowing what EVO is.
//  - The founder quote moves to /about. Mark explaining why EVO exists is an About
//    question, not a buying one.
//  - New: the Caretaker, the compliance split, the trust block and the See it / Try it /
//    Start it ladder, which merges the old pilot section and closing CTA.

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Fully managed repairs for housing landlords</p>
            <h1>
              A fully managed, <em>fixed-price</em> repairs service for housing landlords.
            </h1>
            <p className="lead">
              Purpose-built technology, repairs expertise and a fully managed service, so landlords get control and residents get a
              repair that actually happens.
            </p>
            <div className="btn-row">
              <Link href={cta.review.href} className="btn btn-primary">
                {cta.review.label}
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                See plans and pricing
              </Link>
            </div>
            {/* GLOBAL-06: each award is only ever shown against the client it was won with. */}
            <ul className="ev2-awards">
              <li>Housing Executive Awards 2025 &middot; Partnership of the Year, with IDS</li>
              <li>Housing Digital Innovation Awards 2024 &middot; with B&amp;D Reside</li>
            </ul>
          </div>
          <div className="home-hero__visual">
            <figure className="ev2-heroimg">
              <Image
                src="/images/photos/evo-resident-living-app.webp"
                alt="An EVO team member showing a resident how to report a repair on the Living App"
                width={1400}
                height={933}
                priority
                sizes="(min-width: 960px) 46vw, 92vw"
              />
              <figcaption>
                <span>Reported in</span>
                <strong>under 30 seconds, from the sofa</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Figures */}
      <Figures />

      {/* 3. Client logos — warm band, per the mockup, sitting between the orange
           figures band and the warm "why now" band so the page has rhythm rather
           than an unbroken run of white. */}
      <section className="ev3-logoband" aria-labelledby="clients-title">
        <div className="container">
          <h2 id="clients-title" className="ev3-logoband-hd">
            Trusted by housing providers across London
          </h2>
          <LogoStrip logos={clientLogos} label="Clients" row />
        </div>
      </section>

      {/* 4. Why repairs matter more than ever */}
      <WhyNow />

      {/* 5. The problem, and the answer */}
      <ProblemAnswer />

      {/* 6. The Caretaker */}
      <Caretaker />

      {/* 7. Plans teaser */}
      <PlansTeaser grey={false} />

      {/* 8. Proof: case studies, then the video testimonials */}
      <section className="section section--grey" aria-labelledby="proof-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Proof</p>
            <h2 id="proof-title">Already delivering for social landlords.</h2>
          </div>
          <CaseStudyCards />
          <div className="mt-3 max-640">
            <Quote t={testimonials.garethBrown} />
          </div>
        </div>
        <VideoTestimonials />
      </section>

      {/* 9. Compliance, both kinds */}
      <ComplianceBand />

      {/* 10. Who we help */}
      <WhoStrip />

      {/* 11. Trust */}
      <TrustBlock />

      {/* 12. Insights */}
      <LatestInsights />

      {/* 13. See it. Try it. Start it. */}
      <GettingStarted />
    </>
  );
}
