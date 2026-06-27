import { partners } from '../data/content';

export default function PartnersSection() {
  return (
    <section className="py-16 bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">7 lat na rynku edukacji technologicznej</h3>
        <p className="text-gray-400 mb-10">Współpracujemy z najlepszymi</p>
        <div className="flex flex-wrap items-center justify-center gap-8 gap-y-6">
          {partners.map((partner) => (
            <span key={partner} className="text-gray-500 text-sm font-semibold tracking-wider uppercase hover:text-gray-300 transition-colors">
              {partner}
            </span>
          ))}
        </div>
        <a href="mailto:kontakt@przeprogramowani.pl" className="inline-block mt-10 text-gray-400 hover:text-white transition-colors text-sm">
          Chcesz nawiązać współpracę? <span className="text-brand-accent-light underline">kontakt@przeprogramowani.pl</span>
        </a>
      </div>
    </section>
  );
}