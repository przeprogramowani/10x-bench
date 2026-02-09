const episodes = [
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI',
    date: 'Luty 2026',
    duration: '45 min',
    platform: 'Spotify',
    href: 'https://open.spotify.com/show/5E4V35F7F7oYS3UoEn7Baf'
  },
  {
    title: '5 technik, które naprawiły mój workflow programowania z AI',
    date: 'Luty 2026',
    duration: '38 min',
    platform: 'Spotify',
    href: 'https://open.spotify.com/show/5E4V35F7F7oYS3UoEn7Baf'
  },
  {
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) - praktyczne scenariusze',
    date: 'Styczeń 2026',
    duration: '52 min',
    platform: 'Spotify',
    href: 'https://open.spotify.com/show/5E4V35F7F7oYS3UoEn7Baf'
  },
  {
    title: 'Programowanie z AI bez tajemnic - Q&A',
    date: 'Styczeń 2026',
    duration: '60 min',
    platform: 'Spotify',
    href: 'https://open.spotify.com/show/5E4V35F7F7oYS3UoEn7Baf'
  }
];

export default function Podcast() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Najpopularniejszy podcast o AI w Polsce
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Opanuj AI Podcast
            </h2>
            <p className="text-xl text-slate-400">
              Rozmowy o programowaniu, AI i rozwoju w epoce Generative AI
            </p>
          </div>
          <a
            href="https://open.spotify.com/show/5E4V35F7F7oYS3UoEn7Baf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Słuchaj na Spotify
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {episodes.map((episode, index) => (
            <a
              key={index}
              href={episode.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 hover:bg-slate-800 rounded-2xl transition-all duration-300 border border-slate-700/50 hover:border-slate-600"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full">
                  Odcinek {index + 1}
                </span>
                <span className="text-slate-400 text-sm">{episode.date}</span>
                <span className="text-slate-500 text-sm">{episode.duration}</span>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {episode.title}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {episode.platform}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}