export type Host = {
  name: string;
  role: string;
  bio: string;
  twitter: string;
  initials: string;
};

export const hosts: Host[] = [
  {
    name: 'Marcin Czarkowski',
    role: 'Współtwórca Przeprogramowani',
    bio: 'Technical Lead platformy frontendowej w SmartRecruiters, przedsiębiorca i doświadczony trener programowania. Współautor Frontend Tech Radar.',
    twitter: 'https://twitter.com/mkczarkowski',
    initials: 'MC',
  },
  {
    name: 'Przemek Smyrdek',
    role: 'Współtwórca Przeprogramowani',
    bio: 'Lead engineer i engineering manager w globalnych firmach produktowych, m.in. DAZN i Cabify. Od lat dzieli się wiedzą o inżynierii i AI.',
    twitter: 'https://twitter.com/psmyrdek',
    initials: 'PS',
  },
];
