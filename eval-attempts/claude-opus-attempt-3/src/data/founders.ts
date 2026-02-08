import type { Founder } from '../types';

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder & Instructor',
    bio: 'Programista z wieloletnim doświadczeniem w branży IT. Pasjonat edukacji technologicznej, twórca kursów i prowadzący podcasty. Wierzy, że dobre materiały edukacyjne mogą zmienić ścieżkę kariery każdego programisty.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/psmyrdek', label: 'Twitter' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/psmyrdek', label: 'LinkedIn' },
      { platform: 'github', url: 'https://github.com/psmyrdek', label: 'GitHub' },
    ],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder & Instructor',
    bio: 'Frontend developer i edukator. Specjalizuje się w React i TypeScript. Współtwórca kursów Opanuj Frontend i Opanuj TypeScript. Przekłada złożone koncepty techniczne na przystępne materiały edukacyjne.',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/mczarkowski', label: 'Twitter' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/mczarkowski', label: 'LinkedIn' },
      { platform: 'github', url: 'https://github.com/mczarkowski', label: 'GitHub' },
    ],
  },
];
