import Link from "next/link";
import { GalleryGrid } from "../components/GalleryGrid";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Portfolio</p>
      <h1 className="mt-1 font-heading text-3xl font-semibold">Galería</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Una selección de cortes, barbas y detalles del espacio. Imágenes de referencia
        para la demo.
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
