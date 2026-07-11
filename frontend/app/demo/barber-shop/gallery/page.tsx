import Link from "next/link";
import { buttonVariants } from "../components/ui/button";
import { GalleryGrid } from "../components/GalleryGrid";
import { cn } from "../lib/utils";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.24em] text-accent">Portfolio</p>
      <h1 className="mt-1 font-heading text-3xl font-semibold tracking-tight">
        Estilismo Ikaro
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Acabados impecables, barbas perfiladas y looks que aguantan el día a día.
      </p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/demo/barber-shop/book"
          className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
        >
          Reservar cita
        </Link>
      </div>
    </div>
  );
}
