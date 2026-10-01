import { PODCAST_PLATFORMS } from '../data/podcasts';
import { ExternalLinkIcon } from './icons';

export default function PlatformLinks() {
  return (
    <div className="rounded-3xl border border-white/5 bg-gray-900/30 p-6 sm:p-8">
      <p className="text-sm font-semibold text-white uppercase tracking-wider">Słuchaj na swojej platformie</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {PODCAST_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:border-white/25 hover:text-white hover:bg-white/[0.06]"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${platform.color} shadow-lg`} />
            {platform.name}
            <ExternalLinkIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
}
