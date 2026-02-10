import { Code2, Youtube, Headphones, Mail, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'O nas', href: '#about' },
    { label: 'Kursy', href: '#courses' },
    { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
    { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' }
  ],
  content: [
    { label: 'Podcast', href: '#podcast' },
    { label: 'YouTube', href: '#youtube' },
    { label: '10xDevs', href: 'https://10xdevs.pl' },
    { label: 'Kalendarz', href: 'https://przeprogramowani.pl/kalendarz' }
  ],
  courses: [
    { label: '10xDevs', href: 'https://10xdevs.pl' },
    { label: 'Opanuj Frontend', href: 'https://www.opanujfrontend.pl' },
    { label: 'Opanuj TypeScript', href: 'https://www.opanujtypescript.pl' },
    { label: 'Opanuj AI', href: 'https://opanuj.ai' }
  ],
  social: [
    { label: 'YouTube', href: 'https://www.youtube.com/@przeprogramowani', icon: <Youtube className="w-5 h-5" /> },
    { label: 'Spotify', href: 'https://open.spotify.com/show/2v0fRHPo1stfdyC6B9jLpH', icon: <Headphones className="w-5 h-5" /> },
    { label: 'Facebook', href: 'https://facebook.com/przeprogramowani', icon: <Facebook className="w-5 h-5" /> },
    { label: 'Instagram', href: 'https://instagram.com/przeprogramowani', icon: <Instagram className="w-5 h-5" /> },
    { label: 'Email', href: 'mailto:kontakt@przeprogramowani.pl', icon: <Mail className="w-5 h-5" /> }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Code2 className="w-8 h-8 text-violet-400" />
              <span>Przeprogramowani</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Szersze spojrzenie na programowanie. Tworzymy najwyższej jakości 
              materiały edukacyjne dla programistów od 7 lat.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platforma</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Treści</h3>
            <ul className="space-y-3">
              {footerLinks.content.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kursy</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Przeprogramowani.pl. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
