interface VideoCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  views?: string;
}

export default function VideoCard({ title, description, thumbnail, views }: VideoCardProps) {
  // Placeholder thumbnail with gradient
  const placeholderGradients = [
    'from-blue-400 to-purple-500',
    'from-purple-400 to-pink-500',
    'from-pink-400 to-red-500',
    'from-green-400 to-blue-500',
    'from-yellow-400 to-orange-500',
    'from-indigo-400 to-purple-500',
  ];

  const randomGradient = placeholderGradients[Math.floor(Math.random() * placeholderGradients.length)];

  return (
    <div className="card overflow-hidden hover:shadow-2xl transition-all group">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${randomGradient} flex items-center justify-center`}>
            <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
          {description}
        </p>
        {views && (
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {views}
          </div>
        )}
      </div>
    </div>
  );
}
