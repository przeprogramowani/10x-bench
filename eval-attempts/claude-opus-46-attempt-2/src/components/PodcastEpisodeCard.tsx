interface PodcastEpisodeCardProps {
  title: string;
  date: string;
  duration: string;
  description: string;
  guest?: string;
}

export default function PodcastEpisodeCard({ title, date, duration, description, guest }: PodcastEpisodeCardProps) {
  return (
    <div className="group p-6 bg-brand-800/50 border border-brand-700/50 rounded-2xl hover:border-brand-600/80 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-brand-500 font-medium">{date}</span>
        <span className="text-brand-700">·</span>
        <span className="text-xs text-brand-500 font-medium">{duration}</span>
      </div>
      <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-3 group-hover:text-accent-400 transition-colors">
        {title}
      </h3>
      {guest && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-700/50 rounded-md text-xs text-brand-300 mb-3">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {guest}
        </div>
      )}
      <p className="text-sm text-brand-400 leading-relaxed line-clamp-2">{description}</p>
    </div>
  );
}
