import React from 'react';
import { siteData } from '../data/siteData';

export default function Partners() {
  return (
    <section className="py-16 bg-dark-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">
            Współpracujemy z najlepszymi
          </h2>
          <p className="text-gray-400">7 lat na rynku edukacji technologicznej</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {siteData.partners.map((partner) => (
            <div
              key={partner.name}
              className="w-full max-w-[140px] h-16 bg-dark-900/50 rounded-lg flex items-center justify-center border border-white/5 hover:border-white/20 transition-all px-4"
              title={partner.name}
            >
              <span className="text-gray-400 text-sm font-medium text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Chcesz nawiązać współpracę?</p>
          <a
            href="mailto:kontakt@przeprogramowani.pl"
            className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
          >
            kontakt@przeprogramowani.pl
          </a>
        </div>
      </div>
    </section>
  );
}
