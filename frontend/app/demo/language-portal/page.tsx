"use client";

import Link from "next/link";
import { DEMO_NOTICE, EXAMPLE_PRICE_NOTE, formatGroupPrice } from "./lib/pricing";
import { SampleClassSection } from "./components/SampleClassSection";
import { ContactSection } from "./components/ContactSection";
import { useLanguage } from "./components/LanguageProvider";

const price = formatGroupPrice();

const services = [
  { uk: "Онлайн-уроки 1:1", es: "Clases individuales" },
  { uk: "Групові заняття", es: "Clases en grupo" },
  { uk: "Матеріали для завантаження", es: "Material de ejemplo" },
  { uk: "Тести A1–B2", es: "Práctica DELE y SIELE" },
] as const;

export default function LanguagePortalHome() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-12 md:gap-28 md:py-20">
      <section aria-labelledby="titulo-portal">
        <p className="s-muted max-w-xl">{t(DEMO_NOTICE.uk, DEMO_NOTICE.es)}</p>
        <h1
          id="titulo-portal"
          className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          {t("Заняття з іспанської", "Clases de español")}
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {t(
            "Онлайн-уроки іспанської для українців: заняття, матеріали й вправи. Усе це приклад, без сервера.",
            "Clases online de español para ucranianos: sesiones, materiales y ejercicios. Todo es un ejemplo, sin servidor."
          )}
        </p>
        <p className="mt-6 text-lg">
          {price.eur} / {price.uah}
        </p>
        <p className="s-muted mt-2 max-w-xl text-sm">
          {t(EXAMPLE_PRICE_NOTE.uk, EXAMPLE_PRICE_NOTE.es)}
        </p>
        <p className="mt-8 flex flex-col gap-3 text-lg">
          <Link href="/demo/language-portal/learn" className="s-link w-fit font-medium">
            {t("Почати навчання", "Empezar la ruta")}
          </Link>
          <Link href="/demo/language-portal/materials" className="s-link w-fit font-medium">
            {t("Матеріали", "Materiales")}
          </Link>
        </p>
      </section>

      <section aria-labelledby="titulo-servicios">
        <h2 id="titulo-servicios" className="s-muted s-mono text-sm uppercase tracking-wider">
          {t("Послуги", "Servicios")}
        </h2>
        <ol className="s-line mt-6 border-t">
          {services.map((service, index) => (
            <li key={service.es} className="s-line grid gap-2 border-b py-6 md:grid-cols-[3rem_1fr] md:gap-6">
              <span className="s-muted s-mono text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-2xl font-medium tracking-tight">
                  {t(service.uk, service.es)}
                </span>
                <span className="s-muted mt-1 block">
                  {t(service.es, service.uk)}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <SampleClassSection />

      <section aria-labelledby="titulo-examenes">
        <h2 id="titulo-examenes" className="s-muted s-mono text-sm uppercase tracking-wider">
          {t("Офіційні тести", "Exámenes oficiales")}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          {t(
            "Підбірка DELE і SIELE для практики (A1–B2). Це приклади, не іспит на цій сторінці.",
            "Selección de ejemplo para practicar DELE y SIELE (A1 a B2). Esta página no es el examen."
          )}
        </p>
        <p className="mt-4">
          <Link href="/demo/language-portal/materials" className="s-link font-medium">
            {t("Переглянути матеріали", "Ver materiales")}
          </Link>
        </p>
      </section>

      <ContactSection />
    </div>
  );
}
