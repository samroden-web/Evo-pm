import Photo from './Photo';

// HOME-06: the four answers line up with the four problems.
export const answers = [
  {
    title: 'Clear visibility, with the evidence built in.',
    body: 'Live repairs, compliance and the full history of every home in one place, with the audit trail recorded as the work happens.',
  },
  {
    title: 'Every repair managed from start to finish.',
    body: 'We triage, coordinate the trades, keep residents updated and see each job through to completion, with one point of contact throughout.',
  },
  {
    title: 'A clear monthly cost per property.',
    body: 'No per-job pricing and no limit on the number of repairs in your plan. Anything outside it is scoped and approved before we start.',
  },
  {
    title: 'A focus on quality and lasting repairs.',
    body: 'Vetted trades are matched to each job with the full property history, and repeat visits are tracked as a measure in their own right.',
  },
];

export default function SolutionSection({ showPhoto = true }) {
  return (
    <>
      <section className="section" aria-labelledby="solution-title">
        <div className="container">
          <div className="split split--top">
            <div>
              <p className="eyebrow">The solution</p>
              <h2 id="solution-title">EVO takes the repairs function off your hands and runs it end to end.</h2>
              <p>
                EVO provides a fully managed, end-to-end repairs and maintenance service. The helpdesk, contractor management,
                resident communication and performance oversight come together in one service, from one supplier, for one fixed
                monthly price per property.
              </p>
              <p>
                We take responsibility for managing and delivering every repair, supported by our own technology, our operations
                team and our approved contractor network. We are not a software company.
              </p>
              {showPhoto && (
                <div className="mt-2 photo--banner">
                  <Photo
                    src="/images/photos/evo-operations-team.webp"
                    alt="The EVO operations team standing together in the office, wearing EVO t-shirts"
                    caption="The EVO operations team."
                    width={1600}
                    height={945}
                  />
                </div>
              )}
            </div>
            <ol className="answer-list" style={{ listStyle: 'none' }}>
              {answers.map((a, i) => (
                <li key={a.title}>
                  <span className="num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
