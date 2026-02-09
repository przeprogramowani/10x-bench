import { Code2, Youtube, Podcast, Mail, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  edukacja: [
    { label: '10xDevs', href: 'https://10xdevs.pl' },
    { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
    { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
    { label: 'Opanuj AI', href: 'https://opanuj.ai' },
  ],
  spolecznosc: [
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' },
    { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
  ],
  firma: [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Kontakt', href: 'mailto:kontakt@przeprogramowani.pl' },
    { label: 'Współpraca', href: 'mailto:kontakt@przeprogramowani.pl' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">Przeprogramowani</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Szersze spojrzenie na programowanie. Edukacja, podcasty i narzędzia dla ambitnych programistów.
            </p>
            <div className="flex space-x-4">
              <a href="https://youtube.com/c/przeprogramowani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Podcast className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/przeprogramowani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:kontakt@przeprogramowani.pl" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Edukacja</h3>
            <ul className="space-y-2">
              {footerLinks.edukacja.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Społeczność</h3>
            <ul className="space-y-2">
              {footerLinks.spolecznosc.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Firma</h3>
            <ul className="space-y-2">
              {footerLinks.firma.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0">
            Tworzone z pasją przez Przemka Smyrdka i Marcina Czarkowskiego
          </p>
        </div>
      </div>
    </footer>
  );
}
