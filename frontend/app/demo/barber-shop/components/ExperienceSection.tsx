import { Coffee, CalendarCheck, Sparkles } from "lucide-react";
import { business, experiencePerks } from "../lib/business";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const icons = {
  styling: Sparkles,
  hospitality: Coffee,
  booking: CalendarCheck,
} as const;

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
            const Icon = icons[perk.id];
            return (
              <li key={perk.id}>
                <Card className="h-full border-accent/15 bg-card/70">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-full border border-accent/30 bg-accent/8">
                      <Icon className="size-4 text-accent" />
                    </div>
                    <CardTitle className="text-base leading-snug">{perk.title}</CardTitle>
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
