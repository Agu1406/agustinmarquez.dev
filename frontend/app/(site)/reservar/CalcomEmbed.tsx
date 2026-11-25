"use client";

type Props = {
  src: string;
  title: string;
};

/**
 * Calendario de Cal.com embebido. El contenido y el tratamiento de datos
 * del alumno ocurren en los servidores de Cal.com (ver política de privacidad).
 */
export default function CalcomEmbed({ src, title }: Props) {
  return (
    <div className="s-line mt-10 overflow-hidden rounded-sm border">
      <iframe
        src={src}
        title={title}
        className="min-h-[720px] w-full border-0 bg-transparent"
        loading="lazy"
        allow="clipboard-write"
      />
    </div>
  );
}