interface Podcast {
  id: string;
  title: string;
  series: string;
  duration: string;
  description: string;
  url: string;
  date: string;
}

interface PodcastCardProps {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {podcast.series}
          </span>
          <span className="text-sm text-gray-500">{podcast.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {podcast.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{podcast.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {new Date(podcast.date).toLocaleDateString('pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <a
            href={podcast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
          >
            Słuchaj
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
