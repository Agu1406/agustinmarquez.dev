import Link from "next/link";
import { cn } from "../lib/utils";

type BrandWordmarkProps = {
  className?: string;
  asLink?: boolean;
  size?: "header" | "footer";
};

export function BrandWordmark({
  className,
  asLink = true,
  size = "header",
}: BrandWordmarkProps) {
  const text = (
    <span
      className={cn(
        "brand-wordmark font-semibold",
        size === "header" && "brand-wordmark--header",
        size === "footer" && "brand-wordmark--footer",
        className
      )}
    >
      <span className="md:hidden">
        <span className="block leading-tight">IKARO</span>
        <span className="block leading-tight tracking-[0.2em]">MEN&apos;S BARBER</span>
      </span>
      <span className="hidden md:inline">IKARO MEN&apos;S BARBER</span>
    </span>
  );

  if (asLink) {
    return (
      <Link href="/demo/barber-shop" className="min-w-0 shrink" aria-label="IKARO MEN'S BARBER">
        {text}
      </Link>
    );
  }

  return text;
}
