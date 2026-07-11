import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Calendar,
  CalendarClock,
  CalendarDays,
  Coffee,
  Container,
  Droplet,
  Droplets,
  PillBottle,
  Scissors,
  Slice,
  SoapDispenserDroplet,
  SprayCan,
  UserRound,
} from "lucide-react";
import type { Service } from "./services";

/** Trazo fino — estética cosmética / luxury line icons */
export const LUXURY_STROKE = 1.35;

export const serviceIcons: Record<Service["category"], LucideIcon> = {
  corte: Scissors,
  barba: Brush,
  ritual: Slice,
  color: Droplet,
  familia: UserRound,
};

export const productIcons = {
  "beard-oil": Droplet,
  "purifying-shampoo": Container,
  "styling-wax": SprayCan,
  "artisan-soap": SoapDispenserDroplet,
} as const satisfies Record<string, LucideIcon>;

export const experienceIcons = {
  styling: Droplets,
  hospitality: Coffee,
  booking: CalendarDays,
} as const;

export const bookingIcons = {
  calendar: Calendar,
  clock: CalendarClock,
  service: Scissors,
} as const;

export const boutiqueFallbackIcon = PillBottle;
