import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-accent/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-white">
              Nowość! <strong>10xDevs 3.0</strong> — Programuj z AI
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Szersze spojrzenie na</span>
            <span className="gradient-text">programowanie</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Kursy i szkolenia dla programistów. JavaScript, TypeScript, AI, GitHub Actions.
            Blog techniczny, podcast i newsletter dla ambitnych developerów.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Poznaj 10xDevs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/about" className="btn-secondary">
              Dowiedz się więcej
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900/50 to-amber-900/30 border border-orange-700/50 p-8 hover:border-orange-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-400/10 rounded-full mb-4">
                Nowość
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">10xDevs</h3>
              <p className="text-orange-200/80 text-sm mb-4">
                Nowe oblicze programowania z wykorzystaniem Generatywnego AI. 
                Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
              </p>
              <p className="text-orange-400 font-semibold">3700+ absolwentów</p>
            </div>
          </a>

          <a
            href="https://www.opanujfrontend.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/30 border border-pink-700/50 p-8 hover:border-pink-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-400/10 rounded-full mb-4">
                Bestseller
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Opanuj Frontend</h3>
              <p className="text-pink-200/80 text-sm mb-4">
                Zostań kompletnym frontend developerem. 10-tygodniowe szkolenie 
                przygotowujące do tworzenia zaawansowanych aplikacji webowych z wykorzystaniem AI.
              </p>
              <p className="text-pink-400 font-semibold">383 programistów</p>
            </div>
          </a>

          <a
            href="https://www.opanujtypescript.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/30 border border-blue-700/50 p-8 hover:border-blue-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 rounded-full mb-4">
                Popularne
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Opanuj TypeScript</h3>
              <p className="text-blue-200/80 text-sm mb-4">
                Pracuj z najnowszą wersją TypeScript 5 w połączeniu z Reactem 19.
                Szkolenie podnoszące jakość projektów na produkcji.
              </p>
              <p className="text-blue-400 font-semibold">TypeScript 5 & React 19</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
