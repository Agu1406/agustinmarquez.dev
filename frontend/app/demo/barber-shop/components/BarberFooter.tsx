import Link from "next/link";
import { MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { business } from "../lib/business";
import { cn } from "../lib/utils";
import { BrandWordmark } from "./BrandWordmark";
import { LuxuryIcon } from "./LuxuryIcon";
import { Separator } from "./ui/separator";

export function BarberFooter() {
  return (
    <footer id="contacto" className="scroll-mt-24 border-t border-border/70 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <BrandWordmark asLink={false} size="footer" />
          <p className="mt-2 text-sm text-muted-foreground">{business.tagline}</p>
          <p className="mt-4 flex items-start gap-2.5 text-sm text-foreground/90">
            <LuxuryIcon icon={MapPin} className="mt-0.5 shrink-0 text-accent" />
            <span>
              {business.location.street}
              <br />
              {business.location.city}
            </span>
          </p>
        </div>

        <div>
          <p className="section-eyebrow !mt-3 !text-[0.7rem]">Horarios</p>
          <ul className="mt-3 text-sm">
            {business.hours.map((row) => (
              <li
                key={row.days}
                className="grid grid-cols-[minmax(5.25rem,6.5rem)_1fr] items-baseline gap-x-3 gap-y-0.5 border-b border-border/30 py-2.5 last:border-b-0 sm:grid-cols-[6.75rem_1fr] sm:gap-x-4"
              >
                <span className="font-medium text-white/90">{row.days}</span>
                <span
                  className={cn(
                    "text-right leading-snug sm:text-left",
                    "closed" in row && row.closed
                      ? "italic text-muted-foreground"
                      : "text-white/85"
                  )}
                >
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-eyebrow !text-[0.7rem]">Contacto</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2.5 text-foreground/90 hover:text-accent"
              >
                <LuxuryIcon icon={Phone} className="text-accent" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-foreground/90 hover:text-accent"
              >
                <LuxuryIcon icon={MessageCircle} className="text-accent" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-foreground/90 hover:text-accent"
              >
                <LuxuryIcon icon={Share2} className="text-accent" />
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
          <Link href="/demo" className="text-link font-medium">
            otras demos
          </Link>
          {" · "}
          <Link href="/" className="text-link font-medium">
            portfolio
          </Link>
        </p>
      </div>
    </footer>
  );
}
