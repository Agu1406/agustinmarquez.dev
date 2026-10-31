import type { Metadata } from "next";
import "../(site)/site.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-theme relative flex min-h-screen flex-col">{children}</div>
  );
}
