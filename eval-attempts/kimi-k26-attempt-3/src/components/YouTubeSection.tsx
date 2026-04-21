import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    thumbnail: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
  },
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    thumbnail: 'https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=aRkECt7derY',
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    thumbnail: 'https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    thumbnail: 'https://i3.ytimg.com/vi/bcs8WS4A5Zg/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
  },
  {
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    thumbnail: 'https://i3.ytimg.com/vi/Vce4cD_5XW0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
  },
  {
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami',
    thumbnail: 'https://i3.ytimg.com/vi/hbuCLvwbMVg/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=hbuCLvwbMVg',
  },
];

export default function YouTubeSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Filmy i podcasty
            </h2>
            <p className="text-lg text-slate-400">
              Rozwój nowoczesnego programisty
            </p>
          </div>
          <a
            href="https://youtube.com/c/przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Zobacz więcej na YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
