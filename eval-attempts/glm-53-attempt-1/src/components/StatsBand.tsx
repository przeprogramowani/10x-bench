import { STATS } from '../data/site';

export default function StatsBand() {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
            {stat.value}
            {stat.suffix && (
              <span className="gradient-text">{stat.suffix}</span>
            )}
          </dd>
          <dt className="mt-1.5 text-sm leading-snug text-slate-400">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
