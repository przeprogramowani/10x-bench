export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-indigo-200 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Maj 2026 — Start 10xDevs 3.0
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Programuj z AI
          </span>
          <br />
          jak profesjonalista
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Poznaj najbardziej praktyczny workflow do produkcji z AI. 5+1 tygodni, 3700+ absolwentów, sprawdzony program.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://10xdevs.pl"
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all transform hover:scale-105"
          >
            Dołącz teraz
          </a>
          <a
            href="#program"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all"
          >
            Zobacz program
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5+1</div>
            <div className="text-sm text-slate-400">tygodni</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">3700+</div>
            <div className="text-sm text-slate-400">absolwentów</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">18.05</div>
            <div className="text-sm text-slate-400">start</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}