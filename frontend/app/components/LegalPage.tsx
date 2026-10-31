import { assertLegalIdentity, LEGAL } from "../lib/site";

/**
 * Contenedor común para las páginas legales (título, fecha y texto con estilo).
 */
export default function LegalPage({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  assertLegalIdentity();

  return (
    <article className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      <p className="s-muted mt-3 text-sm">
        Última actualización: {LEGAL.lastUpdate}
      </p>
      <div className="s-prose mt-6">{children}</div>
    </article>
  );
}
