import { youtubeVideos, siteConfig } from "../data/site";

export default function YouTube() {
  return (
    <section id="youtube" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span class="text-sm font-semibold uppercase tracking-wider text-red-400">
              YouTube
            </span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Ostatnie filmy
            </h2>
            <p class="mt-2 text-gray-400">
              Rozwój nowoczesnego programisty
            </p>
          </div>
          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Odwiedź kanał
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {youtubeVideos.map((video) => (
            <a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-2xl overflow-hidden bg-dark-800/50 border border-white/5 hover:border-red-500/20 transition-all hover:shadow-lg"
            >
              <div class="relative aspect-video bg-dark-700 overflow-hidden">
                <img
                  src={`https://i3.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div class="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="p-4">
                <h3 class="text-sm font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2">
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
