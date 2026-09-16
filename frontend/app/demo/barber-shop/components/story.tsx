import { Reveal } from "@/app/demo/barber-shop/components/reveal";
import { YoutubeFacade } from "@/app/demo/barber-shop/components/youtube-facade";
import { JOSE_STORY } from "@/app/demo/barber-shop/lib/data";

export function Story() {
  return (
    <section id="trayectoria" className="grain relative bg-ink-soft py-20 md:py-28">
      <div className="section-pad relative z-[2] mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
              {JOSE_STORY.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-cream md:text-5xl">
              {JOSE_STORY.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-muted md:text-lg">
              {JOSE_STORY.lead}
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream-muted md:text-base">
              {JOSE_STORY.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-cream">
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-brass" aria-hidden />
                Campeón mundial
              </li>
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-brass" aria-hidden />
                Representando a España
              </li>
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-brass" aria-hidden />
                Desde los 18 años
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <YoutubeFacade
              videoId={JOSE_STORY.youtubeId}
              title={JOSE_STORY.youtubeTitle}
              note={JOSE_STORY.placeholderNote}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
