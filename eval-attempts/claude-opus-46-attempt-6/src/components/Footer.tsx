import { contact } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="text-lg font-bold text-white">
              Przeprogramowani<span className="text-indigo-400">.pl</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Edukacja technologiczna w epoce AI. Kursy, podcasty i społeczność dla programistów.
            </p>
          </div>

          {/* Kursy */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Kursy</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="https://www.10xdevs.pl/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  10xDevs 3.0
                </a>
              </li>
              <li>
                <a href="https://opanujfrontend.pl/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Opanuj Frontend
                </a>
              </li>
              <li>
                <a href="https://www.opanujtypescript.pl/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Opanuj TypeScript
                </a>
              </li>
            </ul>
          </div>

          {/* Treści */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Treści</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/podcast" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Podcast
                </a>
              </li>
              <li>
                <a href="/youtube" className="text-sm text-slate-400 transition-colors hover:text-white">
                  YouTube
                </a>
              </li>
              <li>
                <a href="/o-nas" className="text-sm text-slate-400 transition-colors hover:text-white">
                  O nas
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Kontakt</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={`mailto:${contact.email}`} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Kanał YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/50 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
