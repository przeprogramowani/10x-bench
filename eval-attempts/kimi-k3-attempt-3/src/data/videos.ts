export interface Video {
  id: string;
  title: string;
  publishedAt: string;
  views: number;
}

export const youtubeChannelUrl = 'https://www.youtube.com/c/przeprogramowani';

/** Ostatnie filmy z kanału Przeprogramowani (RSS kanału, stan na lipiec 2026) */
export const latestVideos: Video[] = [
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    publishedAt: '2026-07-06',
    views: 1836,
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    publishedAt: '2026-06-02',
    views: 1365,
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    publishedAt: '2026-05-27',
    views: 2091,
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    publishedAt: '2026-05-06',
    views: 5602,
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    publishedAt: '2026-04-23',
    views: 8616,
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    publishedAt: '2026-04-07',
    views: 2122,
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    publishedAt: '2026-03-30',
    views: 2761,
  },
  {
    id: 'bcs8WS4A5Zg',
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    publishedAt: '2026-03-12',
    views: 2661,
  },
  {
    id: 'Vce4cD_5XW0',
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    publishedAt: '2026-03-09',
    views: 2395,
  },
  {
    id: 'hbuCLvwbMVg',
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami',
    publishedAt: '2026-02-26',
    views: 7381,
  },
];

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export function formatViews(views: number): string {
  return new Intl.NumberFormat('pl-PL').format(views);
}
