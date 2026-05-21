import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <p>&copy; 2026 Przeprogramowani.pl</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="mailto:kontakt@przeprogramowani.pl" className="hover:text-gray-400">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;