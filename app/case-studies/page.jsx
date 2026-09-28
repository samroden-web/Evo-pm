import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import PilotSection from '@/components/PilotSection';
import ClosingCta from '@/components/ClosingCta';
import LogoStrip from '@/components/LogoStrip';
import { IconBadge } from '@/components/Icon';
import { clientLogos, withFiles } from '@/data/logos';
import { testimonials, regulatorQuote } from '@/data/testimonials';

export const metadata = {
  title: 'Case studies: IDS and B&D Reside | EVO',
  description:
    'Two social landlords who moved their repairs to EVO. IDS: resolution times halved, 95% first-time fix across 1,414 homes. B&D Reside: 96% in the pilot.',
  alternates: { canonical: '/case-studies' },
};

// Rebuilt 25 September 2026. Three pages into one, per the agreed map.
//
// The hub was 143 words that repeated the homepage proof block word for word, then asked
// for another click. Both studies are now sections of one scrolling page, each with its
// own anchor, so a prospect can still be sent straight to /case-studies#ids.
//
// The H1 is no longer the homepage's own proof heading, word for word.

const IDS_START = [
  'Slow repair resolution times',
  'Limited real-time visibility',
  'Inconsistent communication with residents',
  'Fragmented manual processes',
  'Difficulty tracking compliance',
  'No budget certainty',
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* The hero photograph was evo-bd-reside-team, which is also the B&D section image
          further down the same page - the same picture twice. */}
      <PageHero
        eyebrow="Case studies"
        title="A housing association and a council&rsquo;s housing company, both turned around."
        lead="Two of the landlords we work with, written up in full: a 1,414-home housing association and a local authority housing company with more than 4,500 homes. Neither started with a commitment. Both began with a pilot on a share of their stock, ran it long enough to produce their own numbers, and then widened."
        crumbs={[{ label: 'Case studies' }]}
        image="/images/photos/evo-team-member-helping-resident.webp"
        imageAlt="An EVO team member helping a resident with a repair"
        imageWidth={1400}
        imageHeight={787}
        priority
      >
        {/* Sam, 28 September: "dont make it look like they are our only 2 clients". It did -
            a page called Case studies showing exactly two landlords reads as the whole client
            list. EVO looks after around 6,000 homes across housing associations, councils,
            charities and institutional landlords; these two are the ones written up in detail,
            and the line below says so before the buttons do. */}
        <p className="mt-3 mb-0">
          We look after around 6,000 homes for housing associations, local authorities, charities and institutional
          landlords.{' '}
          <Link href="/about#trust" className="text-link">
            See who we work with
          </Link>
        </p>
        <div className="btn-row mt-3">
          <Link href="#ids" className="btn btn-secondary">
            Industrial Dwellings Society
          </Link>
          <Link href="#bd-reside" className="btn btn-secondary">
            B&amp;D Reside
          </Link>
        </div>
      </PageHero>

      {/* ---------------- IDS ---------------- */}

      {/* Sam, 27 September, item 9: "the order of the page should be 1. The picture and the
          text we already have at the top, as the top banner line 2. The where they started
          on the left underneath, and then the highlight bar for where they finished next to
          it on the right, so in 1 shot we can see where they started and end position
          clearly. The tesimonials can go under that and the awards picture under that."
          Built exactly that, and it fixes a real fault rather than only moving things. The
          figures used to sit ABOVE the problem list, so the before and the after were never
          on screen at the same time: you read the result first, then scrolled past it to
          find out what it was a result of. They are now one row, two columns, same height.
          The single sentence that had a whole warm-grey section to itself ("Full compliance
          visibility, better data...") now sits under the figures it describes, which removes
          a section of scrolling rather than adding one.
          The timeline and the Regulator's judgement stay BETWEEN the pair and the
          testimonials: they are how the left column became the right one, so they only make
          sense once both are read. */}
      <section className="section" id="ids" aria-labelledby="ids-title">
        <div className="container">
          <div className="cs-banner">
            <div className="cs-banner__text">
              <p className="eyebrow">Case study one</p>
              <h2 id="ids-title">Industrial Dwellings Society</h2>
              <p className="lead">
                Pioneers of affordable housing since 1885, and running repairs until 2023 the way everyone else did.
                1,414 homes, now on a five-year contract.
              </p>
              {/* The client's logo and the award they were won with, at the top of the study
                  rather than buried. The logo strip renders the ONE client's mark, filtered
                  by name, and hides itself if that file has not downloaded - so a missing
                  logo costs polish rather than leaving a hole. GLOBAL-06: an award only ever
                  appears against the client it was won with, so the Housing Executive award
                  sits here and the Housing Digital award sits with B&D Reside. */}
              <div className="cs-head cs-head--banner">
                <div className="cs-head__logo">
                  <LogoStrip logos={withFiles(clientLogos).filter((l) => /^IDS$/i.test(l.name))} color hideMissing />
                </div>
                <div className="cs-head__award">
                  <IconBadge name="star" />
                  <div>
                    <span className="cs-head__award-name">Housing Executive Awards 2025</span>
                    <span className="cs-head__award-what">Partnership of the Year, won with IDS</span>
                  </div>
                </div>
              </div>
            </div>
            <Photo
              src="/images/photos/ids-resident-engagement-day.webp"
              alt="EVO and IDS staff at the IDS resident engagement day, Navarino Mansions"
              caption="IDS resident engagement day, Navarino Mansions."
              width={1000}
              height={1333}
              sizes="(min-width: 900px) 42vw, 100vw"
            />
          </div>

          <div className="cs-startend mt-4">
            <div className="cs-startend__col cs-startend__before">
              <p className="eyebrow">Where they started</p>
              <h3 className="cs-startend__h">Until 2023</h3>
              {/* Not a tick list. A ticked list of faults reads as a list of things the
                  client got. */}
              <ul className="tick-list tick-list--was tick-list--compact mb-0">
                {IDS_START.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="cs-startend__col cs-startend__after">
              <p className="eyebrow">Where they are now</p>
              <h3 className="cs-startend__h">On a five-year contract, across every home</h3>
              <div className="statrow statrow--orange">
                <div>
                  <span className="stat">Halved</span>
                  <span className="stat-label">Repair resolution times</span>
                </div>
                <div>
                  <span className="stat">95%</span>
                  <span className="stat-label">First-time fix rate</span>
                </div>
                <div>
                  <span className="stat">90%+</span>
                  <span className="stat-label">Resident satisfaction, regularly</span>
                </div>
                <div>
                  <span className="stat">1,414</span>
                  <span className="stat-label">Homes, pilot to five-year contract</span>
                </div>
              </div>
              <p className="cs-startend__note mb-0">
                Full compliance visibility, better data, more trust from residents, and a shift from reacting to
                planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sam, 27 September: the timeline and the Regulator quote were two full sections,
          each in a narrow container, one after the other - "they both take up a lot of
          scrolling space currently". They are now one section, side by side on a laptop and
          stacked on a phone, each under its own heading so it is obvious they are two
          different kinds of evidence: what happened, and what the Regulator said about it. */}
      <section className="section section--grey" aria-labelledby="ids-timeline">
        <div className="container">
          <div className="cs-evidence">
            <div className="cs-evidence__story">
              <h3 id="ids-timeline">From a quarter of the homes to every one</h3>
              <ol className="vtimeline vtimeline--dates mt-2">
                <li>
                  <span className="num" aria-hidden="true">
                    1
                  </span>
                  <span className="date">October 2023</span>
                  <h3>Pilot across 25% of homes</h3>
                  <p>
                    The Living App in residents&apos; hands, automated triage and appointment scheduling, digital
                    satisfaction surveys, and one repairs, property and compliance platform — with non-digital channels
                    kept for residents who wanted them.
                  </p>
                </li>
                <li>
                  <span className="num" aria-hidden="true">
                    2
                  </span>
                  <span className="date">October 2024</span>
                  <h3>The Regulator records evidence of improvement</h3>
                  <p>
                    The Regulator records evidence of improvement from the new pilot service, and notes plans to roll it
                    out across the remaining estates.
                  </p>
                </li>
                <li>
                  <span className="num" aria-hidden="true">
                    3
                  </span>
                  <span className="date">January 2025</span>
                  <h3>Rolled out across all 1,414 IDS homes</h3>
                  <p>On a five-year contract.</p>
                </li>
              </ol>
            </div>
            <div className="cs-evidence__reg">
              <h3>What the Regulator said</h3>
              <Quote t={regulatorQuote} large />
            </div>
          </div>
        </div>
      </section>

      {/* The "What changed." section that sat here was a heading and one sentence - a whole
          screen of scrolling for a line that belongs next to the figures it summarises. It
          is now the closing line of the "where they are now" column above. */}
      <section className="section" aria-labelledby="ids-voices">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">IDS, eighteen months later</p>
            <h2 id="ids-voices">What they say about it.</h2>
          </div>
          <div className="grid-3 swipe-mobile">
            <Quote t={testimonials.garethBrown} card />
            <Quote t={testimonials.richardSmithPartnership} card />
            <Quote t={testimonials.rebeccaJoseph} card />
          </div>
          <div className="mt-3 grid-2">
            <Quote t={testimonials.danielOMahoney} card />
            <div className="card card--grey">
              <p className="eyebrow">Their own audit</p>
              <h3>&ldquo;Very robust compared to other organisations in the sector.&rdquo;</h3>
              <p className="mb-0 muted">
                A finding from IDS&rsquo;s own internal audit of the partnership, not from us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Last in the IDS study, per Sam's order: "the awards picture under that". Warm rather
          than white so it separates from the testimonials above it. */}
      <section className="section section--warm" aria-labelledby="ids-award">
        <div className="container">
          <div className="ev3-split">
            <div>
              <p className="eyebrow">Award-winning partnership</p>
              <h3 id="ids-award">Housing Executive Awards 2025, Partnership of the Year.</h3>
              <p className="lead">
                Won with IDS in October 2025, for the innovation, collaboration and measurable impact of the service.
              </p>
              <p className="mb-0">
                <Link
                  href="/insights/ids-evo-transforming-repairs-and-maintenance-through-digital-partnership"
                  className="text-link"
                >
                  IDS &amp; EVO: transforming repairs and maintenance through digital partnership
                </Link>
              </p>
            </div>
            <Photo
              src="/images/photos/ids-evo-housing-executive-awards-2025.webp"
              alt="The IDS and EVO teams on stage with their award at the Housing Executive Awards 2025"
              caption="IDS and EVO at the Housing Executive Awards 2025."
              width={1128}
              height={663}
              sizes="(min-width: 880px) 46vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ---------------- B&D Reside ---------------- */}

      {/* Sam, 27 September, item 10: "the B&D case study is layed out ok, but take anythings
          you think good from the IDS comments and replicate."
          Four things carried across. (1) The banner: text, client mark and the award won with
          them on the left, the team photograph on the right, instead of an intro section with
          no picture in it followed by a separate full-width photograph two sections later.
          (2) The start-against-finish pair, so the before and the after are on screen
          together here too. (3) The figures keep the same orange bar in the same position in
          that pair, so the two studies can be read against each other rather than in two
          different shapes. (4) The duplicate award has gone: it was a chip at the top AND a
          card in the quote row. It now appears once, in the banner, like IDS.
          The left column here is one sentence rather than IDS's six-line list, because that
          is all the approved facts give about B&D's starting position. See the note on it.
          Nothing has been added to pad it out. */}
      <section className="section section--grey" id="bd-reside" aria-labelledby="bd-title">
        <div className="container">
          <div className="cs-banner">
            <div className="cs-banner__text">
              <p className="eyebrow">Case study two</p>
              <h2 id="bd-title">B&amp;D Reside, Barking and Dagenham</h2>
              <p className="lead">
                A 380-home pilot began in June 2023 and was covered by Inside Housing in April 2024. EVO now holds an
                eight-year contract with B&amp;D Reside for more than 4,500 homes, onboarding in phases.
              </p>
              <div className="cs-head cs-head--banner">
                <div className="cs-head__logo">
                  <LogoStrip logos={withFiles(clientLogos).filter((l) => /B&D/i.test(l.name))} color hideMissing />
                </div>
                <div className="cs-head__award">
                  <IconBadge name="star" />
                  <div>
                    <span className="cs-head__award-name">Housing Digital Innovation Awards 2024</span>
                    <span className="cs-head__award-what">
                      Best Repairs and Maintenance Innovation, won with B&amp;D Reside
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Photo
              src="/images/photos/evo-bd-reside-team.webp"
              alt="The EVO and B&D Reside teams together outdoors, many wearing pink B&D Reside t-shirts"
              caption="EVO and the B&D Reside team."
              width={1285}
              height={704}
              sizes="(min-width: 900px) 42vw, 100vw"
            />
          </div>

          <div className="cs-startend mt-4">
            <div className="cs-startend__col cs-startend__before">
              <p className="eyebrow">Where they started</p>
              <h3 className="cs-startend__h">Until June 2023</h3>
              {/* One sentence, not a list, and this is worth reading before you change it.
                  The approved facts give exactly ONE thing about B&D's starting position:
                  "Residents used to ring or email the council and wait." The brief also gives
                  "under 6 days (from 28-plus)", which would have been the perfect second
                  line - but "28-plus" is in BANNED_TEXT in tools/check-site.mjs, retired
                  earlier as an unsourced comparison, and the site checker caught me putting
                  it back. It is not reinstated on a hunch.
                  Sam: if the 28-plus day figure is B&D's own prior average and you can source
                  it, say so and it goes in here and in the figure opposite - it is the single
                  strongest before-and-after on this page. Until then, one stark sentence
                  against four figures does the job without inventing anything. */}
              <p className="cs-startend__was mb-0">Residents rang or emailed the council, and waited.</p>
            </div>
            <div className="cs-startend__col cs-startend__after">
              <p className="eyebrow">Where they are now</p>
              <h3 className="cs-startend__h">An eight-year contract, onboarding in phases</h3>
              <div className="statrow statrow--orange">
                <div>
                  <span className="stat">96%</span>
                  <span className="stat-label">First-time fix in the pilot</span>
                </div>
                <div>
                  <span className="stat">Under 6 days</span>
                  <span className="stat-label">Average damp and mould resolution</span>
                </div>
                <div>
                  <span className="stat">80%</span>
                  <span className="stat-label">App adoption in nine months</span>
                </div>
                <div>
                  <span className="stat">380 to 4,500+</span>
                  <span className="stat-label">Pilot homes to contracted homes</span>
                </div>
              </div>
              <p className="cs-startend__note mb-0">
                B&amp;D Reside kept its own teams throughout. The pilot ran alongside them, measured the same way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials under the pair, as on IDS. The Managing Director's quote gets the
          full-width band with the client's own mark beside it rather than sharing a row with
          an award card that repeated the chip in the banner above. */}
      <section className="section" aria-labelledby="bd-voices">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">B&amp;D Reside</p>
            <h2 id="bd-voices">What they say about it.</h2>
          </div>
          <div className="quote-band">
            <Quote t={testimonials.michaelWestbrookLong} large />
            <div className="quote-band__mark">
              <LogoStrip logos={withFiles(clientLogos).filter((l) => /B&D/i.test(l.name))} color hideMissing />
            </div>
          </div>
          <div className="grid-2 mt-3">
            <Quote t={testimonials.matthewLismore} card />
            <Quote t={testimonials.nasir} card />
          </div>
        </div>
      </section>

      <PilotSection grey />
      <ClosingCta />
    </>
  );
}
