import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-8 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Przeprogramowani.pl. Wszelkie prawa zastrzeżone.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://twitter.com/przeprogramowani" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          <a href="https://youtube.com/przeprogramowani" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
          <a href="https://instagram.com/przeprogramowani" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
