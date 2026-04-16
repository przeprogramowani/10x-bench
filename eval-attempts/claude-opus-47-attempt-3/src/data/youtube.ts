export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  views: string;
  thumbnail: string;
  tag: string;
};

const channelBaseVideoUrl = 'https://www.youtube.com/watch?v=';

export const youTubeVideos: (YouTubeVideo & { url: string })[] = [
  {
    id: 'ai-agents-claude-code-2026',
    title: 'Claude Code w praktyce: budujemy aplikację end-to-end',
    description:
      'Jak wygląda sensowny workflow z agentem Claude Code. Pokazuję pełny cykl: research, planowanie, implementacja i review — w jednym projekcie.',
    duration: '42:15',
    publishedAt: '2026-03-18',
    views: '38 tys.',
    thumbnail: 'claude-code',
    tag: 'AI Agents',
  },
  {
    id: 'mvp-weekend-ai',
    title: 'MVP w weekend z pomocą AI — bez bajek i marketingu',
    description:
      'Pokazuję realny projekt MVP zbudowany w 48h z pomocą AI. Co zadziałało, co się wywaliło i jak poprawiłbym to dziś.',
    duration: '28:47',
    publishedAt: '2026-02-25',
    views: '54 tys.',
    thumbnail: 'mvp-weekend',
    tag: 'AI w praktyce',
  },
  {
    id: 'typescript-5-advanced',
    title: 'TypeScript 5: typy warunkowe i zaawansowane generyki',
    description:
      'Deep dive w najbardziej niedoceniane części systemu typów. Realne przykłady, z którymi spotkasz się w produkcyjnym kodzie.',
    duration: '35:02',
    publishedAt: '2026-02-07',
    views: '22 tys.',
    thumbnail: 'typescript',
    tag: 'TypeScript',
  },
  {
    id: 'context-engineering',
    title: 'Context engineering — nowa umiejętność programisty',
    description:
      'Dlaczego „prompt engineering" to za mało. O tym, jak budować kontekst, zarządzać pamięcią agenta i projektować pętle sprzężenia zwrotnego.',
    duration: '31:18',
    publishedAt: '2026-01-20',
    views: '41 tys.',
    thumbnail: 'context-engineering',
    tag: 'AI Agents',
  },
  {
    id: 'react-19-server-components',
    title: 'React 19 w produkcji: server components bez ściemy',
    description:
      'Co naprawdę zmieniło się w React 19 i kiedy warto migrować. Pokazuję kod, konfiguracje i realne kompromisy.',
    duration: '39:44',
    publishedAt: '2025-12-14',
    views: '67 tys.',
    thumbnail: 'react-19',
    tag: 'React',
  },
  {
    id: 'ai-pair-programming',
    title: 'Pair programming z AI — co działa, a co nie',
    description:
      'Na podstawie setek godzin pracy z agentami pokazuję wzorce, które naprawdę przyspieszają rozwój i te, które tylko obiecują.',
    duration: '26:55',
    publishedAt: '2025-11-29',
    views: '89 tys.',
    thumbnail: 'pair-programming',
    tag: 'AI Agents',
  },
].map((v) => ({ ...v, url: `${channelBaseVideoUrl}${v.id}` }));
