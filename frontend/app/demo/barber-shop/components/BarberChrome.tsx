"use client";

import { BarberNav } from "./BarberNav";
import { BarberFooter } from "./BarberFooter";
import { BarberBackground } from "./BarberBackground";
import { BookingProvider } from "./BookingProvider";
import { BookingWidget } from "./BookingWidget";
import { FloatingBookingButton } from "./FloatingBookingButton";

export function BarberChrome({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <div className="barber-shop flex min-h-screen flex-col">
        <BarberBackground />
        <BarberNav />
        <div className="relative z-10 flex-1 pb-28 pt-[var(--barber-header-height)] md:pb-24">
          {children}
        </div>
        <div className="relative z-10">
          <BarberFooter />
        </div>
        <FloatingBookingButton />
        <BookingWidget />
      </div>
    </BookingProvider>
  );
}
