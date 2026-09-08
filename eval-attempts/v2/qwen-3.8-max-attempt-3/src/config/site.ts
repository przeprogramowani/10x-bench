export const SITE = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  url: import.meta.env.SITE ?? 'http://localhost:8787',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://www.youtube.com/@Przeprogramowani',
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    newsletter: 'https://przeprogramowani.substack.com',
  },
};

export const COURSES = [
  {
    id: '10xdevs',
    name: '10xDevs',
    url: 'https://10xdevs.pl',
    featured: true,
    short:
      'Programuj z AI — techniki i narzędzia pozwalające świadomie stosować Generatywne AI w całym cyklu wytwarzania oprogramowania.',
    details: [
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI (edycja 4.0).',
      'Świadome stosowanie AI w całym cyklu wytwarzania oprogramowania.',
      'Techniki i narzędzia pracy z agentami AI dla inżynierów.',
    ],
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    url: 'https://www.opanujfrontend.pl',
    featured: false,
    short:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    details: [
      '5 obszernych modułów: frontend, testowanie, CI/CD, open source i architektura aplikacji webowych.',
      'Cztery edycje i prawie 400 absolwentów.',
      'Kluczowa wiedza dla nowoczesnego frontend developera.',
    ],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    url: 'https://www.opanujtypescript.pl',
    featured: false,
    short:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój.',
    details: [
      'Praca z najnowszymi wersjami TypeScript 5 i React 19.',
      'Wiedza ukierunkowana na projekty produkcyjne.',
      'Solidne fundamenty typowania dla lepszej jakości kodu.',
    ],
  },
];

export const FOUNDERS = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast”. Specjalista TypeScript, React i Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const TRUSTED_BY = [
  'Huuuge Games',
  'Nutridome',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'edrone',
  'Xfive',
  'Euvic',
  'Strabag',
  'Autodesk',
];
