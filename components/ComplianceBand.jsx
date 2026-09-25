import Link from 'next/link';
import { ShieldIcon, LedgerIcon } from './Icons2';

// Homepage, section 9. Sam's own distinction: statutory compliance is work EVO does;
// regulatory compliance is a duty that never transfers, where EVO holds the evidence.
// Suppliers who blur the two are usually overclaiming on the second.
//
// Rebuilt 25 September 2026 (Sam, point 9). Two things were wrong.
//
// It was navy, sitting directly under the resident video, which is also navy. Those were
// the only two dark blocks on the page and they were adjacent, which is most of why the
// page still read as blue-heavy despite everything else being warm. The video keeps the
// dark ground — a player wants one — and compliance goes light, so the eye gets a break
// between them.
//
// And the two halves were flat text. The whole point of the section is that these are
// two DIFFERENT things, one of which EVO takes off you and one of which it cannot. So
// they are now built as opposed cards: the statutory side in EVO's own orange, because
// that is work EVO does; the regulatory side in a neutral, more formal treatment with a
// rule down its edge, because that duty stays with the landlord. The colour is carrying
// the argument rather than decorating it.

export default function ComplianceBand() {
  return (
    <section className="section ev3-compliance" aria-labelledby="compliance-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Compliance</p>
          <h2 id="compliance-title">
            Two kinds of compliance. We help with <em>both</em>.
          </h2>
          <p className="lead mb-0">
            One is a certificate with a date on it. The other is a judgement the Regulator makes about you. Suppliers
            who blur the two are usually overclaiming on the second.
          </p>
        </div>

        <div className="ev3-comp-halves">
          <div className="ev3-comp ev3-comp--ours">
            <span className="ev3-comp-icon" aria-hidden="true">
              <ShieldIcon />
            </span>
            <span className="ev3-comp-k">Statutory</span>
            <h3>We do the work.</h3>
            <p className="mb-0">
              Gas safety and boiler servicing, EICRs, PAT, smoke and heat alarms. Inspection, certification and the
              remedials, by the same trades who do your repairs.
            </p>
          </div>

          <div className="ev3-comp ev3-comp--yours">
            <span className="ev3-comp-icon" aria-hidden="true">
              <LedgerIcon />
            </span>
            <span className="ev3-comp-k">Regulatory</span>
            <h3>You hold the duty. We hold the proof.</h3>
            <p className="mb-0">
              Consumer standards, Tenant Satisfaction Measures, Awaab&rsquo;s Law and the Ombudsman. The duty never
              transfers. The evidence trail is what changes.
            </p>
          </div>
        </div>

        {/* 25 September 2026: both figures are EVO's own operational numbers and stay.
            What has gone is "against 28-plus across the sector" — somebody else's data
            with no source behind it, and the only line here anyone could challenge.
            EVO's own number does the work without the comparison. */}
        <div className="ev3-comp-stats">
          <div>
            <b>1,000+</b>
            <span>Damp and mould cases handled in the last 18 months</span>
          </div>
          <div>
            <b>6 to 7 days</b>
            <span>Average damp and mould resolution</span>
          </div>
          <div>
            <b>30 Nov 2026</b>
            <span>Awaab&rsquo;s Law phase 2 widens beyond damp and mould</span>
          </div>
        </div>

        <p className="mb-0 mt-3">
          <Link href="/compliance" className="text-link">
            How we handle statutory and regulatory compliance
          </Link>
        </p>
      </div>
    </section>
  );
}
