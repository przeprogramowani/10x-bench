import React, { useState } from 'react';
import { Search, Play, Volume2, Clock, ExternalLink, Headset, Star } from 'lucide-react';

interface Episode {
  title: string;
  duration: string;
  description: string;
  show: 'Opanuj.AI' | 'Przeprogramowani ft. Gość';
  link: string;
  imgUrl?: string;
}

const episodes: Episode[] = [
  {
    title: "GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)",
    duration: "00:47:22",
    description: "W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT. Na pierwszy rzut oka wygląda to jak kolejny wyścig…",
    show: "Opanuj.AI",
    link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh"
  },
  {
    title: "TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI",
    duration: "01:39:33",
    description: "Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy jednocześnie właśnie na naszych oczach kończy się era klasycznych SaaS-ów?",
    show: "Opanuj.AI",
    link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk"
  },
  {
    title: "Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński",
    duration: "01:28:30",
    description: "Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. W naszej rozmowie dzieli się swoimi doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.",
    show: "Opanuj.AI",
    link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83"
  },
  {
    title: "OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!",
    duration: "01:43:15",
    description: "Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw — narzędzie do automatyzacji agentycznej.",
    show: "Opanuj.AI",
    link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2"
  },
  {
    title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin",
    duration: "01:23:04",
    description: "ChatGPT Health vs Google MedGemma 1.5 - giganci Generative AI chcą podbić świat medycyny. Czy już wkrótce będzie to realna alternatywa klasycznej służby zdrowia? Inny z gigantów, Anthropic, próbuje narzucić nową konstytucję AI...",
    show: "Opanuj.AI",
    link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4"
  },
  {
    title: "Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów",
    duration: "01:47:28",
    description: "OpenAI czy Google? GPT-5.2 czy Gemini 3? Demis Hassabis czy Sam Altman? Bielik czy PLLuM? Ubiegły rok był pełen zaciekłych rywalizacji na wielu polach, a rozwój AI raz jeszcze przebił najśmielsze oczekiwania.",
    show: "Opanuj.AI",
    link: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025---Modele--Narzdzia--Przeomy--Liderzy--Firmy-i-Wpadki-Influencerw-e3dcmq5"
  },
  {
    title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość",
    duration: "00:33:45",
    description: "W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą programistów i jak skutecznie uczyć się angielskiego w IT. Praktyczne porady i tricki.",
    show: "Przeprogramowani ft. Gość",
    link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo"
  },
  {
    title: "O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość",
    duration: "00:45:56",
    description: "Wojciech Trawiński, Senior Software Engineer w XTB opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty. Dowiedz się, dlaczego mit \"ciężka praca = sukces\" nie zawsze działa.",
    show: "Przeprogramowani ft. Gość",
    link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn"
  },
  {
    title: "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość",
    duration: "01:16:44",
    description: "W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się zamiast tego na kluczowych decyzjach, które kształtują ostateczny charakter systemów frontendowych.",
    show: "Przeprogramowani ft. Gość",
    link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3"
  },
  {
    title: "Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)",
    duration: "01:36:34",
    description: "Porozmawiamy o nadchodzącym szkoleniu OpanujTypeScript, zmianach w specyfikacji typowania oraz o tym, gdzie będzie można przybić z nami pionę w trakcie nadchodzących wydarzeń programistycznych.",
    show: "Przeprogramowani ft. Gość",
    link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm"
  },
  {
    title: "No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński - Przeprogramowani ft. Gość",
    duration: "00:36:31",
    description: "Kamil Tarczyński, Co-founder oraz CTO agencji havenocode opowiada o potencjale, wyzwaniach i realiach tworzenia nowoczesnych systemów biznesowych przy pomocy rozwiązań no-code.",
    show: "Przeprogramowani ft. Gość",
    link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6"
  },
  {
    title: "Nauka nowoczesnego frontendu | Paweł Gnat - Przeprogramowani ft. Gość",
    duration: "00:42:11",
    description: "Paweł Gnat to frontend developer, który przebranżowił się do IT z budownictwa. W tym podcaście dzieli się swoimi wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.",
    show: "Przeprogramowani ft. Gość",
    link: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935"
  }
];

export default function PodcastList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | 'Opanuj.AI' | 'Przeprogramowani ft. Gość'>('All');
  const [nowPlaying, setNowPlaying] = useState<Episode | null>(null);

  const filteredEpisodes = episodes.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(search.toLowerCase()) || 
                          ep.description.toLowerCase().includes(search.toLowerCase());
    const matchesShow = filter === 'All' ? true : ep.show === filter;
    return matchesSearch && matchesShow;
  });

  const handlePlay = (episode: Episode) => {
    setNowPlaying(episode);
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-brand-card/40 border border-slate-800 p-6 rounded-2xl">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'All' 
                ? 'bg-brand-accent text-brand-dark shadow-[0_0_15px_rgba(0,242,254,0.2)]' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Wszystkie odcinki
          </button>
          <button
            onClick={() => setFilter('Opanuj.AI')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'Opanuj.AI' 
                ? 'bg-brand-accent text-brand-dark shadow-[0_0_15px_rgba(0,242,254,0.2)]' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Opanuj.AI Podcast
          </button>
          <button
            onClick={() => setFilter('Przeprogramowani ft. Gość')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'Przeprogramowani ft. Gość' 
                ? 'bg-brand-accent text-brand-dark shadow-[0_0_15px_rgba(0,242,254,0.2)]' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Przeprogramowani ft. Gość
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Szukaj odcinków..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 pl-10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
        </div>
      </div>

      {/* Episodes Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEpisodes.length > 0 ? (
          filteredEpisodes.map((ep, i) => (
            <div 
              key={i} 
              className={`flex flex-col justify-between bg-brand-card/30 border rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 relative group ${
                nowPlaying?.title === ep.title ? 'border-brand-accent bg-brand-accent/[0.02]' : 'border-slate-800/80'
              }`}
            >
              {/* Star badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-900 border border-slate-800 px-2.5 py-1 text-[10px] font-semibold text-slate-400">
                <Star className="h-3 w-3 text-brand-yellow fill-brand-yellow" />
                <span>{ep.show}</span>
              </div>

              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-brand-accent" />
                    {ep.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-md sm:text-lg font-bold text-white group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug">
                  {ep.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {ep.description}
                </p>
              </div>

              {/* Action row */}
              <div className="flex gap-3 pt-6 mt-4 border-t border-slate-800/60">
                <button
                  onClick={() => handlePlay(ep)}
                  className="flex-grow inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-accent text-brand-dark hover:bg-white px-4 py-2.5 text-xs font-bold transition-all duration-200"
                >
                  <Play className="h-3.5 w-3.5 fill-brand-dark" />
                  Graj na stronie
                </button>
                <a
                  href={ep.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                >
                  Spotify
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="md:col-span-2 text-center py-16 bg-brand-card/10 border border-slate-800/40 rounded-2xl space-y-3">
            <p className="text-slate-400">Nie znaleziono odcinków pasujących do Twoich filtrów.</p>
            <button 
              onClick={() => { setSearch(''); setFilter('All'); }} 
              className="text-xs text-brand-accent font-semibold hover:underline"
            >
              Wyczyść wszystkie filtry
            </button>
          </div>
        )}
      </div>

      {/* Floating Audio Player simulation */}
      {nowPlaying && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950 border-t border-brand-accent px-4 py-4 md:py-5 shadow-[0_-10px_35px_rgba(0,242,254,0.15)] transition-transform animate-in slide-in-from-bottom duration-500">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 w-full md:w-auto">
              <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent animate-pulse">
                <Volume2 className="h-5 w-5" />
              </div>
              <div className="space-y-0.5 text-left">
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider">{nowPlaying.show}</span>
                <h4 className="text-xs sm:text-sm font-semibold text-white line-clamp-1">{nowPlaying.title}</h4>
                <p className="text-[11px] text-slate-500">Odtwarzacz online • {nowPlaying.duration}</p>
              </div>
            </div>

            {/* Simulated audio visualizer animation */}
            <div className="flex items-center gap-1">
              <div className="w-1 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-1 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-1 h-6 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-4 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <a
                href={nowPlaying.link}
                target="_blank"
                rel="noreferrer"
                className="flex-grow md:flex-grow-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 px-5 py-2.5 text-xs font-bold transition-all"
              >
                Otwórz pełny odcinek w Spotify
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => setNowPlaying(null)}
                className="rounded-xl bg-slate-800 text-slate-400 hover:text-white p-2.5 text-xs font-semibold"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
