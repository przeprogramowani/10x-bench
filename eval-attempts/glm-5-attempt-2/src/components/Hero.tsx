export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-slate-950 to-accent-900/20" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          Nowość - Maj 2026
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="gradient-text">10xDevs 3.0</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Zobacz szczegóły
          </a>
          <a
            href="#courses"
            className="px-8 py-4 border border-slate-700 rounded-lg font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
          >
            Poznaj nasze kursy
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">7+</div>
            <div className="text-slate-400">lat na rynku</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">400+</div>
            <div className="text-slate-400">absolwentów</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">7800+</div>
            <div className="text-slate-400">słuchaczy podcastów</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
            <div className="text-slate-400">filmów na YouTube</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
