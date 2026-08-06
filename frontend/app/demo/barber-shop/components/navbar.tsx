"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { externalLabel } from "@/app/demo/barber-shop/lib/a11y";
import { SITE } from "@/app/demo/barber-shop/lib/data";

const links = [
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#sobre-nosotros", id: "sobre-nosotros", label: "Nosotros" },
  { href: "#opiniones", id: "opiniones", label: "Opiniones" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
] as const;

const observedSections = [
  { id: "inicio" },
  ...links.map((link) => ({ id: link.id })),
] as const;

const MENU_ID = "barber-nav-menu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = observedSections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = menuRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  const linkClass = (id: string) =>
    `text-sm tracking-wide transition-colors ${
      active === id ? "text-brass" : "text-cream-muted hover:text-brass"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <nav
        className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="font-display text-xl tracking-[0.08em] text-cream uppercase md:text-2xl"
          onClick={() => setOpen(false)}
          aria-current={active === "inicio" ? "page" : undefined}
        >
          Ikaro
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.id)}
                aria-current={active === link.id ? "true" : undefined}
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
            aria-label={externalLabel("Reservar cita en Booksy")}
            className="hidden border border-brass/70 bg-brass/10 px-4 py-2 text-xs font-medium tracking-[0.14em] text-brass-bright uppercase transition hover:bg-brass hover:text-ink sm:inline-block"
          >
            Reservar
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-cream md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-3.5 w-5" aria-hidden="true">
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
        <div
          ref={menuRef}
          id={MENU_ID}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 top-16 z-40 bg-ink md:hidden"
        >
          <ul className="section-pad flex h-full flex-col gap-1 py-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-3 font-display text-2xl ${
                    active === link.id ? "text-brass" : "text-cream"
                  }`}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href={SITE.booksy}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel("Reservar cita en Booksy")}
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
