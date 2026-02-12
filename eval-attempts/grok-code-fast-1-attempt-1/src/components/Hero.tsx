// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Edukacja technologiczna w epoce AI
        </h1>
        <p className="text-xl mb-10">
          Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Opanuj Frontend: AI Edition</h3>
            <p>Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.</p>
            <a href="https://www.opanujfrontend.pl" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block">Szczegóły →</a>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Opanuj TypeScript</h3>
            <p>Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami.</p>
            <a href="https://www.opanujtypescript.pl" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block">Szczegóły →</a>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">10xDevs</h3>
            <p>Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.</p>
            <a href="https://10xdevs.pl" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block">Zobacz teraz →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;