export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-lg flex-col items-center gap-8 text-center sm:items-stretch sm:text-left">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            agustinmarquez.dev
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sitio en construcción
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Estoy montando mi portfolio. Mientras tanto, puedes ver mi trabajo,
            contactarme o revisar un proyecto reciente.
          </p>
        </div>

        <ul className="flex flex-col gap-3 text-base">
          <li>
            <a
              href="https://www.linkedin.com/in/agustin6041/"
              className="font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Agu1406"
              className="font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:agustin6041@outlook.es"
              className="font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
            >
              agustin6041@outlook.es
            </a>
          </li>
          <li>
            <a
              href="https://www.loscerrajerosmadrid.es"
              className="font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proyecto destacado — loscerrajerosmadrid.es
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}