const newsletterBenefits = [
  '3 rekomendacje techniczne',
  '2 rekomendacje rozwojowe',
  '1 bonus niespodzianka',
];

export default function NewsletterSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="section-title">
                Przeprogramowany <span className="gradient-text">Newsletter</span>
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
              </p>
              <ul className="space-y-3">
                {newsletterBenefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-dark-300">
                    <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-xs text-primary-400 font-bold">
                      {i + 1}
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="https://przeprogramowani.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Zapisz się za darmo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📬</div>
                  <div className="text-sm text-dark-400">Zeskanuj i dołącz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
