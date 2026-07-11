"use client";

import { CalendarClock } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { LuxuryIcon } from "./LuxuryIcon";
import { Button } from "./ui/button";

export function FloatingBookingButton() {
  const { openBooking } = useBooking();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:justify-end md:p-6">
      <Button
        onClick={openBooking}
        size="lg"
        className="shadow-rolex pointer-events-auto h-12 w-full max-w-md gap-2 rounded-full border border-primary/40 bg-primary px-5 hover:bg-[var(--rolex-blue-vivid)] md:w-auto md:max-w-none md:px-6"
      >
        <LuxuryIcon icon={CalendarClock} className="text-primary-foreground" />
        <span className="text-sm font-medium">Reservar en línea</span>
      </Button>
    </div>
  );
}
