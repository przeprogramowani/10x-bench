export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  socials: { twitter?: string; linkedin?: string; github?: string };
  gradient: [string, string];
};

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel · Product Builder · Edukator',
    bio: 'Od 15+ lat w software developmencie. Buduje produkty, prowadzi kursy i dzieli się wiedzą o AI w codziennej pracy programisty.',
    initials: 'PS',
    socials: {
      twitter: 'https://twitter.com/psmyrdek',
      linkedin: 'https://linkedin.com/in/psmyrdek',
      github: 'https://github.com/psmyrdek',
    },
    gradient: ['#6E44FF', '#A486FF'],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel · Host podcastu · Senior Engineer',
    bio: 'Inżynier z wieloletnim doświadczeniem w architekturze aplikacji webowych. Współprowadzi podcast Przeprogramowani i szkoli zespoły.',
    initials: 'MC',
    socials: {
      twitter: 'https://twitter.com/czarkowskimc',
      linkedin: 'https://linkedin.com/in/marcinczarkowski',
    },
    gradient: ['#FF9A00', '#FFC15C'],
  },
];

export const partners = [
  'Huuuge Games',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'Autodesk',
  'XTB',
];
