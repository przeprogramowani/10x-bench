import type { Course } from '../data/courses';

const accentMap: Record<Course['accent'], string> = {
  brand: 'from-brand-500 to-accent-600',
  accent: 'from-accent-500 to-pink-500',
  emerald: 'from-emerald-400 to-teal-500',
  amber: 'from-amber-400 to-orange-500',
};

const accentRingMap: Record<Course['accent'], string> = {
  brand: 'group-hover:ring-brand-500/40',
  accent: 'group-hover:ring-accent-500/40',
  emerald: 'group-hover:ring-emerald-500/40',
  amber: 'group-hover:ring-amber-500/40',
};

export interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const gradient = accentMap[course.accent];
  const ring = accentRingMap[course.accent];

  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.05] ring-1 ring-transparent ${ring} ${
        featured ? 'md:col-span-2' : ''
      }`}
      aria-label={`Przejdź do kursu ${course.name}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-3xl transition-opacity group-hover:opacity-50`}
      />

      <div className="relative flex items-center justify-between">
        <span className="badge">{course.badge}</span>
        <span
          aria-hidden="true"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition-all group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white"
        >
          ↗
        </span>
      </div>

      <div className="relative mt-6">
        <h3 className="text-2xl font-bold text-white">{course.name}</h3>
        <p className={`mt-2 bg-gradient-to-r ${gradient} bg-clip-text text-sm font-semibold text-transparent`}>
          {course.tagline}
        </p>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-ink-300">{course.description}</p>

      <ul className="relative mt-5 space-y-2 text-sm text-ink-200">
        {course.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className={`mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br ${gradient}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {course.stats && (
        <dl className="relative mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          {course.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[11px] uppercase tracking-wider text-ink-400">{stat.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="relative mt-auto pt-6">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
          Dowiedz się więcej
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}
