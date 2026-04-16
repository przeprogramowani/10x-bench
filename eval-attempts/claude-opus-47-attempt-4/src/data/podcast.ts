export type PodcastEpisode = {
  title: string;
  date: string;
  duration: string;
  summary: string;
  url: string;
  spotifyUrl?: string;
  appleUrl?: string;
  tags: string[];
};

export const podcastShow = {
  name: 'Opanuj.AI Podcast',
  tagline: 'Cykliczne podsumowania nowinek ze świata AI',
  hosts: ['Marcin Czarkowski', 'Przemek Smyrdek'],
  description:
    'Co kilka tygodni Marcin i Przemek zabierają Cię za kulisy najważniejszych wydarzeń w świecie AI — od premier modeli, przez narzędzia deweloperskie, po zmiany w branży. Najpopularniejszy polski podcast o LLM.',
  platforms: {
    apple: 'https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799',
    spotify: 'https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy',
    web: 'https://opanuj.ai/podcast/',
  },
};

export const episodes: PodcastEpisode[] = [
  {
    title: 'TEGO AI NIE POTRAFI — ARC-AGI-3 i koniec epoki SaaS',
    date: '2026-04-03',
    duration: '1h 12m',
    summary:
      'Analizujemy nowy benchmark ARC-AGI-3, twarde limity dzisiejszych systemów AI i rozważamy, dlaczego klasyczny SaaS może ustąpić miejsca modelowemu oprogramowaniu.',
    url: 'https://opanuj.ai/podcast/',
    tags: ['ARC-AGI', 'SaaS', 'benchmark'],
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    date: '2026-03-19',
    duration: '1h 28m',
    summary:
      'Gość: Dawid Sibiński. Porównujemy nowoczesne narzędzia do programowania wspieranego AI i dzielimy się praktycznymi workflow z codziennej pracy.',
    url: 'https://opanuj.ai/podcast/',
    tags: ['Claude Code', 'Cursor', 'Copilot'],
  },
  {
    title: 'OpenClaw, SWE-AGI i zmierzch chatbotów',
    date: '2026-03-04',
    duration: '57m',
    summary:
      'Agentic AI w natarciu — Opus 4.6 i GPT-5.3 Codex zmieniają zasady gry. Omawiamy, dlaczego proste chatboty odchodzą do lamusa.',
    url: 'https://opanuj.ai/podcast/',
    tags: ['Agenci', 'Opus 4.6', 'Codex'],
  },
  {
    title: 'Doktor AI nadchodzi',
    date: '2026-02-01',
    duration: '1h 05m',
    summary:
      'ChatGPT Health vs. Google MedGemma, konstytucja Anthropica oraz chińskie modele GLM-4.7 i KIMI K2.5 — co przyniósł pierwszy miesiąc roku.',
    url: 'https://opanuj.ai/podcast/',
    tags: ['Medycyna', 'GLM-4.7', 'KIMI'],
  },
  {
    title: 'Wielkie Podsumowanie AI w 2025',
    date: '2026-01-09',
    duration: '1h 47m',
    summary:
      'Specjalny, podsumowujący odcinek: 10 unikalnych aspektów rozwoju sztucznej inteligencji w 2025 roku — modele, narzędzia, przełomy i wpadki.',
    url: 'https://opanuj.ai/podcast/',
    tags: ['Rok 2025', 'Podsumowanie', 'Trendy'],
  },
  {
    title: 'GPT-5.2 to Gemini killer?',
    date: '2026-01-01',
    duration: '58m',
    summary:
      'Pojedynek Google i OpenAI wchodzi w decydującą fazę. Rozmawiamy o integracji MCP, wiarygodności benchmarków i tym, kto ma dziś lepszy model.',
    url: 'https://opanuj.ai/podcast/',
    tags: ['GPT-5.2', 'Gemini', 'MCP'],
  },
];
