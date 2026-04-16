export type YouTubeVideo = {
  id: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  views: string;
  category: 'Claude Code' | 'AI' | 'Frontend' | 'TypeScript' | 'Kariera';
  thumbnailGradient: [string, string];
};

export const videos: YouTubeVideo[] = [
  {
    id: 'pp-001',
    title: 'Claude Code w praktyce — workflow Product Buildera',
    date: '2026-04-10',
    duration: '42:18',
    description:
      'Pełny workflow budowy aplikacji SaaS z Claude Code: meta-prompty, subagenci, spec-driven development, integracja z GitHub CLI.',
    views: '38k',
    category: 'Claude Code',
    thumbnailGradient: ['#6E44FF', '#FF9A00'],
  },
  {
    id: 'pp-002',
    title: 'Spec-driven development — jak projektować AI workflows',
    date: '2026-03-27',
    duration: '28:03',
    description:
      'Pokazuję jak piszę specyfikacje, które LLMy realizują end-to-end. Case study z realnego projektu open source.',
    views: '24k',
    category: 'AI',
    thumbnailGradient: ['#5A32E6', '#C3B0FF'],
  },
  {
    id: 'pp-003',
    title: 'React 19 Server Components w produkcji — full stack case',
    date: '2026-03-15',
    duration: '35:40',
    description:
      'Stawiamy produkcyjną aplikację w oparciu o React 19, RSC i TypeScript. Od routingu po deploy na Cloudflare.',
    views: '29k',
    category: 'Frontend',
    thumbnailGradient: ['#FF9A00', '#FFC15C'],
  },
  {
    id: 'pp-004',
    title: 'TypeScript 5 — 7 wzorców, które zmieniły moje projekty',
    date: '2026-02-28',
    duration: '22:51',
    description:
      'Conditional types, branded types, template literal types i cztery inne wzorce, które regularnie używam w pracy.',
    views: '19k',
    category: 'TypeScript',
    thumbnailGradient: ['#321A85', '#8A63FF'],
  },
  {
    id: 'pp-005',
    title: 'Jak zbudowałem MVP w weekend używając tylko Claude Code',
    date: '2026-02-14',
    duration: '48:12',
    description:
      'Pełny time-lapse budowy MVP produktu. Od pustej strony do działającej aplikacji z płatnościami i panelem admina.',
    views: '52k',
    category: 'Claude Code',
    thumbnailGradient: ['#6E44FF', '#A486FF'],
  },
  {
    id: 'pp-006',
    title: 'Kariera programisty w epoce AI — co zmienić już dziś?',
    date: '2026-01-30',
    duration: '18:27',
    description:
      'Nowe reguły gry na rynku pracy dla programistów. Co wyróżnia tych, którzy rozwijają się pomimo (a nawet dzięki) AI.',
    views: '31k',
    category: 'Kariera',
    thumbnailGradient: ['#B85F00', '#FFAE2E'],
  },
];
