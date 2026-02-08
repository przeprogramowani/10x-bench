import { ArrowRight, Zap, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Zap className="w-5 h-5 text-[#FF6B35]" />
          <span className="text-white/90 font-medium">7 lat na rynku edukacji technologicznej</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Szersze spojrzenie na{' '}
          <span className="gradient-text">programowanie</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Przeprogramowani.pl to platforma edukacyjna dla ambitnych programistów.
          Tworzymy kursy, podcasty i treści o nowoczesnym rozwoju oprogramowania z wykorzystaniem AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#E55A2B] transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            10xDevs - Programuj z AI
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/#kursy"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Poznaj nasze kursy
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-[#4ECDC4]" />
              <span className="text-3xl sm:text-4xl font-bold text-white">3700+</span>
            </div>
            <p className="text-gray-400">Absolwentów 10xDevs</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-[#4ECDC4]" />
              <span className="text-3xl sm:text-4xl font-bold text-white">15K+</span>
            </div>
            <p className="text-gray-400">Programistów w społeczności</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-[#4ECDC4]" />
              <span className="text-3xl sm:text-4xl font-bold text-white">7 lat</span>
            </div>
            <p className="text-gray-400">Doświadczenia w edukacji</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
