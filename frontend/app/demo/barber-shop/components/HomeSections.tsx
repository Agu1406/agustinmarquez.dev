import Link from "next/link";
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import { services, formatPrice } from "../lib/services";
import { barbers } from "../lib/team";
import { galleryItems } from "../lib/gallery";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";

const featured = services.filter((s) => s.featured);

export function HomeSections() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Card className="overflow-hidden border-primary/25 bg-card/80">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <Badge variant="outline" className="border-primary/40 text-primary">
                Est. 2018 · Madrid
              </Badge>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                El arte del cuidado masculino
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Maison Barbieri es una barbería boutique donde cada visita es un ritual:
                atención personalizada, herramientas de precisión y un ambiente diseñado
                para desconectar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/demo/barber-shop/book"
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
                >
                  Reservar cita
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/demo/barber-shop/services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full px-6"
                  )}
                >
                  Ver carta
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-xl border border-border/60 bg-background/20 p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">Experiencia premium</p>
                  <p className="text-xs text-muted-foreground">
                    Bebida de cortesía, productos artesanales y asesoría de estilo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">Mar–Sáb · 10:00–20:00</p>
                  <p className="text-xs text-muted-foreground">
                    Citas con hora. Domingo cerrado.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">Calle de Serrano, 42</p>
                  <p className="text-xs text-muted-foreground">28001 Madrid</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Carta</p>
            <h2 className="mt-1 font-heading text-2xl font-semibold">Servicios destacados</h2>
          </div>
          <Link
            href="/demo/barber-shop/services"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Ver todos
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {featured.map((service) => (
            <li key={service.id}>
              <Card className="h-full bg-card/85">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base">{service.name}</CardTitle>
                    <span className="shrink-0 font-medium text-primary">
                      {formatPrice(service.price)}
                    </span>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary">{service.duration}</Badge>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Equipo</p>
        <h2 className="mt-1 font-heading text-2xl font-semibold">Maestros barberos</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {barbers.map((barber) => (
            <li key={barber.id}>
              <Card className="h-full bg-card/85">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-heading text-lg font-semibold text-primary">
                    {barber.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <CardTitle className="text-base">{barber.name}</CardTitle>
                  <CardDescription>{barber.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p>{barber.specialty}</p>
                  <p className="text-xs text-primary">{barber.experience} de experiencia</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h2 className="mt-1 font-heading text-2xl font-semibold">Galería</h2>
          </div>
          <Link
            href="/demo/barber-shop/gallery"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Ver galería
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => (
            <li key={item.id}>
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="text-xs text-white/70">{item.style}</p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section id="ubicacion" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10">
        <Card className="border-primary/20 bg-card/85">
          <CardHeader>
            <CardTitle>Visítanos</CardTitle>
            <CardDescription>
              Demo de reservas sin backend. Los datos de contacto son ficticios.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Dirección:</span> Calle de Serrano,
                42, 28001 Madrid
              </p>
              <p>
                <span className="font-medium text-foreground">Teléfono:</span> +34 910 000 000
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                reservas@maisonbarbieri.demo
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm text-muted-foreground">
                Reserva online en menos de un minuto. Confirmación simulada al finalizar.
              </p>
              <Link href="/demo/barber-shop/book">
                <Button className="w-full rounded-full">Reservar ahora</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
