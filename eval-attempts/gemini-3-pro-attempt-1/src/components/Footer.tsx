import React from 'react';
import { Twitter, Youtube, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
                {/* Brand */}
                <div className="mb-8 md:mb-0 max-w-sm">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Przeprogramowani
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Tworzymy środowisko, w którym każdy może rozwijać kompetencje potrzebne na rynku pracy.
                        Bądź nie tylko świetnym programistą, ale również świadomym i wszechstronnym specjalistą.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com/przeprogramowani" className="text-slate-500 hover:text-cyan-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="https://youtube.com/c/przeprogramowani" className="text-slate-500 hover:text-red-500 transition-colors">
                            <Youtube size={24} />
                        </a>
                        <a href="https://instagram.com/przeprogramowani" className="text-slate-500 hover:text-pink-500 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="https://linkedin.com/company/przeprogramowani" className="text-slate-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Nawigacja</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Strona główna</a></li>
                            <li><a href="/o-nas" className="text-slate-400 hover:text-cyan-400 transition-colors">O nas</a></li>
                            <li><a href="/podcast" className="text-slate-400 hover:text-cyan-400 transition-colors">Podcast</a></li>
                            <li><a href="/youtube" className="text-slate-400 hover:text-cyan-400 transition-colors">YouTube</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Projekty</h4>
                        <ul className="space-y-2">
                            <li><a href="https://10xdevs.pl" className="text-slate-400 hover:text-cyan-400 transition-colors">10xDevs</a></li>
                            <li><a href="https://opanujfrontend.pl" className="text-slate-400 hover:text-cyan-400 transition-colors">Opanuj Frontend</a></li>
                            <li><a href="https://opanujtypescript.pl" className="text-slate-400 hover:text-cyan-400 transition-colors">Opanuj TypeScript</a></li>
                            <li><a href="https://opanuj.ai" className="text-slate-400 hover:text-cyan-400 transition-colors">Opanuj AI</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Przeprogramowani. Wszelkie prawa zastrzeżone.</p>
                <a href="mailto:kontakt@przeprogramowani.pl" className="mt-4 md:mt-0 flex items-center hover:text-cyan-400 transition-colors">
                    <Mail size={16} className="mr-2" />
                    kontakt@przeprogramowani.pl
                </a>
            </div>
        </footer>
    );
};

export default Footer;
