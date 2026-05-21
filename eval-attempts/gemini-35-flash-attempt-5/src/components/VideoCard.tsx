import React, { useState } from 'react';
import { Play, ExternalLink, X, Calendar, User } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  publishedAt?: string;
  author?: string;
}

export default function VideoCard({ id, title, publishedAt = 'Niedawno', author = 'Przeprogramowani' }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <>
      <div className="group flex flex-col h-full bg-slate-900/30 border border-slate-800/80 hover:border-indigo-500/30 hover:shadow-indigo-500/5 rounded-2xl overflow-hidden transition-all duration-300">
        {/* Video Thumbnail Section */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
          <img
            src={thumbnailUrl}
            onError={(e) => {
              // fallback if maxresdefault isn't available
              (e.target as HTMLImageElement).src = fallbackThumbnailUrl;
            }}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

          {/* Large Play Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors"
            aria-label={`Odtwórz wideo: ${title}`}
          >
            <div className="p-4 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </div>
          </button>
        </div>

        {/* Video Info Section */}
        <div className="flex flex-col flex-grow p-5 justify-between">
          <div>
            <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
              <span className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {publishedAt}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span className="flex items-center">
                <User className="h-3 w-3 mr-1" />
                {author}
              </span>
            </div>

            <h3 className="text-base md:text-lg font-bold text-slate-100 group-hover:text-red-500 transition-colors line-clamp-2 leading-snug mb-4">
              <button onClick={() => setIsOpen(true)} className="text-left font-bold focus:outline-none hover:underline">
                {title}
              </button>
            </h3>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-900 mt-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              Odtwórz na stronie
            </button>

            <a
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-800 transition-colors"
              title="Otwórz bezpośrednio na YouTube"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Video Player */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-900 bg-slate-900/40">
              <h4 className="text-sm md:text-base font-bold text-slate-100 line-clamp-1 pr-4">{title}</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Zamknij"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Iframe Video Wrapper */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-4 flex justify-between items-center bg-slate-900/20 text-xs text-slate-400 border-t border-slate-900">
              <span>Wideo z kanału Przeprogramowani</span>
              <a
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-bold gap-1"
              >
                Otwórz na YouTube <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
