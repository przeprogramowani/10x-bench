interface VideoCardProps {
  title: string;
  description: string;
  date: string;
  url: string;
}

export default function VideoCard({
  title,
  description,
  date,
  url,
}: VideoCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
    >
      {/* Thumbnail placeholder */}
      <div className="aspect-video bg-gradient-to-br from-surface-800 to-surface-900 flex items-center justify-center relative">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <svg
            className="w-7 h-7 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* YouTube badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-red-600/90 rounded text-xs font-medium text-white">
          YouTube
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-surface-200 line-clamp-2">
          {description}
        </p>
        <div className="mt-3 text-xs text-surface-200">{formattedDate}</div>
      </div>
    </a>
  );
}
