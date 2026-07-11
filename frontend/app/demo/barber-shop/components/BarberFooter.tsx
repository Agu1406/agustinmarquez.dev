import Link from "next/link";
import { Separator } from "./ui/separator";

export function BarberFooter() {
  return (
    <footer className="mt-16 border-t border-border/70 bg-card/70 px-4 py-10 backdrop-blur">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-heading text-sm font-medium tracking-[0.2em] text-primary uppercase">
          Maison Barbieri
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Barbería de autor · Madrid · Demo sin backend
        </p>
        <Separator className="mx-auto my-4 max-w-xs bg-border/60" />
        <p className="text-xs text-muted-foreground">
          <Link href="/demo" className="font-medium text-foreground underline underline-offset-4">
            otras demos
          </Link>
          {" · "}
          <Link href="/" className="font-medium text-foreground underline underline-offset-4">
            portfolio
          </Link>
        </p>
      </div>
    </footer>
  );
}
