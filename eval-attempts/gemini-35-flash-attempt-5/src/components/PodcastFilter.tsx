import React, { useState, useMemo } from 'react';
import { Search, Filter, Headphones, Star } from 'lucide-react';
import EpisodeCard from './EpisodeCard';

interface Episode {
  title: string;
  duration: string;
  description: string;
  link: string;
  series: 'Opanuj.AI' | 'Przeprogramowani ft. Gość';
  imageUrl?: string;
}

interface PodcastFilterProps {
  episodes: Episode[];
}

export default function PodcastFilter({ episodes }: PodcastFilterProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'opanuj_ai' | 'guest'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEpisodes = useMemo(() => {
    return episodes.filter((ep) => {
      // Tab matching
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'opanuj_ai' && ep.series === 'Opanuj.AI') ||
        (activeTab === 'guest' && ep.series === 'Przeprogramowani ft. Gość');

      // Search query matching
      const matchesSearch =
        ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [episodes, activeTab, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/10'
                : 'bg-slate-950/40 text-slate-400 border-slate-800/80 hover:text-white hover:bg-slate-900'
            }`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => setActiveTab('opanuj_ai')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'opanuj_ai'
                ? 'bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-600/10'
                : 'bg-slate-950/40 text-slate-400 border-slate-800/80 hover:text-white hover:bg-slate-900'
            }`}
          >
            Opanuj.AI Podcast
          </button>
          <button
            onClick={() => setActiveTab('guest')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'guest'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/10'
                : 'bg-slate-950/40 text-slate-400 border-slate-800/80 hover:text-white hover:bg-slate-900'
            }`}
          >
            Przeprogramowani ft. Gość
          </button>
        </div>

        {/* Search Input */}
        <div className="relative flex-grow md:max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Szukaj odcinków..."
            className="w-full pl-9 pr-4 py-2 rounded-lg text-xs text-slate-200 bg-slate-950 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Stats Counter */}
      <div className="flex justify-between items-center text-xs text-slate-500 px-1">
        <span>Pokazano: <strong>{filteredEpisodes.length}</strong> z {episodes.length} odcinków</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-indigo-400 hover:underline"
          >
            Wyczyść wyszukiwanie
          </button>
        )}
      </div>

      {/* Episode Grid */}
      {filteredEpisodes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredEpisodes.map((episode) => (
            <EpisodeCard
              key={episode.title}
              title={episode.title}
              duration={episode.duration}
              description={episode.description}
              link={episode.link}
              series={episode.series}
              imageUrl={episode.imageUrl}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/10 border border-dashed border-slate-800 rounded-2xl">
          <Headphones className="h-10 w-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-300">Brak odcinków spełniających kryteria</h3>
          <p className="text-xs text-slate-500 mt-1">Spróbuj zmienić filtry lub wyczyścić pole wyszukiwania.</p>
        </div>
      )}
    </div>
  );
}
