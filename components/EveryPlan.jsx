import Link from 'next/link';

// Shared by all three /who-we-help pages. The capabilities every customer gets
// whichever sector page they landed on, so no reader concludes a capability is
// reserved for somebody else. Kept compact deliberately: the sector-specific
// argument is what each page is for.
export default function EveryPlan() {
  return (
    <div className="ev2-everyplan">
      <div className="ev2-everyplan-head">
        <p className="eyebrow mb-0">In every plan, whoever you are</p>
        <Link href="/how-it-works" className="text-link">
          See how it works
        </Link>
      </div>
      <div className="ev2-everyplan-grid">
        <div className="ev2-ep">
          <span className="ev2-ep-figure">90%+</span>
          <p>Fixed on the first visit.</p>
        </div>
        <div className="ev2-ep">
          <span className="ev2-ep-figure">24/7</span>
          <p>Out-of-hours and emergency cover, every night of the year.</p>
        </div>
        <div className="ev2-ep">
          <strong>Vetted trades</strong>
          <p>Insurance, accreditation and competence checked before the first job, and re-checked annually.</p>
        </div>
        <div className="ev2-ep">
          <strong>The EVO Living App</strong>
          <p>Residents report, choose a slot, follow the trade on the way and rate the job.</p>
        </div>
        <div className="ev2-ep">
          <strong>The EVO Dashboard</strong>
          <p>Every job across every property, live, with history, invoices and reports.</p>
        </div>
        <div className="ev2-ep">
          <strong>A record on every job</strong>
          <p>Photographs, timestamps, notes and costs, captured as the work happens.</p>
        </div>
      </div>
    </div>
  );
}
