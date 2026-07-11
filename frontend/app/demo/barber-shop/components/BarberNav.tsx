"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarClock, Menu, X } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { BrandWordmark } from "./BrandWordmark";
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="barber-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:py-4">
        <BrandWordmark className="max-w-[min(100%,14rem)] sm:max-w-none" />

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "nav-ghost-btn size-10 rounded-full p-0 md:hidden"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={1.35} />
            ) : (
              <Menu className="size-5" strokeWidth={1.35} />
            )}
          </button>

          <button
            type="button"
            onClick={openBooking}
            className={cn(
              buttonVariants({ size: "sm" }),
              "nav-reserve-btn shadow-rolex rounded-full px-3.5 sm:px-5"
            )}
          >
            <CalendarClock className="size-4 shrink-0" strokeWidth={1.35} />
            <span className="hidden min-[380px]:inline">Reservar</span>
          </button>
        </div>
      </div>

      <nav className="barber-header-nav hidden border-t border-[var(--rolex-header-border)] md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-1 px-4 py-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-desktop-link">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {mobileOpen && (
        <div className="barber-mobile-menu fixed inset-0 top-[var(--barber-header-height)] z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="relative flex max-h-[calc(100dvh-var(--barber-header-height))] flex-col gap-1 overflow-y-auto px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-mobile-link"
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
              className={cn(buttonVariants(), "nav-reserve-btn mt-3 w-full rounded-xl py-3")}
            >
              <CalendarClock className="size-4" strokeWidth={1.35} />
              Reservar en línea
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
