import React from 'react';

interface PodcastCardProps {
  title: string;
  description: string;
  episodeNumber: number;
  duration: string;
  href: string;
  image?: string;
}

export default function PodcastCard({ title, description, episodeNumber, duration, href, image }: PodcastCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block card overflow-hidden hover:border-green-500/50"
    >
      <div className="flex">
        {image && (
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-4 flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
              Odcinek {episodeNumber}
            </span>
            <span className="text-xs text-gray-500">{duration}</span>
          </div>
          <h3 className="text-base font-medium text-white mb-1 group-hover:text-green-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-800/50 border-t border-gray-800 flex items-center justify-between">
        <span className="text-xs text-gray-500">Opanuj AI Podcast</span>
        <div className="flex items-center gap-2 text-green-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span className="text-xs font-medium">Słuchaj</span>
        </div>
      </div>
    </a>
  );
}
