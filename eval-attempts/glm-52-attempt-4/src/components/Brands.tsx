import { brands, site } from '../data/site';

export default function Brands() {
  return (
    <section className="container-x py-16">
      <div className="text-center">
        <p className="eyebrow">{site.yearsOnMarket} lat na rynku edukacji technologicznej</p>
        <h2 className="section-title mt-2">Współpracujemy z najlepszymi</h2>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {brands.map((brand) => (
          <span
            key={brand}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-brand-400/30 hover:text-white"
          >
            {brand}
          </span>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-slate-400">
        Chcesz nawiązać współpracę?{' '}
        <a href={`mailto:${site.email}`} className="font-semibold text-brand-300 hover:text-brand-200">
          {site.email}
        </a>
      </p>
    </section>
  );
}
