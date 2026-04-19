import { podcastEpisodes, siteConfig } from "../data/site";

export default function Podcast() {
  return (
    <section id="podcast" class="py-24 bg-dark-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span class="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Podcast
            </span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Przeprogramowany Podcast
            </h2>
            <p class="mt-2 text-gray-400">
              Rozmowy z najciekawszymi osobami z branży IT
            </p>
          </div>
          <a
            href={siteConfig.podcast}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Słuchaj na Spotify
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {podcastEpisodes.map((episode, i) => (
            <a
              key={i}
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group p-6 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-brand-500/20 transition-all hover:shadow-lg"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V23h2v-2.06A9 9 0 0 0 21 12v-2h-2z" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <div class="text-xs text-gray-500">{episode.date}</div>
                  <div class="text-xs text-brand-400 font-medium">
                    {episode.duration}
                  </div>
                </div>
              </div>

              <h3 class="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors line-clamp-2 mb-2">
                {episode.title}
              </h3>

              <p class="text-xs text-gray-500 mb-3">
                z {episode.guest}
              </p>

              <p class="text-xs text-gray-400 leading-relaxed line-clamp-3">
                {episode.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
