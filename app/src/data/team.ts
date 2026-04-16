export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  links: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel • Autor programów edukacyjnych',
    bio: 'Były Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (TypeScript, Node.js, .NET). Prelegent na 4Developers, ReactiveConf i InfoShare. Autor 10xDevs.',
    initials: 'PS',
    gradient: 'from-brand-500 to-accent-500',
    links: [
      { label: 'Twitter / X', href: 'https://x.com/przemsmyrdek' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/psmyrdek/' },
    ],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel • Host Opanuj.AI Podcast',
    bio: 'Technical Lead w SmartRecruiters z 10+ latami doświadczenia. Twórca Opanuj.AI — jednego z najpopularniejszych polskich podcastów o LLM. Specjalista od TypeScripta i Reacta.',
    initials: 'MC',
    gradient: 'from-accent-500 to-brand-500',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcinczarkowski/' },
    ],
  },
];

export const stats = [
  { value: '7+', label: 'lat w edukacji technicznej' },
  { value: '400+', label: 'absolwentów Opanuj Frontend' },
  { value: '#1', label: 'tech podcast o AI w Polsce' },
  { value: '25k+', label: 'programistów w społeczności' },
];

export const partners = [
  'Huuuge Games',
  'Autodesk',
  'SmartRecruiters',
  'DAZN',
  'Cabify',
  'Callstack',
];
