import type { Course } from '../data/content';
import { ArrowRightIcon, BoltIcon, CheckIcon, LayoutIcon, RocketIcon } from './Icons';

const iconMap = {
  rocket: RocketIcon,
  layout: LayoutIcon,
  bolt: BoltIcon,
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon];

  return (
    <a
      href={course.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-600/10 sm:p-8"
    >
      <div className="mb-6 flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-white/10">
          <Icon className="size-6" />
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-mist">
          {course.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-brand-300">
        {course.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{course.description}</p>

      {course.highlight && (
        <ul className="mt-5 space-y-2">
          {course.highlight.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-fog/90">
              <CheckIcon className="size-4 shrink-0 text-cyan-glow" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
        Szczegóły kursu
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
