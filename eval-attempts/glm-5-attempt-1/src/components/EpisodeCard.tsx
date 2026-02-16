interface EpisodeCardProps {
  title: string;
  description: string;
  duration: string;
  date: string;
  url: string;
  imageUrl?: string;
}

export default function EpisodeCard({
  title,
  description,
  duration,
  date,
  url,
  imageUrl,
}: EpisodeCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-md p-5 card-hover border border-slate-100 group"
    >
      <div className="flex gap-4">
        {imageUrl && (
          <div className="flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-20 h-20 rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
              {duration}
            </span>
            <span className="text-xs text-slate-400">{date}</span>
          </div>
          <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
            {title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </a>
  );
}
