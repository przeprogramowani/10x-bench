import { Youtube, MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  courses: [
    { label: '10xDevs', href: 'https://10xdevs.pl' },
    { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl' },
    { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl' },
    { label: 'Opanuj AI', href: 'https://opanuj.ai' },
  ],
  content: [
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Blog', href: 'https://przeprogramowani.pl/artykuly' },
    { label: 'Newsletter', href: 'https://przeprogramowani.substack.com' },
  ],
  company: [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Kalendarz', href: 'https://przeprogramowani.pl/kalendarz' },
    { label: 'Kontakt', href: 'mailto:kontakt@przeprogramowani.pl' },
  ],
};

const socialLinks = [
  { icon: Youtube, href: 'https://youtube.com/c/przeprogramowani', label: 'YouTube' },
  { icon: MessageCircle, href: 'https://przeprogramowani.circle.so', label: 'Społeczność' },
  { icon: Linkedin, href: 'https://linkedin.com/company/przeprogramowani', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/przeprogramowani', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/przeprogramowani', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">&lt;/&gt;</span>
              </div>
              <span className="font-bold text-xl text-white">Przeprogramowani</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Szersze spojrzenie na programowanie. Edukacja technologiczna w epoce AI.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kursy</h4>
            <ul className="space-y-3">
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

          {/* Content */}
          <div>
            <h4 className="font-semibold text-white mb-4">Treści</h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Firma</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Przeprogramowani.pl. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="https://przeprogramowani.pl/polityka-prywatnosci" className="hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <a href="https://przeprogramowani.pl/regulamin" className="hover:text-white transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
