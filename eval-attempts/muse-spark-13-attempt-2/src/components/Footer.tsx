export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="flex items-center gap-2 font-extrabold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm text-slate-950">
              &lt;/&gt;
            </span>
            Przeprogramowani
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Szersze spojrzenie na programowanie. Kursy, podcasty, YouTube i narzędzia AI dla
            ambitnych programistów.
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:kontakt@przeprogramowani.pl" className="text-emerald-300 hover:text-emerald-200">
              kontakt@przeprogramowani.pl
            </a>
          </p>
        </div>
        <nav aria-label="Mapa strony">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Strona</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/" className="text-slate-300 hover:text-white">Start</a></li>
            <li><a href="/o-nas" className="text-slate-300 hover:text-white">O nas</a></li>
            <li><a href="/podcast" className="text-slate-300 hover:text-white">Podcast</a></li>
            <li><a href="/youtube" className="text-slate-300 hover:text-white">YouTube</a></li>
            <li><a href="/kursy" className="text-slate-300 hover:text-white">Kursy</a></li>
          </ul>
        </nav>
        <nav aria-label="Programy">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Programy</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://10xdevs.pl" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">10xDevs ↗</a></li>
            <li><a href="https://www.opanujfrontend.pl" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Opanuj Frontend ↗</a></li>
            <li><a href="https://www.opanujtypescript.pl" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Opanuj TypeScript ↗</a></li>
            <li><a href="https://opanuj.ai" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">Opanuj AI ↗</a></li>
            <li><a href="https://10xrules.ai" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">10xRules.ai ↗</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Przeprogramowani.pl — Szersze spojrzenie na programowanie.</p>
          <p className="flex gap-4">
            <a href="https://youtube.com/c/przeprogramowani" target="_blank" rel="noreferrer" className="hover:text-slate-300">YouTube</a>
            <a href="https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o" target="_blank" rel="noreferrer" className="hover:text-slate-300">Spotify</a>
            <a href="https://facebook.com/przeprogramowani" target="_blank" rel="noreferrer" className="hover:text-slate-300">Facebook</a>
            <a href="https://instagram.com/przeprogramowani" target="_blank" rel="noreferrer" className="hover:text-slate-300">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
