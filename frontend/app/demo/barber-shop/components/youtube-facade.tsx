"use client";

import { useState } from "react";

type YoutubeFacadeProps = {
  videoId: string;
  title: string;
  note?: string;
};

/**
 * Privacy-friendly YouTube embed: no third-party cookies until the user plays.
 * Uses youtube-nocookie.com when activated.
 */
export function YoutubeFacade({ videoId, title, note }: YoutubeFacadeProps) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video overflow-hidden border border-line bg-ink-elevated">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className="group absolute inset-0 flex w-full flex-col items-center justify-center text-left"
          onClick={() => setActive(true)}
          aria-label={`Reproducir: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- external YT thumb, one-off facade */}
          <img
            src={thumb}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition group-hover:opacity-85"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
          <span className="relative z-[1] flex h-16 w-16 items-center justify-center border border-brass/70 bg-brass/15 text-brass transition group-hover:bg-brass group-hover:text-ink">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-7 w-7 fill-current"
              aria-hidden
            >
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
          {note && (
            <span className="relative z-[1] mt-4 max-w-xs px-4 text-center text-[10px] tracking-[0.18em] text-cream-muted uppercase">
              {note}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
