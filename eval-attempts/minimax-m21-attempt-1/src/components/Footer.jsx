const footerLinks = {
  'Kursy': [
    { href: 'https://10xdevs.pl', label: '10xDevs' },
    { href: 'https://opanujfrontend.pl', label: 'Opanuj Frontend' },
    { href: 'https://opanujtypescript.pl', label: 'Opanuj TypeScript' },
    { href: 'https://opanuj.ai', label: 'Opanuj AI' },
  ],
  'Materiały': [
    { href: '/podcast', label: 'Podcast' },
    { href: 'https://www.youtube.com/@przeprogramowani', label: 'YouTube', external: true },
    { href: 'https://przeprogramowani.substack.com', label: 'Newsletter' },
    { href: '/blog', label: 'Blog' },
  ],
  'O nas': [
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/wspolpraca', label: 'Współpraca' },
    { href: '/praca', label: 'Praca' },
  ],
};

const socialLinks = [
  { href: 'https://facebook.com/przeprogramowani', label: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://instagram.com/przeprogramowani', label: 'Instagram', icon: 'rect width="20" height="20" x="2" y="2" rx="5" ry="5" + path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z + line x1="17.5" x2="17.51" y1="6.5" y2="6.5"' },
  { href: 'https://twitter.com/przeprogramowani', label: 'Twitter', icon: 'path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 9.4-3.7 3.6-13.9 7-9 0 0-2 1.2-2 1.2' },
  { href: 'https://github.com/przeprogramowani', label: 'GitHub', icon: 'path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"' },
  { href: 'mailto:kontakt@przeprogramowani.pl', label: 'Email', icon: 'path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7 + rect x="2" y="4" width="20" height="16" rx="2"' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                      {link.external && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="inline-block ml-1"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                {social.icon.split(' + ').map((path, i) => (
                  <path key={i} d={path} />
                ))}
              </svg>
            </a>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Przeprogramowani.pl — Szersze spojrzenie na programowanie
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Kursy i szkolenia dla programistów — JavaScript, TypeScript, AI, GitHub Actions
          </p>
        </div>
      </div>
    </footer>
  );
}
