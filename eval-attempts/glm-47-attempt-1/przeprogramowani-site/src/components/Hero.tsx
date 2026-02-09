import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Nowość — Maj 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            10xDevs 3.0
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
          </p>
          <a
            href="https://10xdevs.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            Zobacz teraz →
          </a>
        </div>
      </div>
    </section>
  );
}
