import Image from "next/image";
import type { ReactNode } from "react";

type HomePanelProps = {
  id?: string;
  labelledBy: string;
  dark?: boolean;
  /** Imagen a la izquierda, texto a la derecha (desktop). */
  reverse?: boolean;
  image: { src: string; alt: string };
  className?: string;
  children: ReactNode;
};

/**
 * Franja de portada: texto e imagen a lados opuestos.
 * Fondo papel u oscuro; en móvil se apila.
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
  const bandClass = [
    dark ? "s-band s-band-dark" : "s-band",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const splitClass = reverse
    ? "s-panel-split s-panel-split-reverse"
    : "s-panel-split";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-home="panel"
      className={bandClass}
    >
      <div className={`s-band-inner ${splitClass}`}>
        <div className="s-panel-copy">{children}</div>
        <div className="s-panel-media">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
