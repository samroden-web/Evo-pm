import Link from 'next/link';

// Homepage, section 9. Sam's own distinction: statutory compliance is work EVO does;
// regulatory compliance is a duty that never transfers, where EVO holds the evidence.
// Suppliers who blur the two are usually overclaiming on the second.
export default function ComplianceBand() {
  return (
    <section className="ev2-compliance" aria-labelledby="compliance-title">
      <div className="container">
        <p className="eyebrow">Compliance</p>
        <h2 id="compliance-title">
          Two kinds of compliance. We help with <em>both</em>.
        </h2>
        <p className="ev2-compliance-lead">
          One is a certificate with a date on it. The other is a judgement the Regulator makes about you. Suppliers who
          blur the two are usually overclaiming on the second.
        </p>

        <div className="ev2-halves">
          <div className="ev2-half ev2-half--statutory">
            <span className="ev2-half-k">Statutory</span>
            <strong>We do the work.</strong>
            <p>
              Gas safety and boiler servicing, EICRs, PAT, smoke and heat alarms. Inspection, certification and the
              remedials, by the same trades who do your repairs.
            </p>
          </div>
          <div className="ev2-half ev2-half--regulatory">
            <span className="ev2-half-k">Regulatory</span>
            <strong>You hold the duty. We hold the proof.</strong>
            <p>
              Consumer standards, Tenant Satisfaction Measures, Awaab&rsquo;s Law and the Ombudsman. The duty never
              transfers. The evidence trail is what changes.
            </p>
          </div>
        </div>

        {/* 25 September 2026: both figures are EVO's own operational numbers and stay.
            What has gone is "against 28-plus across the sector" — somebody else's data
            with no source behind it, and the only line here anyone could challenge.
            EVO's own number does the work without the comparison. */}
        <div className="ev2-compliance-dates">
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
