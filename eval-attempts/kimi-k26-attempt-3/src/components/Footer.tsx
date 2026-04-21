import { Code2, Mail, ExternalLink } from 'lucide-react';

const footerLinks = [
  {
    title: 'Nawigacja',
    links: [
      { label: 'Strona główna', href: '/' },
      { label: 'O nas', href: '/o-nas' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'YouTube', href: '/youtube' },
      { label: 'Kursy', href: '/kursy' },
    ],
  },
  {
    title: 'Projekty',
    links: [
      { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
      { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl', external: true },
      { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl', external: true },
      { label: 'Opanuj AI', href: 'https://opanuj.ai', external: true },
      { label: '10xRules.ai', href: 'https://10xrules.ai', external: true },
    ],
  },
  {
    title: 'Społeczność',
    links: [
      { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani', external: true },
      { label: 'Spotify', href: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo', external: true },
      { label: 'Newsletter', href: 'https://przeprogramowani.substack.com', external: true },
      { label: 'Facebook', href: 'https://facebook.com/przeprogramowani', external: true },
      { label: 'Instagram', href: 'https://instagram.com/przeprogramowani', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span>Przeprogramowani</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Szersze spojrzenie na programowanie. Edukacja, podcasty i społeczność dla nowoczesnych programistów.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href="mailto:kontakt@przeprogramowani.pl"
            className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            kontakt@przeprogramowani.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
