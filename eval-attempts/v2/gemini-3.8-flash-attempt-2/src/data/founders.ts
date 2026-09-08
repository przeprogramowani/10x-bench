import type { FounderItem } from './types';

export const founders: FounderItem[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Doświadczony Lead Engineer i Manager w międzynarodowych firmach technologicznych, takich jak DAZN i Cabify. Programista full-stack specjalizujący się w ekosystemie JavaScript, TypeScript, Node.js, .NET/C# oraz Java. Aktywny prelegent na prestiżowych konferencjach branżowych (m.in. 4Developers, ReactiveConf, InfoShare) oraz twórca i kontrybutor narzędzi Open Source (CursorLens, openapi-typescript).',
    highlights: [
      'Współtwórca programów 10xDevs, Opanuj Frontend oraz podcastu Przeprogramowani',
      'Lead Engineer i Engineering Manager z doświadczeniem w DAZN oraz Cabify',
      'Prelegent konferencji technologicznych: InfoShare, ReactiveConf, 4Developers',
      'Kontrybutor projektów Open Source i popularyzator inżynierii oprogramowania'
    ],
    linkedInUrl: 'https://www.linkedin.com/in/psmyrdek/'
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem w tworzeniu złożonych aplikacji webowych. Entuzjasta neurobiologii i kognitywistyki, tworzący autorskie materiały dydaktyczne w oparciu o naukowe badania nad procesem efektywnego uczenia się dorosłych. Twórca i gospodarz „Opanuj.AI Podcast” — czołowego podcastu technologicznego o sztucznej inteligencji i modelach LLM w Polsce. Ekspert w dziedzinie TypeScript, React oraz Node.js.',
    highlights: [
      'Twórca „Opanuj.AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce',
      'Lead Platformy Frontendowej w SmartRecruiters (ponad 10 lat doświadczenia w branży)',
      'Projektant metodyki edukacyjnej opartej na neurobiologii i badaniach nad uczeniem się',
      'Ekspert architektury systemów frontendowych w TypeScript, React i Node.js'
    ],
    linkedInUrl: 'https://www.linkedin.com/in/mkczarkowski/'
  }
];

export const aboutBrand = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  mission:
    'Przeprogramowani to przestrzeń, w której inżynieria oprogramowania spotyka się z rozwojem osobistym, architekturą i biznesem. Wierzymy, że najlepsi inżynierowie to ci, którzy nie zamykają się w składni jednego języka, lecz patrzą szeroko: na architekturę systemów, kontekst biznesowy, dynamikę zespołową oraz własny rozwój.',
  values: [
    {
      title: 'Inżynieria ponad hype',
      description:
        'Stawiamy na solidne fundamenty, wzorce architektoniczne, inżynierię jakości i powtarzalne procesy, zamiast powierzchownych skrótów i modnych nowinek.'
    },
    {
      title: 'Świadoma praca z AI',
      description:
        'Traktujemy sztuczną inteligencję jako potężnego partnera inżyniera, wymagającego dyscypliny, precyzyjnego planowania (Core Skills Chain) i rygorystycznej weryfikacji.'
    },
    {
      title: 'Praktyka i rzetelność',
      description:
        'Wszystkie nasze programy edukacyjne i materiały powstają na bazie wieloletniego doświadczenia z systemami produkcyjnymi o wysokiej skali.'
    },
    {
      title: 'Długofalowy rozwój',
      description:
        'Pomagamy programistom przełamywać szklany sufit, rozwijać kapitał kariery i przechodzić drogę od młodego entuzjasty do dojrzałego lidera technicznego.'
    }
  ],
  yearsOnMarket: '7+ lat',
  trustedBy: [
    'DAZN',
    'SmartRecruiters',
    'Future Processing',
    'Callstack',
    'edrone',
    'Xfive',
    'Euvic',
    'Huuuge Games',
    'Autodesk',
    'Strabag'
  ],
  contactEmail: 'kontakt@przeprogramowani.pl'
};
