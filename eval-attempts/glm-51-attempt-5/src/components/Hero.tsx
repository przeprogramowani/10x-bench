export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/40 via-surface-950 to-surface-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/15 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
            Nowość — Maj 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-white">10xDevs 3.0</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              AI‑Native Software Engineering
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-surface-300 max-w-2xl leading-relaxed">
            Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające
            świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-brand-600/25"
            >
              Dołącz do 10xDevs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#kursy"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-800/50 hover:bg-surface-800 text-white font-semibold rounded-xl transition-colors text-sm border border-surface-700/50"
            >
              Poznaj nasze kursy
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">3700+</div>
              <div className="text-surface-400 text-sm mt-1">Absolwentów</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">5+1</div>
              <div className="text-surface-400 text-sm mt-1">Tygodni programu</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">7</div>
              <div className="text-surface-400 text-sm mt-1">Lat na rynku</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
