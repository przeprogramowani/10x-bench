import { BRANDS } from '../data/about';

export default function BrandMarquee() {
  const brands = [...BRANDS, ...BRANDS];

  return (
    <div className="marquee relative overflow-hidden py-2">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee flex w-max items-center gap-4">
        {brands.map((brand, index) => (
          <span
            key={`${brand}-${index}`}
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-main/60" />
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
