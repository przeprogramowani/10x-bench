export type Video = {
  id: string; // real YouTube video id (verified via oEmbed)
  title: string;
  date: string; // ISO
};

// Real, verified videos from the official channel:
// https://www.youtube.com/@przeprogramowani
export const channelUrl = 'https://www.youtube.com/@przeprogramowani';

export const videos: Video[] = [
  { id: 'B4t6w4QsD24', title: 'Darmowe AI na każdym Maku — jak działa Apple Foundational Models na macOS 27', date: '2026-07-06' },
  { id: '0JOszZXqKaM', title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026', date: '2026-06-02' },
  { id: 'XgyH-HSzKRQ', title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.', date: '2026-05-27' },
  { id: '03y826SVjG0', title: 'Jak wybrać najlepszego Agenta AI do programowania?', date: '2026-05-06' },
  { id: 'S-iNbyLSisE', title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO', date: '2026-04-23' },
];

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
