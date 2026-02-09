export default function Hero() {
  return (
    <section className="relative bg-gray-950 min-h-[90vh] flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />
        <div className="absolute top-0 -left-4 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 bg-main/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 sm:-right-20 w-72 sm:w-96 h-72 sm:h-96 bg-turquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="py-4 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-orange-500 rounded-full" />
              <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
                Nowość — Maj 2026
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
              10xDevs <span className="text-gradient">3.0</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
              Nowe oblicze programowania z wykorzystaniem Generatywnego AI. 
              Techniki i narzędzia pozwalające świadomie stosować AI w całym 
              cyklu wytwarzania oprogramowania.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Szczegóły →
              </a>
              <a
                href="https://www.youtube.com/@przeprogramowani"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Obejrź teaser
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-white font-heading">400+</p>
                <p className="text-sm text-gray-400">Absolwentów</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-heading">7</p>
                <p className="text-sm text-gray-400">Lat na rynku</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-heading">50K+</p>
                <p className="text-sm text-gray-400">Subskrybentów</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex items-center justify-center mt-12 lg:mt-0 animate-slide-up">
            <div className="relative w-full max-w-xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-turquoise/20 rounded-2xl blur-2xl" />
              
              {/* Card */}
              <div className="relative bg-gray-900/80 backdrop-blur border border-gray-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">10xDevs AI</h3>
                    <p className="text-sm text-gray-400">Programowanie z AI</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-200">Cursor, Codex, Claude Code</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-200">MCP & Agenty AI</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-200">Praktyczne projekty</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-200">Demo Day & Portfolio</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    🎉 <strong className="text-white">Najlepszy kurs 2025</strong> — Developers.pl
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
