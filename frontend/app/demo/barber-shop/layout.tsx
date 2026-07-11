import type { Metadata } from "next";
import { BarberChrome } from "./components/BarberChrome";
import "./barber-theme.css";

export const metadata: Metadata = {
  title: "Maison Barbieri | Barbería premium",
  description:
    "Barbería de autor en Madrid. Cortes a medida, afeitado clásico y ritual de cuidado masculino. Demo sin backend.",
  robots: { index: false, follow: false },
};

export default function BarberShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BarberChrome>{children}</BarberChrome>;
}
