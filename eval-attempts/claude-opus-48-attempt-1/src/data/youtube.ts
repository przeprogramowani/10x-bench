export interface Video {
  id: string; // YouTube video id
  title: string;
  date: string; // ISO
}

export const youtubeChannel = {
  name: 'Przeprogramowani',
  handle: '@Przeprogramowani',
  url: 'https://www.youtube.com/@Przeprogramowani',
  description:
    'Kanał dla programistów, którzy stawiają na własny rozwój. Nowości ze świata IT, techniki efektywnej pracy i nauki, zarządzanie karierą oraz programowanie z wykorzystaniem AI.',
};

export function videoUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

// hqdefault ma stałe proporcje 16:9 i jest dostępne dla każdego filmu.
export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

// Ostatnie filmy (pobrane z kanałowego feedu RSS YouTube).
export const videos: Video[] = [
  { id: 'B4t6w4QsD24', title: 'Darmowe AI na każdym Maku — jak działa Apple Foundational Models na macOS 27', date: '2026-07-06' },
  { id: '0JOszZXqKaM', title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026', date: '2026-06-02' },
  { id: 'XgyH-HSzKRQ', title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.', date: '2026-05-27' },
  { id: '03y826SVjG0', title: 'Jak wybrać najlepszego Agenta AI do programowania?', date: '2026-05-06' },
  { id: 'S-iNbyLSisE', title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO', date: '2026-04-23' },
  { id: 'aRkECt7derY', title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs', date: '2026-04-07' },
  { id: 'vH1T5qB4dBQ', title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom', date: '2026-03-30' },
  { id: 'bcs8WS4A5Zg', title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs', date: '2026-03-12' },
  { id: 'Vce4cD_5XW0', title: 'MVP w Claude Code — Context Engineering, kontrola Agenta i refaktoryzacja', date: '2026-03-09' },
];
