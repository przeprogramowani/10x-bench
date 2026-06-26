import { site } from '../data/site';

export default function Newsletter() {
  return (
    <section className="container-x py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-ink-800 to-accent-600/10 p-8 sm:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-[80px]" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-500/15 blur-[80px]" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{site.newsletter.title}</h2>
          <p className="mt-4 text-slate-300">{site.newsletter.description}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { n: '3', label: 'rekomendacje techniczne' },
              { n: '2', label: 'rekomendacje rozwojowe' },
              { n: '1', label: 'bonus niespodzianka' },
            ].map((item) => (
              <li key={item.n} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl font-bold gradient-text">{item.n}</span>
                <p className="mt-1 text-xs text-slate-400">{item.label}</p>
              </li>
            ))}
          </ul>
          <a href={site.newsletter.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Zapisz się za darmo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
