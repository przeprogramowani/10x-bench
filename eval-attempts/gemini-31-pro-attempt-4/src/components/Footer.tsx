import React from 'react';
import { Github, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tight text-gray-900">
              Przeprogramowani<span className="text-blue-600">.pl</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 max-w-md">
              Platforma edukacyjna stworzona przez programistów dla programistów.
              Uczymy nowoczesnego frontendu, TypeScriptu i pomagamy w rozwoju kariery IT.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://youtube.com/@Przeprogramowani" className="text-gray-400 hover:text-red-600">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Kursy</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://opanujfrontend.pl" className="text-base text-gray-500 hover:text-gray-900">
                  Opanuj Frontend
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                  Opanuj TypeScript
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                  10xDevs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Firma</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/o-nas" className="text-base text-gray-500 hover:text-gray-900">
                  O nas
                </a>
              </li>
              <li>
                <a href="/podcast" className="text-base text-gray-500 hover:text-gray-900">
                  Podcast
                </a>
              </li>
              <li>
                <a href="/youtube" className="text-base text-gray-500 hover:text-gray-900">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Przeprogramowani. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
