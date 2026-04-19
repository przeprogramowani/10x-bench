interface YouTubeCardProps {
  title: string
  thumbnail: string
  url: string
}

export default function YouTubeCard({ title, thumbnail, url }: YouTubeCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface-900/50 border border-surface-800/50 rounded-xl overflow-hidden hover:border-brand-600/30 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-brand-300 transition-colors">
          {title}
        </h3>
      </div>
    </a>
  )
}
