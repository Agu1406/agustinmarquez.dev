import { business, experiencePerks } from "../lib/business";
import { experienceIcons } from "../lib/icons";
import { LuxuryIconBox } from "./LuxuryIcon";
import { SectionHeading } from "./SectionHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-background/20 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The Experience"
          title={`La experiencia ${business.name.split(" ")[0]}`}
          description="Un espacio diseñado para el caballero que valora el detalle: servicio impecable, ambiente refinado y cero sorpresas en el precio final."
        />

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {experiencePerks.map((perk) => {
            const Icon = experienceIcons[perk.id];
            return (
              <li key={perk.id}>
                <Card className="h-full border-[#d6ad53]/20 bg-card/80">
                  <CardHeader>
                    <LuxuryIconBox icon={Icon} size="md" />
                    <CardTitle className="mt-3 text-base font-semibold leading-snug text-white">
                      {perk.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {perk.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="gold-line w-full" />
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
