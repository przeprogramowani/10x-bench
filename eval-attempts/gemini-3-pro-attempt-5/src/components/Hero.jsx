import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Zostań programistą <span className="text-blue-400">10x</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Przeprogramowani to Twoja przepustka do świata nowoczesnego IT. Dołącz do elitarnego grona developerów, którzy nie tylko kodują, ale tworzą przyszłość z wykorzystaniem AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#kursy" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
            Zobacz kurs 10xDevs
          </a>
          <a href="/podcast" className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all">
            Posłuchaj Podcastu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
