import React from 'react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  videoId: string;
}

export default function VideoCard({ thumbnail, title, videoId }: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden group cursor-pointer">
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <svg className="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition line-clamp-2">{title}</h3>
        </div>
      </a>
    </div>
  );
}
