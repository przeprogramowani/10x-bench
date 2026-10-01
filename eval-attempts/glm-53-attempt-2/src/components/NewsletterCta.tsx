import { SITE } from '../data/site';
import { ArrowRightIcon } from './icons';

export default function NewsletterCta() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-900 to-rose-950/40 p-6 sm:p-10 lg:p-12">
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-rose/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-main/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-2xl">
        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-rose">
          <span className="w-8 h-1 rounded-full bg-brand-rose" />
          Newsletter
        </span>
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
          Przeprogramowany
          <br />
          Newsletter
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            { count: '3', label: 'rekomendacje techniczne' },
            { count: '2', label: 'rekomendacje rozwojowe' },
            { count: '1', label: 'bonus niespodzianka' },
          ].map((item) => (
            <li key={item.count} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-main/10 border border-main/20 text-main font-bold font-heading text-sm">
                {item.count}
              </span>
              <span className="text-gray-200">{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-400">
          Nie przegapisz też nowości od Przeprogramowanych i ofert specjalnych.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={SITE.socials.newsletter}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-brand-rose text-white rounded-xl shadow-lg shadow-brand-rose/25 transition-all hover:bg-rose-500 hover:shadow-xl hover:shadow-brand-rose/30"
          >
            Zapisz się za darmo
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-xs text-gray-500">Bez spamu — tylko konkretna wartość.</span>
        </div>
      </div>
    </div>
  );
}
