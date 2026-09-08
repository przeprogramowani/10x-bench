import type { Founder } from './types';

export const FOUNDERS: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na konferencjach 4Developers, ReactiveConf i InfoShare. Kontrybutor projektów Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    image: '/img/przemek.webp'
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem inżynierskim. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad mechanizmami uczenia się dorosłych. Twórca "Opanuj AI Podcast" — wiodącego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React i Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    image: '/img/marcin.webp'
  }
];

export const BRAND_INFO = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description: 'Miejsce, w którym programowanie spotyka się z rozwojem osobistym, architekturą, biznesem i ludźmi. Tworzymy treści, szkolenia oraz społeczność dla ambitnych developerów, którzy chcą patrzeć szerzej.',
  foundingYear: 2017,
  contactEmail: 'kontakt@przeprogramowani.pl',
  socials: {
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    newsletter: 'https://przeprogramowani.substack.com',
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani'
  }
};
