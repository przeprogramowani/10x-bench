export type Course = {
  name: string;
  description: string;
  href: string;
  accent: string;
  tag: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
};

export const courses: Course[] = [
  {
    name: '10xDevs',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia do świadomej pracy z AI w całym cyklu wytwarzania oprogramowania.',
    href: 'https://10xdevs.pl',
    accent: 'from-cyan-300/30 to-blue-500/20',
    tag: 'Program flagowy',
  },
  {
    name: 'Opanuj Frontend',
    description:
      'Kurs Opanuj Frontend: AI Edition to kluczowa wiedza dla nowoczesnego frontend developera.',
    href: 'https://www.opanujfrontend.pl',
    accent: 'from-pink-300/30 to-orange-500/20',
    tag: 'Frontend + AI',
  },
  {
    name: 'Opanuj TypeScript',
    description:
      'Pracuj z najnowszą wersją TypeScript 5 w połączeniu z Reactem 19 i buduj solidne, skalowalne aplikacje.',
    href: 'https://www.opanujtypescript.pl',
    accent: 'from-blue-300/30 to-indigo-500/20',
    tag: 'TypeScript 5 + React 19',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Inżynier i lider techniczny z doświadczeniem full-stack (.NET, Java, Node.js, Angular, TypeScript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    image: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead platformy frontendowej i twórca materiałów edukacyjnych opartych o praktykę. Specjalizuje się w TypeScript, React i Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    image: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
  },
];

export const aboutHighlights = [
  'Łączymy świat programowania, biznesu i rozwoju.',
  'Tworzymy praktyczne programy edukacyjne dla developerów.',
  'Budujemy społeczność nowoczesnych programistów w Polsce.',
];
