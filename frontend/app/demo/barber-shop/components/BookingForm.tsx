"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { services, formatPrice } from "../lib/services";
import { barbers } from "../lib/team";
import {
  saveBooking,
  upcomingDates,
  timeSlots,
  type BookingDraft,
} from "../lib/storage";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

type Step = 1 | 2 | 3 | 4;

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [serviceId, setServiceId] = useState(services[0]?.id ?? "");
  const [barberId, setBarberId] = useState(barbers[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState<BookingDraft | null>(null);

  const dates = upcomingDates();
  const selectedService = services.find((s) => s.id === serviceId);

  function handleConfirm() {
    const draft: BookingDraft = {
      serviceId,
      barberId,
      date,
      time,
      name,
      phone,
      notes,
      createdAt: new Date().toISOString(),
    };
    saveBooking(draft);
    setConfirmed(draft);
    setStep(4);
  }

  if (confirmed) {
    const service = services.find((s) => s.id === confirmed.serviceId);
    const barber = barbers.find((b) => b.id === confirmed.barberId);
    return (
      <Card className="mx-auto max-w-lg border-accent/25 bg-card/90">
        <CardHeader className="text-center">
          <CheckCircle2 className="mx-auto size-10 text-accent" />
          <CardTitle className="mt-2">Cita confirmada (demo)</CardTitle>
          <CardDescription>
            Esta reserva es simulada y se guarda solo en tu navegador.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <span className="text-muted-foreground">Servicio:</span> {service?.name}
          </p>
          <p>
            <span className="text-muted-foreground">Barbero:</span> {barber?.name}
          </p>
          <p>
            <span className="text-muted-foreground">Fecha:</span>{" "}
            {new Date(confirmed.date).toLocaleDateString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}{" "}
            · {confirmed.time}
          </p>
          <p>
            <span className="text-muted-foreground">Nombre:</span> {confirmed.name}
          </p>
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/demo/barber-shop" className={cn(buttonVariants(), "rounded-full")}>
              Volver al inicio
            </Link>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setConfirmed(null);
                setStep(1);
              }}
            >
              Nueva reserva
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center justify-center gap-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={cn(
              "h-1.5 w-16 rounded-full transition",
              step >= n ? "bg-primary" : "bg-border"
            )}
          />
        ))}
      </div>

      {step === 1 && (
        <Card className="bg-card/90">
          <CardHeader>
            <CardTitle>Elige tu servicio</CardTitle>
            <CardDescription>Paso 1 de 3</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setServiceId(service.id)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition",
                  serviceId === service.id
                    ? "border-primary/60 bg-primary/10"
                    : "border-border/60 bg-card/50 hover:border-primary/30"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{service.description}</p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-accent">
                    {formatPrice(service.price)}
                  </span>
                </div>
                <Badge variant="secondary" className="mt-2">
                  {service.duration}
                </Badge>
              </button>
            ))}
            <Button className="mt-4 w-full rounded-full" onClick={() => setStep(2)}>
              Continuar
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="bg-card/90">
          <CardHeader>
            <CardTitle>Barbero y horario</CardTitle>
            <CardDescription>Paso 2 de 3</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Barbero</Label>
              <div className="grid gap-2 sm:grid-cols-3">
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    type="button"
                    onClick={() => setBarberId(barber.id)}
                    className={cn(
                      "rounded-xl border p-3 text-left text-sm transition",
                      barberId === barber.id
                        ? "border-primary/60 bg-primary/10"
                        : "border-border/60 hover:border-primary/30"
                    )}
                  >
                    <p className="font-medium">{barber.name}</p>
                    <p className="text-xs text-muted-foreground">{barber.specialty}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Fecha</Label>
              <div className="flex flex-wrap gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDate(d)}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "rounded-full",
                      date === d && "border-primary bg-primary/10 text-primary"
                    )}
                  >
                    {new Date(d).toLocaleDateString("es-ES", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Hora</Label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "rounded-full min-w-16",
                      time === slot && "border-primary bg-primary/10 text-primary"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 rounded-full" onClick={() => setStep(1)}>
                Atrás
              </Button>
              <Button
                className="flex-1 rounded-full"
                disabled={!date || !time}
                onClick={() => setStep(3)}
              >
                Continuar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="bg-card/90">
          <CardHeader>
            <CardTitle>Tus datos</CardTitle>
            <CardDescription>Paso 3 de 3 · {selectedService?.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+34 600 000 000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notas (opcional)</Label>
              <Input
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Preferencias, alergias..."
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 rounded-full" onClick={() => setStep(2)}>
                Atrás
              </Button>
              <Button
                className="flex-1 rounded-full"
                disabled={!name.trim() || !phone.trim()}
                onClick={handleConfirm}
              >
                Confirmar cita
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
