import { ArrowRight, Zap, Users, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-violet-900/20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Nowość - Maj 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">10xDevs 3.0</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Nowe oblicze programowania z wykorzystaniem Generatywnego AI.
          </p>
          <p className="text-base text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              Zobacz teraz
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/kursy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Poznaj nasze kursy
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">400+</div>
              <div className="text-sm text-slate-400">Absolwentów kursów</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Zap className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">7 lat</div>
              <div className="text-sm text-slate-400">Na rynku edukacji IT</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <BookOpen className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-slate-400">Odcinków podcastu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
