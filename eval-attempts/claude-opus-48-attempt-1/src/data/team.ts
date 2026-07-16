export interface Founder {
  name: string;
  role: string;
  initials: string;
  accent: string;
  bio: string[];
}

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel',
    initials: 'PS',
    accent: 'from-brand-500 to-indigo-500',
    bio: [
      'Autor programów edukacyjnych, kursów i podcastów.',
      'Lead Engineer i Manager w DAZN oraz Cabify.',
      'Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript).',
      'Prelegent 4Developers, ReactiveConf i InfoShare oraz kontrybutor Open Source.',
    ],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel',
    initials: 'MC',
    accent: 'from-sky-500 to-cyan-400',
    bio: [
      'Lead techniczny Frontend Platform w SmartRecruiters (10+ lat doświadczenia).',
      'Pasjonat neurobiologii — tworzy materiały w oparciu o badania nad nauką.',
      'Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce.',
      'Specjalista od TypeScript, React i Node.js.',
    ],
  },
];

export const values = [
  {
    title: 'Szersza perspektywa',
    description:
      'Najlepsi programiści myślą szeroko — biorą pod uwagę architekturę, biznes, ludzi i samych siebie.',
    icon: 'compass',
  },
  {
    title: 'Praktyka ponad teorię',
    description:
      'Uczymy na realnych scenariuszach i projektach, które od razu przekładają się na codzienną pracę.',
    icon: 'code',
  },
  {
    title: 'Oparcie w badaniach',
    description:
      'Materiały projektujemy w oparciu o badania nad uczeniem się — tak, by wiedza naprawdę została z Tobą.',
    icon: 'brain',
  },
  {
    title: 'Rozwój w każdym wymiarze',
    description:
      'Od technicznych deep-dive’ów po rozmowy o karierze i rozwoju osobistym — pomagamy rosnąć całościowo.',
    icon: 'sprout',
  },
] as const;
