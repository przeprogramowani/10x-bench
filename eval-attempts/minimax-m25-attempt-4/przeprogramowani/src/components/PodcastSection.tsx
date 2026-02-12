interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  imageUrl: string;
}

const episodes: PodcastEpisode[] = [
  {
    id: "1",
    title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma",
    description: "ChatGPT Health vs Google MedGemma 1.5 - giganci Generative AI chcą podbić świat medycyny. Czy już wkrótce będzie to realna alternatywa klasycznej służby zdrowia?",
    duration: "01:23:04",
    date: "Luty 2026",
    imageUrl: "https://i3.ytimg.com/vi/_kQHwE6zAbM/maxresdefault.jpg"
  },
  {
    id: "2", 
    title: "Wielkie Podsumowanie AI w 2025",
    description: "Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów. Kompleksowe podsumowanie roku w AI.",
    duration: "01:47:28",
    date: "Styczeń 2026",
    imageUrl: "https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg"
  },
  {
    id: "3",
    title: "Skills vs AgentsMD: 53% vs 100%",
    description: "Co poszło nie tak? Analiza porównawcza podejść do programowania z AI.",
    duration: "00:45:12",
    date: "Styczeń 2026",
    imageUrl: "https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg"
  }
];

export default function PodcastSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="podcast">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Podcasty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Słuchaj naszych podcastów o technologii, AI i programowaniu
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Opanuj.AI Podcast</span>
            <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">4000+ słuchaczy</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <article
              key={episode.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={episode.imageUrl}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {episode.duration}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-sm text-indigo-600 font-medium mb-2">
                  {episode.date}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {episode.description}
                </p>
                <button className="w-full mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Słuchaj
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/podcast"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            Zobacz wszystkie odcinki
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
