export interface Founder {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bio: string;
  facts: string[];
}

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    photo: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    bio: 'Autor programów edukacyjnych, kursów i podcastów promujących szersze spojrzenie na programowanie. Lead Engineer i Manager w międzynarodowych firmach produktowych — DAZN i Cabify.',
    facts: [
      'Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript)',
      'Prelegent na 4Developers, ReactiveConf i InfoShare',
      'Kontrybutor Open Source (CursorLens, openapi-typescript)',
      'Autor publikacji w Magazynie Programista i Increment by Stripe',
    ],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    photo: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii — tworzy materiały edukacyjne w oparciu o badania nad uczeniem się.',
    facts: [
      'Twórca Opanuj AI Podcast — najpopularniejszego technicznego podcastu o LLM w Polsce',
      'Specjalista: TypeScript, React, Node.js',
      'Ponad 10 lat doświadczenia w projektach komercyjnych',
      'Pasjonat dowożenia wartości biznesowej przez nowe technologie',
    ],
  },
];
