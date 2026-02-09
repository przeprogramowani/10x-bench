interface PodcastCardProps {
  title: string;
  podcast: string;
  description: string;
  duration: string;
  url: string;
  image: string;
  publishedAt: string;
  key?: number;
}

export default function PodcastCard({
  title,
  podcast,
  description,
  duration,
  url,
  image,
  publishedAt
}: PodcastCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all"
    >
      <div className="aspect-video bg-gray-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-orange-500/90 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-500 bg-orange-500/10 rounded-full px-2 py-1">
            {podcast}
          </span>
          <span className="text-xs text-gray-500">{duration}</span>
        </div>
        <h3 className="text-base font-semibold text-white line-clamp-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          {description}
        </p>
        <time className="mt-2 text-xs text-gray-500">
          {formatDate(publishedAt)}
        </time>
      </div>
    </a>
  );
}
