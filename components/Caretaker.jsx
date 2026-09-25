import Image from 'next/image';
import Link from 'next/link';

// Homepage, section 6. The Caretaker is the one differentiator no platform
// competitor can answer, and it turns "fully managed" from a claim into a person.
export default function Caretaker() {
  return (
    <section className="section section--grey" aria-labelledby="caretaker-title">
      <div className="container">
        <div className="ev2-caretaker">
          <Image
            src="/images/photos/evo-caretaker-on-estate.webp"
            alt="An EVO caretaker talking with a resident outside low-rise flats"
            width={1400}
            height={787}
            sizes="(min-width: 900px) 46vw, 100vw"
          />
          <div>
            <p className="eyebrow">The part software cannot do</p>
            <h2 id="caretaker-title">And someone actually there.</h2>
            {/* Qualified 25 September 2026. Caretakers are a large-site service — a single
                block of 33 homes does not get a dedicated one — and the page was promising
                it to everybody. Saying so makes scale a reason to grow the contract rather
                than something a client discovers later. */}
            <p>
              On larger sites, a community engagement officer based on the estate, who residents recognise and can stop
              on the path. Not a number that routes to a call centre, and not a supplier who appears only when something
              has already gone wrong.
            </p>
            <p className="mb-0">
              <Link href="/how-it-works" className="text-link">
                How the service runs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
