export type Video = {
  title: string;
  id: string;
  category: 'AI' | 'Frontend' | 'Live';
  date: string;
  duration: string;
};

export type Episode = {
  title: string;
  show: 'Opanuj.AI Podcast' | 'Przeprogramowani ft. Gość';
  duration: string;
  description: string;
  href: string;
};

export const videos: Video[] = [
  {
    title: 'Poznaj AI Workflow, które działa na produkcji - LIVE 10xDevs',
    id: 'c5HVzK-tclM',
    category: 'Live',
    date: '18.06.2026',
    duration: '01:04:12',
  },
  {
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    id: 'B4t6w4QsD24',
    category: 'AI',
    date: '08.06.2026',
    duration: '18:42',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco!',
    id: '0JOszZXqKaM',
    category: 'Live',
    date: '28.05.2026',
    duration: '58:20',
  },
  {
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    id: 'XgyH-HSzKRQ',
    category: 'AI',
    date: '25.05.2026',
    duration: '16:08',
  },
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    id: '03y826SVjG0',
    category: 'AI',
    date: '12.05.2026',
    duration: '22:57',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    id: 'S-iNbyLSisE',
    category: 'Live',
    date: '29.04.2026',
    duration: '01:12:16',
  },
];

export const episodes: Episode[] = [
  {
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI',
    show: 'Opanuj.AI Podcast',
    duration: '01:21:53',
    description: 'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo?',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco!',
    show: 'Opanuj.AI Podcast',
    duration: '01:12:26',
    description: 'Relacja z konferencji, która była dla nas jedną wielką niewiadomą, ale też świetnym źródłem inspiracji.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
  },
  {
    title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI?',
    show: 'Opanuj.AI Podcast',
    duration: '00:47:22',
    description: 'GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0 i nowe obrazy w ChatGPT. Analizujemy najważniejsze premiery.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    show: 'Opanuj.AI Podcast',
    duration: '01:28:30',
    description: 'Dawid Sibiński opowiada o doświadczeniach z Copilotem, Cursorem oraz Claude Code w codziennej pracy.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
  },
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    show: 'Przeprogramowani ft. Gość',
    duration: '00:33:45',
    description: 'Wiktoria Sitko o największych barierach językowych programistów i skutecznej nauce angielskiego w IT.',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    show: 'Przeprogramowani ft. Gość',
    duration: '01:16:44',
    description: 'Tomasz Ducin o decyzjach, które kształtują charakterystykę systemu poza konkretnymi narzędziami.',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
  },
];
