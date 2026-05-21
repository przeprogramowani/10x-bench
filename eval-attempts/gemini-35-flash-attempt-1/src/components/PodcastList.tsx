import React, { useState, useMemo } from 'react';
import EpisodeCard from './EpisodeCard';
import { Search, Mic, Sparkles, UserCheck, Play, ArrowUpRight } from 'lucide-react';

interface Episode {
  title: string;
  description: string;
  coverImage: string;
  duration: string;
  url: string;
  type: 'ai' | 'guest';
  date: string;
}

const episodesData: Episode[] = [
  {
    title: "GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)",
    description: "W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT. Na pierwszy rzut oka wygląda to jak kolejny szalony wyścig o panowanie w świecie generatywnej sztucznej inteligencji.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "47:22",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh",
    type: "ai",
    date: "Kwiecień 2026"
  },
  {
    title: "TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI",
    description: "Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy jednocześnie właśnie na naszych oczach kończy się era klasycznych platform SaaS? Analizujemy najnowszy test ARC-AGI-3 i zastanawiamy się nad granicami możliwości współczesnych modeli.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "1:39:33",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk",
    type: "ai",
    date: "Kwiecień 2026"
  },
  {
    title: "Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński",
    description: "Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. W naszej rozmowie dzieli się swoimi doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code w komercyjnych projektach. Rozmawiamy o tym jak AI zmienia codzienny warsztat programisty.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "1:28:30",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83",
    type: "ai",
    date: "Marzec 2026"
  },
  {
    title: "OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!",
    description: "Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw — narzędzie, które ma ambicje zrewolucjonizować pracę inżynierów. Analizujemy możliwości modeli nowej generacji.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "1:43:15",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2",
    type: "ai",
    date: "Luty 2026"
  },
  {
    title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin",
    description: "ChatGPT Health vs Google MedGemma 1.5 - giganci Generative AI chcą podbić świat medycyny. Czy już wkrótce będzie to realna alternatywa klasycznej służby zdrowia? Przyglądamy się także chińskim modelom, które cicho, ale skutecznie rozwijają się na rynku.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    duration: "1:23:04",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4",
    type: "ai",
    date: "Styczeń 2026"
  },
  {
    title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość",
    description: "W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą programistów i jak skutecznie uczyć się angielskiego w IT. Praktyczne porady dla osób chcących podjąć pracę w zagranicznych projektach.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    duration: "33:45",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo",
    type: "guest",
    date: "Grudzień 2025"
  },
  {
    title: "O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość",
    description: "Wojciech Trawiński, Senior Software Engineer w XTB opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty. Omawiamy mity i fakty na temat ciężkiej pracy, selekcji stacku i budowania autorytetu w zespole.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    duration: "45:56",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wiktoria-Sitko--Przeprogramowani-ft--Go-e380adn",
    type: "guest",
    date: "Listopad 2025"
  },
  {
    title: "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin | Przeprogramowani ft. Gość",
    description: "W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia i frameworki. Koncentrujemy się na kluczowych decyzjach technicznych, modelowaniu aplikacji, strukturze danych i krytycznych aspektach, które kształtują system frontendowy.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    duration: "1:16:44",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3",
    type: "guest",
    date: "Październik 2025"
  },
  {
    title: "Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)",
    description: "Podsumowujemy najważniejsze rewolucje i nowości wprowadzone w ekosystemie TypeScript 5. Opowiadamy o kierunkach rozwoju języka, najnowszych typach oraz dzielimy się wrażeniami z konferencji.",
    coverImage: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    duration: "1:36:34",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm",
    type: "guest",
    date: "Wrzesień 2025"
  }
];

export default function PodcastList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'guest'>('all');

  const filteredEpisodes = useMemo(() => {
    return episodesData.filter(episode => {
      const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            episode.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = activeFilter === 'all' || episode.type === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <div className="space-y-10">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Szukaj odcinków..."
            className="w-full bg-slate-950 border border-slate-800/80 rounded-xl py-2.5 px-4 pl-10 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-500" />
        </div>

        {/* Filters */}
        <div className="flex gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex-1 md:flex-initial text-xs font-bold px-4 py-2.5 rounded-xl transition-all ${
              activeFilter === 'all'
                ? 'bg-orange-500 text-white shadow shadow-orange-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
            }`}
          >
            Wszystkie ({episodesData.length})
          </button>
          
          <button
            onClick={() => setActiveFilter('ai')}
            className={`flex-1 md:flex-initial text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all ${
              activeFilter === 'ai'
                ? 'bg-purple-600 text-white shadow shadow-purple-600/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Opanuj.AI
          </button>

          <button
            onClick={() => setActiveFilter('guest')}
            className={`flex-1 md:flex-initial text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all ${
              activeFilter === 'guest'
                ? 'bg-amber-600 text-white shadow shadow-amber-600/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" /> ft. Gość
          </button>
        </div>
      </div>

      {/* Grid of Results */}
      {filteredEpisodes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((ep) => (
            <EpisodeCard
              key={ep.title}
              title={ep.title}
              description={ep.description}
              coverImage={ep.coverImage}
              duration={ep.duration}
              url={ep.url}
              type={ep.type}
              date={ep.date}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/10 border border-slate-900 border-dashed rounded-3xl">
          <Mic className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Nie znaleziono odcinków</h3>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            Brak wyników pasujących do zapytania "{searchTerm}". Spróbuj wpisać inną frazę lub zresetować filtry.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
            className="mt-6 text-sm font-bold text-orange-500 hover:underline"
          >
            Resetuj filtry i szukaj od nowa
          </button>
        </div>
      )}
    </div>
  );
}
