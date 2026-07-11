"use client";

import { CalendarCheck } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { Button } from "./ui/button";

export function FloatingBookingButton() {
  const { openBooking } = useBooking();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end p-4 pb-6 md:p-6">
      <Button
        onClick={openBooking}
        size="lg"
        className="pointer-events-auto h-12 gap-2 rounded-full border border-primary/40 bg-primary px-5 shadow-[0_8px_32px_-8px_#05409b] hover:bg-[#0334b9] md:px-6"
      >
        <CalendarCheck className="size-4" />
        <span className="text-sm font-medium">Reservar en línea</span>
      </Button>
    </div>
  );
}
