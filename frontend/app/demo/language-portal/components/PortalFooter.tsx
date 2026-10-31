"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function PortalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="s-line mt-20 border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10">
        <p className="s-muted max-w-xl">
          {t(
            "Демо з прикладами даних. Це не пропозиція занять.",
            "Demo con datos de ejemplo. No es una oferta de clases."
          )}
        </p>
        <nav aria-label={t("Юридична інформація", "Información legal")} className="flex flex-col gap-2">
          <Link href="/aviso-legal" className="s-link w-fit">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="s-link w-fit">
            Privacidad
          </Link>
          <Link href="/cookies" className="s-link w-fit">
            Cookies
          </Link>
          <Link href="/derechos" className="s-link w-fit">
            Derechos
          </Link>
          <Link href="/demo" className="s-link w-fit">
            {t("Інші демо", "Otras demos")}
          </Link>
          <Link href="/" className="s-link w-fit">
            agustinmarquez.dev
          </Link>
        </nav>
      </div>
    </footer>
  );
}
