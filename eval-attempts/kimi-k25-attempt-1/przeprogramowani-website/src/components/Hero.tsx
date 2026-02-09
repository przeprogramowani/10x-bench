import { ArrowRight, Sparkles, Users, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              Nowa edycja startuje 18.05.2026
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Poznaj najbardziej praktyczny{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                workflow do produkcji z AI
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl">
              Program 10xDevs to 5 tygodni nauki, podczas których nauczysz się świadomie wykorzystywać najnowsze modele i narzędzia AI na każdym etapie rozwoju projektu.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://10xdevs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-slate-900 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/25"
              >
                Dołącz do 10xDevs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/#kursy"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
              >
                Zobacz wszystkie kursy
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">3700+ absolwentów</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">5+1 tygodni</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">Certyfikat</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold mb-4">10x</div>
                  <div className="text-2xl text-primary-200">Programiści nowej generacji</div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg font-semibold">
              Cursor Pro
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg font-semibold">
              Claude Code
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
