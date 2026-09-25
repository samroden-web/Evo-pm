'use client';

import { useState } from 'react';
import { PlayIcon } from './Icons';

// Click-to-load Vimeo player (brief HOME-03): nothing loads from Vimeo until the
// visitor presses play, which protects page speed. No autoplay on page load.
// Captions are switched on with texttrack=en (upload captions or an SRT in Vimeo).
export default function VimeoFacade({ vimeoId, title, poster, rounded = false }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <div className="video-frame" style={rounded ? { borderRadius: 14, overflow: 'hidden' } : undefined}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&texttrack=en&dnt=1&title=0&byline=0&portrait=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      className={`video-facade ${rounded ? 'video-facade--rounded' : ''}`}
      onClick={() => setPlaying(true)}
    >
      {poster ? (
        <img src={poster} alt="" loading="lazy" decoding="async" />
      ) : (
        <img
          src="/images/brand/evo-logomark.svg"
          alt=""
          style={{ width: 70, height: 'auto', margin: '0 auto', position: 'absolute', top: 24, left: 24, opacity: 0.9 }}
        />
      )}
      <span className="video-facade__play">
        <PlayIcon />
      </span>
      <span className="video-facade__label">Play video: {title}</span>
    </button>
  );
}
