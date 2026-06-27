interface CourseCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  badge?: string;
  stats?: string;
  iconKey: 'frontend' | 'typescript' | 'tenx';
  gradient: string;
}

function Icon({ type }: { type: string }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
      {type === 'frontend' && (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )}
      {type === 'typescript' && (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )}
      {type === 'tenx' && (
        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )}
    </div>
  );
}

export default function CourseCard({
  title,
  subtitle,
  description,
  href,
  badge,
  stats,
  iconKey,
  gradient,
}: CourseCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl glass card-hover p-6 sm:p-8 flex flex-col h-full"
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${gradient}`}
      />

      <div className="flex items-start justify-between mb-4">
        <Icon type={iconKey} />
        {badge && (
          <span className="text-xs px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple font-medium">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold mb-1 group-hover:text-brand-purple transition-colors">
        {title}
      </h3>
      <p className="text-sm text-brand-purple/80 font-medium mb-3">
        {subtitle}
      </p>
      <p className="text-brand-gray-400 text-sm leading-relaxed flex-1">
        {description}
      </p>
      {stats && (
        <p className="mt-4 text-xs text-brand-gray-500 font-medium">
          {stats}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-purple group-hover:gap-3 transition-all">
        <span>Szczegóły</span>
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </div>
    </a>
  );
}