export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  thumbnailGradient: string;
  category: 'AI & Tooling' | 'Architektura' | 'Kariera' | 'Code review' | 'Podcast';
  url: string;
};

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'yt-claude-code-workflow',
    title: 'Mój workflow z Claude Code w 2026 — od researchu do PR',
    description:
      'Pokazuję end-to-end, jak planuję feature, jak domeną wiem, co agent dostaje w kontekście i jak review wygląda w praktyce.',
    date: '2026-04-09',
    duration: '24:18',
    thumbnailGradient: 'from-brand-500 via-brand-700 to-ink-900',
    category: 'AI & Tooling',
    url: 'https://www.youtube.com/c/przeprogramowani',
  },
  {
    id: 'yt-mcp-internals',
    title: 'MCP od środka — co naprawdę dzieje się w Model Context Protocol',
    description:
      'Dlaczego MCP to nie jest „kolejne API do LLM-a”. Pokazuję architekturę, przykładowe serwery i pułapki integracyjne.',
    date: '2026-03-26',
    duration: '19:52',
    thumbnailGradient: 'from-accent-500 via-brand-600 to-ink-900',
    category: 'AI & Tooling',
    url: 'https://www.youtube.com/c/przeprogramowani',
  },
  {
    id: 'yt-legacy-refactor-ai',
    title: 'Refaktoring legacy w 2 godziny — jak AI zmienia grę',
    description:
      'Biorę realny moduł legacy i w locie pokazuję proces: mapowanie domeny, planowanie, bezpieczny refaktor.',
    date: '2026-03-12',
    duration: '31:07',
    thumbnailGradient: 'from-fuchsia-500 via-brand-600 to-ink-900',
    category: 'Code review',
    url: 'https://www.youtube.com/c/przeprogramowani',
  },
  {
    id: 'yt-ts-patterns',
    title: 'Najbardziej niedoceniane wzorce w TypeScript 5',
    description:
      'Branded types, satisfies, template literals — pokazuję jak używam ich w prawdziwych projektach, nie w zabawkach.',
    date: '2026-02-28',
    duration: '22:40',
    thumbnailGradient: 'from-sky-500 via-accent-500 to-ink-900',
    category: 'Architektura',
    url: 'https://www.youtube.com/c/przeprogramowani',
  },
  {
    id: 'yt-dev-kariera',
    title: 'Jak rozwijać karierę dewelopera w erze AI (bez paniki)',
    description:
      'Praktyczna mapa rozwoju: co ignorować, na czym się skupiać, jak inwestować czas w kompetencje, które nie wyparują.',
    date: '2026-02-15',
    duration: '27:14',
    thumbnailGradient: 'from-amber-500 via-fuchsia-500 to-ink-900',
    category: 'Kariera',
    url: 'https://www.youtube.com/c/przeprogramowani',
  },
  {
    id: 'yt-architektura-mvp',
    title: 'Architektura MVP: co wziąć, co wyrzucić',
    description:
      'Stack na szybki start, decyzje które później zabolą, i minimum narzędzi dla małego zespołu.',
    date: '2026-01-30',
    duration: '18:45',
    thumbnailGradient: 'from-emerald-500 via-accent-500 to-ink-900',
    category: 'Architektura',
    url: 'https://www.youtube.com/c/przeprogramowani',
  },
];
