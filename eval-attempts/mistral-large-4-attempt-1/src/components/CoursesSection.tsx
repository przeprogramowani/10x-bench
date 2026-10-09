import { accentClasses, courses, type Course } from "@/data/courses";

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CourseCard({ course }: { course: Course }) {
  const accent = accentClasses[course.accent];
  return (
    <article
      className={`card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/80 ${accent.border} ${accent.glow}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${accent.gradient} px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white`}>
          {course.badge}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold text-white">{course.name}</h3>
      <p className={`mt-1 text-sm font-medium ${accent.text}`}>{course.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{course.description}</p>

      <ul className="mt-5 space-y-2.5">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-6 flex flex-wrap gap-2 border-t border-slate-800 pt-5">
        {course.stats.map((stat) => (
          <div key={stat.label} className="chip">
            <span className="font-semibold text-white">{stat.value}</span>
            <span className="text-slate-400">{stat.label}</span>
          </div>
        ))}
      </dl>

      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${accent.gradient} px-5 py-2.5 text-sm font-semibold text-white transition group-hover:brightness-110`}
      >
        {course.cta}
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </article>
  );
}

export default function CoursesSection() {
  return (
    <section id="kursy" className="relative scroll-mt-24 py-20 lg:py-28" aria-labelledby="courses-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Nasze kursy</p>
          <h2 id="courses-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Edukacja technologiczna <span className="gradient-text">w epoce AI</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie
            z potencjału Generative AI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
