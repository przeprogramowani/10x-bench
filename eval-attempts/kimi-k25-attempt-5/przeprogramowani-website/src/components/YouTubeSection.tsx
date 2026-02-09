import { Play, ExternalLink, Clock, Eye } from 'lucide-react';

const videos = [
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
    duration: '45:32',
    views: '12K',
    featured: true
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
    duration: '38:15',
    views: '8.5K',
    featured: false
  },
  {
    id: 'b-gOI128G2s',
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!',
    thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
    duration: '1:12:45',
    views: '5.2K',
    featured: false
  },
  {
    id: 'WJLGzf7qq-c',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze',
    thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
    duration: '52:18',
    views: '7.8K',
    featured: false
  }
];

export default function YouTubeSection() {
  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = videos.filter(v => !v.featured);

  return (
    <section className="py-24 bg-[#16213e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Najnowsze filmy
              </span>
            </h2>
            <p className="text-gray-400">Rozwój nowoczesnego programisty</p>
          </div>
          <a
            href="/youtube"
            className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-white hover:bg-white/10 transition-all"
          >
            <span>Zobacz wszystkie</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Video */}
          {featuredVideo && (
            <a
              href={`https://youtube.com/watch?v=${featuredVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-2xl overflow-hidden lg:row-span-2"
            >
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#e94560] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#e94560]/30">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-[#e94560] text-white text-xs font-semibold rounded-full mb-3">
                  Wyróżnione
                </span>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {featuredVideo.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredVideo.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{featuredVideo.views} wyświetleń</span>
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Other Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {otherVideos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-[#e94560] transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
