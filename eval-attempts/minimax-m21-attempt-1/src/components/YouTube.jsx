const youtubeVideos = [
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
    views: '45K',
    date: '2026-02-05',
    duration: '18:42',
    url: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
    views: '38K',
    date: '2026-01-28',
    duration: '24:15',
    url: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
  },
  {
    id: 'b-gOI128G2s',
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji! 🎉',
    thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
    views: '62K',
    date: '2026-01-20',
    duration: '45:30',
    url: 'https://www.youtube.com/watch?v=b-gOI128G2s',
  },
  {
    id: 'WJLGzf7qq-c',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
    thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
    views: '51K',
    date: '2026-01-12',
    duration: '32:18',
    url: 'https://www.youtube.com/watch?v=WJLGzf7qq-c',
  },
  {
    id: 'jjOYxKAk_j8',
    title: 'Programowanie z AI bez tajemnic – odpowiedzi na pytania, które zadaje każdy developer',
    thumbnail: 'https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg',
    views: '29K',
    date: '2026-01-05',
    duration: '28:45',
    url: 'https://www.youtube.com/watch?v=jjOYxKAk_j8',
  },
  {
    id: 'iSG7PUxjfww',
    title: 'Special webinar for Builders: Tu zaczyna się Twój AI-ready project',
    thumbnail: 'https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg',
    views: '73K',
    date: '2025-12-28',
    duration: '1:12:30',
    url: 'https://www.youtube.com/watch?v=iSG7PUxjfww',
  },
];

export default function YouTube() {
  return (
    <section className="py-20 sm:py-24 bg-gray-950">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </span>
            <h2 className="section-heading">
              Najnowsze filmy
            </h2>
            <p className="section-subheading">
              Porady, tutoriale i webinary dla programistów
            </p>
          </div>
          <a
            href="https://www.youtube.com/@przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Kanał →
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Duration */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded font-medium">
                  {video.duration}
                </div>
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      className="text-white ml-1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-200 line-clamp-2 group-hover:text-white transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {video.views}
                  </span>
                  <span>•</span>
                  <span>
                    {new Date(video.date).toLocaleDateString('pl-PL', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-red-900/30 to-gray-900/50 rounded-2xl border border-red-800/30">
          <div className="lg:grid lg:grid-cols-4 gap-8 text-center lg:text-left">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white font-heading">50K+</p>
              <p className="text-sm text-gray-400">Subskrybentów</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white font-heading">500+</p>
              <p className="text-sm text-gray-400">Filmów</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white font-heading">8M+</p>
              <p className="text-sm text-gray-400">Wyświetleń</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white font-heading">4M+</p>
              <p className="text-sm text-gray-400">Godzin treści</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
