export interface Course {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  url: string;
  featured?: boolean;
  highlights: string[];
  badgeClass: string;
  glowClass: string;
  buttonClass: string;
  iconColorClass: string;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    category: 'AI-Native Development',
    tagline: 'Programuj z AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania — od pomysłu, przez implementację, po produkcję.',
    url: 'https://10xdevs.pl',
    featured: true,
    highlights: [
      '6700+ absolwentów poprzednich edycji',
      '5+1 tygodni intensywnej nauki i projekt końcowy',
      '10xWorkflow — kompletny proces pracy z agentem AI',
      'Certyfikat: 10xBuilder, 10xArchitect, 10xChampion',
    ],
    badgeClass: 'bg-yellow-400/10 text-yellow-300 ring-yellow-400/30',
    glowClass: 'from-yellow-400/25 via-orange-500/10',
    buttonClass: 'bg-yellow-400 text-zinc-950 hover:bg-yellow-300',
    iconColorClass: 'text-yellow-400',
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    category: 'Frontend',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description:
      'Pięć obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    highlights: [
      '5 obszernych modułów tematycznych',
      'Testowanie, CI/CD i architektura aplikacji webowych',
      'Prawie 400 absolwentów czterech edycji',
    ],
    badgeClass: 'bg-sky-400/10 text-sky-300 ring-sky-400/30',
    glowClass: 'from-sky-400/25 via-indigo-500/10',
    buttonClass: 'bg-sky-400 text-zinc-950 hover:bg-sky-300',
    iconColorClass: 'text-sky-400',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    category: 'TypeScript',
    tagline: 'Typy, które robią różnicę na produkcji',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl',
    highlights: [
      'Najnowsze wersje: TypeScript 5 i React 19',
      'Zaawansowane techniki typowania dla projektów produkcyjnych',
      'Wzorce ułatwiające rozwój i utrzymanie kodu',
    ],
    badgeClass: 'bg-violet-400/10 text-violet-300 ring-violet-400/30',
    glowClass: 'from-violet-400/25 via-fuchsia-500/10',
    buttonClass: 'bg-violet-400 text-zinc-950 hover:bg-violet-300',
    iconColorClass: 'text-violet-400',
  },
];
