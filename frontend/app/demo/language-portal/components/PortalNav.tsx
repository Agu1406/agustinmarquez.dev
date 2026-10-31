"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { StableI18nText } from "./StableI18nText";

const links = [
  { href: "/demo/language-portal", labelUk: "Головна", labelEs: "Inicio" },
  { href: "/demo/language-portal/learn", labelUk: "Навчання", labelEs: "Ruta" },
  { href: "/demo/language-portal/materials", labelUk: "Матеріали", labelEs: "Materiales" },
  { href: "/demo/language-portal#contact", labelUk: "Контакт", labelEs: "Contacto" },
] as const;

export function PortalNav() {
  const { lang, toggleLang, t } = useLanguage();
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
    <header className="s-line border-b">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/demo/language-portal" className="text-base font-semibold">
          <StableI18nText uk="Заняття з іспанської" es="Clases de español" />
        </Link>

        <nav aria-label={t("Навігація", "Navegación")} className="hidden gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="s-link">
              <StableI18nText uk={item.labelUk} es={item.labelEs} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLang}
            className="s-line min-h-11 rounded-[2px] border px-3 font-medium"
            aria-label={t("Змінити мову", "Cambiar idioma")}
          >
            {lang === "uk" ? "UA" : "ES"}
          </button>
          <button
            ref={buttonRef}
            type="button"
            className="s-line -mr-2 min-h-11 rounded-[2px] border px-3 md:hidden"
            aria-expanded={open}
            aria-controls="menu-portal"
            aria-label={open ? t("Закрити меню", "Cerrar menú") : t("Відкрити меню", "Abrir menú")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t("Закрити", "Cerrar") : t("Меню", "Menú")}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-portal"
          aria-label={t("Навігація", "Navegación móvil")}
          className="s-line flex flex-col gap-4 border-t px-6 py-5 md:hidden"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="s-link w-fit text-lg"
              onClick={() => setOpen(false)}
            >
              <StableI18nText uk={item.labelUk} es={item.labelEs} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
