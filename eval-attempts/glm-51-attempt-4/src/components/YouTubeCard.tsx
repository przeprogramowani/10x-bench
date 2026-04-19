import type { Video } from '../data/videos';

interface Props {
  video: Video;
}

export default function YouTubeCard({ video }: Props) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group overflow-hidden transition-all hover:scale-[1.01] hover:border-red-500/30"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
            <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-red-300">
          {video.title}
        </h3>
      </div>
    </a>
  );
}
