import Tbc from './Tbc';
import VimeoFacade from './VimeoFacade';
import JsonLd from './JsonLd';
import { videoTestimonials, isVideoReady } from '@/data/testimonials';
import { SHOW_TBC } from '@/data/site';

// HOME-03. A slot is only published once every field is filled in data/testimonials.js.
export default function VideoTestimonials() {
  const ready = videoTestimonials.filter(isVideoReady);
  const pending = videoTestimonials.filter((v) => !isVideoReady(v));
  if (!ready.length && !SHOW_TBC) return null;

  return (
    <section className="section section--grey" aria-labelledby="videos-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">In their words</p>
          <h2 id="videos-title">Hear it from the people we work with.</h2>
        </div>
        <ul className="video-cards">
          {ready.map((v) => (
            <li key={v.id}>
              <article className="video-card">
                <VimeoFacade vimeoId={v.vimeoId} title={`${v.name}, ${v.organisation}`} poster={v.poster} />
                <div className="video-card__body">
                  <p className="video-card__quote">&ldquo;{v.pullQuote}&rdquo;</p>
                  <p className="video-card__who">
                    {v.name}, {v.title}, {v.organisation}
                  </p>
                  <a className="text-link" href={v.transcript}>
                    Read the transcript
                  </a>
                </div>
              </article>
            </li>
          ))}
          {SHOW_TBC &&
            pending.map((v) => (
              <li key={v.id}>
                <article className="video-card">
                  <Tbc block className="video-placeholder">
                    Video testimonial {v.id}: file, name, title, organisation, pull quote and poster image
                  </Tbc>
                  <div className="video-card__body">
                    <p className="video-card__quote">
                      <Tbc>pull quote</Tbc>
                    </p>
                    <p className="video-card__who">
                      <Tbc>name, job title, organisation</Tbc>
                    </p>
                    <p className="mb-0">
                      <Tbc>transcript link</Tbc>
                    </p>
                  </div>
                </article>
              </li>
            ))}
        </ul>
        {ready.map((v) => (
          <JsonLd
            key={`ld-${v.id}`}
            data={{
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: `${v.name}, ${v.organisation}`,
              description: v.pullQuote,
              thumbnailUrl: v.poster,
              embedUrl: `https://player.vimeo.com/video/${v.vimeoId}`,
              uploadDate: v.uploadDate,
            }}
          />
        ))}
      </div>
    </section>
  );
}
