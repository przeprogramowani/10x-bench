import type { YouTubeVideo } from '../data/videos';

interface Props {
  video: YouTubeVideo;
}

export default function YouTubeCard({ video }: Props) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      class="group overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
    >
      <div class="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg">
            <svg class="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-sm font-semibold leading-snug text-gray-200 transition-colors group-hover:text-white line-clamp-2">
          {video.title}
        </h3>
      </div>
    </a>
  );
}
