import React from 'react';
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-slate-950 border border-slate-800/80 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Pitch */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-bold text-brand-accent uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Polecany Newsletter</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Przeprogramowany Newsletter
              </h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Co tydzień w piątek otrzymaj porcję wartościowych treści w unikalnym formacie <span className="text-brand-accent font-bold">3-2-1</span>:
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <span className="h-5 w-5 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-mono font-bold text-[10px]">3</span>
                  <span>rekomendacje techniczne</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <span className="h-5 w-5 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center font-mono font-bold text-[10px]">2</span>
                  <span>rekomendacje rozwojowe</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <span className="h-5 w-5 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-mono font-bold text-[10px]">1</span>
                  <span>bonus niespodzianka</span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="md:col-span-5 flex flex-col justify-center items-center p-6 sm:p-8 rounded-2xl bg-brand-card border border-slate-800/60">
              <div className="p-3 bg-brand-accent/10 rounded-2xl text-brand-accent mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold text-slate-300 text-center mb-5">
                Nie przegap też nowości i unikalnych ofert specjalnych od Przeprogramowanych!
              </p>
              <a
                href="https://przeprogramowani.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-brand-darker font-black text-xs text-center shadow-lg shadow-brand-accent/10 transition-all duration-300 flex items-center justify-center gap-1.5 group"
              >
                <span>Zapisz się za darmo</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
