"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Lock } from "lucide-react";
import { materialPacks } from "../lib/materials";
import {
  hasActiveMonthlyAccess,
} from "../lib/storage";
import { BilingualHeading } from "./BilingualHeading";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "./LanguageProvider";

export function MaterialsClient() {
  const { t, lang } = useLanguage();
  const [premiumActive, setPremiumActive] = useState(false);
  const [downloaded, setDownloaded] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const premiumPackIds = new Set(["summer", "official-tests"]);

  useEffect(() => {
    setPremiumActive(hasActiveMonthlyAccess());
  }, []);

  function handleDownload(id: string) {
    const isPremium = premiumPackIds.has(id);
    if (isPremium && !premiumActive) {
      setToast(
        t(
          "Цей пакет преміум. Перегляньте щонайменше 1 урок щомісяця.",
          "Este pack es premium. Mira al menos 1 clase al mes para desbloquearlo."
        )
      );
      setTimeout(() => setToast(null), 3000);
      return;
    }
    setDownloaded((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setToast(t("Завантаження розпочато.", "Descarga iniciada."));
    setTimeout(() => setToast(null), 2500);
  }

  return (
    <div>
      <BilingualHeading uk="Навчальні матеріали" es="Materiales educativos" as="h1" />

      {toast && (
        <Alert className="mt-4">
          <AlertDescription>{toast}</AlertDescription>
        </Alert>
      )}

      {!premiumActive && (
        <Alert className="mt-4 border-amber-300 bg-amber-50 text-amber-900">
          <Lock className="size-4" />
          <AlertDescription>
            {t("Для преміум-пакетів зайдіть на ", "Para packs premium entra en ")}
            <Link href="/demo/language-portal" className="underline">
              {t("головну сторінку", "la página principal")}
            </Link>{" "}
            {t("і перегляньте урок.", "y mira una clase.")}
          </AlertDescription>
        </Alert>
      )}

      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {materialPacks.map((pack) => (
          <li key={pack.id}>
            <Card className="h-full bg-card/85">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">
                    {lang === "uk" ? pack.titleUk : pack.titleEs}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{pack.format}</Badge>
                    {premiumPackIds.has(pack.id) ? (
                      <Badge variant="outline">Premium</Badge>
                    ) : (
                      <Badge>{t("Безкоштовно", "Gratis")}</Badge>
                    )}
                  </div>
                </div>
                <CardDescription>
                  {lang === "uk" ? pack.titleEs : pack.titleUk}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {pack.descriptionUk}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleDownload(pack.id)}
                  className="w-full rounded-full gap-2"
                  variant={
                    premiumPackIds.has(pack.id) && !premiumActive
                      ? "secondary"
                      : "default"
                  }
                >
                  <Download className="size-4" />
                  {downloaded.includes(pack.id)
                    ? t("✓ Завантажено", "✓ Descargado")
                    : t("Завантажити", "Descargar")}
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
