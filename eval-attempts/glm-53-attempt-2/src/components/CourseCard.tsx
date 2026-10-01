import type { Course } from '../data/courses';
import { ArrowRightIcon, SparkIcon } from './icons';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${course.accent.card}`}
    >
      {featured && course.badge && (
        <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 shadow-lg shadow-orange-500/30">
          <SparkIcon className="w-3 h-3" />
          {course.badge}
        </span>
      )}

      <div className="flex items-center gap-3 mb-4">
        <span className={`w-8 h-1 rounded-full ${course.accent.bar}`} />
        <span className={`text-xs font-bold uppercase tracking-wider ${course.accent.text}`}>
          {course.tag}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight">
        {course.title}
      </h3>

      <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">{course.description}</p>

      <ul className="mt-5 space-y-2.5">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${course.accent.bar}`} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <span
          className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg shadow-lg transition-colors ${course.accent.button}`}
        >
          Szczegóły
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
