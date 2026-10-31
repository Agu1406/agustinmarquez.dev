"use client";

import { SITE } from "../../../lib/site";
import { useLanguage } from "./LanguageProvider";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-8" aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto" className="s-muted s-mono text-sm uppercase tracking-wider">
        {t("Зв'язок", "Contacto")}
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        {t(
          "Це демо. Повідомлення не зберігається тут: відкриється пошта портфоліо.",
          "Esto es una demo. El mensaje no se guarda aquí: se abre el correo del portfolio."
        )}
      </p>
      <p className="mt-4">
        <a href={`mailto:${SITE.email}`} className="s-link text-lg font-medium">
          {SITE.email}
        </a>
      </p>
    </section>
  );
}
