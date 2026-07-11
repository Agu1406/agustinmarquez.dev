import Link from "next/link";
import { buttonVariants } from "../components/ui/button";
import { GalleryGrid } from "../components/GalleryGrid";
import { SectionHeading } from "../components/SectionHeading";
import { cn } from "../lib/utils";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading
        eyebrow="Portfolio"
        title="Estilismo Ikaro"
        description="Acabados impecables, barbas perfiladas y looks que aguantan el día a día."
      />
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
