import React, { useState } from 'react';
import { Sparkles, Code, CheckCircle, Copy, Download, FileText, Check } from 'lucide-react';

interface TechOption {
  id: string;
  name: string;
  category: string;
  rules: string;
}

const techOptions: TechOption[] = [
  {
    id: 'react',
    name: 'React 19',
    category: 'Frontend',
    rules: `# React 19 Best Practices
- Prefer functional components with standard hooks.
- Use 'use' hook for handling promises and context resolution where applicable.
- Ensure proper use of Server Components (default in RSC environments) and explicitly mark Client Components with 'use client'.
- Avoid unnecessary ref/forwardRef where newer React 19 ref forwarding works natively on props.
- Keep components small, modular, and adhere to strict clean code principles.`
  },
  {
    id: 'ts',
    name: 'TypeScript 5',
    category: 'Język',
    rules: `# TypeScript 5 Coding Standards
- Strictly enforce type safety: no 'any' types. Use 'unknown' if type is truly dynamic.
- Prefer interface for objects/API definitions and type for unions/primitives.
- Use read-only arrays and read-only properties for immutable states.
- Rely on modern TS 5 features like const modifiers on generic type parameters.
- Leverage path aliases and clear project structures for module exports.`
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    category: 'Styling',
    rules: `# Tailwind CSS v4 Architecture
- Adhere strictly to mobile-first responsive design principles.
- Use utility-first classes; avoid creating arbitrary CSS classes unless mandatory.
- Implement theme variables and leverage modern Tailwind CSS v4 @import structure.
- Utilize modern flexbox and grid layouts for robust responsive positioning.
- Rely on standard Tailwind class ordering to ensure readability.`
  },
  {
    id: 'astro',
    name: 'Astro 6',
    category: 'Framework',
    rules: `# Astro 6 Optimization Rules
- Keep interactive hydration explicit: use 'client:load', 'client:idle', or 'client:visible' sparingly.
- Keep static layout generation fast by doing fetches in frontmatter script blocks.
- Rely on clean Astro layouts and reusable components.
- Use static assets optimized by Astro's built-in image processing component.
- Adhere to the standard file-based routing architecture of Astro.`
  }
];

export default function RuleBuilderDemo() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>(['react', 'ts']);
  const [copied, setCopied] = useState(false);

  const toggleTech = (id: string) => {
    setSelectedTechs(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id)
        : [...prev, id]
    );
  };

  const getCombinedRules = () => {
    if (selectedTechs.length === 0) {
      return `/* Wybierz technologie po lewej stronie, aby wygenerować osobiste reguły AI dla Twojego projektu */`;
    }

    return selectedTechs
      .map(id => techOptions.find(t => t.id === id)?.rules)
      .filter(Boolean)
      .join('\n\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCombinedRules());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Selector Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="bg-purple-500/15 text-purple-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Interaktywny Kreator
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mt-3">
              Wypróbuj 10xRules.ai
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Zaznacz technologie używane w Twoim projekcie, a nasz silnik wygeneruje spersonalizowany plik <code className="text-purple-400">.clauderules</code> lub <code className="text-purple-400">.cursorrules</code>, który wkleisz do swojego edytora AI.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest block">
              Dostępne technologie (Wybierz kilka):
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {techOptions.map((tech) => {
                const isSelected = selectedTechs.includes(tech.id);
                return (
                  <button
                    key={tech.id}
                    onClick={() => toggleTech(tech.id)}
                    type="button"
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-purple-950/30 border-purple-500 text-white shadow-md shadow-purple-950/50'
                        : 'bg-slate-950/50 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Code className={`w-4 h-4 ${isSelected ? 'text-purple-400' : 'text-slate-600'}`} />
                      <div>
                        <span className="text-sm font-bold block">{tech.name}</span>
                        <span className="text-[10px] text-slate-500">{tech.category}</span>
                      </div>
                    </div>
                    {isSelected && <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="https://10xrules.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-extrabold text-purple-400 hover:text-purple-300 group"
            >
              Przejdź do pełnej platformy (140+ technologii)
              <span className="transition-transform group-hover:translate-x-0.5 font-normal">→</span>
            </a>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 rounded-2xl flex flex-col h-[350px] overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-mono font-bold text-slate-400">.clauderules / .cursorrules</span>
            </div>
            
            <button
              onClick={handleCopy}
              disabled={selectedTechs.length === 0}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                copied
                  ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Skopiowano!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Kopiuj reguły
                </>
              )}
            </button>
          </div>

          {/* Code display */}
          <div className="p-4 overflow-y-auto flex-grow font-mono text-xs text-slate-300 leading-relaxed bg-slate-950 scrollbar-thin">
            <pre className="whitespace-pre-wrap select-all">{getCombinedRules()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
