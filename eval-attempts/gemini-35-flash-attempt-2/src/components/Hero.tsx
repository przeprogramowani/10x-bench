import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'rules'>('prompt');
  const [codeText, setCodeText] = useState('');
  
  const fullCode = `// AI agent running: 10xdevs-agent.ts
import { generateSolution } from '@10xdevs/core';

const dev = {
  skills: ['React', 'TypeScript', 'LLMs', 'ContextEngineering'],
  efficiency: '10x',
  workflow: 'AI-First'
};

async function runSession() {
  console.log("🚀 Powering up standard dev with AI...");
  const solution = await generateSolution({
    prompt: "Zbuduj nowoczesny, bezpieczny SaaS",
    rules: "10xrules.ai/frontend"
  });
  
  return solution.deployToCloudflare();
}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCodeText(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-24 md:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-accent/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-brand-orange uppercase tracking-wider">Nowość — Maj 2026</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-accent flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> 10xDevs 3.0
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans">
              Zostań programistą <br />
              <span className="bg-gradient-to-r from-brand-accent via-brand-purple to-brand-orange bg-clip-text text-transparent">
                epoki sztucznej inteligencji
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Poznaj techniki i narzędzia, które pozwolą Ci świadomie stosować AI w całym cyklu wytwarzania oprogramowania.
            </p>

            {/* Feature lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-start gap-2 text-slate-300 font-medium text-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Context Engineering & Prompting</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300 font-medium text-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Narzędzia: Claude Code, Cursor, Copilot</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300 font-medium text-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Automatyzacja i agenci AI</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300 font-medium text-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Praca z kodem produkcyjnym i refaktoring</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-accent text-brand-darker font-black tracking-wide text-center shadow-lg shadow-brand-accent/15 hover:shadow-brand-accent/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Chcę dołączyć do 10xDevs</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#szkolenia"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 font-bold hover:bg-slate-900 hover:text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Inne programy</span>
              </a>
            </div>
          </div>

          {/* Right: Code IDE simulation */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-accent/10 rounded-2xl blur-2xl opacity-50 -z-10"></div>
            
            {/* Window Container */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
              
              {/* Window Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800/60">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                  10xdevs-agent.ts
                </div>
                <div className="w-4"></div>
              </div>

              {/* Editor Code */}
              <div className="p-5 overflow-x-auto min-h-[300px] leading-relaxed select-none">
                <pre className="text-slate-400">
                  <code className="text-brand-accent">{codeText}</code>
                  <span className="w-2 h-4 bg-brand-accent inline-block animate-pulse ml-0.5"></span>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="bg-slate-900/60 border-t border-slate-800/60 px-4 py-2.5 flex items-center justify-between text-[10px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-brand-accent" />
                  <span>Agent: ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>UTF-8</span>
                  <span className="text-brand-purple font-bold">TypeScript</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
