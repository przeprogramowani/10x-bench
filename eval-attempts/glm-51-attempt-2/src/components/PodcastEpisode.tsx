export default function PodcastEpisode({
  title,
  duration,
  url,
  index,
}: {
  title: string;
  duration: string;
  url: string;
  index: number;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.05]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-sm font-bold text-brand-300">
        {String(index).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-medium text-gray-200 transition-colors group-hover:text-white line-clamp-2">
          {title}
        </h4>
        <span className="mt-1 inline-flex items-center gap-1.5 text-xs text-gray-500">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </span>
      </div>
      <svg
        className="mt-1 h-5 w-5 shrink-0 text-gray-600 transition-colors group-hover:text-brand-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  );
}
