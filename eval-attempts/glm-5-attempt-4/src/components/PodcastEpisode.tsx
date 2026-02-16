interface PodcastEpisodeProps {
  title: string;
  description: string;
  date: string;
  duration?: string;
  href: string;
  image?: string;
}

export default function PodcastEpisode({ title, description, date, duration, href, image }: PodcastEpisodeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-indigo-500/50 transition-all"
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt="" className="w-full h-full object-cover" />
          ) : (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 mb-2">
            {description}
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span>{date}</span>
            {duration && (
              <>
                <span>•</span>
                <span>{duration}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
