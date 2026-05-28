"use client";

import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import {
  getPremiumDaysLeft,
  hasActiveMonthlyAccess,
  hasWatchedClass,
  markWatchedClass,
} from "../lib/storage";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "./LanguageProvider";

export function SampleClassSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const [watched, setWatched] = useState(false);
  const [premiumActive, setPremiumActive] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    setWatched(hasWatchedClass());
    setPremiumActive(hasActiveMonthlyAccess());
    setDaysLeft(getPremiumDaysLeft());
  }, []);

  function startClass() {
    setOpen(true);
    setPlaying(true);
    setDone(false);
    setTimeout(() => {
      setPlaying(false);
      setDone(true);
      markWatchedClass();
      setWatched(true);
      setPremiumActive(true);
      setDaysLeft(getPremiumDaysLeft());
    }, 3000);
  }

  return (
    <Card className="bg-card/85">
      <CardHeader>
        <CardTitle>{t("Пробний урок", "Clase de prueba")}</CardTitle>
        <CardDescription>
          {t(
            "Перегляньте короткий урок: доступ до маршруту активується на 30 днів. Заняття проводимо через Google Meet або Teams.",
            "Mira una clase: el acceso a la ruta se activa durante 30 días. Las clases se realizan por Google Meet o Teams."
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={startClass} className="w-full rounded-full gap-2">
          <PlayCircle className="size-4" />
          {t("Дивитися пробний урок", "Ver clase de prueba")}
        </Button>
        {watched && (
          <Alert className="border border-white/70 bg-white/45 text-foreground backdrop-blur-sm shadow-sm">
            <AlertDescription>
              {premiumActive
                ? t(
                    `Доступ до маршруту активний ще ${daysLeft} дн.`,
                    `Acceso a la ruta activo por ${daysLeft} días más.`
                  )
                : t(
                    "Безкоштовні матеріали доступні.",
                    "El contenido gratuito está disponible."
                  )}
            </AlertDescription>
          </Alert>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{t("Урок A1", "Clase A1")}</DialogTitle>
              <DialogDescription>
                {t("Перегляд уроку (3 секунди)", "Reproducción de clase (3 segundos)")}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div className="h-2 w-full rounded-full bg-muted">
                <div
                  className={`h-2 rounded-full bg-primary transition-all duration-1000 ${
                    playing ? "w-2/3 animate-pulse" : done ? "w-full" : "w-0"
                  }`}
                />
              </div>
              <div className="flex aspect-video items-center justify-center rounded-xl border bg-muted/40 text-sm">
                {playing
                  ? t("Відтворення…", "Reproduciendo…")
                  : done
                    ? t("✓ Урок завершено", "✓ Clase completada")
                    : t("Готово до запуску", "Lista para iniciar")}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
