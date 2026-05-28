"use client";

import { PortalNav } from "./PortalNav";
import { PortalFooter } from "./PortalFooter";
import { LanguageProvider } from "./LanguageProvider";
import { AnimatedNeatBackground } from "./AnimatedNeatBackground";

export function PortalChrome({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="language-portal flex min-h-screen flex-col">
        <AnimatedNeatBackground />
        <PortalNav />
        <div className="relative z-10 flex-1 pt-20 md:pt-22">{children}</div>
        <div className="relative z-10">
          <PortalFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}
