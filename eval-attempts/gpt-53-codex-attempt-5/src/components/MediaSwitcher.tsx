import { useMemo, useState } from "react";

type VideoItem = {
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
};

type EpisodeItem = {
  title: string;
  url: string;
  image: string;
  duration: string;
  show: string;
};

type MediaSwitcherProps = {
  videos: VideoItem[];
  episodes: EpisodeItem[];
};

export default function MediaSwitcher({ videos, episodes }: MediaSwitcherProps) {
  const [activeTab, setActiveTab] = useState<"youtube" | "podcast">("youtube");

  const items = useMemo(() => {
    return activeTab === "youtube" ? videos.slice(0, 3) : episodes.slice(0, 3);
  }, [activeTab, videos, episodes]);

  return (
    <section className="frost-card rounded-3xl p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-100">Najnowsze materialy</h3>
        <div className="inline-flex rounded-full border border-slate-600/60 bg-slate-900/80 p-1">
          <button
            type="button"
            className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
              activeTab === "youtube"
                ? "bg-cyan-400/20 text-cyan-200"
                : "text-slate-300 hover:text-slate-100"
            }`}
            onClick={() => setActiveTab("youtube")}
          >
            YouTube
          </button>
          <button
            type="button"
            className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
              activeTab === "podcast"
                ? "bg-cyan-400/20 text-cyan-200"
                : "text-slate-300 hover:text-slate-100"
            }`}
            onClick={() => setActiveTab("podcast")}
          >
            Podcast
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {activeTab === "youtube" &&
          items.map((item) => {
            const video = item as VideoItem;
            return (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-900/75"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="space-y-2 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">YouTube</p>
                  <h4 className="line-clamp-3 text-sm font-semibold text-slate-100">{video.title}</h4>
                  <p className="text-xs text-slate-400">
                    {new Date(video.publishedAt).toLocaleDateString("pl-PL", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })}
                  </p>
                </div>
              </a>
            );
          })}

        {activeTab === "podcast" &&
          items.map((item) => {
            const episode = item as EpisodeItem;
            return (
              <a
                key={episode.url}
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-900/75"
              >
                <img
                  src={episode.image}
                  alt={episode.title}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="space-y-2 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    {episode.show} · {episode.duration}
                  </p>
                  <h4 className="line-clamp-3 text-sm font-semibold text-slate-100">{episode.title}</h4>
                </div>
              </a>
            );
          })}
      </div>
    </section>
  );
}
