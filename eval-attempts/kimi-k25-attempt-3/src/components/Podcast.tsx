import { Headphones, Calendar, Clock, ExternalLink, Play } from 'lucide-react';

interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  platform: string;
  link: string;
}

const recentEpisodes: Episode[] = [
  {
    id: '1',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    description: 'Testujemy najnowsze narzędzia AI do programowania. Czy darmowe modele mogą konkurować z płatnymi?',
    date: '2026-02-07',
    duration: '45 min',
    platform: 'Spotify',
    link: 'https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH'
  },
  {
    id: '2',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    description: 'Praktyczne techniki, które zmienią sposób, w jaki pracujesz z AI. Od prompt engineering po automatyzację.',
    date: '2026-01-31',
    duration: '52 min',
    platform: 'Spotify',
    link: 'https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH'
  },
  {
    id: '3',
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!',
    description: 'Prezentacja projektów uczestników drugiej edycji kursu 10xDevs. Inspirujące realizacje i case studies.',
    date: '2026-01-24',
    duration: '38 min',
    platform: 'Spotify',
    link: 'https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH'
  },
  {
    id: '4',
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
    description: 'Deep dive w agentów AI. Jak efektywnie wykorzystywać Cursor, Codex i MCP w codziennej pracy?',
    date: '2026-01-17',
    duration: '48 min',
    platform: 'Spotify',
    link: 'https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH'
  }
];

const platforms = [
  { name: 'Spotify', icon: '🎵', link: 'https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH' },
  { name: 'Apple Podcasts', icon: '🎧', link: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1494738636' },
  { name: 'YouTube', icon: '📺', link: 'https://www.youtube.com/@przeprogramowani' },
  { name: 'Google Podcasts', icon: '🔊', link: '#' }
];

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            <Headphones className="w-4 h-4" />
            <span>Podcast</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Posłuchaj <span className="text-violet-400">Przeprogramowanych</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Co tydzień nowy odcinek o programowaniu, AI i rozwoju kariery w IT. 
            Rozmawiamy o tym, co naprawdę ważne w świecie technologii.
          </p>
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <span>{platform.icon}</span>
              <span className="font-medium">{platform.name}</span>
            </a>
          ))}
        </div>

        {/* Episodes list */}
        <div className="space-y-4 mb-12">
          {recentEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{episode.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(episode.date).toLocaleDateString('pl-PL')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{episode.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Headphones className="w-4 h-4" />
                      <span>{episode.platform}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors whitespace-nowrap"
                >
                  Słuchaj
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Nie przegap nowych odcinków!</p>
          <a
            href="https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25"
          >
            <Headphones className="w-5 h-5 mr-2" />
            Subskrybuj podcast
          </a>
        </div>
      </div>
    </section>
  );
}
