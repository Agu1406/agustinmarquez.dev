"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus } from "@/app/demo/barber-shop/lib/hours";

export function OpenBadge() {
  // Primitive snapshot keeps Object.is stable across getSnapshot calls.
  const open = useSyncExternalStore(
    subscribeToMinute,
    () => getOpenStatus().open,
    () => false,
  );

  return (
    <span
      className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs tracking-[0.16em] uppercase ${
        open
          ? "border-brass/50 text-brass-bright"
          : "border-line text-cream-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          open ? "bg-brass-bright" : "bg-cream-muted"
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
