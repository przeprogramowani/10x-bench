export interface Founder {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  linkedin: string;
}

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    photo: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    bio: [
      'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript).',
      'Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    ],
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    photo: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    bio: [
      'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się.',
      'Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    ],
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const values = [
  {
    icon: '🎯',
    title: 'Szersze spojrzenie',
    text: 'Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, na biznes, na ludzi i na siebie.',
  },
  {
    icon: '🛠️',
    title: 'Praktyka ponad teorię',
    text: 'Łączymy dziesiątki zrealizowanych projektów komercyjnych z efektywnym przekazywaniem wiedzy.',
  },
  {
    icon: '🤝',
    title: 'Społeczność',
    text: 'Od ponad 7 lat tworzymy darmowe treści dla społeczności tysięcy programistów i przyjmujemy feedback każdego dnia.',
  },
  {
    icon: '🤖',
    title: 'Świadome AI',
    text: 'Uczymy świadomego korzystania z potencjału Generative AI w całym cyklu wytwarzania oprogramowania.',
  },
];

export const activities = [
  {
    title: 'Treści',
    text: 'Newsletter, blog i artykuły o programowaniu, karierze i rozwoju. Co tydzień porcja wartościowych materiałów.',
    href: 'https://przeprogramowani.substack.com',
    linkLabel: 'Newsletter',
  },
  {
    title: 'Podcasty',
    text: 'Opanuj.AI Podcast oraz Przeprogramowani ft. Gość — ponad 7800 słuchaczy.',
    href: '/podcast',
    linkLabel: 'Posłuchaj',
  },
  {
    title: 'Kursy',
    text: '10xDevs, Opanuj Frontend i Opanuj TypeScript — topowe programy edukacyjne dla ambitnych programistów.',
    href: '/#kursy',
    linkLabel: 'Zobacz kursy',
  },
  {
    title: 'Produkty',
    text: '10xRules.ai — buduj osobiste reguły AI i zarządzaj promptami zespołowymi na jednej platformie.',
    href: 'https://10xrules.ai',
    linkLabel: '10xRules.ai',
  },
];
