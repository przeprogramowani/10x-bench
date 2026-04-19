import { courses } from '../data/courses';

export default function Hero() {
  return (
    <section class="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
        <div class="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
            <span class="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            Nowość — Maj 2026
          </div>
          <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span class="text-gray-100">Szersze spojrzenie</span>
            <br />
            <span class="bg-gradient-to-r from-brand-400 via-brand-300 to-amber-400 bg-clip-text text-transparent">
              na programowanie
            </span>
          </h1>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Edukacja technologiczna w epoce AI. Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach.
          </p>
        </div>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              class={`group relative overflow-hidden rounded-2xl border ${course.border} bg-gradient-to-br ${course.gradient} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div class="absolute inset-0 bg-gray-950/60" />
              <div class="relative">
                <div class="flex items-start justify-between">
                  <span class="text-3xl">{course.icon}</span>
                  <span
                    class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${course.tagColor}`}
                  >
                    {course.tag}
                  </span>
                </div>
                <h3 class="mt-4 text-xl font-bold text-white">{course.title}</h3>
                <p class="mt-1 text-sm font-medium text-gray-300">{course.subtitle}</p>
                <p class="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-3">
                  {course.description}
                </p>
                <div class="mt-4 flex items-center gap-3">
                  {course.stats.map((stat) => (
                    <span
                      key={stat}
                      class="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-300"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <div class="mt-4 flex items-center text-sm font-medium text-brand-400 transition-colors group-hover:text-brand-300">
                  Szczegóły
                  <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
