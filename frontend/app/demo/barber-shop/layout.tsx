import type { Metadata } from "next";
import { BarberChrome } from "./components/BarberChrome";
import "./barber-theme.css";

export const metadata: Metadata = {
  title: "Ikaro Men's Barber | Grooming masculino · Las Rozas",
  description:
    "Barbería y boutique de grooming masculino en Las Rozas de Madrid. Cortes personalizados, barba, coloración y productos premium. Demo sin backend.",
  robots: { index: false, follow: false },
};

export default function BarberShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BarberChrome>{children}</BarberChrome>;
}
