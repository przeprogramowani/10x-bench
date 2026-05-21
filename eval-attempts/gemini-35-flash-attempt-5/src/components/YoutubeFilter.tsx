import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import VideoCard from './VideoCard';

interface Video {
  id: string;
  title: string;
  publishedAt?: string;
  author?: string;
}

interface YoutubeFilterProps {
  videos: Video[];
}

export default function YoutubeFilter({ videos }: YoutubeFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = useMemo(() => {
    return videos.filter((vid) =>
      vid.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [videos, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
        <div className="flex items-center gap-2.5 text-slate-300">
          <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.502 9.388.502 9.388.502s7.517 0 9.388-.502a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="text-sm font-bold">Wyszukaj wideo</span>
        </div>

        <div className="relative w-full sm:max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Szukaj filmów..."
            className="w-full pl-9 pr-4 py-2 rounded-lg text-xs text-slate-200 bg-slate-950 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Stats Counter */}
      <div className="flex justify-between items-center text-xs text-slate-500 px-1">
        <span>Znaleziono: <strong>{filteredVideos.length}</strong> z {videos.length} filmów</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-red-400 hover:underline"
          >
            Wyczyść wyszukiwanie
          </button>
        )}
      </div>

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              publishedAt={video.publishedAt}
              author={video.author}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/10 border border-dashed border-slate-800 rounded-2xl">
          <Youtube className="h-10 w-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-300">Nie znaleziono takiego filmu</h3>
          <p className="text-xs text-slate-500 mt-1">Wpisz inną frazę lub wyczyść pole wyszukiwania.</p>
        </div>
      )}
    </div>
  );
}
