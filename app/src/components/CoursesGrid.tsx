import { useState } from 'react';
import { courses, type Course } from '~/data/courses';

function CourseCard({ course, index }: { course: Course; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06] focus-visible:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${course.accentFrom} ${course.accentTo} opacity-0 blur-3xl transition-opacity duration-500 ${hovered ? 'opacity-[0.08]' : ''}`}
      />

      <div className="flex items-start justify-between gap-3">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${course.accentFrom} ${course.accentTo} text-white shadow-lg`}
        >
          <CourseIcon id={course.id} />
        </div>
        {course.badge && (
          <span className="chip border-brand-400/30 bg-brand-500/10 text-brand-200">{course.badge}</span>
        )}
      </div>

      <h3 className="mt-5 font-display text-2xl font-bold text-white">{course.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-300">{course.subtitle}</p>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">{course.description}</p>

      <ul className="mt-5 space-y-2">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span
              className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${course.accentFrom} ${course.accentTo}`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200 transition-transform group-hover:translate-x-0.5">
          {course.cta}
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4 10a1 1 0 011-1h8.6l-2.3-2.3a1 1 0 111.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l2.3-2.3H5a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}

function CourseIcon({ id }: { id: Course['id'] }) {
  if (id === '10xdevs') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 L4 14 h7 l-2 8 9-12 h-7 z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'opanuj-frontend') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 14h2M13 14h3" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 5h16M4 12h16M4 19h10" strokeLinecap="round" />
    </svg>
  );
}

export default function CoursesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </div>
  );
}
