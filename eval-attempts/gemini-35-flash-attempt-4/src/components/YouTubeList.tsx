import React, { useState } from 'react';
import { Play, Search, Star, ExternalLink, Calendar, Eye, Share2, X } from 'lucide-react';

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  publishedAt: string;
  views: string;
  duration: string;
  description: string;
  thumbnail: string;
}

const VIDEOS: Video[] = [
  {
    id: 'vid-1',
    youtubeId: 'W6NZfCO5SIk', // JS/TS video placeholder
    title: 'Czy programista w 2026 roku musi jeszcze pisać kod?',
    category: 'Sztuczna Inteligencja',
    publishedAt: '2 dni temu',
    views: '12 400 wyświetleń',
    duration: '18:24',
    description: 'Narzędzia AI takie jak Cursor czy Windsurf rewolucjonizują rynek. Analizujemy jak zmieniła się praca programisty w ostatnich miesiącach i jak dostosować się do nowych realiów.',
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vid-2',
    youtubeId: 'N3AkSS5hXMA', // React video
    title: 'React 19 i Next.js: Co musisz wiedzieć na start?',
    category: 'Frontend',
    publishedAt: '1 tydzień temu',
    views: '8 900 wyświetleń',
    duration: '22:15',
    description: 'Krok po kroku omawiamy kluczowe nowości w React 19. Przyglądamy się nowym hookom, ulepszeniom wydajności i integracji z serwerami (Server Actions).',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vid-3',
    youtubeId: 'Z5iWr6S2398', // TS video
    title: 'TypeScript Masterclass: Zaawansowane typowanie i utility types',
    category: 'TypeScript',
    publishedAt: '2 tygodnie temu',
    views: '15 200 wyświetleń',
    duration: '35:40',
    description: 'Opanuj TypeScript na poziomie PRO. W tym filmie analizujemy zaawansowane mapowanie typów, typy warunkowe i pisanie bezpiecznego, skalowalnego kodu.',
    thumbnail: 'https://images.unsplash.com/photo-1516116211223-5c359a36298a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vid-4',
    youtubeId: 'F3A8P0gLp-Q', // Career video
    title: 'Jak wejść do branży IT i dostać pierwszą pracę w 2026?',
    category: 'Kariera',
    publishedAt: '3 tygodnie temu',
    views: '24 100 wyświetleń',
    duration: '45:10',
    description: 'Szczera rozmowa o obecnym rynku pracy dla początkujących programistów. Gdzie szukać zleceń, jak zbudować przyciągające portfolio i zabłysnąć na rozmowie kwalifikacyjnej.',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vid-5',
    youtubeId: '8aGhZQkoFbQ', // Architecture video
    title: 'Clean Architecture we Frontendzie: Czy to ma sens?',
    category: 'Architektura',
    publishedAt: '1 miesiąc temu',
    views: '11 300 wyświetleń',
    duration: '28:12',
    description: 'Czy zasady architektury wujka Boba można przełożyć 1:1 na nowoczesne aplikacje frontendowe? Pokazujemy zalety i wady takiego podejścia na żywym kodzie.',
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vid-6',
    youtubeId: 'dQw4w9WgXcQ', // Productivity video
    title: 'Nawyki programistów, którzy zarabiają ponad 30 000 zł/mc',
    category: 'Kariera',
    publishedAt: '1 miesiąc temu',
    views: '45 000 wyświetleń',
    duration: '15:50',
    description: 'To nie tylko wiedza techniczna decyduje o najwyższych stawkach. Omawiamy miękkie umiejętności, organizację pracy, networking i myślenie produktowe top deweloperów.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop'
  }
];

export default function YouTubeList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // Categories
  const categories = ['Wszystkie', 'Sztuczna Inteligencja', 'Frontend', 'TypeScript', 'Kariera', 'Architektura'];

  // Filtered videos
  const filteredVideos = VIDEOS.filter(vid => {
    const matchesSearch = vid.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          vid.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Wszystkie' || vid.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-gray-800 pb-8">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Szukaj filmów..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-gray-800 bg-gray-900/40 py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2.5 w-full md:w-auto justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/15'
                  : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.length === 0 ? (
          <div className="col-span-full text-center py-16 rounded-3xl border border-dashed border-gray-800 bg-brand-dark-card/20 text-gray-400">
            <p className="text-lg">Brak filmów spełniających kryteria.</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('Wszystkie'); }} className="mt-4 text-sm font-bold text-brand-orange hover:underline">
              Zresetuj filtry
            </button>
          </div>
        ) : (
          filteredVideos.map((vid) => (
            <div
              key={vid.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-brand-dark-card/30 transition-all duration-300 hover:border-brand-orange/40 hover:bg-brand-dark-card/60"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center transition-opacity duration-300 opacity-60 group-hover:opacity-100">
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg shadow-brand-orange/30 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  >
                    <Play className="h-6 w-6 fill-current ml-0.5" />
                  </button>
                </div>
                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-0.5 text-xs font-mono font-medium text-white">
                  {vid.duration}
                </span>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 rounded-lg bg-brand-dark/90 border border-gray-800 px-2.5 py-1 text-xs font-bold text-gray-300">
                  {vid.category}
                </span>
              </div>

              {/* Info content */}
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {vid.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {vid.views}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                    {vid.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {vid.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs font-bold text-gray-500">
                  <div className="flex items-center gap-2">
                    <YoutubeIcon className="h-4.5 w-4.5 text-red-500" />
                    <span>Kanał: Przeprogramowani</span>
                  </div>
                  <a
                    href={`https://youtube.com/watch?v=${vid.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-brand-orange hover:text-brand-orange-light transition-colors"
                  >
                    Oglądaj na YT
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Embedded Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-3xl border border-gray-800 bg-brand-dark p-2 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white border border-gray-800 hover:text-brand-orange transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video Iframe Container */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>

            {/* Info footer */}
            <div className="p-4 sm:p-6 space-y-2">
              <div className="flex items-center gap-3 text-xs text-brand-orange font-bold uppercase tracking-wider">
                <span>{activeVideo.category}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                <span className="text-gray-500">{activeVideo.publishedAt}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{activeVideo.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
