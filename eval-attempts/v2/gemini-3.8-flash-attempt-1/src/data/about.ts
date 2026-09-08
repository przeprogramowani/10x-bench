import type { FounderProfile } from './types';

export const FOUNDERS: FounderProfile[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    avatarUrl: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedinUrl: 'https://www.linkedin.com/in/psmyrdek/',
    highlights: [
      'Lead Engineer & Engineering Manager (DAZN, Cabify)',
      'Prelegent konferencji branżowych: InfoShare, 4Developers, ReactiveConf',
      'Autor programów 10xDevs, Opanuj Frontend oraz licznych podcastów',
      'Współtwórca narzędzi open source i entuzjasta inżynierii oprogramowania',
    ],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    avatarUrl: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedinUrl: 'https://www.linkedin.com/in/mkczarkowski/',
    highlights: [
      'Staff / Lead Frontend Engineer w SmartRecruiters (10+ lat doświadczenia)',
      'Twórca "Opanuj.AI Podcast" — czołowego podcastu o generatywnym AI w Polsce',
      'Projektant metodyk nauki opartych na kognitywistyce i neurobiologii',
      'Ekspert technologii TypeScript, ekosystemu React i modeli językowych',
    ],
  },
];

export const ABOUT_MISSION = {
  tagline: 'Szersze spojrzenie na programowanie',
  headline: 'Łączymy świat programowania, biznesu i rozwoju',
  description:
    'Przeprogramowani to miejsce, w którym rzetelne programowanie spotyka się ze świadomym rozwojem inżynierskim i biznesowym. Wierzymy, że najlepsi inżynierowie to ci, którzy patrzą szerzej — na architekturę, na biznes, na narzędzia AI i na ludzi.',
  values: [
    {
      title: 'Jakość inżynierska ponad hype',
      description:
        'Nie gonimy za powierzchownymi trendami. Uczymy rzetelnych fundamentów, czystej architektury i świadomego stosowania nowych technologii w systemach produkcyjnych.',
    },
    {
      title: 'Świadoma praca z AI',
      description:
        'Traktujemy AI jako potężne narzędzie inżyniera, a nie drogę na skróty. Pokazujemy, jak pracować z agentami i modelami bez utraty kontroli nad jakością kodu.',
    },
    {
      title: 'Społeczność i wymiana wiedzy',
      description:
        'Budujemy przestrzeń dla ambitnych programistów — poprzez podcasty, kanał YouTube, warsztaty i programy kohortowe z bezpośrednim kontaktem.',
    },
  ],
  stats: [
    { value: '7+ lat', label: 'obecności na rynku edukacji technologicznej' },
    { value: '4000+', label: 'słuchaczy podcastu Opanuj.AI' },
    { value: '400+', label: 'absolwentów flagowych programów technicznych' },
    { value: '100%', label: 'rzetelnej wiedzy inżynierskiej' },
  ],
};
