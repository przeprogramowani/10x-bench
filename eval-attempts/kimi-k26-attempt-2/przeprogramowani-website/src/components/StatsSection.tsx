export default function StatsSection() {
  const stats = [
    {
      value: '15 000+',
      label: 'Programistów w społeczności',
      description: 'Aktywna społeczność na Discordzie i newsletterze'
    },
    {
      value: '200+',
      label: 'Odcinków podcastu',
      description: 'Rozmowy z najlepszymi ekspertami z branży IT'
    },
    {
      value: '900+',
      label: 'Absolwentów kursów',
      description: 'Przeprogramowani przeszkolili setki deweloperów'
    },
    {
      value: '383',
      label: 'Absolwentów Opanuj Frontend',
      description: 'Cztery edycje i prawie 400 absolwentów'
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="relative p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-slate-200 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
