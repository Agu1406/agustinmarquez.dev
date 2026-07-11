import Link from "next/link";
import {
  categoryLabels,
  formatPrice,
  services,
  type Service,
} from "../lib/services";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";

const categories = Object.keys(categoryLabels) as Service["category"][];

export function ServicesList() {
  return (
    <div className="space-y-10">
      {categories.map((category) => {
        const items = services.filter((s) => s.category === category);
        return (
          <section key={category}>
            <h2 className="font-heading text-xl font-semibold text-accent">
              {categoryLabels[category]}
            </h2>
            <div className="gold-line mt-3 mb-5 w-full max-w-xs" />
            <ul className="grid gap-4">
              {items.map((service) => (
                <li key={service.id}>
                  <Card className="bg-card/85">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <CardTitle className="flex items-center gap-2 text-base">
                            {service.name}
                            {service.featured && (
                              <Badge variant="outline" className="border-accent/40 text-accent">
                                destacado
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {service.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-accent">
                            {formatPrice(service.price)}
                          </p>
                          <p className="text-xs text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <div className="rounded-xl border border-accent/18 bg-card/60 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          ¿Listo para tu próxima visita?
        </p>
        <Link
          href="/demo/barber-shop/book"
          className={cn(buttonVariants({ size: "lg" }), "mt-4 rounded-full px-8")}
        >
          Reservar cita
        </Link>
      </div>
    </div>
  );
}
