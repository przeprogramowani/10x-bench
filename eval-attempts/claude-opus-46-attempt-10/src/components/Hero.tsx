export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-800/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
          Nowa edycja — 18.05–15.06.2026
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Programuj z AI.{" "}
          <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
            Buduj szybciej.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-surface-300 sm:text-xl">
          <strong className="text-white">10xDevs 3.0</strong> — 5-tygodniowy,
          intensywny kurs programowania z AI. Dołącz do społeczności 2500+
          absolwentów i naucz się budować aplikacje nowej generacji.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40"
          >
            Zapisz się — 2990 PLN
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="/o-nas"
            className="inline-flex items-center gap-2 rounded-xl border border-surface-700 px-8 py-4 text-lg font-semibold text-surface-200 transition-colors hover:border-surface-500 hover:text-white"
          >
            Poznaj nas
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "2500+", label: "Absolwentów" },
            { value: "5", label: "Tygodni kursu" },
            { value: "Cohort", label: "Format nauki" },
            { value: "Live", label: "Sesje na żywo" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-surface-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
