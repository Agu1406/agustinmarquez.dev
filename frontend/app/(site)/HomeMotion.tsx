"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Línea de tiempo solo de la portada. Sin JavaScript, o con movimiento
 * reducido, el HTML se queda quieto y se lee igual.
 */
export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from("[data-home='brand']", { y: 14, duration: 0.45 }, 0);
      tl.from("[data-home='title']", { y: 22, duration: 0.65 }, 0.05);
      tl.from("[data-home='lead']", { y: 14, duration: 0.5 }, 0.15);
      tl.from("[data-home='cta']", { y: 10, duration: 0.4 }, 0.22);
      tl.from(
        "[data-home='hero-media']",
        { opacity: 0.35, duration: 0.55 },
        0.12,
      );
      tl.from(
        "[data-home='panel']",
        { y: 12, duration: 0.45, stagger: 0.06 },
        0.28,
      );
      tl.eventCallback("onComplete", () => {
        gsap.set("[data-home]", { clearProps: "transform,opacity" });
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
