const videos = [
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
    views: '12K wyświetleń',
    date: '2 tygodnie temu',
    href: 'https://www.youtube.com/watch?v=KAJTsQbqBow'
  },
  {
    title: '5 technik, które naprawiły mój workflow programowania z AI',
    thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
    views: '8.5K wyświetleń',
    date: '3 tygodnie temu',
    href: 'https://www.youtube.com/watch?v=uwi39C2O8NI'
  },
  {
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!',
    thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
    views: '15K wyświetleń',
    date: 'miesiąc temu',
    href: 'https://www.youtube.com/watch?v=b-gOI128G2s'
  },
  {
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze',
    thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
    views: '22K wyświetleń',
    date: '2 miesiące temu',
    href: 'https://www.youtube.com/watch?v=WJLGzf7qq-c'
  },
  {
    title: 'Programowanie z AI bez tajemnic – Q&A',
    thumbnail: 'https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg',
    views: '18K wyświetleń',
    date: '2 miesiące temu',
    href: 'https://www.youtube.com/watch?v=jjOYxKAk_j8'
  },
  {
    title: 'Special webinar for Builders: Tu zaczyna się Twój AI-ready project',
    thumbnail: 'https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg',
    views: '10K wyświetleń',
    date: '3 miesiące temu',
    href: 'https://www.youtube.com/watch?v=iSG7PUxjfww'
  }
];

export default function Youtube() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Przeprogramowani na YouTube
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Najnowsze filmy
          </h2>
          <p className="text-xl text-slate-600">
            Rozwój nowoczesnego programisty — praktyczne poradniki i webinary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.date}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Zobacz wszystkie filmy
          </a>
        </div>
      </div>
    </section>
  );
}