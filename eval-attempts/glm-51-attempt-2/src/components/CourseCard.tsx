import { siteConfig } from '../data/config';
import type { JSX } from 'react';

interface CourseCardProps {
  id: keyof typeof siteConfig.courses;
}

export default function CourseCard({ id }: CourseCardProps) {
  const course = siteConfig.courses[id];

  const gradientMap: Record<string, string> = {
    '10xdevs': 'from-brand-600/20 to-purple-600/20',
    opanujFrontend: 'from-emerald-600/20 to-cyan-600/20',
    opanujTypeScript: 'from-blue-600/20 to-indigo-600/20',
  };

  const borderMap: Record<string, string> = {
    '10xdevs': 'border-brand-500/30',
    opanujFrontend: 'border-emerald-500/30',
    opanujTypeScript: 'border-blue-500/30',
  };

  const badgeMap: Record<string, string> = {
    '10xdevs': 'bg-brand-600/30 text-brand-200',
    opanujFrontend: 'bg-emerald-600/30 text-emerald-200',
    opanujTypeScript: 'bg-blue-600/30 text-blue-200',
  };

  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl border ${borderMap[id] ?? 'border-white/10'} bg-gradient-to-br ${gradientMap[id] ?? 'from-gray-800 to-gray-900'} p-6 transition-all duration-300 hover:scale-[1.02] hover:border-opacity-60 hover:shadow-2xl`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeMap[id] ?? 'bg-gray-700 text-gray-300'}`}
      >
        {course.badge}
      </span>

      <h3 className="mt-4 text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
        {course.name}
      </h3>

      <p className="mt-2 text-sm font-medium text-gray-300">{course.tagline}</p>

      <p className="mt-3 text-sm leading-relaxed text-gray-400">{course.description}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {course.stats.map((stat) => (
          <span
            key={stat}
            className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
          >
            {stat}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors group-hover:text-brand-300">
        Szczegóły
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
