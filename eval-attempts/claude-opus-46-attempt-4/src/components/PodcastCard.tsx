interface PodcastCardProps {
  title: string;
  guest?: string;
  duration: string;
  spotifyUrl: string;
  episodeNumber?: number;
  series?: string;
}

export default function PodcastCard({
  title,
  guest,
  duration,
  spotifyUrl,
  episodeNumber,
  series,
}: PodcastCardProps) {
  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-surface-800 bg-surface-900/50 p-5 transition-all hover:border-brand-500/30 hover:bg-surface-900"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {series && (
            <span className="mb-2 inline-block rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
              {series}
            </span>
          )}
          <h3 className="text-base font-semibold leading-snug text-white group-hover:text-brand-300">
            {episodeNumber && (
              <span className="text-surface-500">#{episodeNumber} </span>
            )}
            {title}
          </h3>
          {guest && (
            <p className="mt-1 text-sm text-surface-400">Gość: {guest}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-full bg-surface-800 px-2.5 py-1 text-xs text-surface-400">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          {duration}
        </div>
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-green-400 transition-transform group-hover:translate-x-1">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        Słuchaj na Spotify &rarr;
      </span>
    </a>
  );
}
