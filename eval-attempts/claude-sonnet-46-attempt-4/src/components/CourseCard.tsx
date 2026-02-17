interface CourseCardProps {
  title: string;
  tagline: string;
  description: string;
  href: string;
  badge?: string;
  stats: { label: string; value: string }[];
  features: string[];
  featured?: boolean;
  accentFrom: string;
  accentTo: string;
  emoji: string;
}

export default function CourseCard({
  title,
  tagline,
  description,
  href,
  badge,
  stats,
  features,
  featured = false,
  accentFrom,
  accentTo,
  emoji,
}: CourseCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px] ${
        featured
          ? 'border border-violet-500/40 bg-gradient-to-b from-violet-950/30 to-[#0d0d1a]'
          : 'border border-white/[0.07] bg-[#0d0d1a] hover:border-white/[0.14]'
      }`}
    >
      {/* Top glow line for featured */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      )}

      {/* Badge */}
      {badge && (
        <div className="px-6 pt-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-500/15 border border-violet-500/30 text-violet-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
            {badge}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentFrom} ${accentTo} flex items-center justify-center text-2xl mb-5 shadow-lg`}
        >
          {emoji}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}>
          {tagline}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
              <svg
                className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center py-3.5 px-5 rounded-xl font-bold text-sm transition-all ${
            featured
              ? `bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-violet-900/30`
              : 'bg-white/[0.06] text-white border border-white/[0.10] hover:bg-white/[0.10]'
          }`}
        >
          Sprawdź kurs →
        </a>
      </div>
    </div>
  );
}
