interface Props {
  brands: string[];
}

export default function BrandMarquee({ brands }: Props) {
  const row = [...brands, ...brands];

  return (
    <div className="mask-fade-x overflow-hidden py-2">
      <div className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
        {row.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500/70" aria-hidden="true" />
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
