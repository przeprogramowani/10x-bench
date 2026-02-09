import React from 'react';
import { siteData } from '../data/siteData';

export default function AboutSection() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O nas
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Witaj na Przeprogramowanych! To miejsce, w którym programowanie spotyka się z rozwojem osobistym. 
            Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, na biznes, na ludzi i na siebie.
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {siteData.founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-dark-800 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary-500/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 border-2 border-primary-500/30">
                  <span className="text-3xl">
                    {founder.name.includes('Przemek') ? '👨‍💻' : '👨‍🚀'}
                  </span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-primary-400 text-sm font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {founder.bio}
                  </p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-primary-600/10 to-blue-600/10 border border-primary-500/20 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Zyskaj szersze spojrzenie na programowanie
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach. 
            Od technicznych deep-dive'ów po rozmowy o karierze i rozwoju.
          </p>
          <a
            href="/o-nas"
            className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20"
          >
            Dowiedz się więcej
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
