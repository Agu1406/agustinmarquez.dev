"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus } from "@/app/demo/barber-shop/lib/hours";

export function OpenBadge() {
  const open = useSyncExternalStore(
    subscribeToMinute,
    () => getOpenStatus().open,
    () => false,
  );

  return (
    <span
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
        aria-hidden
      />
      {open ? "Abierto ahora" : "Cerrado"}
    </span>
  );
}

function subscribeToMinute(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(id);
}
