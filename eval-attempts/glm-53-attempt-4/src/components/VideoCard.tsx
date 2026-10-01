import type { Video } from "../data/videos";
import { IconPlay } from "./Icons";

type VideoCardProps = {
  video: Video;
};

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
        <img
          src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <IconPlay size={22} className="translate-x-0.5 fill-current" />
          </span>
        </div>
      </div>
      <h3 className="font-medium leading-snug text-zinc-200 transition-colors group-hover:text-white">
        {video.title}
      </h3>
      <span className="text-xs text-zinc-500">Obejrzyj na YouTube</span>
    </a>
  );
}
