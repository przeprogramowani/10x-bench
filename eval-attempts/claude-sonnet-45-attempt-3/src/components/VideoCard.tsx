interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  views?: string;
  date?: string;
}

export default function VideoCard({ title, description, thumbnail, videoUrl, views, date }: VideoCardProps) {
  return (
    <div className="card">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-video bg-gray-200">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center">
            <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          {(views || date) && (
            <div className="flex items-center text-xs text-gray-500 space-x-3">
              {views && <span>{views} wyświetleń</span>}
              {date && <span>{date}</span>}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
