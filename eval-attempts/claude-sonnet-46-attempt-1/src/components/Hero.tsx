import type { Course } from '../data/courses';

interface HeroProps {
  featuredCourse: Course;
}

export default function Hero({ featuredCourse }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        background: 'radial-gradient(ellipse at top, #0e7490 0%, #0f0f0f 60%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #22d3ee 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-card border border-surface-border rounded-full px-4 py-1.5 mb-6">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#22d3ee' }}
              />
              <span className="text-gray-400 text-sm">Nowe: 10xDevs 3.0 — 18 maja 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Zostań programistą</span>
              <br />
              <span
                className="gradient-text"
                style={{
                  background: 'linear-gradient(to right, #22d3ee, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                nowej generacji
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Kursy, podcast i filmy dla programistów, którzy chcą rozwijać się w erze AI.
              Od juniora do seniora — z nami każdy krok ma sens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-900 transition-all hover:scale-105"
                style={{ backgroundColor: '#22d3ee' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Sprawdź 10xDevs 3.0
              </a>
              <a
                href="/podcast"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-surface-border bg-surface-card hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-3-3m3 3l3-3" />
                </svg>
                Słuchaj podcastu
              </a>
            </div>
          </div>

          {/* Right: Featured course card */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div
              className="rounded-2xl overflow-hidden card-glow"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            >
              {/* Card header gradient */}
              <div className={`h-2 bg-gradient-to-r ${featuredCourse.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                      style={{
                        backgroundColor: 'rgba(34, 211, 238, 0.15)',
                        color: '#22d3ee',
                      }}
                    >
                      {featuredCourse.type}
                    </span>
                    <h3 className="text-xl font-bold text-white">{featuredCourse.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{featuredCourse.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {featuredCourse.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredCourse.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: '#2a2a2a',
                        color: '#9ca3af',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(featuredCourse.price || featuredCourse.startDate) && (
                  <div
                    className="flex items-center justify-between py-3 px-4 rounded-xl mb-4"
                    style={{ backgroundColor: '#0f0f0f' }}
                  >
                    {featuredCourse.price && (
                      <div>
                        <p className="text-xs text-gray-600">Cena</p>
                        <p className="text-white font-bold">{featuredCourse.price}</p>
                      </div>
                    )}
                    {featuredCourse.startDate && (
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Start</p>
                        <p className="text-white font-semibold">{featuredCourse.startDate}</p>
                      </div>
                    )}
                  </div>
                )}

                <a
                  href={featuredCourse.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl font-semibold text-gray-900 transition-all hover:opacity-90"
                  style={{ backgroundColor: '#22d3ee' }}
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
