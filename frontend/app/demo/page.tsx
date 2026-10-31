import Link from "next/link";

const demos = [
  {
    href: "/demo/language-portal",
    name: "Language Portal",
    description:
      "Prototipo de un portal de clases de español, con datos de ejemplo y sin backend.",
  },
] as const;

export default function DemoIndexPage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 md:py-20">
      <p>
        <Link href="/" className="s-link">
          agustinmarquez.dev
        </Link>
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        Demos
      </h1>
      <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
        Prototipos con datos de ejemplo. No están indexados.
      </p>
      <ol className="s-line mt-6 border-t">
        {demos.map((demo, index) => (
          <li key={demo.href} className="s-line border-b">
            <Link
              href={demo.href}
              className="grid gap-2 py-6 md:grid-cols-[3rem_1fr] md:items-baseline md:gap-6"
            >
              <span className="s-muted s-mono text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-2xl font-medium tracking-tight">
                  {demo.name}
                </span>
                <span className="s-muted mt-1 block">{demo.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
