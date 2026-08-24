export type MediaItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  meta: string;
  duration: string;
};

export const podcasts: MediaItem[] = [
  {
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI',
    description: 'Co oznacza polityka wokol modeli Claude Mythos, Claude Fable i GPT-5.6 dla programistow?',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    meta: 'Opanuj.AI Podcast',
    duration: '01:21:53',
  },
  {
    title: 'Bylismy na Google I/O 2026 - wrazenia na goraco!',
    description: 'Relacja na zywo z konferencji i najwazniejsze premiery, ktore zmieniaja warsztat developera.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    meta: 'Opanuj.AI LIVE',
    duration: '01:12:26',
  },
  {
    title: 'GPT-5.5 vs Opus 4.7 - kto rzadzi na scenie AI?',
    description: 'GPT-5.5, Claude Opus, Cursor i DeepSeek - co warto wiedziec przed wyborem narzedzia?',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    meta: 'Opanuj.AI Podcast',
    duration: '00:47:22',
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    description: 'Rozmowa z Dawidem Sibinskim o tym, jak AI zmienia codziennosc full-stack developera.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    meta: 'Przeprogramowani ft. Gosc',
    duration: '01:28:30',
  },
];

export const videos: MediaItem[] = [
  {
    title: 'Poznaj AI Workflow, ktore dziala na produkcji',
    description: 'LIVE 10xDevs o praktycznych procesach wspolpracy z AI.',
    href: 'https://www.youtube.com/watch?v=c5HVzK-tclM',
    image: 'https://i3.ytimg.com/vi/c5HVzK-tclM/maxresdefault.jpg',
    meta: '10xDevs LIVE',
    duration: '52 min',
  },
  {
    title: 'Darmowe AI na kazdym Maku',
    description: 'Jak dziala Apple Foundational Models na macOS 27?',
    href: 'https://www.youtube.com/watch?v=B4t6w4QsD24',
    image: 'https://i3.ytimg.com/vi/B4t6w4QsD24/maxresdefault.jpg',
    meta: 'Opanuj.AI',
    duration: '18 min',
  },
  {
    title: 'Bylismy na Google I/O 2026',
    description: 'Najwazniejsze wrazenia z konferencji, na goraco.',
    href: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
    image: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
    meta: 'Opanuj.AI LIVE',
    duration: '1 h 12 min',
  },
  {
    title: 'Bylem na Google I/O 2026. Nie tego sie spodziewalem.',
    description: 'Osobista perspektywa na nowe narzedzia Google dla programistow.',
    href: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
    image: 'https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
    meta: 'Przeprogramowani',
    duration: '17 min',
  },
  {
    title: 'Jak wybrac najlepszego Agenta AI do programowania?',
    description: 'Framework podejmowania decyzji zamiast slepego sledzenia rankingow.',
    href: 'https://www.youtube.com/watch?v=03y826SVjG0',
    image: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
    meta: 'Opanuj.AI',
    duration: '24 min',
  },
  {
    title: '5 Agent Skills do jakosciowego programowania z AI',
    description: 'Claude Code LIVE DEMO, ktore mozesz odtworzyc we wlasnym projekcie.',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    image: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
    meta: 'Opanuj.AI',
    duration: '36 min',
  },
];
