import { Youtube, Eye, ThumbsUp, ExternalLink, Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  likes: string;
  duration: string;
  link: string;
}

const recentVideos: Video[] = [
  {
    id: '1',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    thumbnail: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
    views: '12.5K',
    likes: '856',
    duration: '18:42',
    link: 'https://www.youtube.com/watch?v=KAJTsQbqBow'
  },
  {
    id: '2',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    thumbnail: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
    views: '28.3K',
    likes: '1.2K',
    duration: '24:15',
    link: 'https://www.youtube.com/watch?v=uwi39C2O8NI'
  },
  {
    id: '3',
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji! 🎉',
    thumbnail: 'https://i3.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
    views: '8.7K',
    likes: '423',
    duration: '45:30',
    link: 'https://www.youtube.com/watch?v=b-gOI128G2s'
  },
  {
    id: '4',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
    thumbnail: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
    views: '15.2K',
    likes: '678',
    duration: '32:18',
    link: 'https://www.youtube.com/watch?v=WJLGzf7qq-c'
  },
  {
    id: '5',
    title: 'Programowanie z AI bez tajemnic – odpowiedzi na pytania, które zadaje każdy developer',
    thumbnail: 'https://i3.ytimg.com/vi/jjOYxKAk_j8/maxresdefault.jpg',
    views: '22.1K',
    likes: '945',
    duration: '28:45',
    link: 'https://www.youtube.com/watch?v=jjOYxKAk_j8'
  },
  {
    id: '6',
    title: 'Special webinar for Builders: Tu zaczyna się Twój AI-ready project',
    thumbnail: 'https://i3.ytimg.com/vi/iSG7PUxjfww/maxresdefault.jpg',
    views: '5.4K',
    likes: '234',
    duration: '52:10',
    link: 'https://www.youtube.com/watch?v=iSG7PUxjfww'
  }
];

const stats = [
  { label: 'Subskrybentów', value: '50K+' },
  { label: 'Filmów', value: '300+' },
  { label: 'Wyświetleń', value: '5M+' }
];

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
            <Youtube className="w-4 h-4" />
            <span>YouTube</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Zobacz nas na <span className="text-red-600">YouTube</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Regularnie publikujemy filmy o programowaniu, AI i rozwoju w IT. 
            Subskrybuj, aby być na bieżąco!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recentVideos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{video.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/@przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/25"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subskrybuj kanał
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
