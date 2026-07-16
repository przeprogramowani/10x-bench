export type Video = {
  id: string;
  title: string;
  category: string;
  duration: string;
};

export const videos: Video[] = [
  { id: 'B4t6w4QsD24', title: 'Darmowe AI na każdym Maku — Apple Foundation Models', category: 'AI • Narzędzia', duration: '18:24' },
  { id: '0JOszZXqKaM', title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco!', category: 'Opanuj.AI LIVE', duration: '1:12:26' },
  { id: 'XgyH-HSzKRQ', title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.', category: 'AI • Relacja', duration: '14:08' },
  { id: '03y826SVjG0', title: 'Jak wybrać najlepszego Agenta AI do programowania?', category: 'AI • Programowanie', duration: '22:41' },
  { id: 'S-iNbyLSisE', title: '5 Agent Skills do jakościowego programowania z AI', category: 'Claude Code • Demo', duration: '34:10' },
  { id: 'aRkECt7derY', title: 'Product Builders Day — AI Product Heroes i 10xDevs', category: 'LIVE • 10xDevs', duration: '1:48:32' },
];

export const podcastEpisodes = [
  {
    title: 'BAN NA AI?! USA blokuje Anthropica i OpenAI',
    duration: '1:21:53',
    series: 'Opanuj.AI Podcast',
    description: 'Czy najlepsze modele AI przestały być zwykłym produktem i stały się technologią kontrolowaną przez państwo?',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
  },
  {
    title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco!',
    duration: '1:12:26',
    series: 'Opanuj.AI Podcast',
    description: 'Najważniejsze premiery, zaskoczenia i praktyczne wnioski prosto z konferencji Google.',
    url: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
  },
  {
    title: 'GPT-5.5 vs Opus 4.7 — kto rządzi na scenie AI?',
    duration: '47:22',
    series: 'Opanuj.AI Podcast',
    description: 'Porównanie największych premier: modeli, narzędzi programistycznych i nowych możliwości generatywnego AI.',
    url: 'https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy',
  },
  {
    title: 'Programista vs. angielski: od strachu do sukcesu',
    duration: '33:45',
    series: 'Przeprogramowani ft. Gość',
    description: 'Wiktoria Sitko o barierach językowych programistów i skutecznej nauce angielskiego w IT.',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    duration: '45:56',
    series: 'Przeprogramowani ft. Gość',
    description: 'Wojciech Trawiński o drodze od młodego entuzjasty do doświadczonego profesjonalisty.',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'Architektura frontendu: co naprawdę ma znaczenie?',
    duration: '1:16:44',
    series: 'Przeprogramowani ft. Gość',
    description: 'Tomasz Ducin o decyzjach architektonicznych, które kształtują prawdziwe systemy.',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
];

export const courses = [
  {
    eyebrow: 'Frontend bez luk',
    title: 'Opanuj Frontend',
    description: '10 tygodni praktycznej nauki: jakość, testowanie, CI/CD, praca zespołowa i architektura aplikacji.',
    href: 'https://www.opanujfrontend.pl',
    color: 'lime',
    badge: 'AI Edition',
    meta: '5 modułów • 383+ uczestników',
  },
  {
    eyebrow: 'TypeScript na produkcji',
    title: 'Opanuj TypeScript',
    description: 'Podnieś jakość projektów i łatwość ich rozwoju, pracując z TypeScript 5 i React 19.',
    href: 'https://www.opanujtypescript.pl',
    color: 'blue',
    badge: 'TS 5 + React 19',
    meta: 'Typy • Architektura • Praktyka',
  },
];
