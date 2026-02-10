import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoCard = ({ title, views, date, thumbnail, link }) => {
  return (
    <a href={link} className="group block bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
      <div className="relative aspect-video bg-gray-200">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayCircle className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span>{views} wyświetleń</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
