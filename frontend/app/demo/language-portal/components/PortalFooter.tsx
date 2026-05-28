"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { useLanguage } from "./LanguageProvider";

export function PortalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-border/70 bg-card/70 px-4 py-10 backdrop-blur">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-medium text-foreground">
          {t("Language Portal — онлайн-портал", "Language Portal — portal online")}
        </p>
        <p className="mt-1 text-xs text-foreground/85">
          {t(
            "Іспанська та англійська для українців",
            "Español e inglés para ucranianos"
          )}
        </p>
        <Separator className="mx-auto my-4 max-w-xs" />
        <p className="text-xs text-foreground/85">
          <Link href="/demo" className="font-medium text-foreground underline underline-offset-4">
            {t("інші портали", "otros portales")}
          </Link>
          {" · "}
          <Link href="/" className="font-medium text-foreground underline underline-offset-4">
            portfolio
          </Link>
        </p>
      </div>
    </footer>
  );
}
