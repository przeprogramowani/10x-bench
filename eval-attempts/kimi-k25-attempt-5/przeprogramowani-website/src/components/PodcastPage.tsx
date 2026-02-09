import { Headphones, Calendar, Clock, ExternalLink, Play, Mic, Radio } from 'lucide-react';

const podcasts = [
  {
    id: 'opanuj-ai',
    title: 'Opanuj AI Podcast',
    description: 'Najpopularniejszy podcast techniczny o LLMach w Polsce. Rozmowy o sztucznej inteligencji, narzędziach AI i ich praktycznym zastosowaniu w programowaniu.',
    host: 'Marcin Czarkowski',
    episodes: 48,
    duration: '45-90 min',
    frequency: 'Cotygodniowo',
    link: 'https://opanuj.ai/podcast',
    color: 'from-[#e94560] to-[#ff6b6b]',
    popular: true
  },
  {
    id: 'przeprogramowani',
    title: 'Przeprogramowani',
    description: 'Szersze spojrzenie na programowanie. Rozmowy z ciekawymi osobami z branży IT o technologii, karierze i rozwoju.',
    host: 'Przemek Smyrdek & Marcin Czarkowski',
    episodes: 156,
    duration: '30-60 min',
    frequency: 'Cotygodniowo',
    link: '/podcast',
    color: 'from-[#3b82f6] to-[#60a5fa]',
    popular: false
  }
];

const episodes = [
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    podcast: 'Opanuj AI',
    date: '15 stycznia 2025',
    duration: '45:32',
    description: 'Analiza możliwości darmowych modeli AI w programowaniu. Czy Claude Code i GLM-4.7 mogą konkurować z płatnymi rozwiązaniami?',
    tags: ['AI', 'Claude', 'GLM', 'Narzędzia']
  },
  {
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    podcast: 'Opanuj AI',
    date: '8 stycznia 2025',
    duration: '38:15',
    description: 'Praktyczne techniki pracy z asystentami AI, które drastycznie poprawiły efektywność kodowania.',
    tags: ['AI', 'Workflow', 'Produktywność']
  },
  {
    title: 'Demo Day 10xDevs – zobacz najlepsze projekty uczestników 2 edycji!',
    podcast: 'Przeprogramowani',
    date: '20 grudnia 2024',
    duration: '1:12:45',
    description: 'Prezentacja najlepszych projektów zrealizowanych przez uczestników programu 10xDevs podczas Demo Day.',
    tags: ['10xDevs', 'Projekty', 'AI']
  },
  {
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze',
    podcast: 'Opanuj AI',
    date: '18 grudnia 2024',
    duration: '52:18',
    description: 'Deep dive w możliwości agentów AI w codziennej pracy programisty. Cursor, Codex i protokół MCP w akcji.',
    tags: ['Cursor', 'Codex', 'MCP', 'AI Agents']
  },
  {
    title: 'Programowanie z AI bez tajemnic – odpowiedzi na pytania',
    podcast: 'Przeprogramowani',
    date: '15 grudnia 2024',
    duration: '41:20',
    description: 'Q&A o programowaniu z AI. Odpowiadamy na najczęstsze pytania i wątpliwości początkujących.',
    tags: ['AI', 'Q&A', 'Początkujący']
  },
  {
    title: 'Special webinar for Builders: Tu zaczyna się Twój AI-ready project',
    podcast: 'Przeprogramowani',
    date: '10 grudnia 2024',
    duration: '58:45',
    description: 'Webinar dla uczestników programu 10xDevs. Jak przygotować projekt pod pracę z AI.',
    tags: ['Webinar', '10xDevs', 'Projekty']
  }
];

const platforms = [
  { name: 'Spotify', icon: '🎵' },
  { name: 'Apple Podcasts', icon: '🎧' },
  { name: 'YouTube', icon: '📺' },
  { name: 'Google Podcasts', icon: '🔊' }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 mb-8">
              <Radio className="w-4 h-4 text-[#e94560]" />
              <span className="text-sm font-medium text-[#e94560]">Słuchaj gdzie chcesz</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Podcasty
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-8">
              Rozwój nowoczesnego programisty przez słuchanie. 
              Dołącz do tysięcy słuchaczy i rozwijaj się z nami.
            </p>
            
            {/* Platforms */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#252542] rounded-full border border-white/10"
                >
                  <span>{platform.icon}</span>
                  <span className="text-sm text-gray-300">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-16 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="group relative bg-[#252542] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${podcast.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[#1a1a2e] rounded-2xl flex items-center justify-center text-3xl">
                        🎙️
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{podcast.title}</h2>
                        <p className="text-gray-400 text-sm">Prowadzi: {podcast.host}</p>
                      </div>
                    </div>
                    {podcast.popular && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e94560] text-white">
                        Popularny
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {podcast.description}
                  </p>

                  <div className="flex items-center space-x-6 mb-8 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Headphones className="w-4 h-4" />
                      <span>{podcast.episodes} odcinków</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{podcast.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{podcast.frequency}</span>
                    </div>
                  </div>

                  <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${podcast.color} hover:shadow-lg transition-all group/btn`}
                  >
                    <Play className="w-5 h-5" fill="white" />
                    <span>Słuchaj teraz</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Ostatnie odcinki
                </span>
              </h2>
              <p className="text-gray-400">Najnowsze materiały audio do posłuchania</p>
            </div>
          </div>

          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="group p-6 bg-[#252542] rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-[#e94560]">{episode.podcast}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-sm text-gray-500">{episode.date}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-sm text-gray-500 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{episode.duration}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e94560] transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{episode.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {episode.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-[#e94560] hover:bg-[#c73e54] rounded-xl text-white font-medium transition-colors">
                      <Play className="w-5 h-5" fill="white" />
                      <span>Odtwórz</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium text-white hover:bg-white/10 transition-all">
              Załaduj więcej odcinków
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#16213e] to-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mic className="w-16 h-16 text-[#e94560] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Nie przegap nowych odcinków
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Zapisz się do newslettera i otrzymuj powiadomienia o nowych podcastach 
            oraz rekomendacje wartościowych treści.
          </p>
          <a
            href="https://przeprogramowani.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#e94560] hover:bg-[#c73e54] rounded-xl font-semibold text-white transition-colors"
          >
            <span>Zapisz się do newslettera</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
