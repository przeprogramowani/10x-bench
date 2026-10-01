import { COURSE_LINKS, NAV_LINKS, SITE } from '../data/site';
import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, YouTubeIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-lg font-heading">
              <span className="font-mono text-main">&lt;/&gt;</span>
              <span>Przeprogramowani</span>
            </a>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">{SITE.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <YouTubeIcon />
              </a>
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="E-mail"
                className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Strona</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.socials.newsletter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Kursy</h3>
            <ul className="mt-4 space-y-3">
              {COURSE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Kontakt</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <LinkedInIcon className="w-4 h-4" />
                <a
                  href={SITE.socials.linkedinPrzemek}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Przemek Smyrdek
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <LinkedInIcon className="w-4 h-4" />
                <a
                  href={SITE.socials.linkedinMarcin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Marcin Czarkowski
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} Przeprogramowani.pl — {SITE.tagline}
          </p>
          <p className="text-xs text-gray-600">
            Zbudowane z <span className="text-main">Astro</span>, <span className="text-main">React</span> i{' '}
            <span className="text-main">Tailwind</span> — gotowe na Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}
