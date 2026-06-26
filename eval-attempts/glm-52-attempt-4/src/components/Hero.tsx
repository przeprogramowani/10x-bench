import { courses, site } from '../data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 grid-noise opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] animate-glow" aria-hidden="true" />
      <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-accent-500/15 blur-[100px] animate-glow" aria-hidden="true" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-200 transition-all hover:border-brand-400/60 hover:bg-brand-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Nowość! <strong className="font-semibold text-white">10xDevs</strong> — Programuj z AI
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </a>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Szersze spojrzenie <br className="hidden sm:block" />
            na <span className="gradient-text">programowanie</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://10xdevs.pl" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Poznaj 10xDevs 3.0
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#kursy" className="btn-ghost">
              Zobacz kursy
            </a>
          </div>
        </div>

        <div id="kursy" className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <a
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-hover group relative flex flex-col overflow-hidden p-6 ${
                course.featured ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${course.accent}`} />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  {course.category}
                </span>
                {course.featured && (
                  <span className="rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {course.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{course.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{course.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
                {course.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
