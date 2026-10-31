"use client";

import { PortalNav } from "./PortalNav";
import { PortalFooter } from "./PortalFooter";
import { LanguageProvider, useLanguage } from "./LanguageProvider";

function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#contenido" className="s-skip">
      {t("Перейти до вмісту", "Saltar al contenido")}
    </a>
  );
}

export function PortalChrome({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PortalFrame>{children}</PortalFrame>
    </LanguageProvider>
  );
}

function PortalFrame({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col" lang={lang}>
      <SkipLink />
      <PortalNav />
      <main id="contenido" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <PortalFooter />
    </div>
  );
}
