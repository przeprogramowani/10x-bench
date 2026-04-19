interface PodcastCardProps {
  podcastName: string
  listeners: string
  title: string
  duration: string
  url: string
  coverUrl: string
}

export default function PodcastCard({ podcastName, listeners, title, duration, url, coverUrl }: PodcastCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 p-4 bg-surface-900/50 border border-surface-800/50 rounded-xl hover:border-brand-600/30 transition-all duration-300"
    >
      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-brand-900/30">
        <img src={coverUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-brand-400 text-xs font-semibold">{podcastName}</span>
          <span className="text-surface-600 text-xs">·</span>
          <span className="text-surface-500 text-xs">{listeners}</span>
        </div>

        <h3 className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-brand-300 transition-colors">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-surface-500 text-xs">{duration}</span>
        </div>
      </div>
    </a>
  )
}
