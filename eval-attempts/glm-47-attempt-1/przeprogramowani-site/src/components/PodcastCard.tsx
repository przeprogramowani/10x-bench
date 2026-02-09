import React from 'react';

interface PodcastCardProps {
  title: string;
  duration: string;
  link: string;
  description: string;
}

export default function PodcastCard({ title, duration, link, description }: PodcastCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold flex-1 mr-4">{title}</h3>
        <span className="text-sm text-gray-500 whitespace-nowrap">{duration}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition"
      >
        Odtwórz →
      </a>
    </div>
  );
}
