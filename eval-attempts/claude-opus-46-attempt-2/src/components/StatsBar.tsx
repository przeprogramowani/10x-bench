const stats = [
  { value: '15 000+', label: 'Czlonkow spolecznosci' },
  { value: '10 000+', label: 'Absolwentow kursow' },
  { value: '140+', label: 'Odcinkow podcastu' },
  { value: 'od 2017', label: 'Rok zalozenia' },
];

export default function StatsBar() {
  return (
    <section className="border-y border-brand-700/50 bg-brand-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-brand-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
