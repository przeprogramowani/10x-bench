import React, { useState, useMemo } from 'react';
import VideoCard from './VideoCard';
import { Search, Play, ExternalLink, SlidersHorizontal, Sparkles, Code, HelpCircle } from 'lucide-react';

interface Video {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  views: string;
  description: string;
}

const videosData: Video[] = [
  {
    title: "Jak wybrać najlepszego Agenta AI do programowania?",
    videoUrl: "https://www.youtube.com/watch?v=03y826SVjG0",
    thumbnailUrl: "https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg",
    category: "Agenci AI",
    views: "2.4k wyświetleń",
    description: "Szukasz idealnego agenta AI do codziennej pracy programistycznej? Porównujemy wiodące rozwiązania na rynku, ich mocne strony, słabe punkty i realną wydajność w komercyjnych projektach."
  },
  {
    title: "5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO",
    videoUrl: "https://www.youtube.com/watch?v=S-iNbyLSisE",
    thumbnailUrl: "https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg",
    category: "Claude Code",
    views: "4.1k wyświetleń",
    description: "Transmisja LIVE z pełnym, praktycznym demo nowego narzędzia Claude Code od Anthropic. Pokazujemy 5 kluczowych technik, które pozwolą Ci uzyskać najwyższą jakość generowanego kodu."
  },
  {
    title: "Product Builders Day | LIVE AI Product Heroes i 10xDevs",
    videoUrl: "https://www.youtube.com/watch?v=aRkECt7derY",
    thumbnailUrl: "https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg",
    category: "Wydarzenia",
    views: "5.8k wyświetleń",
    description: "Zapis ze wspólnego święta inżynierów i twórców produktów. Łączymy siły 10xDevs oraz AI Product Heroes, aby zaprezentować rewolucyjne sposoby szybkiego budowania i testowania MVP."
  },
  {
    title: "Wybierasz model AI do kodowania? Nie ufaj benchmarkom",
    videoUrl: "https://www.youtube.com/watch?v=vH1T5qB4dBQ",
    thumbnailUrl: "https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg",
    category: "Analiza AI",
    views: "3.2k wyświetleń",
    description: "Dlaczego popularne testy i benchmarki modeli językowych mijają się z prawdą w codziennym programowaniu? Wyjaśniamy, jak mądrze podchodzić do wyboru modeli i dlaczego warto budować własne testy."
  },
  {
    title: "Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs",
    videoUrl: "https://www.youtube.com/watch?v=bcs8WS4A5Zg",
    thumbnailUrl: "https://i3.ytimg.com/vi/bcs8WS4A5Zg/maxresdefault.jpg",
    category: "Live Coding",
    views: "4.9k wyświetleń",
    description: "Kolejny live, w którym zderzamy rewolucyjne narzędzie CLI od Anthropic z rzeczywistym kodowaniem produktu. Sprawdzamy limity, prędkość działania i radzenie sobie z błędami."
  },
  {
    title: "MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja",
    videoUrl: "https://www.youtube.com/watch?v=Vce4cD_5XW0",
    thumbnailUrl: "https://i3.ytimg.com/vi/Vce4cD_5XW0/maxresdefault.jpg",
    category: "Context Engineering",
    views: "3.5k wyświetleń",
    description: "Przechodzimy od pustego folderu do gotowego, zrefaktoryzowanego kodu MVP. Zobacz jak inżynieria kontekstu (Context Engineering) decyduje o sukcesie lub porażce Twojego zapytania."
  }
];

export default function YouTubeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const categories = useMemo(() => {
    const list = new Set(videosData.map(v => v.category));
    return ['Wszystkie', ...Array.from(list)];
  }, []);

  const filteredVideos = useMemo(() => {
    return videosData.filter(vid => {
      const matchesSearch = vid.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            vid.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Wszystkie' || vid.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Featured Video Highlight (Cinema Mode style) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
          <img
            src="https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg"
            alt="Claude Code Live Demo Highlight"
            className="w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40">
            <a
              href="https://www.youtube.com/watch?v=S-iNbyLSisE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-8 h-8 fill-current" />
            </a>
          </div>
          <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="fill-current"></polygon>
            </svg> Polecane Nagranie
          </span>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block">HIT Maja 2026</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Anthropic zaskoczył rynek swoim własnym agentem CLI - Claude Code. Czy to koniec klasycznych asystentów w edytorze? W tym nagraniu bierzemy go na warsztat i pokazujemy jak świadomie kontrolować agenta, aby pisać stabilne aplikacje bez błędów strukturalnych.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.youtube.com/watch?v=S-iNbyLSisE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-950/40"
            >
              Oglądaj teraz na YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Grid Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Szukaj filmów wideo..."
            className="w-full bg-slate-950 border border-slate-800/80 rounded-xl py-2.5 px-4 pl-10 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-500" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-1.5 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((vid) => (
            <VideoCard
              key={vid.title}
              title={vid.title}
              videoUrl={vid.videoUrl}
              thumbnailUrl={vid.thumbnailUrl}
              category={vid.category}
              views={vid.views}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/10 border border-slate-900 border-dashed rounded-3xl">
          <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-slate-700 mx-auto mb-4">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="fill-current"></polygon>
          </svg>
          <h3 className="text-lg font-bold text-white mb-2">Nie znaleziono materiałów wideo</h3>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            Brak nagrań wideo pasujących do frazy "{searchTerm}". Spróbuj wpisać inną frazę lub zmienić kategorię.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('Wszystkie'); }}
            className="mt-6 text-sm font-bold text-orange-500 hover:underline"
          >
            Pokaż wszystkie filmy wideo
          </button>
        </div>
      )}
    </div>
  );
}
