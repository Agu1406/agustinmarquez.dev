import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "../lib/site";
import "./site.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Agustín Márquez | Desarrollo web",
    template: "%s | agustinmarquez.dev",
  },
  description:
    "Agustín Márquez diseña y desarrolla sitios web para negocios. Proyectos publicados, demos y contacto.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE.domain,
    title: "Agustín Márquez | Desarrollo web",
    description:
      "Sitios web para negocios: proyectos publicados, demos y contacto.",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`site-theme ${schibsted.variable} relative flex min-h-screen flex-col`}
    >
      <a href="#contenido" className="s-skip">
        Saltar al contenido
      </a>
      <Header />
      <main
        id="contenido"
        tabIndex={-1}
        className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 outline-none md:py-20"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
