import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12 text-gray-400">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-blue-500">{'{'}</span>
            Przeprogramowani
            <span className="text-blue-500">{'}'}</span>
          </h3>
          <p className="text-sm max-w-sm leading-relaxed">
            Platforma edukacyjna założona przez Przemka Smyrdka i Marcina Czarkowskiego. Uczymy skutecznego programowania i inżynierii oprogramowania w erze AI.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Strony</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Strona Główna</a></li>
            <li><a href="/o-nas" className="hover:text-white transition">O nas</a></li>
            <li><a href="/podcast" className="hover:text-white transition">Podcast</a></li>
            <li><a href="/youtube" className="hover:text-white transition">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Kursy</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://przeprogramowani.pl" target="_blank" rel="noreferrer" className="hover:text-white transition">10xDevs</a></li>
            <li><a href="https://opanujfrontend.pl" target="_blank" rel="noreferrer" className="hover:text-white transition">Opanuj Frontend</a></li>
            <li><a href="https://opanujtypescript.pl" target="_blank" rel="noreferrer" className="hover:text-white transition">Opanuj TypeScript</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        &copy; {new Date().getFullYear()} Przeprogramowani. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
