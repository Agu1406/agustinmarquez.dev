import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./barber-theme.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ikaro Men's Barber | Barbería en Las Rozas de Madrid",
  description:
    "Barbería de caballeros en Calle Severo Ochoa 8, Las Rozas. Cortes, barba y afeitado tradicional. Reserva online en Booksy. 4,9 en Google.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Ikaro Men's Barber",
    description:
      "Cortes con carácter y barba cuidada al detalle en Las Rozas de Madrid.",
    locale: "es_ES",
    type: "website",
  },
};

export default function BarberShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`barber-shop ${display.variable} ${body.variable} antialiased`}>
      {children}
    </div>
  );
}
