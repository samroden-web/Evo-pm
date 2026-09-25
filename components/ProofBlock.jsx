import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from './CaseStudyCards';
import { testimonials, internalAudit } from '@/data/testimonials';
import { clientLogos } from '@/data/logos';

// The homepage proof section, rebuilt 25 September 2026 (Sam, point 10).
//
// What was wrong: two white cards on an off-white background, no imagery, and a single
// quote stranded in the bottom-left corner with half the row empty. It read as the
// weakest section on the page, in the position where the page has to be strongest.
//
// Three changes, in order of how much they matter:
//
//  1. Each case study now carries its photograph and its client's logo. Both already
//     existed — the photographs were sitting in the data file unused, and the logos are
//     in /public. A proof section with no faces in it is not proof.
//  2. The quote sits INSIDE its own case study card, attributed to that client. A
//     statistic and the person who lived through it belong together; separated, the
//     quote reads as decoration and the statistic reads as a claim.
//  3. A row of three shorter voices underneath — a landlord, a residents' association
//     and a resident. We cleared eleven testimonials and the homepage was using one.
//
// The residents' association voice is the one worth keeping if anything is ever cut.
// A housing director can discount a peer's quote as sales material; they cannot
// discount their own residents' association.

// Each case study's own quote, so the proof and the voice stay together.
const VOICE = {
  ids: testimonials.garethBrown,
  'bd-reside': testimonials.michaelWestbrook,
};

// Three different KINDS of voice, not three testimonials: a residents' association, a
// client's own internal auditor, and a resident. Craig Jackson's LRM quote is good but
// four times the length of the others, so it lives on the landlords and agents page
// where it has room.
const ALSO = [testimonials.matthewLismore, internalAudit, testimonials.nasir];

function logoFor(client) {
  // Matched on the logo's own name so this keeps working when a logo file arrives and
  // data/logos.js is relinked. No file, no logo, no broken image.
  const key = client.toLowerCase();
  return clientLogos.find(
    (l) => l.src && (key.includes(l.name.toLowerCase()) || l.name.toLowerCase().includes(key.split(',')[0]))
  );
}

export default function ProofBlock() {
  return (
    <section className="section section--grey" aria-labelledby="proof-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Proof</p>
          <h2 id="proof-title">Already delivering for social landlords.</h2>
        </div>

        <div className="ev3-proof">
          {caseStudies.map((c) => {
            const logo = logoFor(c.client);
            const voice = VOICE[c.id];
            return (
              <article className="ev3-proof-card" key={c.id}>
                <Link href={c.href} className="ev3-proof-media">
                  <Image src={c.image} alt={c.alt} width={1200} height={800} sizes="(min-width: 900px) 46vw, 100vw" />
                  {logo && (
                    <span className="ev3-proof-logo">
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={logo.width}
                        height={logo.height}
                        loading="lazy"
                      />
                    </span>
                  )}
                </Link>

                <div className="ev3-proof-body">
                  <p className="eyebrow">Case study</p>
                  <h3>{c.client}</h3>
                  <p className="ev3-proof-stat">
                    <strong>{c.stat.value}</strong>
                    <span>{c.stat.label}</span>
                  </p>
                  <p className="ev3-proof-sum">{c.summary}</p>

                  {voice && (
                    <blockquote className="ev3-proof-quote">
                      <p>&ldquo;{voice.quote}&rdquo;</p>
                      <cite>
                        {voice.name}
                        <span>{voice.role}</span>
                      </cite>
                    </blockquote>
                  )}

                  <Link href={c.href} className="text-link">
                    Read the case study
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Three more voices, deliberately short. A residents' association, a client's
            own internal audit and a resident — three people a housing director cannot
            dismiss as sales material. */}
        <ul className="ev3-voices">
          {ALSO.map((t) => (
            <li key={t.name + t.role}>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <cite>
                {t.name}
                <span>{t.role}</span>
              </cite>
            </li>
          ))}
        </ul>

        <p className="mt-3 mb-0">
          <Link href="/case-studies" className="text-link">
            All case studies
          </Link>
        </p>
      </div>
    </section>
  );
}
