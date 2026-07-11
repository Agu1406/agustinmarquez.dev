export const STORAGE_KEYS = {
  lastBooking: "mb_demo_last_booking",
} as const;

export type BookingDraft = {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  notes: string;
  createdAt: string;
};

export function saveBooking(draft: BookingDraft) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.lastBooking, JSON.stringify(draft));
}

export function loadBooking(): BookingDraft | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEYS.lastBooking);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as BookingDraft;
  } catch {
    return null;
  }
}

export const timeSlots = [
  "10:00",
  "10:45",
  "11:30",
  "12:15",
  "13:00",
  "16:00",
  "16:45",
  "17:30",
  "18:15",
  "19:00",
  "19:45",
];

export function upcomingDates(count = 14) {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() === 0) continue;
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates.slice(0, 10);
}
