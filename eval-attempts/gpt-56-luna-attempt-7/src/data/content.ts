export type Episode = {
  title: string;
  description: string;
  duration: string;
  show: string;
  image: string;
  href: string;
};

export type Video = {
  title: string;
  label: string;
  date: string;
  image: string;
  href: string;
};

export const episodes: Episode[] = [
  {
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI',
    description: 'Claude Mythos, Claude Fable i GPT-5.6. Najważniejsze historie ze świata sztucznej inteligencji.',
    duration: '01:21:53',
    show: 'Opanuj.AI Podcast',
    image: 'https://i3.ytimg.com/vi/c5HVzK-tclM/maxresdefault.jpg',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco!',
    description: 'Relacja z konferencji i rozmowa o tym, co naprawdę zmieni się w codziennej pracy developera.',
    duration: '01:12:26',
    show: 'Opanuj.AI LIVE',
    image: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
  },
  {
    title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI?',
    description: 'Nowe modele, Cursor 3.0, DeepSeek V4 i pytanie, czy wyścig AI ma jeszcze jednego lidera.',
    duration: '00:47:22',
    show: 'Opanuj.AI Podcast',
    image: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
  },
  {
    title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS',
    description: 'Czy AI rozumie świat? Sprawdzamy granice modeli i przyszłość klasycznych produktów SaaS.',
    duration: '01:39:43',
    show: 'Opanuj.AI Podcast',
    image: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
  },
  {
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    description: 'Dawid Sibiński o tym, jak budować własny workflow z narzędziami wspierającymi programowanie.',
    duration: '01:28:30',
    show: 'Opanuj.AI Podcast',
    image: 'https://i3.ytimg.com/vi/B4t6w4QsD24/maxresdefault.jpg',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
  },
];

export const videos: Video[] = [
  {
    title: 'Poznaj AI Workflow, które działa na produkcji',
    label: 'LIVE 10xDevs',
    date: 'ostatnio',
    image: 'https://i3.ytimg.com/vi/c5HVzK-tclM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=c5HVzK-tclM',
  },
  {
    title: 'Darmowe AI na każdym Maku - Apple Foundational Models',
    label: 'AI / narzędzia',
    date: 'ostatnio',
    image: 'https://i3.ytimg.com/vi/B4t6w4QsD24/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=B4t6w4QsD24',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco!',
    label: 'Opanuj.AI LIVE',
    date: 'maj 2026',
    image: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
  },
  {
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    label: 'Konferencje',
    date: 'maj 2026',
    image: 'https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
  },
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    label: 'AI / development',
    date: 'maj 2026',
    image: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=03y826SVjG0',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI',
    label: 'Claude Code',
    date: 'maj 2026',
    image: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
  },
];

export const courses = [
  {
    id: 'frontend',
    eyebrow: '01 / frontend',
    title: 'Opanuj Frontend',
    suffix: ': AI Edition',
    description: 'Zbuduj warsztat kompletnego frontend developera: jakość, testy, CI/CD, architektura i praca zespołowa.',
    meta: '10 tygodni · 383 absolwentów',
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    theme: 'coral',
    icon: '</>',
  },
  {
    id: 'typescript',
    eyebrow: '02 / typescript',
    title: 'Opanuj TypeScript',
    suffix: ': Frontend Pro',
    description: 'Pisz niezawodne aplikacje z TypeScriptem 5, Reactem 19 i wzorcami, które sprawdzają się na produkcji.',
    meta: '40+ ćwiczeń · React 19 · TS 5.7+',
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    theme: 'blue',
    icon: 'TS',
  },
  {
    id: 'ai',
    eyebrow: '03 / ai-native',
    title: '10xDevs',
    suffix: ' 4.0',
    description: 'Przejdź od promptowania do AI-Native Software Engineering. Buduj, testuj i wdrażaj z agentami.',
    meta: '5+1 tygodni · start 14.09.2026',
    href: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    theme: 'lime',
    icon: '10x',
  },
];

export const team = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer, prelegent i kontrybutor Open Source.',
    image: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters. Entuzjasta neurobiologii, TypeScriptu i Reacta. Twórca Opanuj AI Podcast.',
    image: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const brands = ['Huuuge Games', 'Nutridome', 'SmartRecruiters', 'Future Processing', 'Callstack', 'edrone'];
