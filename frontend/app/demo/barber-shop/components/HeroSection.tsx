"use client";

import { business } from "../lib/business";
import { ikaroImages } from "../lib/images";
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
          src={ikaroImages.espacio2}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#232326]/92 via-[#0b2c75]/88 to-[#232326]/95" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:gap-10 sm:py-16 md:grid-cols-2 md:items-center md:py-20 lg:py-24">
        <div className="text-center md:text-left">
          <Badge
            variant="outline"
            className="border-[#d6ad53]/50 text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ad53]"
          >
            Las Rozas de Madrid
          </Badge>
          <h1 className="mt-4 font-heading text-[2rem] font-semibold leading-[1.1] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Grooming masculino
            <span className="mt-1 block text-[#d6ad53]">sin compromisos.</span>
          </h1>
          <p className="section-desc mx-auto mt-4 max-w-lg sm:mt-5 md:mx-0">
            {business.name} combina precisión de barbería, asesoramiento de estilo y una
            boutique de productos premium para el caballero contemporáneo.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 md:items-start">
            <ReserveButton className="w-full sm:w-auto" />
            <a href={business.phoneHref} className="text-link text-sm">
              {business.phone}
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2.5 rounded-xl border border-[#d6ad53]/25 bg-[#0b2c75]/80 p-3.5 md:hidden">
            <LuxuryIcon icon={Droplets} className="text-[#d6ad53]" />
            <div className="text-left">
              <p className="section-eyebrow !text-[0.65rem]">Incluido</p>
              <p className="text-sm font-medium text-white">Lavado + peinado en cada corte</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 shadow-2xl md:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ikaroImages.espacio1}
              alt="Interior de Ikaro Men's Barber — estaciones de trabajo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-3 right-3 flex items-center gap-2.5 rounded-xl border border-[#d6ad53]/25 bg-[#0b2c75]/92 px-4 py-3 backdrop-blur sm:-bottom-4 sm:left-auto sm:right-auto sm:max-w-xs md:-bottom-4 md:-left-4">
            <LuxuryIcon icon={Droplets} className="text-[#d6ad53]" />
            <div>
              <p className="section-eyebrow !text-[0.65rem]">Incluido</p>
              <p className="text-sm font-medium text-white">Lavado + peinado en cada corte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
