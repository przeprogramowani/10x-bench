import React from 'react';

interface Episode {
  id: string;
  title: string;
  date: string;
  link: string;
  description: string;
}

interface PodcastListProps {
  episodes: Episode[];
}

const PodcastList: React.FC<PodcastListProps> = ({ episodes }) => {
  return (
    <div className="space-y-6">
      {episodes.map((episode) => (
        <div key={episode.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {new Date(episode.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <a
              href={episode.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Słuchaj
            </a>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            <a href={episode.link} className="hover:text-indigo-600 transition-colors">
              {episode.title}
            </a>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
            {episode.description}
          </p>
        </div>
      ))}
      <div className="text-center mt-8">
        <a
          href="https://anchor.fm/przeprogramowani"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 shadow-sm text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Wszystkie odcinki
        </a>
      </div>
    </div>
  );
};

export default PodcastList;
