import { thumbnailUrl, watchUrl, type Video } from '../data/videos';
import { PlayIcon } from './icons';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={watchUrl(video.id)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden border border-white/5 bg-gray-900/50 transition-all duration-300 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl(video.id)}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-12 h-12 rounded-full bg-red-600/95 flex items-center justify-center text-white shadow-lg shadow-red-600/40">
            <PlayIcon className="w-5 h-5 ml-0.5" />
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-200 leading-snug line-clamp-2 group-hover:text-white transition-colors">
          {video.title}
        </h3>
        <p className="mt-2 text-xs text-gray-500">
          {video.views} · {video.published}
        </p>
      </div>
    </a>
  );
}
