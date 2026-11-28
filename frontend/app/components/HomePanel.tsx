import Image from "next/image";
import type { ReactNode } from "react";

type HomePanelProps = {
  id?: string;
  labelledBy: string;
  dark?: boolean;
  /** Imagen a la izquierda, texto a la derecha (desktop). */
  reverse?: boolean;
  image: {
    src: string;
    alt: string;
    /** Logo o marca tipográfica: contain sobre fondo claro. */
    kind?: "photo" | "logo" | "type";
  };
  className?: string;
  children: ReactNode;
};

/**
 * Franja de portada o hub: texto e imagen a lados opuestos.
 * Fondo papel u oscuro; en móvil se apila (imagen arriba).
 */
export function HomePanel({
  id,
  labelledBy,
  dark = false,
  reverse = false,
  image,
  className = "",
  children,
}: HomePanelProps) {
  const isLogo = image.kind === "logo" || image.kind === "type";
  const bandClass = [
    dark ? "s-band s-band-dark" : "s-band",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const splitClass = reverse
    ? "s-panel-split s-panel-split-reverse"
    : "s-panel-split";
  const mediaClass = isLogo ? "s-panel-media s-panel-logo" : "s-panel-media";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-home="panel"
      className={bandClass}
    >
      <div className={`s-band-inner ${splitClass}`}>
        <div className="s-panel-copy">{children}</div>
        <div className={mediaClass}>
          {isLogo ? (
            // SVG locales: <img> evita restricciones de next/image con SVG.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image.src} alt={image.alt} width={480} height={360} />
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
