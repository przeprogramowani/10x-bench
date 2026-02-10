import type { FC } from 'react';

interface Podcast {
  id: number;
  title: string;
  duration: string;
  description: string;
  series: string;
}

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
          {podcast.series}
        </span>
        <span className="text-gray-500 text-sm font-medium">{podcast.duration}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {podcast.title}
      </h3>
      <p className="text-gray-600 line-clamp-3">{podcast.description}</p>
      <div className="mt-4">
        <button className="text-primary-600 font-semibold hover:text-primary-700 transition flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Odtwórz
        </button>
      </div>
    </div>
  );
};

export default PodcastCard;
