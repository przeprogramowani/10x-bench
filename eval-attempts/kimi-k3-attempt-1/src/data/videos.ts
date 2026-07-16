export interface Video {
  id: string;
  title: string;
  tag: string;
}

export const videos: Video[] = [
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku — jak działa Apple Foundational Models na macOS 27',
    tag: 'AI',
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026',
    tag: 'AI',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    tag: 'AI',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    tag: 'Narzędzia',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO',
    tag: 'Live Demo',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    tag: 'Live',
  },
];

export const videoUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const videoThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const videoEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
