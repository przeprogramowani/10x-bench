import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  category?: string;
  views?: string;
}

export default function VideoCard({
  title,
  videoUrl,
  thumbnailUrl,
  category = "AI i Programowanie",
  views = "LIVE / NOWOŚĆ"
}: VideoCardProps) {
  return (
    <div className="group bg-slate-900/30 border border-slate-900 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            // High-quality YouTube thumbnail fallback
            const videoId = videoUrl.split('v=')[1]?.split('&')[0];
            if (videoId) {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
          }}
        />

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 bg-red-600 rounded-full text-white shadow-xl shadow-red-600/30 transform scale-90 group-hover:scale-100 transition-all duration-300">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="fill-current"></polygon>
            </svg> YouTube
          </span>
        </div>

        <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-semibold text-slate-300">
          {views}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2 block">
          {category}
        </span>
        
        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-orange-400 line-clamp-2 transition-colors duration-200 mb-4 leading-snug flex-grow">
          {title}
        </h3>

        {/* Button */}
        <div className="pt-4 border-t border-slate-950/80 mt-auto flex justify-between items-center">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white transition-colors"
          >
            Oglądaj na YouTube
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
