import React from 'react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const featuredCourse = siteData.courses.find(c => c.featured);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-blue-600/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <span className="text-primary-400 text-sm font-medium">7 lat na rynku edukacji technologicznej</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Szersze spojrzenie<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-300">
            na programowanie
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Łączymy świat programowania, biznesu i rozwoju. Tworzymy treści, kursy i narzędzia, 
          które pomagają programistom rozwijać się na wielu płaszczyznach.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-600/25"
          >
            Programuj z AI — 10xDevs
          </a>
          <a
            href="/o-nas"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20"
          >
            Poznaj nas
          </a>
        </div>

        {/* Featured Course Card */}
        {featuredCourse && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-2xl p-6 sm:p-8 text-left hover:border-primary-500/30 transition-all">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="inline-block bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {featuredCourse.badge}
                  </div>
                  <p className="text-primary-400 text-sm font-medium mb-2">{featuredCourse.subtitle}</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{featuredCourse.title}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{featuredCourse.description}</p>
                  <a
                    href={featuredCourse.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                  >
                    Szczegóły
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-white/10">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
