"use client";

import Link from "next/link";
import { BookOpen, CalendarClock, Files, GraduationCap } from "lucide-react";
import { formatGroupPrice } from "./lib/pricing";
import { Button, buttonVariants } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { cn } from "./lib/utils";
import { BilingualHeading } from "./components/BilingualHeading";
import { SampleClassSection } from "./components/SampleClassSection";
import { ContactSection } from "./components/ContactSection";
import { useLanguage } from "./components/LanguageProvider";

const price = formatGroupPrice();

const services = [
  { uk: "Онлайн-уроки 1:1", es: "Clases individuales", icon: GraduationCap },
  { uk: "Групові заняття", es: "Clases en grupo", icon: CalendarClock },
  { uk: "Матеріали для завантаження", es: "Material descargable", icon: Files },
  { uk: "Тести A1–B2", es: "Preparación DELE/SIELE", icon: BookOpen },
];

export default function LanguagePortalHome() {
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Card className="border-primary/30 bg-card/80 shadow-lg backdrop-blur">
        <CardContent className="p-6">
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <h1 className="font-heading text-3xl font-bold md:text-4xl">
              {t("Заняття з іспанської", "Clases de español")}
            </h1>
            <p className="mt-1 text-base text-muted-foreground">
              {t("Clases de español", "Clases de español")}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {t(
                "Онлайн-уроки іспанської для українців: заняття, матеріали й інтерактивні вправи у форматі міні-платформи.",
                "Clases online de español para ucranianos: sesiones, materiales y ejercicios interactivos en formato mini plataforma."
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{price.uah} / {price.eur}</Badge>
              <Badge variant="secondary">A1–B2</Badge>
              <Badge variant="outline">
                {t("працює онлайн", "funciona online")}
              </Badge>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/demo/language-portal/learn"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
              >
                {t("Почати навчання", "Empezar aprendizaje")}
              </Link>
              <Link
                href="/demo/language-portal/materials"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full"
                )}
              >
                {t("Матеріали", "Materiales")}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mt-12">
        <BilingualHeading uk="Послуги" es="Servicios" className="mb-4" />
        <ul className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.uk}>
                <Card className="h-full bg-card/85">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className="size-4 text-primary" />
                      {t(service.uk, service.es)}
                    </CardTitle>
                    <CardDescription>
                      {lang === "uk" ? service.es : service.uk}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <SampleClassSection />
        <Card className="bg-card/85">
          <CardHeader>
            <CardTitle>{t("Офіційні тести", "Exámenes oficiales")}</CardTitle>
            <CardDescription>
              {t("Exámenes oficiales de años anteriores", "Exámenes oficiales de años anteriores")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              {t(
                "Підбірка DELE і SIELE для практики (A1–B2) з подальшим розбором на заняттях.",
                "Selección DELE y SIELE para practicar (A1–B2) y corregir en clase."
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>DELE</Badge>
              <Badge variant="secondary">SIELE</Badge>
              <Badge variant="outline">{t("офіційні ресурси", "recursos oficiales")}</Badge>
            </div>
            <Link href="/demo/language-portal/materials">
              <Button variant="outline" className="w-full rounded-full">
                {t("Переглянути матеріали", "Ver materiales oficiales")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <ContactSection />
      </section>
    </div>
  );
}
