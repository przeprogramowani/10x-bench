interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
}

const videos: YouTubeVideo[] = [
  {
    id: "_kQHwE6zAbM",
    title: "Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?",
    thumbnail: "https://i3.ytimg.com/vi/_kQHwE6zAbM/maxresdefault.jpg",
    views: "12K wyświetleń",
    date: "2 dni temu"
  },
  {
    id: "KAJTsQbqBow",
    title: "Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?",
    thumbnail: "https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg",
    views: "8.5K wyświetleń",
    date: "5 dni temu"
  },
  {
    id: "uwi39C2O8NI",
    title: "5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI",
    thumbnail: "https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg",
    views: "15K wyświetleń",
    date: "1 tydzień temu"
  },
  {
    id: "b-gOI128G2s",
    title: "Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!",
    thumbnail: "https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg",
    views: "22K wyświetleń",
    date: "2 tygodnie temu"
  },
  {
    id: "WJLGzf7qq-c",
    title: "Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów",
    thumbnail: "https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg",
    views: "18K wyświetleń",
    date: "3 tygodnie temu"
  },
  {
    id: "jjOYxKAk_j8",
    title: "Programowanie z AI bez tajemnic – odpowiedzi na pytania",
    thumbnail: "https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg",
    views: "10K wyświetleń",
    date: "1 miesiąc temu"
  }
];

export default function YouTubeSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="youtube">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              YouTube
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oglądaj najnowsze filmy o programowaniu, AI i nowoczesnych technologiach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-video bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                  <span>{video.views}</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://youtube.com/c/przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            Zobacz kanał YouTube
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
