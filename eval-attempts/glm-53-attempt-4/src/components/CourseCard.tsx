import type { Course } from "../data/courses";
import { IconArrowRight, IconCheck, IconSparkles } from "./Icons";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const inner = (
    <article className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${course.tagClassName}`}
        >
          {course.tag}
        </span>
        {course.badge && (
          <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-2.5 py-1 text-[11px] font-medium text-fuchsia-300">
            <IconSparkles size={12} />
            {course.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
        {course.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {course.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {course.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-zinc-300"
          >
            <IconCheck size={16} className="mt-0.5 shrink-0 text-fuchsia-400" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-fuchsia-400 transition-colors hover:text-fuchsia-300"
      >
        {course.cta}
        <IconArrowRight size={16} />
      </a>
    </article>
  );

  if (course.featured) {
    return (
      <div className="h-full rounded-2xl bg-gradient-to-br from-violet-500/80 via-fuchsia-500/80 to-violet-500/80 p-px shadow-xl shadow-fuchsia-500/10 transition-transform duration-300 hover:-translate-y-1.5">
        <div className="h-full rounded-[15px] bg-zinc-950">{inner}</div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05]">
      {inner}
    </div>
  );
}
