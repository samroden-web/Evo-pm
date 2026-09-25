'use client';

import { useRef, useState } from 'react';

// A poster with a play button over it, which becomes a normal video the moment it is
// pressed. Added 25 September 2026 (Sam, point 8).
//
// Why it is needed: a bare <video poster preload="none"> shows a still with no reliable
// affordance. Some browsers draw a play triangle over it, some draw a control bar, and
// Safari on iOS draws neither until you tap. So a first-time visitor sees what looks
// like a photograph and moves on — which for the one piece of resident footage EVO has
// is an expensive thing to get wrong.
//
// preload="none" is kept, so nothing downloads until someone actually presses play: the
// file is 10MB, and most visitors will never watch it.

export default function VideoPlayer({ src, poster, width, height, label = 'Play the video' }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    // The element only exists once started, so wait a tick for React to render it.
    requestAnimationFrame(() => ref.current?.play());
  }

  return (
    <div className="ev3-player" style={{ aspectRatio: `${width} / ${height}` }}>
      {started ? (
        <video ref={ref} controls autoPlay playsInline poster={poster} width={width} height={height}>
          <source src={src} type="video/mp4" />
          Your browser cannot play this video.
        </video>
      ) : (
        <button type="button" className="ev3-player-poster" onClick={play}>
          <img src={poster} alt="" width={width} height={height} loading="lazy" decoding="async" />
          <span className="ev3-player-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
            </svg>
          </span>
          <span className="visually-hidden">{label}</span>
        </button>
      )}
    </div>
  );
}
