import { NAV_LINKS, SITE } from '../data/site';

const courseLinks = [
  { label: '10xDevs', url: 'https://10xdevs.pl' },
  { label: 'Opanuj Frontend', url: 'https://opanujfrontend.pl' },
  { label: 'Opanuj TypeScript', url: 'https://www.opanujtypescript.pl' },
  { label: 'Opanuj.AI', url: 'https://opanuj.ai/' },
];

const socialLinks = [
  { label: 'Facebook', url: SITE.facebookUrl },
  { label: 'Instagram', url: SITE.instagramUrl },
  { label: 'YouTube', url: SITE.youtubeUrl },
  { label: 'Newsletter', url: SITE.newsletterUrl },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night-900/50">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="/"
              className="flex items-center gap-2 font-display text-lg font-bold text-white"
            >
              <span className="text-violet-400" aria-hidden="true">
                {'</>'}
              </span>
              <span>Przeprogramowani</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {SITE.tagline}. Kursy, podcasty i filmy dla ambitnych programistów —
              w czasach wszechobecnej sztucznej inteligencji.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-block text-sm text-slate-300 transition hover:text-white"
            >
              {SITE.email}
            </a>
          </div>

          <nav aria-label="Strona">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Strona
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Kursy">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Kursy
            </h2>
            <ul className="mt-4 space-y-2.5">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Znajdziesz nas">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Znajdziesz nas
            </h2>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Przeprogramowani.pl — {SITE.tagline}
          </p>
          <p className="font-mono text-xs">
            Built with Astro, React &amp; Tailwind · Ready for Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}
