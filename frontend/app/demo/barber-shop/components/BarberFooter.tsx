import Link from "next/link";
import { MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { business } from "../lib/business";
import { Separator } from "./ui/separator";

export function BarberFooter() {
  return (
    <footer id="contacto" className="scroll-mt-24 border-t border-border/70 bg-card/70 px-4 py-12 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-sm font-medium tracking-[0.22em] text-accent uppercase">
            {business.name}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{business.tagline}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-foreground/90">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>
              {business.location.street}
              <br />
              {business.location.city}
            </span>
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Horario</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {business.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 border-b border-border/30 pb-2">
                <span>{row.days}</span>
                <span className="text-foreground/85">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Contacto</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 text-foreground/90 hover:text-accent"
              >
                <Phone className="size-4 text-accent" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/90 hover:text-accent"
              >
                <MessageCircle className="size-4 text-accent" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/90 hover:text-accent"
              >
                <Share2 className="size-4 text-accent" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="mx-auto my-8 max-w-6xl bg-border/50" />

      <div className="mx-auto max-w-6xl text-center text-xs text-muted-foreground">
        <p>Demo sin backend · Datos reales de {business.name}</p>
        <p className="mt-2">
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
