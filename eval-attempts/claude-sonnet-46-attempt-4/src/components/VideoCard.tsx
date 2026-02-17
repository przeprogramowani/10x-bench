interface VideoCardProps {
  title: string;
  views: string;
  date: string;
  duration: string;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  category?: string;
}

export default function VideoCard({
  title,
  views,
  date,
  duration,
  href,
  gradientFrom,
  gradientTo,
  category,
}: VideoCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0d0d1a] hover:border-white/[0.14] transition-all duration-300 hover:translate-y-[-2px]"
    >
      {/* Thumbnail */}
      <div
        className={`relative aspect-video bg-gradient-to-br ${gradientFrom} ${gradientTo} overflow-hidden`}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
          {duration}
        </div>

        {/* Category badge */}
        {category && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
            {category}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-violet-200 transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{views} wyświetleń</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
}
