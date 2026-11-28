import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import { HOME_SEO, siteJsonLd } from "../lib/seo";
import { SITE } from "../lib/site";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_SEO.title,
    template: "%s | agustinmarquez.dev",
  },
  description: HOME_SEO.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE.domain,
    title: HOME_SEO.title,
    description: HOME_SEO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_SEO.title,
    description: HOME_SEO.description,
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-theme relative flex min-h-screen flex-col">
      <JsonLd data={siteJsonLd()} />
      <a href="#contenido" className="s-skip">
        Saltar al contenido
      </a>
      <Header />
      <main
        id="contenido"
        tabIndex={-1}
        className="mx-auto w-full max-w-5xl flex-1 px-6 py-14 outline-none md:py-24"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
