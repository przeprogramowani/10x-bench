import { courses, siteConfig } from "../data/site";

export default function Hero() {
  return (
    <section class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-900/20 via-dark-950 to-dark-950" />
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full mb-8">
          <span class="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
          <span class="text-sm font-medium text-accent-orange">
            {courses[0].badge}
          </span>
        </div>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          {siteConfig.name}
          <br />
          <span class="text-brand-400">{siteConfig.tagline}</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Edukacja technologiczna w epoce AI. Topowe programy edukacyjne dla
          ambitnych programistów i świadome korzystanie z potencjału
          Generative AI.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              class={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                course.id === "10xdevs"
                  ? "bg-accent-orange/5 border-accent-orange/20 hover:border-accent-orange/40 hover:bg-accent-orange/10"
                  : course.id === "opanuj-frontend"
                  ? "bg-accent-green/5 border-accent-green/20 hover:border-accent-green/40 hover:bg-accent-green/10"
                  : "bg-accent-purple/5 border-accent-purple/20 hover:border-accent-purple/40 hover:bg-accent-purple/10"
              }`}
            >
              <div class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                {course.subtitle}
              </div>
              <h3 class="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p class="text-sm text-gray-400 mb-4 line-clamp-3">
                {course.description}
              </p>
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span>{course.graduates} absolwentów</span>
                <span>{course.duration}</span>
              </div>
              <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div class="mt-16 flex items-center justify-center gap-8 text-gray-500">
          <div class="text-center">
            <div class="text-3xl font-bold text-white">{siteConfig.yearsActive}+</div>
            <div class="text-sm">lat na rynku</div>
          </div>
          <div class="w-px h-10 bg-white/10" />
          <div class="text-center">
            <div class="text-3xl font-bold text-white">4200+</div>
            <div class="text-sm">absolwentów</div>
          </div>
          <div class="w-px h-10 bg-white/10" />
          <div class="text-center">
            <div class="text-3xl font-bold text-white">15k+</div>
            <div class="text-sm">newsletter</div>
          </div>
        </div>
      </div>
    </section>
  );
}
