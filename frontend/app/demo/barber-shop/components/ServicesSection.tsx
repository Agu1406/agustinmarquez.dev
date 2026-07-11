import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, categoryLabels } from "../lib/services";
import { serviceIcons } from "../lib/icons";
import { ReserveLink } from "./ReserveButton";
import { LuxuryIconBox } from "./LuxuryIcon";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ServicesSection({ showAll = false }: { showAll?: boolean }) {
  const items = services;

  return (
    <section id="servicios" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent">Servicios</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Excelencia en grooming
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Técnicas profesionales, acabados impecables y asesoramiento personalizado
              para cada tipo de cabello y barba.
            </p>
          </div>
          {!showAll && (
            <Link
              href="/demo/barber-shop/services"
              className="text-link inline-flex items-center gap-1 text-sm"
            >
              Carta completa
              <ArrowUpRight className="size-3.5" strokeWidth={1.35} />
            </Link>
          )}
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((service, index) => {
            const ServiceIcon = serviceIcons[service.category];
            return (
              <li key={service.id} className={index === 0 ? "md:col-span-2" : ""}>
                <Card
                  className={`h-full bg-card/75 ${index === 0 ? "border-accent/20" : "border-border/50"}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <LuxuryIconBox icon={ServiceIcon} size="md" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                            {categoryLabels[service.category]}
                          </Badge>
                          {index === 0 && (
                            <Badge variant="outline" className="border-accent/40 text-accent">
                              Más solicitado
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="mt-2 text-lg leading-snug">{service.name}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between pt-0 pl-[4.5rem]">
                    <ReserveLink label="Reservar este servicio" />
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
