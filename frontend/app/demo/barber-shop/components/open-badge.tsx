"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus } from "@/app/demo/barber-shop/lib/hours";

export function OpenBadge() {
  // #region agent log
  let snapshotCall = 0;
  let prevOpen: boolean | null = null;
  // #endregion

  // Primitive snapshot: Object.is-stable across calls with same open state.
  // Returning a new `{ open, label }` object each time caused React error #185.
  const open = useSyncExternalStore(
    subscribeToMinute,
    () => {
      const snap = getOpenStatus().open;
      // #region agent log
      snapshotCall += 1;
      const sameRef = prevOpen === snap;
      if (snapshotCall <= 30) {
        fetch("http://127.0.0.1:7776/ingest/bd148297-8385-46fc-abd4-dca1eaf85c89", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "1e2329",
          },
          body: JSON.stringify({
            sessionId: "1e2329",
            runId: "post-fix",
            hypothesisId: "A",
            location: "open-badge.tsx:getSnapshot",
            message: "OpenBadge getSnapshot call",
            data: { snapshotCall, sameRef, open: snap },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
      }
      prevOpen = snap;
      // #endregion
      return snap;
    },
    () => false,
  );

  // #region agent log
  fetch("http://127.0.0.1:7776/ingest/bd148297-8385-46fc-abd4-dca1eaf85c89", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "1e2329",
    },
    body: JSON.stringify({
      sessionId: "1e2329",
      runId: "post-fix",
      hypothesisId: "A",
      location: "open-badge.tsx:render",
      message: "OpenBadge render",
      data: { open },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

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
  // #region agent log
  fetch("http://127.0.0.1:7776/ingest/bd148297-8385-46fc-abd4-dca1eaf85c89", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "1e2329",
    },
    body: JSON.stringify({
      sessionId: "1e2329",
      runId: "post-fix",
      hypothesisId: "A",
      location: "open-badge.tsx:subscribe",
      message: "OpenBadge subscribe mounted",
      data: {},
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  const id = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(id);
}
