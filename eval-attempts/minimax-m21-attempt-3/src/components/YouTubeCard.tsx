import React from 'react';

interface YouTubeCardProps {
  videoId: string;
  title: string;
  thumbnail: string;
  href: string;
}

export default function YouTubeCard({ videoId, title, thumbnail, href }: YouTubeCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block card overflow-hidden"
    >
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
          <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-200 line-clamp-2 group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
}
