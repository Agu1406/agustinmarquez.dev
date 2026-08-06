import { externalLabel } from "@/app/demo/barber-shop/lib/a11y";
import { SITE } from "@/app/demo/barber-shop/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-ink" aria-hidden="true">
        <video
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src="/demo/barber-shop/hero-barber.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="section-pad relative mx-auto w-full max-w-7xl pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="animate-fade-up font-display text-sm tracking-[0.35em] text-brass uppercase md:text-base">
          Las Rozas de Madrid
        </p>
        <h1
          id="hero-title"
          className="animate-fade-up-delay-1 mt-4 max-w-4xl font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-tight text-cream"
        >
          {SITE.name}
        </h1>
        <div className="animate-line-grow mt-6 h-px w-24 bg-brass" aria-hidden="true" />
        <p className="animate-fade-up-delay-2 mt-6 max-w-md text-base leading-relaxed text-cream-muted md:text-lg">
          Cortes con carácter, barba cuidada al detalle y el trato de siempre.
        </p>
        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={SITE.booksy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={externalLabel("Reservar cita en Booksy")}
            className="inline-flex items-center justify-center bg-brass px-7 py-3.5 text-sm font-medium tracking-[0.16em] text-ink uppercase transition hover:bg-brass-bright"
          >
            Reservar cita
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center border border-cream/35 px-7 py-3.5 text-sm tracking-[0.16em] text-cream uppercase transition hover:border-brass hover:text-brass"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
