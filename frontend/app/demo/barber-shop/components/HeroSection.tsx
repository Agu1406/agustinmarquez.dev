"use client";

import { business } from "../lib/business";
import { LuxuryIcon } from "./LuxuryIcon";
import { ReserveButton } from "./ReserveButton";
import { Badge } from "./ui/badge";
import { Droplets } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--rolex-charcoal)]/95 via-[var(--rolex-navy)]/80 to-[var(--rolex-charcoal)]/90" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
        <div>
          <Badge
            variant="outline"
            className="border-accent/40 text-[11px] uppercase tracking-[0.22em] text-accent"
          >
            Las Rozas de Madrid
          </Badge>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
            Grooming masculino
            <span className="block text-accent">sin compromisos.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {business.name} combina precisión de barbería, asesoramiento de estilo y una
            boutique de productos premium para el caballero contemporáneo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ReserveButton />
            <a href={business.phoneHref} className="text-link text-sm">
              {business.phone}
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&auto=format&fit=crop"
              alt="Estilismo masculino profesional"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-xl border border-accent/25 bg-card/90 px-4 py-3 backdrop-blur">
            <LuxuryIcon icon={Droplets} className="text-accent" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Incluido</p>
              <p className="text-sm font-medium">Lavado + peinado en cada corte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
