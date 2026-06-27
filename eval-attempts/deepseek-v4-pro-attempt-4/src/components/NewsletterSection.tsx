export default function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-brand-purple/5 to-brand-accent/5" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Przeprogramowany Newsletter
        </h2>
        <p className="text-gray-400 text-lg mb-2">
          Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
        </p>
        <ul className="text-gray-300 text-left max-w-md mx-auto space-y-2 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-brand-accent-light mt-1">3</span>
            <span>rekomendacje techniczne</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-accent-light mt-1">2</span>
            <span>rekomendacje rozwojowe</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-accent-light mt-1">1</span>
            <span>bonus niespodzianka</span>
          </li>
        </ul>
        <a
          href="https://przeprogramowani.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/25"
        >
          Zapisz się za darmo
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}