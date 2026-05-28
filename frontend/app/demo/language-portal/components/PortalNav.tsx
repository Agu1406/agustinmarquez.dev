"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { useLanguage } from "./LanguageProvider";
import { StableI18nText } from "./StableI18nText";

const links = [
  { href: "/demo/language-portal", labelUk: "Головна", labelEs: "Inicio" },
  { href: "/demo/language-portal/learn", labelUk: "Навчання", labelEs: "Ruta" },
  { href: "/demo/language-portal/materials", labelUk: "Матеріали", labelEs: "Recursos" },
  { href: "/demo/language-portal#contact", labelUk: "Контакт", labelEs: "Contacto" },
];

export function PortalNav() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-card/75 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-[auto_1fr_auto]">
        <Link href="/demo/language-portal" className="flex items-center gap-2 md:justify-self-start">
          <div>
            <p className="text-base font-semibold leading-tight text-foreground md:text-lg">
              <StableI18nText
                uk="Заняття з іспанської"
                es="Clases de español"
              />
            </p>
            <p className="text-xs text-muted-foreground">
              <StableI18nText
                uk="Spanish lessons"
                es="Clases para aprender español"
              />
            </p>
          </div>
          <Badge variant="secondary" className="hidden md:inline-flex">
            live
          </Badge>
        </Link>
        <nav className="order-2 hidden items-center justify-center gap-2 md:flex md:justify-self-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "min-w-24 rounded-full bg-card/45 text-muted-foreground hover:bg-card/65 hover:text-foreground"
              )}
            >
              <span className="block leading-tight">
                <StableI18nText uk={l.labelUk} es={l.labelEs} />
              </span>
              <span className="text-[10px]">
                <StableI18nText uk={l.labelEs} es={l.labelUk} />
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2 md:justify-self-end">
          <button
            type="button"
            onClick={toggleLang}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full px-3 font-medium"
            )}
            aria-label={t("Змінити мову", "Cambiar idioma")}
          >
            <span className="inline-grid">
              <span className="invisible col-start-1 row-start-1 inline-flex items-center gap-1.5">
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1e6.svg"
                  alt=""
                  className="size-4"
                />
                UA
                <span aria-hidden>→</span>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1f8.svg"
                  alt=""
                  className="size-4"
                />
                ES
              </span>
              <span className="invisible col-start-1 row-start-1 inline-flex items-center gap-1.5">
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1f8.svg"
                  alt=""
                  className="size-4"
                />
                ES
                <span aria-hidden>→</span>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1e6.svg"
                  alt=""
                  className="size-4"
                />
                UA
              </span>
              {lang === "uk" ? (
                <span className="col-start-1 row-start-1 inline-flex items-center gap-1.5">
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1e6.svg"
                    alt="Україна"
                    className="size-4"
                  />
                  UA
                  <span aria-hidden>→</span>
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1f8.svg"
                    alt="España"
                    className="size-4"
                  />
                  ES
                </span>
              ) : (
                <span className="col-start-1 row-start-1 inline-flex items-center gap-1.5">
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1f8.svg"
                    alt="España"
                    className="size-4"
                  />
                  ES
                  <span aria-hidden>→</span>
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1e6.svg"
                    alt="Україна"
                    className="size-4"
                  />
                  UA
                </span>
              )}
            </span>
          </button>
          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full px-2 md:hidden"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={t("Відкрити меню", "Abrir menú")}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
          <Link
            href="/demo/language-portal/learn"
            className={cn(buttonVariants({ size: "sm" }), "hidden rounded-full px-5 md:inline-flex")}
          >
            <StableI18nText uk="Почати" es="Empezar" />
          </Link>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-border/70 bg-card/72 px-4 pb-4 pt-2 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-auto w-full justify-between rounded-xl bg-card/50 px-4 py-2"
                )}
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-left">
                  <span className="block leading-tight">
                    <StableI18nText uk={l.labelUk} es={l.labelEs} />
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    <StableI18nText uk={l.labelEs} es={l.labelUk} />
                  </span>
                </span>
              </Link>
            ))}
            <Link
              href="/demo/language-portal/learn"
              className={cn(buttonVariants(), "rounded-xl")}
              onClick={() => setMobileOpen(false)}
            >
              <StableI18nText uk="Почати" es="Empezar" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
