export type MediaItem = {
  title: string;
  href: string;
  duration: string;
  tag?: string;
  image?: string;
};

export const videos: MediaItem[] = [
  {
    title: 'Poznaj AI Workflow, które działa na produkcji',
    href: 'https://www.youtube.com/watch?v=c5HVzK-tclM',
    duration: '1:04:12',
    tag: '10xDevs LIVE',
    image: 'https://i3.ytimg.com/vi/c5HVzK-tclM/maxresdefault.jpg',
  },
  {
    title: 'Darmowe AI na każdym Maku. Jak działa Apple Foundational Models?',
    href: 'https://www.youtube.com/watch?v=B4t6w4QsD24',
    duration: '18:42',
    tag: 'Opanuj AI',
    image: 'https://i3.ytimg.com/vi/B4t6w4QsD24/maxresdefault.jpg',
  },
  {
    title: 'Byliśmy na Google I/O 2026. Wrażenia na gorąco',
    href: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
    duration: '1:12:26',
    tag: 'LIVE',
    image: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
  },
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    href: 'https://www.youtube.com/watch?v=03y826SVjG0',
    duration: '24:06',
    tag: 'AI w praktyce',
    image: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
  },
];

export const podcasts: MediaItem[] = [
  {
    title: 'BAN NA AI?! USA blokuje Anthropic i OpenAI',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
    duration: '1:21:53',
    tag: 'Opanuj.AI Podcast',
  },
  {
    title: 'Byliśmy na Google I/O 2026. Wrażenia na gorąco',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
    duration: '1:12:26',
    tag: 'Opanuj.AI Podcast',
  },
  {
    title: 'Programista vs. angielski: od strachu do sukcesu',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    duration: '33:45',
    tag: 'Przeprogramowani ft. Gość',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    duration: '45:56',
    tag: 'Przeprogramowani ft. Gość',
  },
];

export const courses = [
  {
    number: '01',
    eyebrow: 'Frontend',
    title: 'Opanuj\nFrontend',
    description: 'Zostań nowoczesnym frontend developerem. Od fundamentów po testy, CI/CD, open source i architekturę aplikacji webowych.',
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    image: 'https://przeprogramowani.pl/img/featured/kurs-ofe.jpg',
    tone: 'bg-[#e2e0d8] text-ink',
    accent: 'bg-rust',
  },
  {
    number: '02',
    eyebrow: 'TypeScript',
    title: 'Opanuj\nTypeScript',
    description: 'Pisz pewniejsze aplikacje, które łatwiej rozwijać. Praktyczna praca z TypeScript 5 i React 19.',
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    image: 'https://przeprogramowani.pl/img/featured/kurs-ots.jpg',
    tone: 'bg-[#233240] text-paper',
    accent: 'bg-acid',
  },
];
