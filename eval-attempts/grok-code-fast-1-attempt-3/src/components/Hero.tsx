import React from 'react';

const Hero = () => {
  const courses = [
    {
      name: '10xDevs',
      description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI',
      link: 'https://10xdevs.pl',
      color: 'bg-blue-600'
    },
    {
      name: 'Opanuj Frontend',
      description: 'Modern frontend development with AI practices',
      link: 'https://opanujfrontend.pl',
      color: 'bg-green-600'
    },
    {
      name: 'Opanuj TypeScript',
      description: 'Master TypeScript with latest 5.x features',
      link: 'https://opanujtypescript.pl',
      color: 'bg-yellow-600'
    },
    {
      name: 'Opanuj AI',
      description: 'Praktyczna wiedza o sztucznej inteligencji',
      link: 'https://opanuj.ai',
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Szersze spojrzenie
            <br />
            <span className="text-blue-600">na programowanie</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Łączymy świat programowania z biznesem i rozwojem osobistym.
            Uczymy się szerzej — na temat architektury, biznesu, ludzi i siebie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-full h-2 ${course.color} rounded-full mb-4`}></div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {course.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#newsletter"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Dołącz do Newsletter'a
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;