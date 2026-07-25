"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/app/demo/barber-shop/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#sobre-nosotros", label: "Nosotros" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a
          href="#inicio"
          className="font-display text-xl tracking-[0.08em] text-cream uppercase md:text-2xl"
          onClick={() => setOpen(false)}
        >
          Ikaro
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-cream-muted transition-colors hover:text-brass"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-brass/70 bg-brass/10 px-4 py-2 text-xs font-medium tracking-[0.14em] text-brass-bright uppercase transition hover:bg-brass hover:text-ink sm:inline-block"
          >
            Reservar
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-cream md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-current transition ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <ul className="section-pad flex flex-col gap-1 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-display text-2xl text-cream"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={SITE.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brass bg-brass px-5 py-3 text-sm tracking-[0.14em] text-ink uppercase"
                onClick={() => setOpen(false)}
              >
                Reservar cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
