import Link from 'next/link';
import Image from 'next/image';
import Illustration from '@/components/Illustration';
import Figures from '@/components/Figures';
import LogoStrip from '@/components/LogoStrip';
import WhyNow from '@/components/WhyNow';
import ProblemAnswer from '@/components/ProblemAnswer';
import PlansTeaser from '@/components/PlansTeaser';
import ProofBlock from '@/components/ProofBlock';
import ResidentVideo from '@/components/ResidentVideo';
import ComplianceBand from '@/components/ComplianceBand';
import WhoStrip from '@/components/WhoStrip';
import TrustBlock from '@/components/TrustBlock';
import LatestInsights from '@/components/LatestInsights';
import GettingStarted from '@/components/GettingStarted';
import { LaurelIcon } from '@/components/Icons2';
import { clientLogos, withFiles } from '@/data/logos';
import { cta } from '@/data/site';

export const metadata = {
  title: 'EVO | Fully managed, fixed-price repairs for housing landlords',
  description:
    'A fully managed, fixed-price repairs service for housing associations, councils and Build to Rent. One monthly price per home, and a 12-month warranty on every job.',
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
            {/* Sam, 28 September: "on the opening para under the title, is it also worth
                saying our purpose built technology is end-to end". Yes - it is EVO's own
                language (their live site: "fully managed, end-to-end digital solution"), and
                it is the actual differentiator, because owning the whole system is what makes
                a fixed price possible. It is also already evidenced rather than asserted:
                /how-it-works says every report, message, appointment, photograph and sign-off
                lives in one system.

                Of three wordings tested at 1512px, this one and "Purpose-built, end-to-end
                technology" held at three lines; "technology that runs a repair end to end"
                spilled to four and would have pushed the buttons further down the very fold
                this patch is trying to tidy. */}
            <p className="lead">
              End-to-end purpose-built technology, repairs expertise and a fully managed service, so landlords get
              control and residents get a repair that actually happens.
            </p>
            <div className="btn-row">
              <Link href={cta.review.href} className="btn btn-primary">
                {cta.review.label}
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                See plans and pricing
              </Link>
            </div>
            {/* GLOBAL-06: each award is only ever shown against the client it was won with,
                which is why the "with" line is part of the mark rather than a footnote. */}
            <ul className="ev2-awards">
              <li>
                <LaurelIcon />
                <span>
                  <span className="ev2-award-name">Housing Executive Awards 2025</span>
                  <span className="ev2-award-with">Won with IDS</span>
                </span>
              </li>
              <li>
                <LaurelIcon />
                <span>
                  <span className="ev2-award-name">Housing Digital Innovation Awards 2024</span>
                  <span className="ev2-award-with">Won with B&amp;D Reside</span>
                </span>
              </li>
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
                A repair, reported in <strong>under 30 seconds</strong>
              </figcaption>
            </figure>
            {/* Sam, 28 September: "is there a way of incorporating a small one as well as
                the picture on the homepage?"

                Yes, and this is the only place it costs nothing. The hero grid is
                align-items: center, so on a wide screen the copy column - eyebrow, headline,
                lead, two buttons and two award marks - runs taller than the photograph beside
                it, leaving dead space under the picture. The drawing goes in that space.

                The photograph is untouched and stays the first thing the eye lands on. That
                is deliberate: an operative sitting with an elderly resident showing her the
                app is the strongest credibility signal on the site, and it is doing its work
                at the exact moment a housing director is deciding whether EVO is a real
                operator. The drawing sits underneath it as brand, not instead of it as
                proof. Hidden below 960px, where the columns stack and the space it fills
                no longer exists. */}
            <Illustration name="evo-hero-home" size={150} className="home-hero__art" />
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
            Trusted by housing providers and institutional landlords
          </h2>
          <LogoStrip logos={withFiles(clientLogos)} label="Clients" row hideMissing normalise normaliseArea={9700} />
        </div>
      </section>

      {/* 4. Why repairs matter more than ever */}
      <WhyNow />

      {/* 5. The problem, the solution, and the Caretaker that closes it */}
      <ProblemAnswer />

      {/* 7. Plans teaser */}
      <PlansTeaser grey={false} />

      {/* 8. Proof: case studies, each with its photograph, its client's logo and that
             client's own words, then three shorter voices. */}
      <ProofBlock />

      {/* 8b. Residents, on camera */}
      <ResidentVideo />

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
