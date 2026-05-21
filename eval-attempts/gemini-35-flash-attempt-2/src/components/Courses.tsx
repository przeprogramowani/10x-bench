import React from 'react';
import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

interface CourseCardProps {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  details: string[];
  link: string;
  accentColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  badge,
  badgeColor,
  description,
  details,
  link,
  accentColor,
}) => {
  return (
    <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-brand-card/70 border border-slate-800/80 hover:border-slate-700 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-300">
      {/* Accent glow on hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}10 0%, transparent 70%)`
        }}
      />

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-full ${badgeColor}`}>
            {badge}
          </span>
          <span className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-brand-accent transition-colors">
            <GraduationCap className="h-5 w-5" />
          </span>
        </div>

        <h3 className="text-2xl font-black text-white group-hover:text-brand-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          {description}
        </p>

        <div className="border-t border-slate-800/60 my-4 pt-4">
          <ul className="space-y-2.5">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-xs font-semibold text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-center text-sm font-bold bg-slate-900 hover:bg-brand-accent hover:text-brand-darker border border-slate-800 hover:border-transparent transition-all duration-300"
        >
          <span>Sprawdź szczegóły szkolenia</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export const Courses: React.FC = () => {
  const coursesData = [
    {
      title: 'Opanuj Frontend: AI Edition',
      badge: 'Bestseller',
      badgeColor: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20',
      description: 'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
      details: [
        'Ponad 400 zadowolonych absolwentów',
        'Zintegrowane techniki AI w pracy developera',
        'Praktyczne projekty i testy na produkcji',
        'Dostęp do społeczności Discord',
      ],
      link: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
      accentColor: '#C4F347',
    },
    {
      title: 'Opanuj TypeScript',
      badge: 'Zaawansowany',
      badgeColor: 'bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20',
      description: 'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z TypeScript 5 i React 19!',
      details: [
        'Kompleksowy program dla profesjonalistów',
        'Zaawansowane typowanie i architektura kodu',
        'Najnowsze standardy React 19 & TypeScript 5',
        'Praktyczne warsztaty live',
      ],
      link: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
      accentColor: '#38BDF8',
    },
    {
      title: 'Opanuj AI',
      badge: 'Sztuczna Inteligencja',
      badgeColor: 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20',
      description: 'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o modelach LLM i wdróż ją w codziennej pracy.',
      details: [
        'Zrozumienie działania modeli językowych',
        'Automatyzacja i budowanie narzędzi z AI',
        'Sztuka inżynierii promptów (Prompt Engineering)',
        'Ebooki i nagrania warsztatów za darmo',
      ],
      link: 'https://opanuj.ai',
      accentColor: '#8B5CF6',
    },
  ];

  return (
    <section id="szkolenia" className="py-20 relative">
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5 text-brand-accent" />
            <span>Programy Edukacyjne</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Podnieś swoje kompetencje <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent">
              na najwyższy poziom
            </span>
          </h2>
          
          <p className="text-slate-400 font-medium text-base sm:text-lg">
            Nasze programy i szkolenia są tworzone przez praktyków z wieloletnim komercyjnym doświadczeniem w topowych firmach technologicznych. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
