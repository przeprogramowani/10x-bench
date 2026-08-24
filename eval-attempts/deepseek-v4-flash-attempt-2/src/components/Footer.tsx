import { siteConfig } from '../data/site';

interface FooterProps {
  hideNewsletterBanner?: boolean;
}

export default function Footer({ hideNewsletterBanner }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {!hideNewsletterBanner && (
        <div className="border-b border-gray-800">
          <div className="container-page py-12 sm:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Przeprogramowany Newsletter
              </h3>
              <p className="text-gray-400 mb-6">
                Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
                3 rekomendacje techniczne, 2 rekomendacje rozwojowe, 1 bonus niespodzianka.
              </p>
              <a
                href="https://przeprogramowani.substack.com"
                className="btn-primary inline-flex"
              >
                Zapisz się za darmo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary-400 font-mono">&lt;/&gt;</span>
              <span className="text-lg font-bold text-white">Przeprogramowani</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Szersze spojrzenie na programowanie. Łączymy świat programowania, biznesu i rozwoju.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Strony</h4>
            <ul className="space-y-2">
              {[
                { label: 'O nas', href: '/o-nas' },
                { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
                { label: 'Podcast', href: '/podcast' },
                { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kursy</h4>
            <ul className="space-y-2">
              {[
                { label: '10xDevs', href: 'https://10xdevs.pl' },
                { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
                { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
                { label: 'Opanuj AI', href: 'https://opanuj.ai' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Media</h4>
            <ul className="space-y-2">
              {[
                { label: 'YouTube', href: 'https://youtube.com/@Przeprogramowani' },
                { label: 'Facebook', href: 'https://facebook.com/przeprogramowani' },
                { label: 'Instagram', href: 'https://instagram.com/przeprogramowani' },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/10xdevs-pl' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl — Szersze spojrzenie na programowanie
          </p>
          <a
            href="mailto:kontakt@przeprogramowani.pl"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            kontakt@przeprogramowani.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
