import { brands } from '../data/site';

export default function BrandsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="text-center mb-10">
          <h2 className="section-title">Zaufali nam</h2>
          <p className="text-gray-500 mt-2">
            7 lat na rynku edukacji technologicznej
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
