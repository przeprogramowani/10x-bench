export interface Founder {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo: string;
  linkedin: string;
  gradient: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    initials: 'PS',
    photo: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    gradient: 'from-main/40 via-emerald-600/20 to-cyan-500/30',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.",
    initials: 'MC',
    photo: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    gradient: 'from-cyan-500/40 via-sky-600/20 to-main/30',
  },
];

export const MISSION = {
  heading: 'Witaj na Przeprogramowanych!',
  lead: 'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym.',
  body: 'Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, na biznes, na ludzi i na siebie. Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach. Od technicznych deep-dive\u2019ów po rozmowy o karierze i rozwoju.',
  cta: 'Zyskaj szersze spojrzenie na programowanie.',
};

export const PILLARS = [
  {
    icon: '🎓',
    title: 'Kursy i programy',
    description: 'Opanuj Frontend, Opanuj TypeScript i 10xDevs — topowa edukacja technologiczna w epoce AI.',
  },
  {
    icon: '🎙️',
    title: 'Podcasty',
    description: 'Opanuj.AI Podcast i Przeprogramowani ft. Gość — ponad 7800 słuchaczy łącznie.',
  },
  {
    icon: '🎬',
    title: 'YouTube',
    description: '411 filmów o technologii, AI i karierze dla 20,9 tys. subskrybentów.',
  },
  {
    icon: '✉️',
    title: 'Newsletter',
    description: 'Przeprogramowany Newsletter w formacie 3-2-1, co tydzień w piątek.',
  },
];

export const BRANDS = [
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
