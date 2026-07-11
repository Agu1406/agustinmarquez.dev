import { SectionHeading } from "./SectionHeading";
import { SpaceCarousel } from "./SpaceCarousel";

export function SpaceSection() {
  return (
    <section id="espacio" className="scroll-mt-24 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="El espacio"
          title="Boutique grooming en Las Rozas"
          description="Paredes navy, estaciones de trabajo en mármol y sillones profesionales. Un entorno pensado para relajarte mientras cuidamos tu estilo."
        />

        <SpaceCarousel />
      </div>
    </section>
  );
}
