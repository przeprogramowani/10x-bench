const footerLinks = {
  courses: [
    { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
    { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
    { label: '10xDevs', href: 'https://10xdevs.pl' },
    { label: 'Opanuj AI', href: 'https://opanuj.ai' },
  ],
  content: [
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
    { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/przeprogramowani/' },
    { label: 'Facebook', href: 'https://facebook.com/przeprogramowani' },
    { label: 'Instagram', href: 'https://instagram.com/przeprogramowani' },
    { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                &lt;/&gt; <span className="text-primary-400">Przeprogramowani</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Szersze spojrzenie na programowanie. Łączymy świat technologii, biznesu i rozwoju osobistego.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kursy
            </h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Treści
            </h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Social Media
            </h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; 2025 Przeprogramowani.pl. Wszelkie prawa zastrzeżone.
            </p>
            <a
              href="mailto:kontakt@przeprogramowani.pl"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              kontakt@przeprogramowani.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
