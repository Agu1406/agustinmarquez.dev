import Link from "next/link";
import { Scissors } from "lucide-react";
import { cn } from "../lib/utils";
import { LuxuryIcon } from "./LuxuryIcon";

type BrandWordmarkProps = {
  className?: string;
  asLink?: boolean;
  size?: "header" | "footer";
  showIcon?: boolean;
};

export function BrandWordmark({
  className,
  asLink = true,
  size = "header",
  showIcon = false,
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

  const content = (
    <>
      {showIcon && (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d6ad53]/45 bg-[#d6ad53]/12">
          <LuxuryIcon icon={Scissors} className="text-[#d6ad53]" size="md" />
        </span>
      )}
      {text}
    </>
  );

  if (asLink) {
    return (
      <Link
        href="/demo/barber-shop"
        className={cn("min-w-0 shrink", showIcon && "flex items-center gap-2.5")}
        aria-label="IKARO MEN'S BARBER"
      >
        {content}
      </Link>
    );
  }

  return (
    <span className={cn(showIcon && "inline-flex items-center gap-2.5")}>{content}</span>
  );
}
