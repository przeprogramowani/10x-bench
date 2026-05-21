import React from 'react';
import { Mail, Rss, ArrowRight, Music, Disc } from 'lucide-react';

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za zapisanie się do Newslettera! Przygotuj się na solidną dawkę wiedzy.');
  };

  return (
    <footer className="border-t border-gray-800 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-orange to-brand-purple p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-brand-dark">
                  <span className="font-mono text-sm font-extrabold text-brand-orange">{"{"}p{"}"}</span>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Przeprogramowani<span className="text-brand-orange">.pl</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Wejdź na wyższy poziom programowania. Uczymy rzemiosła, nowoczesnych technologii, dobrych praktyk i pokazujemy jak stać się wyjątkowym deweloperem.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://youtube.com/@Przeprogramowani" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gray-900 p-2.5 text-gray-400 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors" title="YouTube">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a href="https://github.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gray-900 p-2.5 text-gray-400 hover:bg-brand-purple/10 hover:text-brand-purple transition-colors" title="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="/podcast" className="rounded-lg bg-gray-900 p-2.5 text-gray-400 hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors" title="Podcast">
                <Music className="h-5 w-5" />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gray-900 p-2.5 text-gray-400 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors" title="Spotify">
                <Disc className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Programy & Kursy</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/#10xdevs" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Społeczność 10xDevs
                </a>
              </li>
              <li>
                <a href="/#opanuj-frontend" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Opanuj Frontend
                </a>
              </li>
              <li>
                <a href="/#opanuj-typescript" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Opanuj TypeScript
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Strona</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/o-nas" className="text-gray-400 hover:text-brand-orange transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="/podcast" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Opanuj Frontend Podcast
                </a>
              </li>
              <li>
                <a href="/youtube" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Filmy YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Otrzymuj unikalne materiały edukacyjne i informacje o nowych projektach bezpośrednio na swoją skrzynkę. Zero spamu.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                required
                className="w-full rounded-xl border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-orange hover:bg-brand-orange-light px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-orange/10 hover:shadow-brand-orange/20 transition-all cursor-pointer whitespace-nowrap"
              >
                Zapisz się
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Przeprogramowani.pl. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
