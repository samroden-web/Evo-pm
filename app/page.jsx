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
            {/* THE OPENING LINE. Sam, 30 September: "hard think about the opening wording to
                make it clearer (using the basis of what we have already said)".

                The words are EVO's own, lifted from the sentence that already opens the
                problem-and-solution section further down the page: "EVO takes the repairs
                function off your hands and runs it end to end." That is the clearest statement
                of what the company does anywhere on the site, and it was sitting in section
                five. This puts it in the first thing anyone reads.

                WHAT CHANGED AND WHY. The previous version opened "End-to-end purpose-built
                technology, repairs expertise and a fully managed service..." - three words in
                and the page led on technology. A review of the site made the point that its
                whole job is to stop EVO reading as a software company, and the opening line
                was working against that. "End to end" is kept, because Sam asked for it on 28
                September; it has moved from describing the software to describing the service,
                which is where it earns more.

                The four things named - helpdesk, trades, resident communication, evidence -
                are the four the service actually covers, in the order the reader meets them.
                Technology comes last in the sentence, as the reason the rest is possible,
                which is the hierarchy the rest of the site already argues.

                LENGTH IS PART OF THE EDIT. The first draft of this ran to four lines, which
                put 31px back onto the hero and cost a 14-inch laptop the award marks that the
                29 September spacing work had just won back. Four wordings were measured at
                1512, 1440 and 1280px; this one says the same thing in three lines at all of
                them. Anything longer than about 165 characters spills to a fourth line and
                pushes the buttons down the fold. */}
            <p className="lead">
              We run your repairs service end to end &mdash; helpdesk, trades, resident communication and the evidence
              &mdash; for one fixed monthly price per home, powered by our own technology.
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

      {/* 12. Insights — REMOVED FROM THE HOMEPAGE, 30 September.
             Sam: "the homepage is very dense... also do we need insights on the homepage?"
             No. Of the thirteen sections this was the only one doing nothing for somebody
             deciding whether to buy: three article cards, below the trust block, between a
             reader and the closing invitation. The articles are in the top nav and at
             /insights, nothing links here expecting them, and the section cost the page its
             whole length for a freshness signal a buyer never asked for.

             WHY NOT MORE THAN THIS ONE. Sam also asked about moving "Why repairs matter" and
             the problem-and-solution section to the housing page. Neither moved, for
             different reasons:

               PROBLEM AND SOLUTION STAYS because it contains the clearest sentence on the
               site - "EVO takes the repairs function off your hands and runs it end to end"
               - and the line that stops EVO being mistaken for software. Two separate
               reviews have asked for that to be MORE prominent. Taking it off the homepage
               would be solving density by removing the argument.

               WHY REPAIRS MATTER CANNOT MOVE TO THE HOUSING PAGE, because that page already
               opens on "The change: same repairs, different consequences" - the same
               argument in the same place. It would be duplication, not relocation. It also
               sets the stakes for landlords and Build to Rent readers, who never reach the
               housing page. It is a thin three-figure band, so it is not what makes this
               page long. */}

      {/* 13. See it. Try it. Start it. */}
      <GettingStarted />
    </>
  );
}
