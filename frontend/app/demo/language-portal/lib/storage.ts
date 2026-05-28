export const STORAGE_KEYS = {
  watchedClass: "lp_demo_watched_class",
  watchedClassAt: "lp_demo_watched_class_at",
  completedExercises: "lp_demo_completed_exercises",
} as const;

const MONTH_MS = 30 * 24 * 60 * 60 * 1000;

export function getCompletedExercises(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.completedExercises);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function markExerciseComplete(id: string): string[] {
  const current = getCompletedExercises();
  if (!current.includes(id)) {
    const next = [...current, id];
    localStorage.setItem(STORAGE_KEYS.completedExercises, JSON.stringify(next));
    return next;
  }
  return current;
}

export function hasWatchedClass(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEYS.watchedClass) === "true";
}

export function markWatchedClass(): void {
  localStorage.setItem(STORAGE_KEYS.watchedClass, "true");
  localStorage.setItem(STORAGE_KEYS.watchedClassAt, String(Date.now()));
}

export function getLastWatchedClassAt(): number | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEYS.watchedClassAt);
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

export function hasActiveMonthlyAccess(now = Date.now()): boolean {
  const last = getLastWatchedClassAt();
  if (!last) return false;
  return now - last <= MONTH_MS;
}

export function getPremiumDaysLeft(now = Date.now()): number {
  const last = getLastWatchedClassAt();
  if (!last) return 0;
  const diff = MONTH_MS - (now - last);
  if (diff <= 0) return 0;
  return Math.ceil(diff / (24 * 60 * 60 * 1000));
}

export function isExerciseUnlocked(id: string): boolean {
  const n = Number(id);
  if (n === 1) return true;
  const completed = getCompletedExercises();
  return completed.includes(String(n - 1));
}

export function isPremiumExercise(id: string): boolean {
  void id;
  return true;
}
