import React from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  views?: string;
}

const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI',
    thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW Z AI',
    thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
  },
  {
    id: 'b-gOI128G2s',
    title: 'Demo Day 10xDevs – najlepsze projekty uczestników',
    thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=b-gOI128G2s',
  },
  {
    id: 'WJLGzf7qq-c',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP)',
    thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=WJLGzf7qq-c',
  },
  {
    id: 'jjOYxKAk_j8',
    title: 'Programowanie z AI bez tajemnic',
    thumbnail: 'https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=jjOYxKAk_j8',
  },
  {
    id: 'iSG7PUxjfww',
    title: 'Special webinar for Builders',
    thumbnail: 'https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=iSG7PUxjfww',
  },
];

const YouTubeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="youtube">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">YouTube</h2>
          <p className="section-subtitle mx-auto">
            Najnowsze filmy o programowaniu, AI i nowoczesnych technologiach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center transform opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  YouTube
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@Przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Więcej filmów
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
