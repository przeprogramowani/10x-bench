import { BRANDS } from '../data/site';

export default function BrandMarquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Firmy, które nam zaufały"
    >
      <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
        {doubled.map((brand, index) => (
          <span
            key={`${brand}-${index}`}
            aria-hidden={index >= BRANDS.length}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            <span className="font-display text-lg font-semibold text-slate-500 transition hover:text-slate-300">
              {brand}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500/40" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
