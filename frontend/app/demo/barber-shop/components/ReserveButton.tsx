"use client";

import { useBooking } from "./BookingProvider";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

export function ReserveButton({
  className,
  size = "lg",
  label = "Reservar Cita Online",
}: {
  className?: string;
  size?: "default" | "sm" | "lg";
  label?: string;
}) {
  const { openBooking } = useBooking();

  return (
    <Button
      size={size}
      onClick={openBooking}
      className={cn(
        "rounded-full border border-primary/40 px-6 shadow-rolex",
        className
      )}
    >
      {label}
    </Button>
  );
}

export function ReserveLink({
  className,
  label = "Reservar",
}: {
  className?: string;
  label?: string;
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
      className={cn(buttonVariants({ size: "sm" }), "rounded-full px-5", className)}
    >
      {label}
    </button>
  );
}
