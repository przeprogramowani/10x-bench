import React from 'react';
import { Users, Code, Zap, ShieldCheck, Terminal, Sparkles, MessageSquare, Flame } from 'lucide-react';

export default function Hero10x() {
  const stats = [
    { label: 'Aktywnych 10x deweloperów', value: '1 200+' },
    { label: 'Spotkań Live i Masterclass', value: '100+' },
    { label: 'Kanałów tematycznych', value: '30+' },
    { label: 'Rozwiązanych problemów', value: 'Niezliczone' },
  ];

  const benefits = [
    {
      icon: <Zap className="h-5 w-5 text-brand-green" />,
      title: 'Skok w produktywności',
      desc: 'Poznaj zaawansowane techniki pracy z AI, automatyzacją i narzędziami, które oszczędzą godziny każdego dnia.'
    },
    {
      icon: <Code className="h-5 w-5 text-brand-cyan" />,
      title: 'Zaawansowana Architektura',
      desc: 'Naucz się projektować skalowalne, testowalne i bezpieczne systemy gotowe na miliony użytkowników.'
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-brand-orange" />,
      title: 'Ekskluzywna Społeczność',
      desc: 'Wymieniaj się wiedzą z Seniorami, Tech Leadami i Architektami na zamkniętej, elitarnej platformie Discord.'
    },
    {
      icon: <Flame className="h-5 w-5 text-brand-purple" />,
      title: 'Zawsze krok przed rynkiem',
      desc: 'Bądź na bieżąco ze zmianami i trendami, bez marnowania czasu na chaotyczne poszukiwania informacji.'
    }
  ];

  return (
    <section id="10xdevs" className="relative overflow-hidden py-24 lg:py-32 bg-brand-dark">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="absolute top-1/3 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-brand-cyan/10 blur-[100px]" />
      <div className="absolute bottom-10 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-brand-orange/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-xs font-semibold text-purple-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-cyan animate-pulse" />
              Społeczność & Program Mentoringowy dla Deweloperów
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Zostań <span className="gradient-text-purple-cyan font-black">10x Devsem</span> i przejmij kontrolę nad swoją karierą
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Dołącz do jedynego takiego programu w Polsce, który łączy zaawansowaną wiedzę techniczną, architekturę, sztuczną inteligencję oraz unikalne kontakty. Rozwiń skrzydła pod okiem Marcina, Przemka i Damiana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-95 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-purple/30 transition-all duration-300 hover:shadow-brand-purple/50 hover:-translate-y-0.5"
              >
                <Terminal className="h-5 w-5" />
                Aplikuj do społeczności 10xDevs
              </a>
              <a
                href="#courses"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800/80 px-8 py-4 text-base font-bold text-gray-300 hover:text-white transition-all duration-300"
              >
                Zobacz pozostałe kursy
              </a>
            </div>

            {/* Micro proof */}
            <div className="flex items-center gap-3 mt-4 text-xs text-gray-500">
              <ShieldCheck className="h-4.5 w-4.5 text-brand-green" />
              <span>Gwarancja jakości Przeprogramowanych: 30 dni na zwrot bez pytań.</span>
            </div>
          </div>

          {/* Interactive UI card/terminal mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-brand-dark-card/90 p-1.5 shadow-2xl shadow-black/80">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-gray-800/80 px-4 py-3 bg-brand-dark/40">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-gray-500">10xdevs.sh</div>
                <div className="w-6" />
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs md:text-sm text-gray-300 space-y-4 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-brand-purple">➜</span> <span className="text-brand-cyan">~</span> <span className="text-white">npx 10xdevs join</span>
                </div>
                <div className="text-gray-500">⚡ Łączenie z elitarnym serwerem Discord...</div>
                <div className="text-brand-green">✓ Połączenie nawiązane! Witaj w klubie 10xDevs!</div>
                
                <div className="border border-gray-800 bg-brand-dark/30 rounded p-3 text-gray-400 text-xs">
                  <span className="text-white font-semibold">Następne spotkanie live:</span><br/>
                  <span className="text-brand-orange">Czwartek, 18:00</span> - Masterclass: "Architektura Serverless z AWS & Node.js"
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ekspercka wiedza:</span>
                    <span className="text-brand-cyan">ZAAWANSOWANA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Praca z AI (Cursor, Copilot):</span>
                    <span className="text-brand-green">100% OPANOWANA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Networking z seniorami:</span>
                    <span className="text-white">DOSTĘPNY</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-brand-orange">10xDevs</span> is active. Ready to skyrocket your career? <span className="text-brand-purple">y/n</span> <span className="animate-pulse bg-brand-cyan h-4 w-2 inline-block align-middle ml-1" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-gray-800 bg-brand-dark-card/40 p-6 hover:bg-brand-dark-card/80 transition-all duration-300 hover:border-brand-purple/30">
              <div className="mb-4 inline-flex rounded-xl bg-gray-900/80 p-3 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-20 rounded-2xl border border-gray-800/80 bg-brand-dark-card/20 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-800/80">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center justify-center p-4 ${idx > 0 ? 'pt-8 lg:pt-4' : ''}`}>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
