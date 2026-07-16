export type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: Member[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Współzałożyciel',
    initials: 'PS',
    bio: 'Full-stack developer z doświadczeniem w .NET/C#, Javie, Node.js, Angularze i TypeScripcie. Wcześniej Lead Engineer i Manager w DAZN oraz Cabify. Twórca programów edukacyjnych i podcastów, prelegent na konferencjach.',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Współzałożyciel',
    initials: 'MC',
    bio: 'Lider techniczny platformy frontendowej w SmartRecruiters, 10+ lat doświadczenia. Twórca „Opanuj.AI Podcast” — najpopularniejszego technicznego podcastu o LLM-ach w Polsce. Specjalizuje się w TypeScript, React i Node.js.',
  },
];
