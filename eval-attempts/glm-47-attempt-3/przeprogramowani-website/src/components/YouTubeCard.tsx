interface YouTubeCardProps {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  key?: string;
}

export default function YouTubeCard({
  id,
  title,
  thumbnail,
  publishedAt
}: YouTubeCardProps) {
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
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all"
    >
      <div className="relative aspect-video">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-0.5">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-200 line-clamp-2 group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        <time className="mt-1 text-xs text-gray-500 block">
          {formatDate(publishedAt)}
        </time>
      </div>
    </a>
  );
}
