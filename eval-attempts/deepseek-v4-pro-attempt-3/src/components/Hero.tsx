export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              <span className="text-brand-gray-300">Nowość — 10xDevs 4.0</span>
            </div>

            <h1 className="section-title mb-6">
              Czas na{' '}
              <span className="gradient-text">AI-Native Software Engineering</span>
            </h1>

            <p className="text-lg text-brand-gray-400 mb-8 leading-relaxed max-w-xl">
              Nowe oblicze programowania z wykorzystaniem Generatywnego AI.
              Techniki i narzędzia pozwalające świadomie stosować AI w całym
              cyklu wytwarzania oprogramowania.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Poznaj 10xDevs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#courses" className="btn-secondary">
                Zobacz kursy
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-bold text-brand-purple border-2 border-brand-dark"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">6 700+ absolwentów</p>
                <p className="text-xs text-brand-gray-500">zaufało naszym szkoleniom</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative glass rounded-2xl p-8 border border-brand-purple/20">
              <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-brand-purple text-white text-sm font-semibold">
                5+1 tygodni
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-mono font-bold text-brand-purple">&lt;/&gt;</span>
                <div>
                  <h3 className="text-xl font-bold">10xDevs 4.0</h3>
                  <p className="text-sm text-brand-gray-400">Start: 14 września 2026</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Research i rozpoznawanie codebase\'ów z AI',
                  'Planowanie z kamieniami milowymi',
                  'Implementacja kawałek po kawałku z agentem',
                  'AI-first MVP od pomysłu do produkcji',
                  'Zespołowe praktyki AI-Native',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-brand-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center btn-primary w-full justify-center"
              >
                Dołącz teraz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}