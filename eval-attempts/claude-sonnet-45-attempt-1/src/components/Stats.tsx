export default function Stats() {
  const stats = [
    { value: '7+', label: 'Lat działalności' },
    { value: '400+', label: 'Absolwentów kursów' },
    { value: '15K+', label: 'Subskrybentów newslettera' },
    { value: '100+', label: 'Odcinków podcastu' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Przeprogramowani w liczbach
          </h2>
          <p className="text-xl text-primary-100">
            Zaufała nam społeczność tysięcy programistów
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
