import { SITE } from '../data/site';

export default function NewsletterCta() {
  return (
    <section className="container-site py-16 sm:py-20" aria-label="Newsletter">
      <div className="card relative overflow-hidden p-8 sm:p-12">
        <div className="orb -left-20 -top-20 h-64 w-64 bg-violet-600/20" aria-hidden="true" />
        <div className="orb -bottom-24 -right-16 h-64 w-64 bg-cyan-500/10" aria-hidden="true" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Newsletter
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Przeprogramowany Newsletter
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie{' '}
            <strong className="text-white">3-2-1</strong>: 3 rekomendacje techniczne,
            2 rozwojowe i 1 bonus niespodzianka. Nie przegapisz też nowości od
            Przeprogramowanych i ofert specjalnych.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={SITE.newsletterUrl} className="btn-primary">
              Zapisz się za darmo
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <span className="text-xs text-slate-500">
              ponad 15 000 programistów już czyta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
