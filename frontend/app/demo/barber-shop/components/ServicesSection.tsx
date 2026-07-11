import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, categoryLabels } from "../lib/services";
import { serviceIcons } from "../lib/icons";
import { ReserveLink } from "./ReserveButton";
import { LuxuryIconBox } from "./LuxuryIcon";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ServicesSection({ showAll = false }: { showAll?: boolean }) {
  return (
    <section id="servicios" className="scroll-mt-24 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Servicios"
          title="Excelencia en grooming"
          description="Técnicas profesionales, acabados impecables y asesoramiento personalizado para cada tipo de cabello y barba."
        />

        {!showAll && (
          <p className="mt-4 text-center">
            <Link
              href="/demo/barber-shop/services"
              className="text-link inline-flex items-center gap-1 text-sm"
            >
              Carta completa
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
            </Link>
          </p>
        )}

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[service.category];
            return (
              <li key={service.id} className={index === 0 ? "md:col-span-2" : ""}>
                <Card
                  className={`h-full bg-card/80 ${index === 0 ? "border-[#d6ad53]/25" : "border-white/12"}`}
                >
                  <CardHeader>
                    <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                      <LuxuryIconBox icon={ServiceIcon} size="md" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                          <Badge
                            variant="secondary"
                            className="text-[10px] font-semibold uppercase tracking-wider"
                          >
                            {categoryLabels[service.category]}
                          </Badge>
                          {index === 0 && (
                            <Badge
                              variant="outline"
                              className="border-[#d6ad53]/45 font-semibold text-[#d6ad53]"
                            >
                              Más solicitado
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="mt-2 text-lg font-semibold leading-snug text-white">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex justify-center pt-0 sm:justify-start sm:pl-[4.5rem]">
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
