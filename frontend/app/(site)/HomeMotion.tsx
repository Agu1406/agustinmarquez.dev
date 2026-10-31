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
      tl.from("[data-home='title']", { y: 18, duration: 0.6 }, 0);
      tl.from("[data-home='lead']", { y: 12, duration: 0.5 }, 0.1);
      tl.from("[data-home='item']", { y: 10, duration: 0.45, stagger: 0.07 }, 0.22);
      tl.eventCallback("onComplete", () => {
        gsap.set("[data-home]", { clearProps: "transform" });
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
