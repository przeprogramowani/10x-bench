interface VideoCardProps {
  title: string;
  videoId: string;
  date?: string;
}

export default function VideoCard({ title, videoId, date }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-2xl border border-surface-800 bg-surface-900/50 transition-all hover:border-brand-500/30 hover:bg-surface-900"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg">
            <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold leading-snug text-white group-hover:text-brand-300">
          {title}
        </h3>
        {date && <p className="mt-1 text-xs text-surface-500">{date}</p>}
      </div>
    </a>
  );
}
