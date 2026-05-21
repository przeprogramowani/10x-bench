import React from 'react';
import { Youtube, Play, ArrowUpRight, MonitorPlay, Sparkles } from 'lucide-react';

interface Video {
  title: string;
  youtubeId: string;
  url: string;
  category: string;
}

const VIDEOS: Video[] = [
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    youtubeId: '03y826SVjG0',
    url: 'https://www.youtube.com/watch?v=03y826SVjG0',
    category: 'Agent AI',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    youtubeId: 'S-iNbyLSisE',
    url: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    category: 'Claude Code',
  },
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    youtubeId: 'aRkECt7derY',
    url: 'https://www.youtube.com/watch?v=aRkECt7derY',
    category: 'Live',
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    youtubeId: 'vH1T5qB4dBQ',
    url: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
    category: 'Analiza',
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    youtubeId: 'bcs8WS4A5Zg',
    url: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
    category: 'Live',
  },
  {
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    youtubeId: 'Vce4cD_5XW0',
    url: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
    category: 'Warsztat',
  },
];

export const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="py-20 relative">
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Youtube className="h-3.5 w-3.5 text-red-500" />
              <span>YouTube</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Oglądaj nasze filmy <br />
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                i podnoś skille dev
              </span>
            </h2>
            <p className="text-slate-400 font-medium text-sm sm:text-base max-w-xl">
              Publikujemy regularnie praktyczne przewodniki po agentach AI, narzędziach developerskich i dekonstruujemy rzeczywistość programistyczną.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://youtube.com/c/przeprogramowani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/15 hover:shadow-red-600/25 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Subskrybuj na YouTube</span>
              <ArrowUpRight className="h-4.5 w-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl bg-brand-card/30 border border-slate-800/80 hover:border-red-500/40 hover:bg-brand-card/70 transition-all duration-300 overflow-hidden"
            >
              <div className="space-y-4">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  {/* YouTube Badge Overlay */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-black uppercase text-slate-300 tracking-wider">
                    {video.category}
                  </div>
                  {/* Hover play block */}
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/40 flex items-center justify-center transition-all">
                    <span className="p-3 bg-red-600 text-white rounded-full shadow-2xl group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="px-6 pb-6 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors duration-200 line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-bold flex items-center gap-1">
                    <MonitorPlay className="h-3.5 w-3.5 text-red-500/80" />
                    YouTube Video
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
