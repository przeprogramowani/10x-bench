import { Play, Eye, Clock, ThumbsUp, ExternalLink, Youtube, Filter } from 'lucide-react';

const featuredVideo = {
  id: 'KAJTsQbqBow',
  title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
  description: 'Szczegółowa analiza możliwości darmowych modeli AI w codziennym programowaniu. Claude Code i GLM-4.7 jako alternatywa dla płatnych rozwiązań. Testy wydajności, jakość kodu i praktyczne zastosowanie.',
  thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
  duration: '45:32',
  views: '12.5K',
  likes: '1.2K',
  date: '15 stycznia 2025',
  tags: ['AI', 'Claude', 'GLM', 'Tutorial']
};

const videos = [
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
    duration: '38:15',
    views: '8.5K',
    date: '8 stycznia 2025',
    tags: ['AI', 'Workflow', 'Produktywność']
  },
  {
    id: 'b-gOI128G2s',
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!',
    thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
    duration: '1:12:45',
    views: '5.2K',
    date: '20 grudnia 2024',
    tags: ['10xDevs', 'Demo Day', 'Projekty']
  },
  {
    id: 'WJLGzf7qq-c',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
    thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
    duration: '52:18',
    views: '7.8K',
    date: '18 grudnia 2024',
    tags: ['Cursor', 'Codex', 'MCP', 'AI Agents']
  },
  {
    id: 'jjOYxKAk_j8',
    title: 'Programowanie z AI bez tajemnic – odpowiedzi na pytania, które zadaje każdy developer',
    thumbnail: 'https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg',
    duration: '41:20',
    views: '6.3K',
    date: '15 grudnia 2024',
    tags: ['AI', 'Q&A', 'Poradnik']
  },
  {
    id: 'iSG7PUxjfww',
    title: 'Special webinar for Builders: Tu zaczyna się Twój AI-ready project',
    thumbnail: 'https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg',
    duration: '58:45',
    views: '4.1K',
    date: '10 grudnia 2024',
    tags: ['Webinar', '10xDevs', 'AI']
  },
  {
    id: 'FbuaXScl7A8',
    title: 'Poznaj program Opanuj Frontend: AI Edition',
    thumbnail: 'https://i3.ytimg.com/vi/FbuaXScl7A8/maxresdefault.jpg',
    duration: '3:45',
    views: '15.2K',
    date: '1 grudnia 2024',
    tags: ['Opanuj Frontend', 'Kurs', 'Reklama']
  }
];

const categories = [
  { name: 'Wszystkie', count: 245 },
  { name: 'AI & Machine Learning', count: 89 },
  { name: 'Frontend', count: 67 },
  { name: 'TypeScript', count: 34 },
  { name: 'Narzędzia', count: 28 },
  { name: 'Kariery', count: 27 }
];

export default function YouTubePage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 mb-8">
              <Youtube className="w-5 h-5 text-[#e94560]" />
              <span className="text-sm font-medium text-[#e94560]">YouTube Channel</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Filmy i
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                webinary
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
              Rozwój nowoczesnego programisty w formie wideo. 
              Tutoriale, recenzje narzędzi i rozmowy z ekspertami.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Wyróżniony film</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <a
              href={`https://youtube.com/watch?v=${featuredVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-2xl overflow-hidden"
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
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 rounded-lg text-sm text-white font-medium">
                {featuredVideo.duration}
              </div>
            </a>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-[#e94560]/10 text-[#e94560] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {featuredVideo.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {featuredVideo.description}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                <span className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{featuredVideo.views} wyświetleń</span>
                </span>
                <span className="flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{featuredVideo.likes} polubień</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredVideo.date}</span>
                </span>
              </div>
              <a
                href={`https://youtube.com/watch?v=${featuredVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#e94560] hover:bg-[#c73e54] rounded-xl font-semibold text-white transition-colors"
              >
                <Play className="w-5 h-5" fill="white" />
                <span>Obejrzyj teraz</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Videos Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category.name === 'Wszystkie'
                    ? 'bg-[#e94560] text-white'
                    : 'bg-[#252542] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#252542] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-[#e94560] rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-[#e94560] transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://youtube.com/c/przeprogramowani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium text-white hover:bg-white/10 transition-all"
            >
              <Youtube className="w-5 h-5" />
              <span>Zobacz więcej na YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#e94560] to-[#ff6b6b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Youtube className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Subskrybuj nasz kanał
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dołącz do społeczności programistów na YouTube. 
            Nowe filmy co tydzień!
          </p>
          <a
            href="https://youtube.com/c/przeprogramowani?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#e94560] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            <Youtube className="w-5 h-5" />
            <span>Subskrybuj teraz</span>
          </a>
        </div>
      </section>
    </div>
  );
}
