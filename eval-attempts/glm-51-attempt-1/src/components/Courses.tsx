import { courses } from "../data/site";

export default function Courses() {
  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; glow: string }> = {
    "accent-orange": {
      bg: "bg-accent-orange/5",
      border: "border-accent-orange/20 hover:border-accent-orange/40",
      text: "text-accent-orange",
      badge: "bg-accent-orange/10 text-accent-orange",
      glow: "from-accent-orange/20",
    },
    "accent-green": {
      bg: "bg-accent-green/5",
      border: "border-accent-green/20 hover:border-accent-green/40",
      text: "text-accent-green",
      badge: "bg-accent-green/10 text-accent-green",
      glow: "from-accent-green/20",
    },
    "accent-purple": {
      bg: "bg-accent-purple/5",
      border: "border-accent-purple/20 hover:border-accent-purple/40",
      text: "text-accent-purple",
      badge: "bg-accent-purple/10 text-accent-purple",
      glow: "from-accent-purple/20",
    },
  };

  return (
    <section id="kursy" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Programy edukacyjne
          </span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Zyskaj szersze spojrzenie na programowanie
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const colors = colorMap[course.color];
            return (
              <div
                key={course.id}
                class={`group relative p-8 rounded-2xl ${colors.bg} border ${colors.border} transition-all duration-300 hover:shadow-2xl`}
              >
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <span class={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-4`}>
                  {course.badge}
                </span>

                <h3 class="text-2xl font-bold text-white">{course.title}</h3>
                <p class={`text-sm font-semibold ${colors.text} mt-1`}>
                  {course.subtitle}
                </p>
                <p class="text-sm text-gray-400 mt-4 leading-relaxed">
                  {course.description}
                </p>

                <ul class="mt-6 space-y-2.5">
                  {course.features.map((feature) => (
                    <li key={feature} class="flex items-start gap-2 text-sm text-gray-300">
                      <svg class={`w-4 h-4 mt-0.5 shrink-0 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div class="mt-6 flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                  <span>{course.graduates} absolwentów</span>
                  <span>{course.duration}</span>
                </div>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={`mt-6 block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20`}
                >
                  Szczegóły &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
