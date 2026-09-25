import Link from 'next/link';
import Tbc from './Tbc';
import LogoStrip from './LogoStrip';
import { frameworkLogos, accreditationLogos } from '@/data/logos';
import { board } from '@/data/team';

const kate = board.find((m) => m.name.startsWith('Kate Davies'));

// Homepage, section 11. Kate Davies is the strongest credibility signal EVO has for a
// housing director, and the old Who we are section was 123 words that never mentioned her.
// 25 September 2026 (Sam, point 12): these were nine text pills while the actual logo
// files sat in /public and were already being used in the footer. Now the logos, with
// the text list kept underneath as the accessible name for each one — a logo strip with
// no words is useless to a screen reader and to anyone who does not recognise the mark.

export default function TrustBlock() {
  return (
    <section className="section section--grey" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trust</p>
          <h2 id="trust-title">Who stands behind it.</h2>
        </div>

        <div className="ev2-board">
          {/* Her photograph comes from data/team.js, so it appears the moment the fetch
              script has run and stays a neutral panel until then — rather than the
              hardcoded placeholder that was here, which kept showing a TBC tag long
              after the file had arrived. */}
          <div className="ev2-board-photo">
            {kate?.photo ? (
              <img src={kate.photo} alt="Kate Davies CBE" width="240" height="240" loading="lazy" decoding="async" />
            ) : (
              <Tbc>Kate Davies portrait</Tbc>
            )}
          </div>
          <div>
            <h3>Kate Davies CBE joined our board.</h3>
            <p>
              Chief Executive of Notting Hill Genesis for 18 years, and a long-standing champion of innovation in
              housing. Our chairman is Steve Norris FRICS, a former Government Minister for Transport. We are also
              members of the CIH Repairs and Maintenance Community and the PropTech Peer Group.
            </p>
            <p className="mb-0">
              <Link href="/about" className="text-link">
                The board and the team
              </Link>
            </p>
          </div>
        </div>

        <div className="ev3-accreds mt-3">
          <LogoStrip
            logos={[...frameworkLogos, ...accreditationLogos]}
            color
            label="Frameworks and accreditations"
            swipe
            hideMissing
            normalise
          />
        </div>
        <p className="mt-2 mb-0 muted">
          Five years of operation with no serious health and safety incident. Every contractor re-checked annually. Net
          zero by 2030.
        </p>
      </div>
    </section>
  );
}
