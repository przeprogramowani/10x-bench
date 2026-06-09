export interface Video {
  id: string;
  title: string;
  date: string;
}

export const CHANNEL_URL = 'https://www.youtube.com/@przeprogramowani';

export const CHANNEL_DESCRIPTION =
  'Kanał dla programistów, którzy stawiają na rozwój. Nowości ze świata IT, techniki efektywnej pracy i nauki oraz praktyczne programowanie z AI — od benchmarków modeli po live demo z Claude Code.';

export const VIDEOS: Video[] = [
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE',
    date: '2 czerwca 2026',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    date: '27 maja 2026',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    date: '6 maja 2026',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI — Claude Code LIVE DEMO',
    date: '23 kwietnia 2026',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    date: '7 kwietnia 2026',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    date: '30 marca 2026',
  },
  {
    id: 'bcs8WS4A5Zg',
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    date: '12 marca 2026',
  },
  {
    id: 'Vce4cD_5XW0',
    title: 'MVP w Claude Code — Context Engineering, kontrola Agenta i refaktoryzacja',
    date: '9 marca 2026',
  },
  {
    id: 'hbuCLvwbMVg',
    title: 'Od chaosu do AI-Native Infrastructure',
    date: '26 lutego 2026',
  },
];
