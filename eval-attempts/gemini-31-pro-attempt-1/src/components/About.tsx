import React from 'react';
import { team } from '../data/content';

export default function About() {
  return (
    <div id="o-nas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Poznajmy się
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Tworzymy Przeprogramowanych, aby dzielić się wiedzą i doświadczeniem zdobytym w branży IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative inline-block">
                <img
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-lg text-blue-600 font-medium mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Nasza Misja</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wierzymy, że programowanie to coś więcej niż tylko pisanie kodu. To sposób myślenia i rozwiązywania problemów. 
            Od 5 lat pomagamy programistom wchodzić na wyższy poziom, zrozumieć architekturę i pracować efektywniej.
          </p>
        </div>
      </div>
    </div>
  );
}
