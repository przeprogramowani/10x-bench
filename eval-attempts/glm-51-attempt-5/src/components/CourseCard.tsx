interface CourseCardProps {
  tag: string
  tagColor: string
  title: string
  description: string
  features: string[]
  cta: string
  href: string
  stats?: string
}

export default function CourseCard({ tag, tagColor, title, description, features, cta, href, stats }: CourseCardProps) {
  return (
    <div className="group relative bg-surface-900/50 border border-surface-800/50 rounded-2xl overflow-hidden hover:border-brand-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/5">
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${tagColor}`}>
            {tag}
          </span>
          {stats && (
            <span className="text-surface-500 text-xs">{stats}</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
          {title}
        </h3>

        <p className="text-surface-400 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-surface-300">
              <svg className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm transition-colors"
        >
          {cta}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
}
