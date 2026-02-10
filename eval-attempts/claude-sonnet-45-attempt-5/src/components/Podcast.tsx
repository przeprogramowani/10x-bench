export default function Podcast() {
  const episodes = [
    {
      title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma...',
      duration: '01:23:04',
      description: 'Medyczna konkurencja AI między ChatGPT Health a Google MedGemma 1.5, konstytucyjne podejście Anthropic, chińskie modele GLM-4.7 i KIMI K2.5',
      podcast: 'Opanuj.AI'
    },
    {
      title: 'Wielkie Podsumowanie AI w 2025...',
      duration: '01:47:28',
      description: 'Kompleksowy przegląd AI w 2025 roku - modele, narzędzia, przełomy, liderzy branży i kontrowersje influencerów',
      podcast: 'Opanuj.AI'
    },
    {
      title: 'GPT-5.2 to GEMINI KILLER?...',
      duration: '00:58:41',
      description: 'Analiza grudniowych premier, konkurencja OpenAI vs Google, integracja MCP z Linux Foundation',
      podcast: 'Opanuj.AI'
    },
    {
      title: 'Gemini 3 to hit, ale konkurencja nie śpi!...',
      duration: '01:03:20',
      description: 'Listopadowe wydarzenia AI 2025, premiery GPT-5.1, Grok 4.1, Opus 4.5',
      podcast: 'Opanuj.AI'
    },
    {
      title: 'Cursor 2.0 vs Windsurf SWE-1.5...',
      duration: '01:14:37',
      description: 'Porównanie narzędzi programistycznych napędzanych AI i platform wieloagentowych',
      podcast: 'Opanuj.AI'
    },
    {
      title: 'Czy agenci AI zdominują branżę e-commerce?...',
      duration: '01:28:05',
      description: 'Premiera Claude Sonnet 4.5, ChatGPT Instant Checkout, agenci AI w e-commerce',
      podcast: 'Opanuj.AI'
    }
  ];

  return (
    <section id="podcast" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Podcast</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Słuchaj najnowszych odcinków naszych podcastów o AI, programowaniu i technologii
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-purple-100"
            >
              <div className="mb-3">
                <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {episode.podcast}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {episode.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {episode.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-semibold">
                  ⏱️ {episode.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Słuchaj na swoich ulubionych platformach</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              🎧 Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              🎵 Spotify
            </a>
            <a
              href="https://przeprogramowani.pl/podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              🌐 Strona WWW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
