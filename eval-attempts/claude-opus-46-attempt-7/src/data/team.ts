export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedinUrl: string;
  experience: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder & Lead Instructor',
    bio: 'Programista z wieloletnim doświadczeniem w firmach takich jak DAZN i Cabify. Prowadzi kursy i podcasty pomagające programistom rozwijać się szybciej.',
    initials: 'PS',
    linkedinUrl: 'https://linkedin.com/in/psmyrdek',
    experience: ['DAZN', 'Cabify', '10xDevs'],
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder & Instructor',
    bio: 'Frontend developer z doświadczeniem w SmartRecruiters. Specjalizuje się w React i TypeScript. Współprowadzi podcasty i tworzy materiały edukacyjne.',
    initials: 'MC',
    linkedinUrl: 'https://linkedin.com/in/marcinczarkowski',
    experience: ['SmartRecruiters', 'Opanuj Frontend'],
  },
];
