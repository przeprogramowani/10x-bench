import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>7 lat na rynku edukacji technologicznej</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Szersze spojrzenie na{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                programowanie
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
              Tworzymy przestrzeń dla programistów, którzy chcą rozwijać się zawodowo. 
              Kursy, podcasty i materiały przygotowane przez doświadczonych developerów.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/kursy"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Poznaj nasze kursy
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/o-nas"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                O nas
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-3xl font-bold">3700+</span>
                </div>
                <p className="text-sm text-gray-400">Absolwentów</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-3xl font-bold">15k+</span>
                </div>
                <p className="text-sm text-gray-400">Społeczność</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span className="text-3xl font-bold">4+</span>
                </div>
                <p className="text-sm text-gray-400">Edycje kursów</p>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Course */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-gray-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NOWOŚĆ
                </span>
                <span className="text-gray-400 text-sm">10xDevs 3.0</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Programuj z AI
              </h3>

              <p className="text-gray-300 mb-6">
                Nowe oblicze programowania z wykorzystaniem Generatywnego AI. 
                Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
              </p>

              <ul className="space-y-3 mb-8">
                {['5 tygodni nauki', '3700+ absolwentów', 'Praktyczne projekty z AI', 'Start: 18.05.2026'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Dołącz do 10xDevs →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}
