import type { Video } from '../data/videos';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden card-glow group flex flex-col"
      style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
    >
      {/* Thumbnail placeholder */}
      <div className={`relative h-44 bg-gradient-to-br ${video.thumbnailGradient} flex items-center justify-center`}>
        <span className="text-4xl select-none">{video.thumbnailIcon}</span>
        {/* Duration badge */}
        <div
          className="absolute bottom-3 right-3 px-2 py-1 rounded-lg text-xs font-bold"
          style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }}
        >
          {video.duration}
        </div>
        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(34, 211, 238, 0.9)' }}
          >
            <svg className="w-6 h-6 ml-1 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {video.title}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">
          {video.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {video.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: '#2a2a2a',
                color: '#9ca3af',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{video.views} wyświetleń</span>
          </div>
          <span>{video.date}</span>
        </div>
      </div>
    </div>
  );
}
