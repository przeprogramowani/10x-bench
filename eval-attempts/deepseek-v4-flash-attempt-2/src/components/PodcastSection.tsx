import { podcastEpisodes } from '../data/site';

interface PodcastCardProps {
  podcast: typeof podcastEpisodes.opanujAI;
}

function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{podcast.title}</h3>
          <p className="text-sm text-gray-500">{podcast.description}</p>
        </div>
      </div>
      <div className="space-y-3">
        {podcast.episodes.slice(0, 4).map((ep, i) => (
          <a
            key={i}
            href={ep.href}
            className="block p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors leading-snug flex-1">
                {ep.title}
              </p>
              <span className="text-xs text-gray-400 font-mono shrink-0 mt-0.5">
                {ep.duration}
              </span>
            </div>
          </a>
        ))}
      </div>
      <a
        href="/podcast"
        className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
      >
        Zobacz wszystkie odcinki
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}

export default function PodcastSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="section-title">Filmy i podcasty</h2>
          <p className="section-subtitle mx-auto">
            Rozwój nowoczesnego programisty — słuchaj nas na swojej ulubionej platformie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <PodcastCard podcast={podcastEpisodes.opanujAI} />
          <PodcastCard podcast={podcastEpisodes.ftGosc} />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">Jesteśmy na twojej ulubionej platformie</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250' },
              { name: 'Spotify', href: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
              { name: 'Google Podcasts', href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw' },
              { name: 'RSS', href: 'https://anchor.fm/s/22544b7c/podcast/rss' },
            ].map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="px-5 py-2.5 bg-white rounded-xl border border-gray-200 text-sm font-medium
                         text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all shadow-sm"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
