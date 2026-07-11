import { Star } from "lucide-react";
import { cn } from "../lib/utils";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
};

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} de ${max} estrellas`}
    >
      {Array.from({ length: max }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3.5 sm:size-4",
            index < rating
              ? "fill-[#d6ad53]/85 text-[#d6ad53]/85"
              : "fill-white/15 text-white/15"
          )}
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}
