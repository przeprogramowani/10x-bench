export type Video = {
  id: string; // YouTube video id
  title: string;
  date: string; // ISO date
  views: number;
};

// Ostatnie filmy z kanału YouTube @Przeprogramowani (dane z kanału).
export const videos: Video[] = [
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku — jak działa Apple Foundational Models na macOS 27',
    date: '2026-07-06',
    views: 1824,
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026',
    date: '2026-06-02',
    views: 1365,
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    date: '2026-05-27',
    views: 2091,
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    date: '2026-05-06',
    views: 5600,
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO',
    date: '2026-04-23',
    views: 8615,
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    date: '2026-04-07',
    views: 2120,
  },
];

export const youtubeChannelUrl = 'https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw';

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
