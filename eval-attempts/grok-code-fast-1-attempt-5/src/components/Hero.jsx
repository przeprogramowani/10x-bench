import React from 'react';

const CourseCard = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Szczegóły →</a>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Edukacja technologiczna w epoce AI</h1>
        <p className="text-xl mb-8">Topowe programy edukacyjne dla ambitnych programistów</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <CourseCard
            title="Opanuj Frontend: AI Edition"
            description="Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych."
            link="https://www.opanujfrontend.pl"
          />
          <CourseCard
            title="Opanuj TypeScript"
            description="Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój."
            link="https://www.opanujtypescript.pl"
          />
          <CourseCard
            title="10xDevs"
            description="Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania."
            link="https://10xdevs.pl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;