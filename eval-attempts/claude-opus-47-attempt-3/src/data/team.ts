export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  socials: { label: string; href: string }[];
  initials: string;
  accent: 'blue' | 'orange';
};

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel · Full-stack',
    bio: 'Programista full-stack z wieloletnim doświadczeniem (.NET, Node.js, TypeScript, React). Wcześniej Lead Engineer w DAZN i Cabify. Tworzy programy edukacyjne i regularnie występuje na konferencjach technologicznych.',
    expertise: ['Architektura', 'TypeScript', 'AI Workflow', 'Edukacja'],
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/psmyrdek/' },
      { label: 'X / Twitter', href: 'https://twitter.com/psmyrdek' },
    ],
    initials: 'PS',
    accent: 'blue',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel · Frontend & AI',
    bio: 'Ponad dekada doświadczenia jako frontend w SmartRecruiters. Tworzy materiały oparte o badania z dziedziny uczenia się. Prowadzi "Opanuj AI Podcast" — najpopularniejszy polski podcast o LLM.',
    expertise: ['Frontend Platform', 'React', 'LLM', 'Learning Science'],
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mczarkowski/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@Przeprogramowani' },
    ],
    initials: 'MC',
    accent: 'orange',
  },
];

export const values = [
  {
    title: 'Szersze spojrzenie',
    description:
      'Najlepsi programiści myślą szerzej: architektura, biznes, ludzie, rozwój osobisty. Uczymy całości, nie tylko składni.',
    icon: 'eye',
  },
  {
    title: 'Oparte na praktyce',
    description:
      'Materiały powstają na bazie realnych projektów i setek godzin pracy produkcyjnej — nie na tutorialach z YouTube.',
    icon: 'layers',
  },
  {
    title: 'Nauka, która działa',
    description:
      'Projektujemy kursy w oparciu o badania learning science: spaced repetition, active recall, deliberate practice.',
    icon: 'brain',
  },
  {
    title: 'AI jako codzienne narzędzie',
    description:
      'Nie hype, a rzemiosło. Pokazujemy, jak świadomie wykorzystywać AI w całym cyklu wytwarzania oprogramowania.',
    icon: 'spark',
  },
];

export const timeline = [
  { year: '2018', label: 'Start projektu', description: 'Pierwsze odcinki podcastu i materiały o programowaniu.' },
  { year: '2020', label: 'Opanuj Frontend', description: 'Premiera flagowego kursu frontendowego.' },
  { year: '2022', label: 'Opanuj TypeScript', description: 'Szkolenie dla doświadczonych developerów.' },
  { year: '2024', label: 'Opanuj AI', description: 'Warsztaty, podcast i ebooki o generatywnym AI.' },
  { year: '2025', label: '10xDevs', description: 'Flagowy program o AI w całym cyklu developmentu.' },
  { year: '2026', label: '10xDevs 3.0', description: 'Trzecia edycja z nową ścieżką certyfikacji.' },
];

export const partners = ['SmartRecruiters', 'Autodesk', 'Callstack', 'Huuuge Games', 'DAZN', 'XTB'];
