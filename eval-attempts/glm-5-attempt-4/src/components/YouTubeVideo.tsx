interface YouTubeVideoProps {
  title: string;
  thumbnail: string;
  href: string;
}

export default function YouTubeVideo({ title, thumbnail, href }: YouTubeVideoProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden relative mb-3">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="text-white font-medium group-hover:text-indigo-400 transition-colors line-clamp-2">
        {title}
      </h3>
    </a>
  );
}
