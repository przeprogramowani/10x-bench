import React from 'react';
import { Play, Clock, Share2, Headphones } from 'lucide-react';

interface EpisodeCardProps {
  title: string;
  duration: string;
  description: string;
  link: string;
  series: 'Opanuj.AI' | 'Przeprogramowani ft. Gość';
  imageUrl?: string;
}

export default function EpisodeCard({ title, duration, description, link, series, imageUrl }: EpisodeCardProps) {
  const isOpanujAI = series === 'Opanuj.AI';

  const seriesTagColor = isOpanujAI 
    ? 'bg-violet-500/10 text-violet-400 border-violet-500/20' 
    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

  const defaultImage = isOpanujAI 
    ? 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=300&auto=format&fit=crop' 
    : 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=300&auto=format&fit=crop';

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: link,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(link);
      alert('Skopiowano link do schowka!');
    }
  };

  return (
    <div className="group flex flex-col md:flex-row bg-slate-900/30 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
      {/* Visual Part */}
      <div className="relative md:w-56 h-48 md:h-auto bg-slate-950 flex-shrink-0 overflow-hidden">
        <img 
          src={imageUrl || defaultImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center"
            aria-label={`Odtwórz odcinek: ${title}`}
          >
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </a>
        </div>
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${seriesTagColor}`}>
          {series}
        </span>
      </div>

      {/* Content Part */}
      <div className="flex-grow p-5 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
            <span className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {duration}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700"></span>
            <span className="flex items-center text-indigo-400 font-medium">
              <Headphones className="h-3.5 w-3.5 mr-1" />
              Podcast
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2 leading-snug">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-900">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors gap-1 group-hover:translate-x-0.5 duration-200"
          >
            Słuchaj na Spotify / Anchor
            <span className="text-sm">→</span>
          </a>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Udostępnij"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
