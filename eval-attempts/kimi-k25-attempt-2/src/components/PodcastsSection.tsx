import React from 'react';
import { siteData } from '../data/siteData';

export default function PodcastsSection() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Podcasty
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Słuchaj naszych podcastów o technologii, AI i programowaniu
            </p>
          </div>
          <a
            href="/podcast"
            className="mt-4 md:mt-0 text-primary-400 hover:text-primary-300 font-semibold transition-colors inline-flex items-center"
          >
            Zobacz wszystkie
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Podcast Series */}
        {siteData.podcasts.map((series, seriesIndex) => (
          <div key={series.series} className={seriesIndex > 0 ? 'mt-16' : ''}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{series.series}</h3>
                <p className="text-primary-400 text-sm font-medium">{series.listeners}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{series.description}</p>

            {/* Episodes Grid - Show only first 3 on homepage */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {series.episodes.slice(0, 3).map((episode, episodeIndex) => (
                <a
                  key={episodeIndex}
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-dark-800 border border-white/10 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all hover:transform hover:scale-[1.02]"
                >
                  <div className="aspect-video bg-dark-700 relative overflow-hidden">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {episode.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold line-clamp-2 group-hover:text-primary-400 transition-colors">
                      {episode.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Podcast Platforms */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Jesteśmy na twojej ulubionej platformie</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-800 border border-white/10 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-primary-500/30 transition-all flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Apple Podcasts</span>
            </a>
            <a
              href="https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-800 border border-white/10 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-primary-500/30 transition-all flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span>Spotify</span>
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-800 border border-white/10 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-primary-500/30 transition-all flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              <span>Google Podcasts</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
