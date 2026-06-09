export interface Video {
  title: string;
  category: string;
  description: string;
  url: string;
}

export const channelDescription =
  'Kanał dla programistów nastawionych na rozwój: nowości ze świata IT, techniki efektywnej pracy i nauki oraz praktyczne materiały o narzędziach AI — od Cursora po Claude Code.';

export const videos: Video[] = [
  {
    title: 'AI w terminalu — Claude Code Deep Dive',
    category: 'AI Tooling',
    description:
      'Praktyczny przegląd możliwości Claude Code: konfiguracja, system messages, skille i codzienny workflow agentowy w terminalu.',
    url: 'https://www.youtube.com/watch?v=eifcDbiHfFw',
  },
  {
    title: 'Opanuj Agenta AI (Cursor, Codex, MCP) — praktyczne scenariusze dla programistów',
    category: 'AI Tooling',
    description:
      'Jak skutecznie pracować z agentami AI w edytorze: realne scenariusze z Cursorem, Codexem i integracjami MCP.',
    url: 'https://www.youtube.com/watch?v=WJLGzf7qq-c',
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    category: 'LIVE',
    description:
      'Wspólny live z AI Product Heroes — jak wykorzystać potencjał Claude Code do budowania produktów end-to-end.',
    url: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
  },
  {
    title: '5 technik czystego kodu z AI (Copilot, Cursor, Claude Code)',
    category: 'Dobre praktyki',
    description:
      'Pięć sprawdzonych technik utrzymania jakości kodu podczas pracy z asystentami AI — od promptowania po code review.',
    url: 'https://www.youtube.com/@przeprogramowani/videos',
  },
  {
    title: 'AI workflow w dowolnym IDE',
    category: 'AI Tooling',
    description:
      'Jak zbudować powtarzalny workflow z AI niezależnie od edytora, w którym pracujesz na co dzień.',
    url: 'https://www.youtube.com/@przeprogramowani/videos',
  },
  {
    title: '10xDevs LIVE — AI-Native Software Engineering w praktyce',
    category: 'LIVE',
    description:
      'Cotygodniowe spotkania na żywo wokół programu 10xDevs: planowanie, implementacja i utrzymanie projektów z pomocą AI.',
    url: 'https://www.youtube.com/@przeprogramowani/streams',
  },
];
