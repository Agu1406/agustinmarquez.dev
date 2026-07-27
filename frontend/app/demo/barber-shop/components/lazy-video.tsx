"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  "aria-label"?: string;
};

export function LazyVideo({ src, className, "aria-label": ariaLabel }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = src;
          }
          void video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}
