import React from 'react';
import { Mic, Play } from 'lucide-react';

const episodes = [
  {
    title: "Doktor AI nadchodzi",
    description: "ChatGPT Health vs Google MedGemma. Potencjał AI w medycynie, konstytucja Anthropic i modele z Chin.",
    duration: "01:23:04",
    date: "2026-02-01", 
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Wielkie Podsumowanie AI w 2025",
    description: "Przegląd najważniejszych modeli, narzędzi i przełomów w branży AI w minionym roku.",
    duration: "01:47:28",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "GPT-5.2 to GEMINI KILLER?",
    description: "Porównanie najnowszych modeli od OpenAI i Google. MCP w Linux Foundation oraz benchmarki METR.",
    duration: "00:58:41",
    date: "2025-12-10",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Gemini 3 to hit, ale konkurencja nie śpi!",
    description: "Analiza GPT-5.1, Grok 4.1, Opus 4.5 i rozwój AI w listopadzie 2025.",
    duration: "01:03:20",
    date: "2025-11-20",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&q=80&w=400"
  }
];

const PodcastList = ({ limit }) => {
  const displayEpisodes = limit ? episodes.slice(0, limit) : episodes;

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Podcast Przeprogramowani</h2>
            <p className="text-gray-400">Rozmowy o technologii, AI i przyszłości programowania.</p>
          </div>
          {limit && (
            <a href="/podcast" className="hidden md:flex items-center px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Wszystkie odcinki
            </a>
          )}
        </div>

        <div className="space-y-6">
          {displayEpisodes.map((episode, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:bg-gray-800/80 transition-colors border border-gray-700">
               <div className="w-full md:w-48 h-32 md:h-auto flex-shrink-0 rounded-lg overflow-hidden relative group">
                  <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-10 h-10 text-white fill-current" />
                  </div>
               </div>
               <div className="flex-grow flex flex-col justify-center">
                 <div className="flex items-center text-sm text-blue-400 mb-2 space-x-3">
                   <span className="flex items-center"><Mic className="w-3 h-3 mr-1" /> Podcast</span>
                   <span>•</span>
                   <span>{episode.duration}</span>
                   <span>•</span>
                   <span>{episode.date}</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">{episode.title}</h3>
                 <p className="text-gray-400 text-sm line-clamp-2 md:line-clamp-none">
                   {episode.description}
                 </p>
                 <div className="mt-4 flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors">
                      <Play className="w-4 h-4 mr-2" /> Odtwórz
                    </button>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium transition-colors">
                      Szczegóły
                    </button>
                 </div>
               </div>
            </div>
          ))}
        </div>
         {limit && (
            <div className="mt-8 text-center md:hidden">
              <a href="/podcast" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Wszystkie odcinki
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default PodcastList;
