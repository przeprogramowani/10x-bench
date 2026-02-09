interface PodcastCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  guest: string | null;
  spotifyUrl: string;
}

export default function PodcastCard({
  title,
  description,
  date,
  duration,
  guest,
  spotifyUrl,
}: PodcastCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-white/5 border border-white/10 p-6 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="flex items-start gap-4">
        {/* Play icon */}
        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center group-hover:bg-brand-600/30 transition-colors">
          <svg
            className="w-5 h-5 text-brand-400"
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

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white group-hover:text-brand-300 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-sm text-surface-200 line-clamp-2">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-surface-200">
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-surface-700" />
            <span>{duration}</span>
            {guest && (
              <>
                <span className="w-1 h-1 rounded-full bg-surface-700" />
                <span className="text-brand-400">Gość: {guest}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
