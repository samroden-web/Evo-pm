import Link from 'next/link';
import Illustration from '@/components/Illustration';
import { sectors } from './SectorTiles';

// Homepage, section 10. Who this is for.
//
// This was a thin one-line strip: a sentence and three text links. It became three of EVO's
// own circular drawings on 28 September 2026, with the brand match. Sam, that day: "match
// their banners, and header, font style etc. they havent asked me to re-brand", and
// "incorporate some of the cartoons".
//
// WHY HERE RATHER THAN ANYWHERE ELSE. Their live site uses these exact three drawings to head
// these exact three audiences. A reader who already knows EVO arrives at a picture they
// recognise, doing the job it already does on the site they came from. Nothing else on this
// page had to move to make room, and the qualifying sentence - which is the part that stops
// the wrong reader going further - is still the first thing in the section.
//
// The drawings are decorative. Each has a heading next to it naming the audience, so reading
// "illustration of a block of flats" aloud after "Housing associations and councils" is noise,
// not information. data/illustrations.js holds the real alt text for the places it is wanted.
export default function WhoStrip() {
  return (
    <section className="ev2-whostrip" aria-labelledby="whostrip-title">
      <div className="container">
        <h2 id="whostrip-title" className="ev2-whostrip-t">
          Built for landlords with 100 to 5,000 homes.
        </h2>
        <div className="circle-row ev2-whostrip-row">
          {sectors.map((s) => (
            <Link key={s.href} href={s.href} className="ev2-whostrip-card">
              <Illustration name={s.art} size={190} />
              <span className="ev2-whostrip-name">{s.title}</span>
              <span className="go">Find out more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
