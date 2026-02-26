import React from 'react';
import { Mic, Play } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: 'Doktor AI nadchodzi',
    description: 'Rozmowa o ChatGPT Health vs Google MedGemma 1.5 i konstytucji Anthropic.',
    date: 'Luty 2026',
    duration: '45 min'
  },
  {
    id: 2,
    title: 'Wielkie Podsumowanie AI w 2025',
    description: 'Analiza modeli, narzędzi, przełomów i liderów branży AI w ubiegłym roku.',
    date: 'Styczeń 2026',
    duration: '1h 20m'
  },
  {
    id: 3,
    title: 'GPT-5.2 to GEMINI KILLER?',
    description: 'Porównanie możliwości GPT-5.2 i Gemini 3, oraz rozmowa o MCP w Linux Foundation.',
    date: 'Styczeń 2026',
    duration: '55 min'
  }
];

const RecentPodcasts = ({ showAll = false }) => {
  const displayEpisodes = showAll ? episodes : episodes.slice(0, 3);

  return (
    <section className="py-24 bg-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 font-medium mb-4">
              <Mic size={20} /> Opanuj.AI Podcast
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Najnowsze odcinki</h2>
            <p className="text-gray-400 max-w-2xl">
              Posłuchaj naszych rozmów o programowaniu, sztucznej inteligencji i rozwoju zawodowym.
            </p>
          </div>
          {!showAll && (
            <a href="/podcast" className="mt-6 md:mt-0 inline-flex items-center text-white hover:text-blue-400 transition font-medium">
              Zobacz wszystkie odcinki
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {displayEpisodes.map(episode => (
            <div key={episode.id} className="group bg-gray-950 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors cursor-pointer">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2 font-medium">
                  <span className="bg-gray-800 px-2 py-1 rounded text-gray-300">{episode.date}</span>
                  <span>•</span>
                  <span>{episode.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {episode.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {episode.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPodcasts;
