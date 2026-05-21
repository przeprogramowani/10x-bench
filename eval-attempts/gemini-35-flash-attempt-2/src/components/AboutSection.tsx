import React from 'react';
import { Users, Linkedin, ArrowUpRight, Award, Lightbulb, Users2, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const founders = [
    {
      name: 'Przemek Smyrdek',
      role: 'Co-founder, Przeprogramowani',
      description: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
      linkedin: 'https://www.linkedin.com/in/psmyrdek/',
      imageUrl: 'https://przeprogramowani.pl/img/profiles/przemek.webp'
    },
    {
      name: 'Marcin Czarkowski',
      role: 'Co-founder, Przeprogramowani',
      description: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce.',
      linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
      imageUrl: 'https://przeprogramowani.pl/img/profiles/marcin.webp'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Szersze spojrzenie',
      text: 'Wierzymy, że najlepsi programiści patrzą poza sam kod. Rozumieją architekturę, biznes i potrzeby realnych użytkowników.',
      color: 'text-brand-accent bg-brand-accent/10'
    },
    {
      icon: Users2,
      title: 'Zorientowanie na ludzi',
      text: 'Oprogramowanie tworzą ludzie dla ludzi. Dbamy o budowanie wspierającej społeczności i dzielenie się sprawdzoną wiedzą.',
      color: 'text-brand-secondary bg-brand-secondary/10'
    },
    {
      icon: ShieldCheck,
      title: 'Praktyka na produkcji',
      text: 'Nie uczymy teorii oderwanej od rzeczywistości. Nasze materiały bazują na realnych wyzwaniach z dużych systemów produkcyjnych.',
      color: 'text-brand-purple bg-brand-purple/10'
    }
  ];

  return (
    <section id="o-nas-sekcja" className="py-20 relative bg-brand-darker/20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <Users className="h-3.5 w-3.5 text-brand-accent" />
            <span>Kim Jesteśmy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Łączymy świat programowania, <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent">
              biznesu i rozwoju
            </span>
          </h2>
          <p className="text-slate-400 font-medium text-base sm:text-lg">
            Przeprogramowani to platforma edukacyjna stworzona z myślą o ambitnych developerach. Pomagamy budować nowoczesne nawyki, świadomie korzystać z AI i tworzyć lepszy soft.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 p-6 rounded-2xl bg-brand-card/55 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300"
            >
              {/* Profile Image representation */}
              <div className="w-28 h-28 sm:w-36 sm:h-auto rounded-xl overflow-hidden shrink-0 border border-slate-700 bg-slate-900">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${index === 0 ? '1507003211169-0a1dd7228f2d' : '1500648767791-00dcc994a43e'}?auto=format&fit=crop&q=80&w=200`;
                  }}
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-between space-y-4 text-center sm:text-left">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-white">{founder.name}</h3>
                  <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">{founder.role}</p>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold pt-1">
                    {founder.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-brand-accent hover:border-brand-accent/40 transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-brand-card/30 border border-slate-800/50 space-y-4">
              <span className={`p-3 rounded-xl inline-block ${val.color}`}>
                <val.icon className="h-6 w-6" />
              </span>
              <h4 className="text-lg font-bold text-white">{val.title}</h4>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
