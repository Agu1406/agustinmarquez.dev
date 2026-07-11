"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Scissors, X } from "lucide-react";
import { business } from "../lib/business";
import { useBooking } from "./BookingProvider";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

const links = [
  { href: "/demo/barber-shop#inicio", label: "Inicio" },
  { href: "/demo/barber-shop#experiencia", label: "Experiencia" },
  { href: "/demo/barber-shop#servicios", label: "Servicios" },
  { href: "/demo/barber-shop#boutique", label: "Boutique" },
  { href: "/demo/barber-shop#contacto", label: "Contacto" },
];

export function BarberNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-card/75 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-[auto_1fr_auto]">
        <Link href="/demo/barber-shop" className="flex items-center gap-2.5 md:justify-self-start">
          <div className="flex size-9 items-center justify-center rounded-full border border-accent/45 bg-accent/12">
            <Scissors className="size-4 text-accent" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold leading-tight tracking-wide md:text-lg">
              Ikaro
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Men&apos;s Barber
            </p>
          </div>
          <Badge variant="outline" className="hidden border-accent/40 text-accent md:inline-flex">
            demo
          </Badge>
        </Link>

        <nav className="order-2 hidden items-center justify-center gap-1 md:flex md:justify-self-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-full px-3.5 text-muted-foreground hover:bg-card/60 hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:justify-self-end">
          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full px-2 md:hidden"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
          <button
            type="button"
            onClick={openBooking}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full border border-primary/40 bg-primary px-5 text-primary-foreground shadow-[0_0_20px_-6px_#05409b] hover:bg-[#0334b9]"
            )}
          >
            Reservar
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/70 bg-card/90 px-4 pb-4 pt-2 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-auto w-full justify-start rounded-xl bg-card/50 px-4 py-2.5"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openBooking();
              }}
              className={cn(buttonVariants(), "rounded-xl")}
            >
              Reservar en línea
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
