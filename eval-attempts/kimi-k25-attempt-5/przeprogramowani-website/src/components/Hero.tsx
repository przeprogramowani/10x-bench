import { ArrowRight, Play, Sparkles, Code2, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e94560]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0f3460]/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#e94560]" />
            <span className="text-sm font-medium text-[#e94560]">Nowość: 10xDevs 3.0</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Szersze spojrzenie na
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
              programowanie
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Edukacja technologiczna w epoce AI. Dołącz do społeczności programistów, 
            którzy świadomie korzystają z potencjału Generative AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-[#e94560]/25 transition-all duration-300"
            >
              <span>Poznaj 10xDevs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/o-nas"
              className="flex items-center space-x-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              <span>Dowiedz się więcej</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <Users className="w-8 h-8 text-[#e94560] mb-3" />
              <div className="text-3xl font-bold text-white">3700+</div>
              <div className="text-sm text-gray-400">Absolwentów</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <BookOpen className="w-8 h-8 text-[#e94560] mb-3" />
              <div className="text-3xl font-bold text-white">7 lat</div>
              <div className="text-sm text-gray-400">Na rynku edukacji</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <Code2 className="w-8 h-8 text-[#e94560] mb-3" />
              <div className="text-3xl font-bold text-white">15k+</div>
              <div className="text-sm text-gray-400">Społeczność</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
