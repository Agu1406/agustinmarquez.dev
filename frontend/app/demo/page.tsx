import Link from "next/link";

const demos = [
  {
    slug: "language-portal",
    title: "Language Portal",
    titleUk: "Заняття з іспанської",
    description:
      "Plataforma para profesora: clases online, materiales, ruta de ejercicios uk→es (demo sin backend).",
    status: "Disponible",
  },
  {
    slug: "barber-shop",
    title: "Ikaro Men's Barber",
    titleUk: "Grooming masculino · Las Rozas",
    description:
      "Landing premium: servicios reales, opiniones y reserva online vía Booksy (demo sin backend).",
    status: "Disponible",
  },
];

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <div className="border-b border-zinc-200 px-4 py-2 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <Link href="/" className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
          ← agustinmarquez.dev
        </Link>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Demos</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Prototipos funcionales para mostrar ideas a clientes. No indexadas en buscadores.
        </p>

        <ul className="mt-10 flex flex-col gap-4">
          {demos.map((demo) => (
            <li key={demo.slug}>
              <Link href={`/demo/${demo.slug}`}>
                <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{demo.titleUk}</h2>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{demo.title}</p>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{demo.description}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                      {demo.status}
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
