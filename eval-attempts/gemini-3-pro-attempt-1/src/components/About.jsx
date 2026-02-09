import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">O nas</h1>
          <p className="text-xl text-gray-400">
            Jesteśmy programistami, edukatorami i pasjonatami nowych technologii.
            Naszą misją jest pomoc w rozwoju Twojej kariery w IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Twórcy Przeprogramowani.pl</h2>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Przemek Smyrdek</h3>
              <p className="text-gray-300">
                Software Architect i Fullstack Developer z wieloletnim doświadczeniem.
                Pasjonat czystego kodu, architektury oprogramowania i efektywnej pracy z AI.
                Współtwórca podcastu i kursów na platformie.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Marcin Czarkowski</h3>
              <p className="text-gray-300">
                Senior Frontend Engineer i entuzjasta web performance.
                Specjalizuje się w nowoczesnych frameworkach JS i optymalizacji aplikacji.
                Wspólnie z Przemkiem prowadzi "Przeprogramowanych".
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-30 blur-lg"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
               alt="Team working together" 
               className="relative rounded-xl shadow-2xl w-full"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Społeczność</h3>
            <p className="text-gray-400">Ponad 400 absolwentów naszych kursów i tysiące słuchaczy podcastu.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cel</h3>
            <p className="text-gray-400">Dostarczanie praktycznej wiedzy, która realnie wpływa na rozwój kariery.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Jakość</h3>
            <p className="text-gray-400">Stawiamy na merytorykę i aktualność przekazywanych informacji.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
