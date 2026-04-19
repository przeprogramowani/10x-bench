export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              Nowość — Maj 2026
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">10xDevs 3.0</span>
              <br />
              <span className="text-white">Programuj z AI</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
              Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://10xdevs.pl?utm_source=przeprogramowani_website"
                className="glow inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-700 hover:scale-[1.02]"
              >
                Szczegóły 10xDevs
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/o-nas"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-3.5 text-base font-semibold text-gray-300 transition-all hover:border-gray-500 hover:text-white"
              >
                O nas
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">5+1</span>
                <span>tygodni</span>
              </div>
              <div className="h-4 w-px bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">3700+</span>
                <span>absolwentów</span>
              </div>
              <div className="h-4 w-px bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">7</span>
                <span>lat na rynku</span>
              </div>
            </div>
          </div>

          <div className="glass-card glow p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Przeprogramowany Newsletter</h2>
            <p className="mt-2 text-sm text-gray-400">
              Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-brand-400">3</span> rekomendacje techniczne
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-400">2</span> rekomendacje rozwojowe
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-400">1</span> bonus niespodzianka
              </li>
            </ul>
            <a
              href="https://przeprogramowani.substack.com"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
            >
              Zapisz się za darmo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
