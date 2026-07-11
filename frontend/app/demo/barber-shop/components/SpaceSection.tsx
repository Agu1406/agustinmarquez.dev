import { ikaroImages } from "../lib/images";
import { SectionHeading } from "./SectionHeading";

export function SpaceSection() {
  return (
    <section id="espacio" className="scroll-mt-24 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="El espacio"
          title="Boutique grooming en Las Rozas"
          description="Paredes navy, estaciones de trabajo en mármol y sillones profesionales. Un entorno pensado para relajarte mientras cuidamos tu estilo."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          <li>
            <figure className="overflow-hidden rounded-2xl border border-white/12 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ikaroImages.espacio1}
                alt="Estaciones de trabajo con espejos y encimera de mármol en Ikaro Men's Barber"
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
                loading="lazy"
              />
              <figcaption className="bg-[#0b2c75]/90 px-4 py-3 text-center text-sm font-medium text-white">
                Estaciones de trabajo
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="overflow-hidden rounded-2xl border border-white/12 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ikaroImages.espacio2}
                alt="Sillones de barbería y salón principal de Ikaro Men's Barber"
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
                loading="lazy"
              />
              <figcaption className="bg-[#0b2c75]/90 px-4 py-3 text-center text-sm font-medium text-white">
                Salón y sillones profesionales
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
