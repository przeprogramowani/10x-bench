export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Przeprogramowani
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Szersze spojrzenie na programowanie
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-50">
            Tworzymy kursy, podcasty i materiały edukacyjne dla ambitnych programistów,
            którzy chcą rozwijać swoje umiejętności i karierę w IT
          </p>
        </div>

        {/* 10xDevs Feature Card */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 10xDevs 3.0
            </h2>
            <p className="text-xl text-blue-100">
              Dołącz do programistów nowej generacji!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-2">AI w praktyce</h3>
              <p className="text-sm text-blue-100">
                Naucz się efektywnie wykorzystywać AI w codziennej pracy programisty
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Zwiększ produktywność</h3>
              <p className="text-sm text-blue-100">
                Skróć czas realizacji zadań nawet o 75% dzięki nowoczesnym narzędziom
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Pełny cykl dev</h3>
              <p className="text-sm text-blue-100">
                Od POC/MVP przez refactoring po testing i CI/CD
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.10xdevs.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
