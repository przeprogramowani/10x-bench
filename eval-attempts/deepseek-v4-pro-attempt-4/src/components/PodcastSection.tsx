import { podcastEpisodes } from '../data/content';

export default function PodcastSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ostatnie odcinki podcastów
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Słuchaj naszych podcastów o technologii, AI i programowaniu na swojej ulubionej platformie
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcastEpisodes.slice(0, 6).map((episode) => (
            <a
              key={episode.id}
              href={episode.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent-light text-xs font-medium">
                  {episode.podcast}
                </span>
                <span className="text-gray-500 text-xs">{episode.date}</span>
              </div>
              <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-brand-accent-light transition-colors">
                {episode.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                {episode.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {episode.duration}
                </span>
                <span className="text-brand-accent-light text-sm font-medium group-hover:underline">
                  Słuchaj
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/podcast"
            className="inline-flex items-center gap-2 text-brand-accent-light hover:text-white font-semibold transition-colors"
          >
            Zobacz wszystkie odcinki
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}