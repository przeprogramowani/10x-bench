import { Headphones, Calendar, Clock, ArrowRight, Play } from 'lucide-react';

const podcasts = [
  {
    id: 1,
    title: 'Opanuj AI Podcast',
    description: 'Najpopularniejszy podcast techniczny o LLMach w Polsce. Rozmowy o sztucznej inteligencji, narzędziach AI i ich praktycznym zastosowaniu w programowaniu.',
    episodes: 48,
    duration: '45-90 min',
    frequency: 'Cotygodniowo',
    image: '🎙️',
    link: 'https://opanuj.ai/podcast',
    color: 'from-[#e94560] to-[#ff6b6b]'
  },
  {
    id: 2,
    title: 'Przeprogramowani',
    description: 'Szersze spojrzenie na programowanie. Rozmowy z ciekawymi osobami z branży IT o technologii, karierze i rozwoju.',
    episodes: 156,
    duration: '30-60 min',
    frequency: 'Cotygodniowo',
    image: '💻',
    link: '/podcast',
    color: 'from-[#3b82f6] to-[#60a5fa]'
  }
];

const latestEpisodes = [
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI',
    date: 'Sty 2025',
    duration: '45:32',
    podcast: 'Opanuj AI'
  },
  {
    title: '5 technik, które naprawiły mój workflow z AI',
    date: 'Sty 2025',
    duration: '38:15',
    podcast: 'Opanuj AI'
  },
  {
    title: 'Programowanie z AI bez tajemnic - odpowiedzi na pytania',
    date: 'Gru 2024',
    duration: '52:18',
    podcast: 'Przeprogramowani'
  }
];

export default function PodcastSection() {
  return (
    <section className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Podcasty
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Rozwój nowoczesnego programisty przez słuchanie. Dołącz do tysięcy słuchaczy.
          </p>
        </div>

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="group relative bg-[#252542] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${podcast.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl">{podcast.image}</div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${podcast.color} text-white`}>
                    {podcast.episodes} odcinków
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{podcast.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {podcast.description}
                </p>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
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
                  <Headphones className="w-5 h-5" />
                  <span>Słuchaj</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Episodes */}
        <div className="bg-[#252542] rounded-2xl border border-white/10 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Ostatnie odcinki</h3>
            <a
              href="/podcast"
              className="text-[#e94560] hover:text-[#ff6b6b] font-medium flex items-center space-x-1"
            >
              <span>Wszystkie odcinki</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {latestEpisodes.map((episode, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e94560]/10 rounded-full flex items-center justify-center group-hover:bg-[#e94560]/20 transition-colors">
                    <Play className="w-5 h-5 text-[#e94560]" fill="#e94560" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#e94560] transition-colors">
                      {episode.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-sm text-gray-400 mt-1">
                      <span>{episode.podcast}</span>
                      <span>•</span>
                      <span>{episode.date}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{episode.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#e94560] group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
