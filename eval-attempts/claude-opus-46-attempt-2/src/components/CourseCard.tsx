interface CourseCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  badge?: string;
  accent: 'indigo' | 'emerald' | 'amber';
  features: string[];
}

const accentStyles = {
  indigo: {
    border: 'border-accent-500/30',
    bg: 'bg-accent-600/10',
    text: 'text-accent-400',
    badge: 'bg-accent-600 text-white',
    button: 'bg-accent-600 hover:bg-accent-500',
    glow: 'hover:shadow-accent-600/10',
  },
  emerald: {
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    badge: 'bg-emerald-600 text-white',
    button: 'bg-emerald-600 hover:bg-emerald-500',
    glow: 'hover:shadow-emerald-600/10',
  },
  amber: {
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    badge: 'bg-amber-600 text-white',
    button: 'bg-amber-600 hover:bg-amber-500',
    glow: 'hover:shadow-amber-600/10',
  },
};

export default function CourseCard({ title, subtitle, description, href, badge, accent, features }: CourseCardProps) {
  const s = accentStyles[accent];

  return (
    <div className={`relative group p-8 bg-brand-800/50 border border-brand-700/50 rounded-2xl hover:${s.border} transition-all hover:shadow-xl ${s.glow}`}>
      {badge && (
        <span className={`absolute -top-3 right-6 px-3 py-1 text-xs font-bold rounded-full ${s.badge}`}>
          {badge}
        </span>
      )}
      <div className={`inline-flex items-center gap-2 px-3 py-1 ${s.bg} rounded-lg ${s.text} text-xs font-semibold mb-4`}>
        {subtitle}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-brand-400 text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-brand-300">
            <svg className={`w-4 h-4 ${s.text} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-3 ${s.button} text-white text-sm font-semibold rounded-xl transition-all w-full justify-center`}
      >
        Dowiedz sie wiecej
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
