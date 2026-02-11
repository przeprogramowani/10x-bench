import type { Video } from "../data/videos";

interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  const thumbnailUrl = `https://i3.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-xl border border-surface-700 bg-surface-900 transition-all hover:border-surface-600"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600/90 opacity-0 transition-opacity group-hover:opacity-100">
            <svg
              className="ml-1 h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-1 font-bold text-white group-hover:text-brand-300">
          {video.title}
        </h3>
        <p className="text-sm leading-relaxed text-surface-400">
          {video.description}
        </p>
      </div>
    </a>
  );
}
