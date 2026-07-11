import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { LUXURY_STROKE } from "../lib/icons";

const sizeMap = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
  xl: "size-6",
} as const;

type LuxuryIconProps = {
  icon: LucideIcon;
  className?: string;
  size?: keyof typeof sizeMap;
  stroke?: number;
};

export function LuxuryIcon({
  icon: Icon,
  className,
  size = "md",
  stroke = LUXURY_STROKE,
}: LuxuryIconProps) {
  return (
    <Icon strokeWidth={stroke} className={cn(sizeMap[size], className)} aria-hidden />
  );
}

type LuxuryIconBoxProps = LuxuryIconProps & {
  boxClassName?: string;
};

export function LuxuryIconBox({
  icon,
  className,
  boxClassName,
  size = "md",
}: LuxuryIconBoxProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/8",
        size === "sm" && "size-8",
        size === "md" && "size-10",
        size === "lg" && "size-12",
        boxClassName
      )}
    >
      <LuxuryIcon icon={icon} size={size} className={cn("text-accent", className)} />
    </div>
  );
}
