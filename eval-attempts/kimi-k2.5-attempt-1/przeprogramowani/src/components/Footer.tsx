import { Twitter, Linkedin, Youtube, Mail, Github } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Newsletter', href: 'https://przeprogramowani.pl' },
  ],
  courses: [
    { label: '10xDevs', href: 'https://10xdevs.pl' },
    { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
    { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
    { label: 'Opanuj AI', href: 'https://przeprogramowani.pl' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/przeprogramowani', icon: Twitter },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/przeprogramowani', icon: Linkedin },
    { label: 'YouTube', href: 'https://youtube.com/przeprogramowani', icon: Youtube },
    { label: 'GitHub', href: 'https://github.com/przeprogramowani', icon: Github },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">&lt;/&gt;</span>
              <span className="text-xl font-bold">Przeprogramowani</span>
            </div>
            <p className="text-gray-400 mb-6">
              Szersze spojrzenie na programowanie. Edukacja technologiczna w erze AI.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Platforma</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Kursy</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kontakt@przeprogramowani.pl"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  kontakt@przeprogramowani.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/polityka-prywatnosci" className="hover:text-[#FF6B35] transition-colors">
              Polityka prywatności
            </a>
            <a href="/regulamin" className="hover:text-[#FF6B35] transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
