import type { Metadata } from "next";
import { PortalChrome } from "./components/PortalChrome";
import "./portal-theme.css";

export const metadata: Metadata = {
  title: "Заняття з іспанської | Language Portal",
  description:
    "Онлайн-уроки іспанської для українців. Демо-платформа: заняття, матеріали та вправи.",
  robots: { index: false, follow: false },
};

export default function LanguagePortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PortalChrome>{children}</PortalChrome>;
}
