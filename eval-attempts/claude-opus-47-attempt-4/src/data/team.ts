export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  social: { label: string; href: string }[];
  initials: string;
  accent: 'brand' | 'accent';
};

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel · Edukator',
    initials: 'PS',
    accent: 'brand',
    bio:
      'Autor programów edukacyjnych i twórca podcastu. Były Lead Engineer i manager w DAZN oraz Cabify. Full-stack developer komfortowy w .NET/C#, Javie, Node.js, Angular i TypeScript.',
    highlights: [
      'Prelegent 4Developers, ReactiveConf, InfoShare',
      'Open source: CursorLens, openapi-typescript',
      '10+ lat komercyjnego doświadczenia',
    ],
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/psmyrdek/' },
      { label: 'X (Twitter)', href: 'https://x.com/psmyrdek' },
    ],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel · Lead Engineer',
    initials: 'MC',
    accent: 'accent',
    bio:
      'Lead techniczny Frontend Platform w SmartRecruiters, 10+ lat doświadczenia. Pasjonat neurobiologii — stosuje badania nad uczeniem się w projektowaniu materiałów edukacyjnych.',
    highlights: [
      'Twórca Opanuj.AI Podcast',
      'Specjalizacja: TypeScript, React, Node.js',
      'Wielokrotny prelegent i mentor',
    ],
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcinczarkowski/' },
      { label: 'X (Twitter)', href: 'https://x.com/marcinczarkowski' },
    ],
  },
];
