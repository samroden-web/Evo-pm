import Link from 'next/link';
import Tbc from './Tbc';

// Homepage, section 11. Kate Davies is the strongest credibility signal EVO has for a
// housing director, and the old Who we are section was 123 words that never mentioned her.
const ACCREDITATIONS = [
  'G-Cloud',
  'Crown Commercial Service',
  'ISO 9001 / 14001 / 45001',
  'ISO 27001',
  'Cyber Essentials',
  'Constructionline',
  'Acclaim',
  'Property Redress Scheme',
  'Living Wage Employer',
];

export default function TrustBlock() {
  return (
    <section className="section section--grey" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trust</p>
          <h2 id="trust-title">Who stands behind it.</h2>
        </div>

        <div className="ev2-board">
          <div className="ev2-board-photo">
            <Tbc>Kate Davies portrait</Tbc>
          </div>
          <div>
            <h3>Kate Davies CBE joined our board.</h3>
            <p>
              Chief Executive of Notting Hill Genesis for 18 years, and a long-standing champion of innovation in housing. Our
              chairman is Steve Norris FRICS, a former Government Minister for Transport. We are also members of the CIH Repairs and
              Maintenance Community and the PropTech Peer Group.
            </p>
            <p className="mb-0">
              <Link href="/about" className="text-link">
                The board and the team
              </Link>
            </p>
          </div>
        </div>

        <ul className="tag-list mt-3">
          {ACCREDITATIONS.map((a) => (
            <li className="tag" key={a}>
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-2 mb-0 muted">
          Five years of operation with no serious health and safety incident. Every contractor re-checked annually. Net zero by 2030.
        </p>
      </div>
    </section>
  );
}
