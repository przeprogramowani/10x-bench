import { youtubeVideos } from '../data/site';

export default function YouTubeSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">Ostatnie filmy</h2>
            <p className="section-subtitle">
              Rozwój nowoczesnego programisty — AI, TypeScript, Frontend i architektura
            </p>
          </div>
          <a
            href="https://youtube.com/@Przeprogramowani"
            className="btn-secondary shrink-0"
          >
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              className="card overflow-hidden group"
            >
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={`https://i1.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded font-medium">
                  YouTube
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>{video.published}</span>
                  <span>{Number(video.views).toLocaleString()} wyświetleń</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
