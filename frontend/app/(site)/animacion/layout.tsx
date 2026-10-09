import type { Metadata } from "next";

// Trabajos de clase en curso: no se indexan. Quita esta línea si quieres que
// aparezcan en buscadores.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AnimacionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
