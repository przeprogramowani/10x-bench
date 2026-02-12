// src/components/PodcastEpisode.tsx
import React from 'react';

interface Episode {
  title: string;
  description: string;
  duration: string;
  link: string;
  image: string;
}

const PodcastEpisode: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center">
        <img src={episode.image} alt={episode.title} className="w-16 h-16 rounded mr-4" />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
          <p className="text-gray-600 mb-2">{episode.duration}</p>
          <p className="text-sm">{episode.description.slice(0, 150)}...</p>
        </div>
      </div>
      <a href={episode.link} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block">Słuchaj →</a>
    </div>
  );
};

export default PodcastEpisode;