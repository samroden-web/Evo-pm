import Link from 'next/link';
import VideoPlayer from './VideoPlayer';
import Image from 'next/image';

// The resident vox pop reel, replacing the three empty video testimonial slots.
//
// WHY THIS IS NOT THREE CARDS. The brief specified two or three landscape video
// testimonials from clients, and the build carried three empty slots marked TBC. What
// EVO actually has is one reel: 2 minutes 19 seconds, shot vertical at 1080x1920, of
// residents talking about the app in their own homes. Three landscape cards is the
// wrong container for that, so this is one portrait player beside the argument.
//
// It is also the right *kind* of proof in this position. The written testimonials are
// from landlords and managing agents — the buyer's peers. This is the buyer's
// residents, which is the thing a housing director is actually judged on.
//
// The file is served from /public rather than Vimeo: the 512MB master compresses to
// 11MB at 720x1280, which is small enough to host directly and avoids a third-party
// player, its cookies and its consent banner. preload="none" means nothing downloads
// until someone presses play.

export default function ResidentVideo() {
  return (
    <section className="section section--navy" aria-labelledby="voxpop-title">
      <div className="container">
        <div className="ev3-voxpop">
          <figure className="ev3-voxpop-player">
            <VideoPlayer
              src="/video/evo-resident-voxpop.mp4"
              poster="/images/photos/evo-resident-voxpop-poster.webp"
              width={720}
              height={1280}
              label="Play the resident video"
            />
          </figure>

          <div>
            <p className="eyebrow">In their words</p>
            <h2 id="voxpop-title">Ask the people who live there.</h2>
            <p className="lead">
              Residents in their own kitchens and doorways, talking about reporting a repair on the EVO Living App. Not
              a scripted case study &mdash; we asked, and this is what they said.
            </p>
            <p>
              Resident satisfaction is one of the Tenant Satisfaction Measures you are reported against, and repairs is
              the part of it residents feel most directly. It is also the part of a supplier&rsquo;s pitch you can check
              for yourself, which is why it is here rather than in a slide.
            </p>
            <p className="mb-0">
              <Link href="/residents" className="text-link">
                What residents get
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
