"use client";

import Link from "next/link";
import { Calendar, Clock, Scissors } from "lucide-react";
import { business } from "../lib/business";
import { services } from "../lib/services";
import { useBooking } from "./BookingProvider";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { cn } from "../lib/utils";

export function BookingWidget() {
  const { open, closeBooking } = useBooking();

  return (
    <Dialog open={open} onOpenChange={(next) => (next ? undefined : closeBooking())}>
      <DialogContent className="border-border/60 bg-card/95 sm:max-w-md backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-lg tracking-tight">
            Reserva en línea
          </DialogTitle>
          <DialogDescription>
            Widget integrado (demo). Selecciona un servicio y continúa al flujo
            completo de reserva.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/20 p-3"
            >
              <Scissors className="mt-0.5 size-4 shrink-0 text-accent" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug">{service.name}</p>
                <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border/40 bg-muted/30 p-3 text-xs text-muted-foreground">
          <p className="flex items-center gap-2">
            <Calendar className="size-3.5 text-accent" />
            Próximos huecos disponibles hoy
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["11:30", "13:00", "17:15", "18:45"].map((slot) => (
              <span
                key={slot}
                className="rounded-full border border-border/50 px-2.5 py-1 text-[11px] text-foreground"
              >
                {slot}
              </span>
            ))}
          </div>
          <p className="mt-2 flex items-center gap-2">
            <Clock className="size-3.5 text-accent" />
            {business.location.city}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/demo/barber-shop/book"
            onClick={closeBooking}
            className={cn(buttonVariants(), "w-full rounded-full")}
          >
            Continuar reserva
          </Link>
          <Button variant="ghost" className="rounded-full" onClick={closeBooking}>
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
