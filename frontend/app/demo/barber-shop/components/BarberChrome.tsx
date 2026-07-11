"use client";

import { BarberNav } from "./BarberNav";
import { BarberFooter } from "./BarberFooter";
import { BarberBackground } from "./BarberBackground";

export function BarberChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="barber-shop flex min-h-screen flex-col">
      <BarberBackground />
      <BarberNav />
      <div className="relative z-10 flex-1 pt-20 md:pt-22">{children}</div>
      <div className="relative z-10">
        <BarberFooter />
      </div>
    </div>
  );
}
