import { heroCourse } from "@/data/courses";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40" aria-labelledby="hero-title">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="orb -left-24 -top-24 h-96 w-96 bg-violet-600" aria-hidden="true" />
      <div
        className="orb -bottom-32 -right-24 h-[28rem] w-[28rem] bg-orange-600"
        style={{ animationDelay: "-6s" }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="chip border-violet-500/40 bg-violet-500/10 text-violet-300">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l1.9 5.7L19.6 9.6l-5.7 1.9L12 17.2l-1.9-5.7L4.4 9.6l5.7-1.9L12 2z" />
            </svg>
            {heroCourse.badge} · {heroCourse.name}
          </span>

          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            {heroCourse.headline.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="gradient-text">
              {heroCourse.headline.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {heroCourse.lead}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={heroCourse.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              {heroCourse.cta}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#kursy" className="btn-secondary w-full sm:w-auto">
              Zobacz wszystkie kursy
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">{heroCourse.conductors}</p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {heroCourse.stats.map((stat) => (
            <div
              key={stat.label}
              className="card px-6 py-5 text-center transition hover:border-violet-500/50"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <div className="gradient-text font-display text-3xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
