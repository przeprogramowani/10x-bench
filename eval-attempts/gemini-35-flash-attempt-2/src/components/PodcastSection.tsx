import React, { useState } from 'react';
import { Play, Clock, ExternalLink, Radio, Headphones } from 'lucide-react';

interface Episode {
  title: string;
  show: 'Opanuj.AI Podcast' | 'Przeprogramowani ft. Gość';
  duration: string;
  link: string;
  description: string;
  imageUrl: string;
}

const EPISODES: Episode[] = [
  {
    title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
    show: 'Opanuj.AI Podcast',
    duration: '00:47:22',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
    description: 'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0. Na pierwszy rzut oka wygląda to jak kolejny pasjonujący wyścig gigantów AI.',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
    show: 'Opanuj.AI Podcast',
    duration: '01:39:33',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
    description: 'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy jednocześnie właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
    show: 'Opanuj.AI Podcast',
    duration: '01:28:30',
    link: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
    description: 'Dawid Sibiński dzieli się swoimi doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code. Praktyczny deep-dive programisty.',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
  },
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
    show: 'Przeprogramowani ft. Gość',
    duration: '00:33:45',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    description: 'W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak uczyć się angielskiego w IT.',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
    show: 'Przeprogramowani ft. Gość',
    duration: '00:45:56',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    description: 'Wojciech Trawiński, Senior Software Engineer w XTB opowiada, o tym jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
    show: 'Przeprogramowani ft. Gość',
    duration: '01:16:44',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    description: 'W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne biblioteki czy frameworki.',
    imageUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
];

export const PodcastSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'guest'>('all');

  const filteredEpisodes = EPISODES.filter((ep) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return ep.show === 'Opanuj.AI Podcast';
    if (filter === 'guest') return ep.show === 'Przeprogramowani ft. Gość';
    return true;
  });

  return (
    <section id="podcast" className="py-20 relative bg-brand-darker/40">
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-brand-purple/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Radio className="h-3.5 w-3.5 text-brand-purple" />
              <span>Podcasty</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Słuchaj naszej wiedzy <br />
              <span className="bg-gradient-to-r from-brand-purple to-pink-500 bg-clip-text text-transparent">
                gdziekolwiek jesteś
              </span>
            </h2>
            <p className="text-slate-400 font-medium text-sm sm:text-base max-w-xl">
              Dwa autorskie podcasty, w których poruszamy tematy inżynierii oprogramowania, nowoczesnego AI, kariery programisty i architektury.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800/80">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Wszystkie ({EPISODES.length})
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'ai'
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Opanuj.AI
            </button>
            <button
              onClick={() => setFilter('guest')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'guest'
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Przeprogramowani ft. Gość
            </button>
          </div>
        </div>

        {/* Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((episode, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-brand-card/50 border border-slate-800/60 hover:border-brand-purple/40 hover:bg-brand-card/80 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    episode.show === 'Opanuj.AI Podcast' 
                      ? 'bg-purple-950/50 text-purple-300 border border-purple-800/40' 
                      : 'bg-indigo-950/50 text-indigo-300 border border-indigo-800/40'
                  }`}>
                    {episode.show}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-500 font-bold">
                    <Clock className="h-3.5 w-3.5 text-brand-purple" />
                    {episode.duration}
                  </span>
                </div>

                {/* Cover representation */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={episode.imageUrl}
                    alt={episode.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 opacity-80"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-center justify-center">
                    <span className="p-3 bg-brand-purple/90 rounded-full text-white shadow-xl group-hover:bg-brand-purple group-hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors duration-200 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-3">
                  {episode.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-brand-purple hover:text-white group-hover:underline transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <Headphones className="h-4 w-4" /> Posłuchaj odcinka
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming logos */}
        <div className="mt-16 pt-8 border-t border-slate-800/40 text-center space-y-4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Znajdziesz nas również na
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-sm font-black text-slate-400 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Spotify
            </span>
            <span className="text-sm font-black text-slate-400 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Apple Podcasts
            </span>
            <span className="text-sm font-black text-slate-400 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> RSS Feed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
