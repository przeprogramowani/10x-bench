const footerLinks = [
  {
    title: 'Projekty',
    links: [
      { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
      { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
      { label: '10xDevs', href: 'https://10xdevs.pl' },
      { label: 'Opanuj AI', href: 'https://opanuj.ai' },
      { label: '10xRules.ai', href: 'https://10xrules.ai' },
    ],
  },
  {
    title: 'Treści',
    links: [
      { label: 'Podcast', href: '/podcast' },
      { label: 'YouTube', href: '/youtube' },
      { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
      { label: 'Newsletter', href: 'https://przeprogramowani.pl/newsletter' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Kontakt', href: 'mailto:kontakt@przeprogramowani.pl' },
    ],
  },
]

const socialLinks = [
  { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'Facebook', href: 'https://facebook.com/przeprogramowani', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Instagram', href: 'https://instagram.com/przeprogramowani', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface-800/50 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 text-brand-400 font-bold text-lg tracking-tight mb-4">
              <span className="font-mono">&lt;/&gt;</span>
              <span>Przeprogramowani</span>
            </a>
            <p className="text-surface-400 text-sm leading-relaxed mb-6">
              Szersze spojrzenie na programowanie. Edukacja technologiczna w epoce AI.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-surface-800/50 hover:bg-brand-600/20 hover:text-brand-400 flex items-center justify-center text-surface-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold text-sm mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-surface-400 hover:text-brand-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-surface-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-surface-500 text-xs">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl — Szersze spojrzenie na programowanie
          </p>
          <a href="mailto:kontakt@przeprogramowani.pl" className="text-surface-500 hover:text-brand-400 text-xs transition-colors">
            kontakt@przeprogramowani.pl
          </a>
        </div>
      </div>
    </footer>
  )
}
