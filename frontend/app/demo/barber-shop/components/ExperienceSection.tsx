import { business, experiencePerks } from "../lib/business";
import { experienceIcons } from "../lib/icons";
import { LuxuryIconBox } from "./LuxuryIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-background/20 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs uppercase tracking-[0.24em] text-accent">The Experience</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          La experiencia {business.name.split(" ")[0]}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Un espacio diseñado para el caballero que valora el detalle: servicio impecable,
          ambiente refinado y cero sorpresas en el precio final.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {experiencePerks.map((perk) => {
            const Icon = experienceIcons[perk.id];
            return (
              <li key={perk.id}>
                <Card className="h-full border-accent/15 bg-card/70">
                  <CardHeader>
                    <LuxuryIconBox icon={Icon} size="md" />
                    <CardTitle className="mt-3 text-base leading-snug">{perk.title}</CardTitle>
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
