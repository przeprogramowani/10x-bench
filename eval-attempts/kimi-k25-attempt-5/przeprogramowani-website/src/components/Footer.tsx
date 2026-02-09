import { Youtube, Podcast, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  navigation: [
    { label: 'Strona główna', href: '/' },
    { label: 'O nas', href: '/o-nas' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
  ],
  courses: [
    { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
    { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl', external: true },
    { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl', external: true },
    { label: 'Opanuj AI', href: 'https://opanuj.ai', external: true },
  ],
  social: [
    { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani', icon: Youtube },
    { label: 'Twitter', href: 'https://twitter.com/przeprogramowani', icon: Twitter },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/przeprogramowani', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/przeprogramowani', icon: Github },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#16213e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                &lt;/&gt;
              </span>
              <span className="text-xl font-bold">Przeprogramowani</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Szersze spojrzenie na programowanie. Edukacja, podcasty i społeczność dla programistów.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kursy</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    {item.label}
                    <span className="ml-2 text-xs text-[#e94560]">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Co tydzień w piątek: 3 rekomendacje techniczne, 2 rozwojowe, 1 bonus.
            </p>
            <a
              href="https://przeprogramowani.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-3 bg-[#e94560] hover:bg-[#c73e54] rounded-lg text-white font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Zapisz się za darmo</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Przeprogramowani.pl. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="/polityka-prywatnosci" className="hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <a href="/regulamin" className="hover:text-white transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
