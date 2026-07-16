export type Episode = {
  title: string;
  date: string; // ISO
  duration?: string;
};

export type PodcastShow = {
  id: string;
  name: string;
  description: string;
  listeners: string;
  accent: string;
  links: { spotify: string; apple: string };
  episodes: Episode[];
};

// Real episodes pulled from the official RSS feeds.
export const shows: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    description:
      'Najpopularniejszy techniczny podcast o LLM-ach w Polsce. Comiesięczne, konkretne podsumowania najważniejszych wydarzeń ze świata sztucznej inteligencji.',
    listeners: '4 000+ słuchaczy',
    accent: 'from-brand-500 to-accent-500',
    links: {
      spotify: 'https://open.spotify.com/show/opanuj-ai',
      apple: 'https://podcasts.apple.com/podcast/id1690353799',
    },
    episodes: [
      { title: 'BAN NA AI?! USA blokuje Anthropica i OpenAI (Claude Mythos, Claude Fable i GPT-5.6)', date: '2026-07-01', duration: '1:21:53' },
      { title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE', date: '2026-06-03', duration: '1:12:26' },
      { title: 'GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4)', date: '2026-05-01', duration: '0:47:22' },
      { title: 'TEGO AI NIE POTRAFI — ARC-AGI-3 i koniec epoki SaaS', date: '2026-04-03', duration: '1:39:33' },
      { title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem — gość: Dawid Sibiński', date: '2026-03-19', duration: '1:28:30' },
      { title: 'OpenClaw, SWE-AGI i zmierzch chatbotów — Opus 4.6 i GPT-5.3 Codex', date: '2026-03-04', duration: '1:43:15' },
    ],
  },
  {
    id: 'przeprogramowani-gosc',
    name: 'Przeprogramowani ft. Gość',
    description:
      'Rozmowy edukacyjne z ekspertami branży. O dojrzewaniu zawodowym, architekturze, karierze i technologiach — szersze spojrzenie na programowanie.',
    listeners: '3 800+ słuchaczy',
    accent: 'from-fuchsia-500 to-brand-600',
    links: {
      spotify: 'https://creators.spotify.com/pod/profile/przeprogramowani',
      apple: 'https://podcasts.apple.com/us/podcast/przeprogramowani/id1471770526',
    },
    episodes: [
      { title: 'Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko', date: '2025-09-25' },
      { title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński', date: '2025-09-10' },
      { title: 'Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin', date: '2024-10-10' },
      { title: 'Co nowego w TypeScript? Zmiany w języku i plany konferencyjne (LIVE)', date: '2024-08-21' },
      { title: 'No-code i Low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński', date: '2024-06-13' },
      { title: 'Nauka nowoczesnego frontendu — Paweł Gnat', date: '2024-06-06' },
    ],
  },
];
