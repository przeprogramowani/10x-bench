import type { Video } from '../data/content';

interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  const videoId = new URL(video.link).searchParams.get('v');

  return (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden hover:shadow-xl hover:shadow-gray-100/50 hover:border-red-200 transition-all duration-300"
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
        {videoId && (
          <img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl translate-y-2 group-hover:translate-y-0">
            <svg className="w-6 h-6 text-red-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-0.5 rounded">
            {video.duration}
          </span>
        )}
      </div>

      <div className="p-5">
        <time className="text-xs text-gray-400 mb-1.5 block">
          {new Date(video.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
        <h3 className="text-sm font-display font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
          {video.title}
        </h3>
      </div>
    </a>
  );
}
