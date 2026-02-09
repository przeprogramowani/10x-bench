import React from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden py-20 lg:py-32">
       <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Nowy program startuje w maju 2026
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
          Zostań <span className="text-blue-500">10xDev</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Opanuj sztukę programowania z Generative AI. Dołącz do 10xDevs 3.0 i twórz oprogramowanie szybciej, lepiej i mądrzej niż kiedykolwiek wcześniej.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center">
            <Terminal className="w-5 h-5 mr-2" />
            Zobacz program
          </a>
          <a href="/podcast" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg border border-gray-700 transition-all flex items-center justify-center">
            <Cpu className="w-5 h-5 mr-2" />
            Posłuchaj o AI
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
            <Code className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Nowoczesny Stack</h3>
            <p className="text-gray-400 text-sm">Pracuj z najnowszymi modelami AI i narzędziami developerskimi.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
             <Cpu className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Automatyzacja</h3>
            <p className="text-gray-400 text-sm">Zautomatyzuj nudne zadania i skup się na kreatywnym rozwiązywaniu problemów.</p>
          </div>
           <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
            <Terminal className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Praktyka</h3>
            <p className="text-gray-400 text-sm">Twórz realne projekty pod okiem ekspertów branży.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
