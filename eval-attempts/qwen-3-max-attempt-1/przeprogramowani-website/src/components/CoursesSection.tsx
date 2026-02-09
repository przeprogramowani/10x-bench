// src/components/CoursesSection.tsx
import React from 'react';

const CoursesSection = () => {
  const courses = [
    {
      title: "10xDevs",
      description: "Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.",
      image: "https://przeprogramowani.pl/img/featured/kurs-ai.jpg",
      link: "https://10xdevs.pl"
    },
    {
      title: "Opanuj Frontend: AI Edition",
      description: "Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!",
      image: "https://przeprogramowani.pl/img/featured/kurs-ofe.jpg",
      link: "https://opanujfrontend.pl"
    },
    {
      title: "Opanuj TypeScript",
      description: "Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!",
      image: "https://przeprogramowani.pl/img/featured/kurs-ots.jpg",
      link: "https://opanujtypescript.pl"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nasze programy edukacyjne</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Edukacja technologiczna w epoce AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      Kurs
                    </p>
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{course.title}</p>
                      <p className="mt-3 text-base text-gray-500">{course.description}</p>
                    </a>
                  </div>
                  <div className="mt-6">
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      Szczegóły →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;