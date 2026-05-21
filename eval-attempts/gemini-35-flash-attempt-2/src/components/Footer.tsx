import React from 'react';
import { Terminal, Facebook, Instagram, Mail, ArrowUpRight, Award, Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = {
    edukacja: [
      { label: '10xDevs 3.0', href: 'https://10xdevs.pl', isExternal: true },
      { label: 'Opanuj Frontend', href: 'https://www.opanujfrontend.pl', isExternal: true },
      { label: 'Opanuj TypeScript', href: 'https://www.opanujtypescript.pl', isExternal: true },
      { label: 'Opanuj AI', href: 'https://opanuj.ai', isExternal: true },
    ],
    baza: [
      { label: 'O nas', href: '/o-nas', isExternal: false },
      { label: 'Podcasty', href: '/podcast', isExternal: false },
      { label: 'YouTube', href: '/youtube', isExternal: false },
      { label: 'Newsletter Substack', href: 'https://przeprogramowani.substack.com', isExternal: true },
    ],
    projekty: [
      { label: '10xRules.ai', href: 'https://10xrules.ai', isExternal: true },
    ]
  };

  return (
    <footer className="bg-[#05070B] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand col */}
          <div className="md:col-span-1 space-y-4">
            <a href="/" className="flex items-center gap-2">
              <span className="p-2 bg-brand-accent/10 rounded-lg">
                <Terminal className="h-5 w-5 text-brand-accent" />
              </span>
              <span className="font-mono text-lg font-black tracking-tight text-white">
                &lt;/&gt; Przeprogramowani
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Edukacja technologiczna w epoce AI. Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-accent hover:border-brand-accent/40 transition-all duration-300">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="https://instagram.com/przeprogramowani" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-accent hover:border-brand-accent/40 transition-all duration-300">
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a href="mailto:kontakt@przeprogramowani.pl" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-accent hover:border-brand-accent/40 transition-all duration-300">
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Links cols */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Flame className="h-4 w-4 text-brand-orange" /> Programy Edukacyjne
            </h3>
            <ul className="space-y-3">
              {links.edukacja.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : '_self'}
                    rel={link.isExternal ? 'noopener noreferrer' : ''}
                    className="group text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-all"
                  >
                    {link.label}
                    {link.isExternal && <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-purple" /> Baza Wiedzy
            </h3>
            <ul className="space-y-3">
              {links.baza.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : '_self'}
                    rel={link.isExternal ? 'noopener noreferrer' : ''}
                    className="group text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-all"
                  >
                    {link.label}
                    {link.isExternal && <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Nasz Produkt</h3>
            <ul className="space-y-3">
              {links.projekty.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-all"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-brand-dark border border-slate-800/80">
              <p className="text-xs font-bold text-slate-400">Masz pytania? Pisz śmiało:</p>
              <a href="mailto:kontakt@przeprogramowani.pl" className="text-sm font-bold text-brand-accent hover:underline block mt-1">
                kontakt@przeprogramowani.pl
              </a>
            </div>
          </div>
        </div>

        {/* Brand partners & Copyright */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Szersze spojrzenie na programowanie.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
