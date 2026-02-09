interface VideoCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  tag: string;
}

const tagColors: Record<string, string> = {
  'Opanuj.AI': 'bg-accent-600/20 text-accent-400',
  'Narzedzia AI': 'bg-emerald-500/20 text-emerald-400',
  'Gosc': 'bg-amber-500/20 text-amber-400',
};

export default function VideoCard({ title, description, date, duration, tag }: VideoCardProps) {
  return (
    <div className="group flex flex-col bg-brand-800/50 border border-brand-700/50 rounded-2xl overflow-hidden hover:border-brand-600/80 transition-all">
      {/* Thumbnail placeholder */}
      <div className="relative aspect-video bg-brand-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/5 to-brand-800"></div>
        <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 text-white text-xs font-medium rounded">
          {duration}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-2.5 py-0.5 text-xs font-medium rounded-md ${tagColors[tag] || 'bg-brand-700/50 text-brand-300'}`}>
            {tag}
          </span>
          <span className="text-xs text-brand-500">{date}</span>
        </div>
        <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-accent-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-brand-400 leading-relaxed line-clamp-2 flex-1">{description}</p>
      </div>
    </div>
  );
}
