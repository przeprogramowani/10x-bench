interface Props {
  brands: string[];
}

export default function BrandStrip({ brands }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {brands.map((brand) => (
        <span
          key={brand}
          className="text-sm font-semibold uppercase tracking-wider text-slate-500 transition hover:text-slate-300"
        >
          {brand}
        </span>
      ))}
    </div>
  );
}
