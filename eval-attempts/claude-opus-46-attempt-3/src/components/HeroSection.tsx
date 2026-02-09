export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface-950 to-surface-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/15 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          10xDevs 3.0 — Rekrutacja otwarta
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-white via-white to-surface-200 bg-clip-text text-transparent">
            Szersze spojrzenie
          </span>
          <br />
          <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
            na programowanie
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-surface-200 max-w-2xl mx-auto leading-relaxed">
          Kursy, podcast i społeczność dla ambitnych programistów.
          Pomagamy programistom rozwijać się w erze AI z&nbsp;Przemkiem&nbsp;Smyrdkiem
          i&nbsp;Marcinem&nbsp;Czarkowskim.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/25 text-center"
          >
            Dołącz do 10xDevs 3.0
          </a>
          <a
            href="/o-nas"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all text-center"
          >
            Poznaj nas
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "3700+", label: "Absolwentów kursów" },
            { value: "98+", label: "Odcinków podcastu" },
            { value: "7+", label: "Lat na rynku" },
            { value: "2.5K+", label: "Subskrybentów newslettera" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-surface-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
