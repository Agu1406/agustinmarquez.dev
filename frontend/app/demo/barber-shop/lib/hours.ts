/** Schedule slots as [startHour, startMin, endHour, endMin] in Europe/Madrid. */
const WEEKDAY_SLOTS: [number, number, number, number][] = [
  [10, 0, 14, 0],
  [16, 0, 21, 0],
];

const SATURDAY_SLOTS: [number, number, number, number][] = [
  [10, 0, 14, 0],
  [16, 0, 20, 0],
];

function getMadridTime(now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekday = weekdayMap[get("weekday")] ?? 0;
  const hour = Number(get("hour") === "24" ? "0" : get("hour"));
  const minute = Number(get("minute"));

  return { weekday, minutes: hour * 60 + minute };
}

function inSlots(
  minutes: number,
  slots: [number, number, number, number][],
): boolean {
  return slots.some(([sh, sm, eh, em]) => {
    const start = sh * 60 + sm;
    const end = eh * 60 + em;
    return minutes >= start && minutes < end;
  });
}

export function getOpenStatus(now = new Date()): { open: boolean; label: string } {
  const { weekday, minutes } = getMadridTime(now);

  if (weekday === 0) {
    return { open: false, label: "Cerrado" };
  }

  const slots = weekday === 6 ? SATURDAY_SLOTS : WEEKDAY_SLOTS;
  const open = inSlots(minutes, slots);
  return { open, label: open ? "Abierto ahora" : "Cerrado" };
}
