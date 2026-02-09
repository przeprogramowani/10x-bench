import React from 'react';

interface HeroProps {
  onCTAClick?: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="mr-2">✨</span>
            Nowość! 10xDevs 3.0 już dostępny
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up">
            Programuj z AI i
            <span className="text-gradient block">stań się 10x Developerem</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Opanuj techniki i narzędzia AI, które pozwolą Ci świadomie stosować sztuczną inteligencję w całym cyklu wytwarzania oprogramowania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://10xdevs.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Rozpocznij naukę
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/o-nas"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              Dowiedz się więcej
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">7+</div>
              <div className="text-gray-600">Lat na rynku edukacji</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">400+</div>
              <div className="text-gray-600">Absolwentów kursów</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Słuchaczy podcastów</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
