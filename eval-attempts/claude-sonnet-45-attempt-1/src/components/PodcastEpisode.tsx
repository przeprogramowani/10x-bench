interface PodcastEpisodeProps {
  title: string;
  duration: string;
  description: string;
  type?: 'opanuj-ai' | 'przeprogramowani' | 'guest';
}

export default function PodcastEpisode({ title, duration, description, type = 'opanuj-ai' }: PodcastEpisodeProps) {
  const typeConfig = {
    'opanuj-ai': {
      label: 'Opanuj.AI',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
    },
    'przeprogramowani': {
      label: 'Przeprogramowani',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-700',
    },
    'guest': {
      label: 'Przeprogramowani ft. Gość',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
  };

  const config = typeConfig[type];

  return (
    <div className="card p-6 hover:shadow-2xl transition-all">
      <div className="flex items-start justify-between mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.textColor}`}>
          {config.label}
        </span>
        <span className="text-gray-500 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3">
        {description}
      </p>
    </div>
  );
}
