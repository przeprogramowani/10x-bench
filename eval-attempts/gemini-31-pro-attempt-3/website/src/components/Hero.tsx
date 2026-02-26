import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
          <Terminal size={14} />
          <span>Najnowszy kurs już dostępny</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Poznaj <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">10xDevs</span> i pracuj z AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Programuj z AI. Opanuj najnowsze narzędzia i techniki, aby stać się inżynierem oprogramowania gotowym na wyzwania przyszłości.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://przeprogramowani.pl" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
            Dołącz do 10xDevs
            <ArrowRight size={20} />
          </a>
          <a href="#kursy" className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold text-lg transition border border-gray-700 hover:border-gray-600">
            Zobacz inne kursy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
