interface PodcastCardProps {
  number: number;
  title: string;
  guest?: string | null;
  date: string;
  description: string;
  spotifyUrl: string;
  applePodcastsUrl: string;
  compact?: boolean;
}

export default function PodcastCard({
  number,
  title,
  guest,
  date,
  description,
  spotifyUrl,
  applePodcastsUrl,
  compact = false,
}: PodcastCardProps) {
  return (
    <div className="group flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300">
      {/* Episode number */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center">
        <span className="text-xs font-bold text-violet-400">#{number}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-violet-200 transition-colors">
            {title}
            {guest && (
              <span className="text-slate-400 font-normal"> — {guest}</span>
            )}
          </h3>
          <span className="text-xs text-slate-500 flex-shrink-0 mt-0.5">{date}</span>
        </div>

        {!compact && (
          <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">{description}</p>
        )}

        {/* Platform links */}
        <div className="flex items-center gap-2 mt-3">
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1DB954]/10 border border-[#1DB954]/20 text-[#1DB954] text-xs font-medium hover:bg-[#1DB954]/20 transition-colors"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Spotify
          </a>
          <a
            href={applePodcastsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-colors"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638.001 12.017.001z"/>
            </svg>
            Apple
          </a>
        </div>
      </div>
    </div>
  );
}
