import React from 'react';
import { Play } from 'lucide-react';

const EpisodeCard = ({ title, date, duration, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-blue-600 font-semibold">{date}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{duration}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm">{description}</p>
        <a href={link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group">
          <span className="mr-2 group-hover:underline">Odsłuchaj</span>
          <Play size={16} className="fill-current" />
        </a>
      </div>
    </div>
  );
};

export default EpisodeCard;
