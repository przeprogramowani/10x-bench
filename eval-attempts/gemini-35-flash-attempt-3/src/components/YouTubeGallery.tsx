import React, { useState } from 'react';
import { Play, Search, Eye, Calendar, Sparkles, X } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  category: 'AI Agents' | 'Claude Code' | 'Coding Models' | 'Events';
  description: string;
  publishedAt: string;
  duration: string;
  viewsPlaceholder: string;
}

const videos: VideoItem[] = [
  {
    id: "03y826SVjG0",
    title: "Jak wybrać najlepszego Agenta AI do programowania?",
    category: "AI Agents",
    description: "Porównanie najnowocześniejszych asystentów oraz agentów programistycznych na rynku. Dowiedz się, na co zwracać uwagę przy wyborze optymalnego workflow do codziennego kodowania.",
    publishedAt: "Maj 2026",
    duration: "18:45",
    viewsPlaceholder: "12k"
  },
  {
    id: "S-iNbyLSisE",
    title: "5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO",
    category: "Claude Code",
    description: "Demonstracja na żywo najważniejszych technik i umiejętności agenta Claude Code. Zobacz, jak właściwie przekazywać kontekst i kontrolować pracę agenta.",
    publishedAt: "Maj 2026",
    duration: "25:30",
    viewsPlaceholder: "8.5k"
  },
  {
    id: "aRkECt7derY",
    title: "Product Builders Day | LIVE AI Product Heroes i 10xDevs",
    category: "Events",
    description: "Zapis niesamowitego panelu dyskusyjnego i prezentacji na żywo o tworzeniu nowoczesnych produktów zintegrowanych z modelami LLM w epoce 10xDevs.",
    publishedAt: "Kwiecień 2026",
    duration: "1:45:20",
    viewsPlaceholder: "15k"
  },
  {
    id: "vH1T5qB4dBQ",
    title: "Wybierasz model AI do kodowania? Nie ufaj benchmarkom",
    category: "Coding Models",
    description: "Analiza popularnych benchmarków (SWE-bench, HumanEval). Dlaczego suche statystyki często zawodzą na produkcji i jak samodzielnie ocenić przydatność modeli?",
    publishedAt: "Marzec 2026",
    duration: "14:12",
    viewsPlaceholder: "9.2k"
  },
  {
    id: "bcs8WS4A5Zg",
    title: "Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs",
    category: "Claude Code",
    description: "Doświadczenia z pierwszej linii frontu pracy z Claude Code. Praktyczny przewodnik jak przekuć koncepcje produktowe w sprawnie działający kod.",
    publishedAt: "Marzec 2026",
    duration: "32:15",
    viewsPlaceholder: "6.8k"
  },
  {
    id: "Vce4cD_5XW0",
    title: "MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja",
    category: "Claude Code",
    description: "Głębokie wejście w inżynierię kontekstu (Context Engineering). Jak prawidłowo ustrukturyzować folder z regułami .claudecode i unikać pętli błędów agenta.",
    publishedAt: "Luty 2026",
    duration: "28:40",
    viewsPlaceholder: "11k"
  }
];

export default function YouTubeGallery() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI Agents' | 'Claude Code' | 'Coding Models' | 'Events'>('All');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const filteredVideos = videos.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || 
                          v.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' ? true : v.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Category selection and Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-brand-card/40 border border-slate-800 p-6 rounded-2xl">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {['All', 'AI Agents', 'Claude Code', 'Coding Models', 'Events'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? 'Wszystkie wideo' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Szukaj filmów..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 pl-10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredVideos.map((v) => (
          <div 
            key={v.id} 
            className="bg-brand-card/25 border border-slate-800/80 hover:border-red-600/50 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            {/* Thumbnail preview */}
            <div className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setActiveVideoId(v.id)}>
              <img 
                src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} 
                alt={v.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                <span className="p-4 rounded-full bg-red-600 text-white shadow-xl scale-95 group-hover:scale-100 group-hover:bg-red-500 transition-all duration-300">
                  <Play className="h-5 w-5 fill-white" />
                </span>
              </div>
              <span className="absolute bottom-2.5 right-2.5 bg-slate-950/80 border border-slate-800 text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded">
                {v.duration}
              </span>
              <span className="absolute top-2.5 left-2.5 bg-red-600 text-white font-semibold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow">
                {v.category}
              </span>
            </div>

            {/* Video description */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[10px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {v.publishedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {v.viewsPlaceholder} wyświetleń
                  </span>
                </div>
                <h3 
                  onClick={() => setActiveVideoId(v.id)}
                  className="text-md font-bold text-white hover:text-red-500 cursor-pointer transition-colors line-clamp-2 leading-snug"
                >
                  {v.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {v.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveVideoId(v.id)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-600 text-slate-300 hover:text-white py-2.5 text-xs font-semibold transition-all duration-200"
                >
                  Odtwórz wideo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Video Modal Player */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-brand-card border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white focus:outline-none transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video Frame */}
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Modal Info footer */}
            <div className="p-6 bg-slate-950/80 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-red-600/10 border border-red-500/20 text-red-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    {videos.find(v => v.id === activeVideoId)?.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    Ostatnia publikacja: {videos.find(v => v.id === activeVideoId)?.publishedAt}
                  </span>
                </div>
                <h4 className="text-sm sm:text-md font-bold text-white leading-snug">
                  {videos.find(v => v.id === activeVideoId)?.title}
                </h4>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${activeVideoId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 text-white hover:bg-red-500 px-4 py-2 text-xs font-bold transition-all shrink-0"
              >
                Obejrzyj na YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
