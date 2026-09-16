"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus } from "@/app/demo/barber-shop/lib/hours";

function getStatusSnapshot(): string {
  return getOpenStatus().label;
}

function getServerStatusSnapshot(): string {
  return "Cerrado";
}

export function OpenBadge() {
  const label = useSyncExternalStore(
    subscribeToMinute,
    getStatusSnapshot,
    getServerStatusSnapshot,
  );
  const open = label === "Abierto ahora";

  return (
    <span
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`inline-flex items-center gap-2.5 px-4 py-2 text-xs font-medium tracking-[0.16em] uppercase ${
        open
          ? "bg-brass text-ink"
          : "border border-line bg-ink-elevated text-cream-muted"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          open ? "bg-ink" : "bg-cream-muted"
        }`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function subscribeToMinute(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(id);
}
