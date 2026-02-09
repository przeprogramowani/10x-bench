import { courses } from "../data/site";

export default function CoursesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Nasze kursy
          </h2>
          <p className="mt-4 text-lg text-surface-200 max-w-2xl mx-auto">
            Praktyczna wiedza, która przenosi Twoje umiejętności na wyższy
            poziom. Każdy kurs to sprawdzony program z realnymi projektami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                course.highlight
                  ? "bg-gradient-to-br from-brand-600/20 to-brand-800/20 border-2 border-brand-500/30 hover:border-brand-400/50 hover:shadow-brand-600/10"
                  : "bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
              }`}
            >
              {course.highlight && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-brand-600 text-white text-xs font-semibold rounded-full">
                  Wyróżniony
                </div>
              )}

              <h3
                className={`text-xl font-bold ${
                  course.highlight ? "text-brand-300" : "text-white"
                }`}
              >
                {course.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-surface-200">
                {course.tagline}
              </p>
              <p className="mt-4 text-sm text-surface-200 leading-relaxed">
                {course.description}
              </p>

              <ul className="mt-6 space-y-2">
                {course.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-surface-200"
                  >
                    <svg
                      className={`w-4 h-4 shrink-0 ${
                        course.highlight ? "text-brand-400" : "text-brand-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:text-brand-300 transition-colors">
                Dowiedz się więcej
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
