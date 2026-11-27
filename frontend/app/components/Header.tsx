"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE } from "../lib/site";

const NAV = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Clases", href: "/clases" },
  { label: "Contacto", href: "/#contacto" },
] as const;

/**
 * Cabecera sticky negra: dominio en blanco y navegación en chips rojos.
 * En móvil el menú se abre con un botón accesible (aria-expanded, Escape).
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="s-header">
      <div className="s-header-inner mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="s-header-brand s-mono text-base font-bold tracking-tight">
          {SITE.domain}
        </Link>

        <nav aria-label="Principal" className="s-header-desktop">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="s-nav-chip">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="s-header-menu -mr-1"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Principal móvil"
          className="s-header-panel flex flex-col gap-3 px-6 py-5 md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="s-nav-chip w-fit text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
