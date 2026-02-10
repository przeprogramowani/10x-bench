import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Przeprogramowani.pl</h3>
            <p className="text-gray-400">Rozwijamy programistów, budujemy przyszłość.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400">Zasoby</h3>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/podcast" className="hover:underline">Podcast</a>
                </li>
                <li className="mb-4">
                  <a href="/youtube" className="hover:underline">YouTube</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400">Kursy</h3>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://opanujfrontend.pl" className="hover:underline">Opanuj Frontend</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Opanuj TypeScript</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">10xDevs</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h3>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Polityka Prywatności</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Regulamin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © {new Date().getFullYear()} Przeprogramowani. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
