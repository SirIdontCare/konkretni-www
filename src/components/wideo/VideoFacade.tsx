"use client";

import { useState } from "react";

/**
 * Click-to-play Vimeo facade (16:9).
 * The iframe (dnt=1) loads only after an explicit user action — no third-party
 * requests until then, no autoplay surprises, fast LCP.
 */
export function VideoFacade({
  videoId,
  title,
  thumbnailUrl,
}: {
  videoId: string;
  title: string;
  thumbnailUrl: string | null;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="wl-video-frame">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&controls=1&dnt=1&autoplay=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="wl-video-frame">
      <button
        type="button"
        className="wl-video-facade"
        onClick={() => setActive(true)}
        aria-label={`Odtwórz wideo: ${title}`}
      >
        {thumbnailUrl && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={thumbnailUrl} alt="" loading="lazy" decoding="async" className="wl-video-poster" />
        )}
        <span className="wl-video-scrim" aria-hidden="true" />
        <span className="wl-video-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5z" />
          </svg>
        </span>
        <span className="wl-video-cta">Obejrzyj wideo</span>
      </button>
    </div>
  );
}
