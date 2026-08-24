const features = [
  {
    title: 'AI-Native Software Engineering',
    desc: 'Praktyczne workflow pracy z AI w całym cyklu wytwarzania oprogramowania. Od researchu, przez plan i implementację, po testy i wdrożenie.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: '10xWorkflow',
    desc: 'Kompletny proces pracy z agentem: od pomysłu, przez plan i implementację, po testy i wdrożenie na produkcję (Docker + Cloudflare).',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Context Engineering',
    desc: 'Praca z oknami kontekstowymi, driftem, summarization, zarządzaniem wątkami i plikami Agents.md. Rozszerzanie Agenta o własne skille.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const stats = [
  { value: '6700+', label: 'absolwentów' },
  { value: '5+1', label: 'tygodni nauki' },
  { value: '40h+', label: 'materiałów' },
  { value: '14.09', label: 'start edycji' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/30 via-dark-950 to-dark-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  Nowość — Wrzesień 2026
                </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="gradient-text">10xDevs 4.0</span>
              <br />
              <span className="text-white">Programuj z AI</span>
            </h1>

            <p className="text-lg md:text-xl text-dark-300 leading-relaxed max-w-xl">
              Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Dowiedz się więcej
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/courses" className="btn-secondary text-lg px-8 py-4">
                Zobacz kursy
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-sm text-dark-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-2">AI-Native Development</h3>
                <p className="text-dark-400">Opanuj workflow programowania z Generative AI</p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  {['Cursor', 'Claude Code', 'MCP', '10xCLI'].map((tool) => (
                    <div key={tool} className="px-3 py-2 rounded-lg bg-dark-700/50 text-sm font-mono text-primary-300">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 hover:bg-dark-700/60 transition-all duration-200 group">
              <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
