const stats = [
  { value: "7+", label: "Lat doświadczenia" },
  { value: "3700+", label: "Absolwentów kursów" },
  { value: "100+", label: "Odcinków podcastu" },
  { value: "15000+", label: "Społeczność online" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-surface-800 bg-surface-900/30 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-extrabold text-brand-400 md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-surface-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
