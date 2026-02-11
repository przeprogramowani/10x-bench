interface Props {
  title: string;
  videoId: string;
  thumbnail: string;
}

export default function VideoCard({ title, videoId, thumbnail }: Props) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-surface-700/50 bg-surface-800/50 overflow-hidden transition-all hover:border-surface-600/50 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
          <svg
            className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-surface-200 leading-snug line-clamp-2 group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
}
