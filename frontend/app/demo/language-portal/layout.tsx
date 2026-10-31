import type { Metadata } from "next";
import { PortalChrome } from "./components/PortalChrome";

export const metadata: Metadata = {
  title: "Заняття з іспанської | Language Portal",
  description:
    "Demo de clases de español: ejercicios y materiales con datos de ejemplo.",
  robots: { index: false, follow: false },
};

export default function LanguagePortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PortalChrome>{children}</PortalChrome>;
}
