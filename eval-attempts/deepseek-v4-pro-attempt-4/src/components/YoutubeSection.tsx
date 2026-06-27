import { youtubeVideos } from '../data/content';

export default function YoutubeSection() {
  return (
    <section className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ostatnie filmy na YouTube
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Subskrybuj nasz kanał, aby być na bieżąco z najnowszymi treściami o programowaniu i AI
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.slice(0, 6).map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-brand-dark relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-brand-accent-light transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://youtube.com/c/przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent-light hover:text-white font-semibold transition-colors"
          >
            Zobacz więcej na YouTube
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}