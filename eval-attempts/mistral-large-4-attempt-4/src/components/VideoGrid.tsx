import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

function YoutubeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

export interface Video {
  id: string;
  title: string;
  url: string;
  embedUrl: string;
  publishedAt: string;
  thumbnailUrl: string;
}

interface VideoGridProps {
  videos: Video[];
  channelUrl: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function VideoGrid({ videos, channelUrl }: VideoGridProps) {
  const [selected, setSelected] = useState<Video | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setSelected(video)}
            className="card group flex flex-col overflow-hidden text-left transition-colors hover:border-turquoise/50"
            aria-label={`Odtwórz: ${video.title}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnailUrl}
                alt={`Miniatura: ${video.title}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="640"
                height="360"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-main text-white shadow-lg">
                  <Play size={26} fill="currentColor" aria-hidden="true" />
                </span>
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-heading text-base font-semibold leading-snug line-clamp-2">{video.title}</h3>
              <time dateTime={video.publishedAt} className="mt-2 text-xs text-muted">
                {formatDate(video.publishedAt)}
              </time>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-main px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-main-hover"
        >
          <YoutubeIcon size={20} />
          Zobacz wszystkie filmy na YouTube
        </a>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Odtwarzanie: ${selected.title}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-dark shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <h3 className="line-clamp-1 font-heading text-sm font-semibold sm:text-base">{selected.title}</h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-ink"
                aria-label="Zamknij odtwarzacz"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${selected.embedUrl}?autoplay=1&rel=0`}
                title={selected.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              <time dateTime={selected.publishedAt} className="text-muted">
                {formatDate(selected.publishedAt)}
              </time>
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-turquoise hover:underline"
              >
                Otwórz na YouTube →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
