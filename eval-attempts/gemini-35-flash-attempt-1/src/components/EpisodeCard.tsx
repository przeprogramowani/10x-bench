import React from 'react';
import { Play, Clock, ArrowUpRight, Share2, Sparkles, UserCheck } from 'lucide-react';

interface EpisodeCardProps {
  title: string;
  description: string;
  coverImage: string;
  duration: string;
  url: string;
  type: 'ai' | 'guest';
  date?: string;
}

export default function EpisodeCard({
  title,
  description,
  coverImage,
  duration,
  url,
  type,
  date = "Maj 2026"
}: EpisodeCardProps) {
  return (
    <div className="group bg-slate-900/40 border border-slate-900/80 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Cover Image Area */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img
          src={coverImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            // Fallback if image fails to load
            (e.target as HTMLImageElement).src = "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg";
          }}
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-4 bg-orange-500 rounded-full text-white shadow-lg shadow-orange-500/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>

        {/* Tag / Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow ${
            type === 'ai'
              ? 'bg-purple-600 text-white'
              : 'bg-orange-600 text-white'
          }`}>
            {type === 'ai' ? <Sparkles className="w-3 h-3" /> : <UserCheck className="w-3 h-3" />}
            {type === 'ai' ? 'Opanuj.AI' : 'ft. Gość'}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-md text-xs font-semibold text-slate-300 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-orange-500" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-widest flex items-center justify-between">
          <span>Słuchowisko</span>
          <span>{date}</span>
        </div>

        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-orange-400 line-clamp-2 transition-colors duration-200 mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-slate-400 text-xs md:text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Link / CTA */}
        <div className="pt-4 border-t border-slate-950 flex items-center justify-between mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-orange-500 hover:text-orange-400 group/link transition-colors"
          >
            Słuchaj odcinka
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title, text: description, url });
              } else {
                navigator.clipboard.writeText(url);
                alert("Skopiowano link do schowka!");
              }
            }}
            className="text-slate-500 hover:text-white transition-colors"
            title="Udostępnij"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
