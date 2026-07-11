"use client";

import { useEffect, useState } from "react";
import { ikaroImages } from "../lib/images";
import { cn } from "../lib/utils";

const slides = [
  {
    src: ikaroImages.espacio1,
    alt: "Estaciones de trabajo con espejos y encimera de mármol en Ikaro Men's Barber",
    caption: "Estaciones de trabajo",
  },
  {
    src: ikaroImages.espacio2,
    alt: "Sillones de barbería y salón principal de Ikaro Men's Barber",
    caption: "Salón y sillones profesionales",
  },
] as const;

const INTERVAL_MS = 6000;

export function SpaceCarousel() {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <figure className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-white/12 shadow-2xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        {slides.map((slide, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out",
              index === active ? "opacity-100" : "opacity-0"
            )}
            loading={index === 0 ? "eager" : "lazy"}
            aria-hidden={index !== active}
          />
        ))}
      </div>

      <figcaption className="bg-[#0b2c75] px-4 py-3 text-center text-sm font-medium text-white">
        {slides[active].caption}
      </figcaption>

      <div
        className="absolute bottom-[3.25rem] left-0 right-0 flex justify-center gap-2"
        role="tablist"
        aria-label="Fotos del espacio"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={slide.caption}
            onClick={() => setActive(index)}
            className={cn(
              "size-2 rounded-full transition-colors",
              index === active
                ? "bg-[#d6ad53]"
                : "bg-white/35 hover:bg-white/55"
            )}
          />
        ))}
      </div>
    </figure>
  );
}
