export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-950 via-brand-900/20 to-surface-950 py-20 md:py-32">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(76,110,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,110,245,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <span className="mb-4 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
          Nowa edycja kursu dostępna
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Zostań{" "}
          <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
            10x Developerem
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 md:text-xl">
          Kompleksowy program szkoleniowy łączący nowoczesne technologie z
          narzędziami AI. Buduj aplikacje webowe szybciej i efektywniej.
        </p>

        <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-surface-400">
          <li className="flex items-center gap-2">
            <span className="text-brand-400">&#10003;</span> Astro, React, TypeScript
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-400">&#10003;</span> Narzędzia AI w praktyce
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-400">&#10003;</span> Projekty portfolio
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-400">&#10003;</span> Społeczność developerów
          </li>
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-brand-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40"
          >
            Dołącz do kursu
          </a>
          <a
            href="/o-nas"
            className="rounded-xl border border-surface-700 px-8 py-3.5 text-base font-semibold text-surface-200 transition-colors hover:border-surface-500 hover:text-white"
          >
            Poznaj nas
          </a>
        </div>
      </div>
    </section>
  );
}
