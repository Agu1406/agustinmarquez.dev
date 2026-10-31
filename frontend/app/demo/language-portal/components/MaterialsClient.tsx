"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { materialPacks } from "../lib/materials";
import { hasActiveMonthlyAccess } from "../lib/storage";
import { BilingualHeading } from "./BilingualHeading";
import { useLanguage } from "./LanguageProvider";

const premiumPackIds = new Set(["summer", "official-tests"]);

export function MaterialsClient() {
  const { t, lang } = useLanguage();
  const [premiumActive, setPremiumActive] = useState(false);
  const [noted, setNoted] = useState<string[]>([]);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setPremiumActive(hasActiveMonthlyAccess());
  }, []);

  function handleNote(id: string) {
    if (premiumPackIds.has(id) && !premiumActive) {
      setNotice(
        t(
          "Цей приклад закритий. Подивись імітацію уроку на головній.",
          "Este ejemplo está cerrado. Mira la simulación en la portada."
        )
      );
      return;
    }
    setNoted((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setNotice(
      t(
        "Файлу немає. Позначено лише в цьому браузері.",
        "No hay archivo. Solo queda anotado en este navegador."
      )
    );
  }

  return (
    <div>
      <BilingualHeading uk="Навчальні матеріали" es="Materiales" as="h1" />
      <p className="s-muted mt-4 max-w-xl">
        {t(
          "Це приклад. Завантаження немає.",
          "Esto es un ejemplo. No hay descarga."
        )}
      </p>

      {notice && (
        <p className="mt-6 max-w-xl" role="status">
          {notice}
        </p>
      )}

      {!premiumActive && (
        <p className="mt-6 max-w-xl">
          {t("Щоб відкрити позначені як premium, ", "Para abrir los marcados como premium, ")}
          <Link href="/demo/language-portal" className="s-link">
            {t("подивись імітацію на головній", "mira la simulación en la portada")}
          </Link>
          .
        </p>
      )}

      <ol className="s-line mt-8 border-t">
        {materialPacks.map((pack, index) => {
          const title = lang === "uk" ? pack.titleUk : pack.titleEs;
          const subtitle = lang === "uk" ? pack.titleEs : pack.titleUk;
          const description = lang === "uk" ? pack.descriptionUk : pack.descriptionEs;
          const access = premiumPackIds.has(pack.id)
            ? t("Premium, приклад", "Premium, de ejemplo")
            : t("Безкоштовно, приклад", "Gratis, de ejemplo");

          return (
            <li key={pack.id} className="s-line border-b py-6">
              <p className="s-muted s-mono text-sm">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight">{title}</h2>
              <p className="s-muted mt-1">{subtitle}</p>
              <p className="mt-3 max-w-xl">{description}</p>
              <p className="s-muted mt-2 text-sm">
                {pack.format}. {access}
              </p>
              <button type="button" className="s-btn mt-4" onClick={() => handleNote(pack.id)}>
                {noted.includes(pack.id)
                  ? t("Позначено", "Anotado")
                  : t("Позначити", "Anotar")}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
