import Image from 'next/image';
import Link from 'next/link';

// The Caretaker is the one differentiator no platform competitor can answer, and it
// turns "fully managed" from a claim into a person.
//
// 25 September 2026 (Sam, point 3): it is no longer its own section. It sits directly
// under the problem/solution table, inside the same section, because it is the last row
// of the same argument — the part of "we take it off your hands" that software cannot
// do. As a standalone band it had a full section's padding above and below it, which put
// a lot of air either side of what is really a closing line.
//
// `bare` renders it without its own <section> wrapper, for that use.
export default function Caretaker({ bare = false }) {
  const inner = (
    <div className="ev2-caretaker ev2-caretaker--tight">
      <Image
        src="/images/photos/evo-caretaker-on-estate.webp"
        alt="An EVO caretaker talking with a resident outside low-rise flats"
        width={1400}
        height={787}
        sizes="(min-width: 900px) 46vw, 100vw"
      />
      <div>
        <p className="eyebrow">The part software cannot do</p>
        <h3 id="caretaker-title">And someone actually there.</h3>
        {/* Qualified 25 September 2026. Caretakers are a large-site service — a single
                block of 33 homes does not get a dedicated one — and the page was promising
                it to everybody. Saying so makes scale a reason to grow the contract rather
                than something a client discovers later. */}
        <p>
          On larger sites, a community engagement officer based on the estate, who residents recognise and can stop on
          the path. Not a number that routes to a call centre, and not a supplier who appears only when something has
          already gone wrong.
        </p>
        <p className="mb-0">
          <Link href="/how-it-works" className="text-link">
            How the service runs
          </Link>
        </p>
      </div>
    </div>
  );

  if (bare) return inner;
  return (
    <section className="section section--grey" aria-labelledby="caretaker-title">
      <div className="container">{inner}</div>
    </section>
  );
}
