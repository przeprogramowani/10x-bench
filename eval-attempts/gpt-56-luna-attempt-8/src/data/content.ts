export type Course = {
  eyebrow: string;
  title: string;
  description: string;
  details: string;
  color: string;
  mark: string;
  href: string;
  cta: string;
};

export type Episode = {
  index: string;
  show: string;
  title: string;
  description: string;
  duration: string;
  href: string;
};

export type Video = {
  title: string;
  category: string;
  duration: string;
  image: string;
  href: string;
};

export const navLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export const stats = [
  { value: '7', label: 'lat edukacji technologicznej' },
  { value: '1 500+', label: 'przeszkolonych programistów' },
  { value: '400+', label: 'odcinków i rozmów' },
];

export const courses: Course[] = [
  {
    eyebrow: 'Frontend / 10 tygodni',
    title: 'Opanuj Frontend',
    description: 'Zostań kompletnym frontend developerem i buduj aplikacje, za które możesz wziąć odpowiedzialność.',
    details: 'React · testy · CI/CD · architektura',
    color: '#d9f765',
    mark: 'OF',
    href: 'https://opanujfrontend.pl',
    cta: 'Poznaj program',
  },
  {
    eyebrow: 'TypeScript / Frontend Pro',
    title: 'Opanuj TypeScript',
    description: 'Pracuj pewniej z typami, Reactem 19 i narzędziami, które pomagają dowozić jakość na produkcji.',
    details: 'TS 5 · React 19 · Zod · generics',
    color: '#ff725d',
    mark: 'TS',
    href: 'https://opanujtypescript.pl',
    cta: 'Zobacz szkolenie',
  },
];

export const episodes: Episode[] = [
  {
    index: '01',
    show: 'OPANUJ.AI PODCAST',
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA I OPEN AI',
    description: 'Claude Mythos, Claude Fable i GPT-5.6. Co naprawdę dzieje się na styku technologii i regulacji?',
    duration: '01:21:53',
    href: 'https://podcasters.spotify.com/pod/show/opanujai',
  },
  {
    index: '02',
    show: 'OPANUJ.AI LIVE',
    title: 'Byliśmy na Google I/O 2026. Wrażenia na gorąco',
    description: 'Relacja z konferencji, która była jedną wielką niewiadomą. Rozmawiamy o tym, co ma znaczenie dla devów.',
    duration: '01:12:26',
    href: 'https://podcasters.spotify.com/pod/show/opanujai',
  },
  {
    index: '03',
    show: 'PRZEPROGRAMOWANI FT. GOŚĆ',
    title: 'Architektura frontendu: co naprawdę ma znaczenie?',
    description: 'Tomasz Ducin o decyzjach, które kształtują aplikację dużo mocniej niż wybór kolejnego frameworka.',
    duration: '01:16:44',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
  },
  {
    index: '04',
    show: 'PRZEPROGRAMOWANI FT. GOŚĆ',
    title: 'Programista vs. angielski: od strachu do sukcesu',
    description: 'Wiktoria Sitko o barierach językowych i sposobach na skuteczną naukę angielskiego w IT.',
    duration: '00:33:45',
    href: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
  },
];

export const videos: Video[] = [
  {
    title: 'Poznaj AI Workflow, które działa na produkcji',
    category: '10xDEVS LIVE',
    duration: '01:18:24',
    image: 'https://i3.ytimg.com/vi/c5HVzK-tclM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=c5HVzK-tclM',
  },
  {
    title: 'Darmowe AI na każdym Maku: Apple Foundational Models',
    category: 'AI / NARZĘDZIA',
    duration: '22:48',
    image: 'https://i3.ytimg.com/vi/B4t6w4QsD24/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=B4t6w4QsD24',
  },
  {
    title: 'Byliśmy na Google I/O 2026. Nie tego się spodziewałem',
    category: 'OPANUJ.AI LIVE',
    duration: '34:12',
    image: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
  },
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    category: 'AI / PROGRAMOWANIE',
    duration: '28:06',
    image: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=03y826SVjG0',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI',
    category: 'CLAUDE CODE LIVE DEMO',
    duration: '41:37',
    image: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
  },
  {
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem',
    category: 'TECH / OPINIE',
    duration: '19:54',
    image: 'https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
  },
];

export const team = [
  {
    initials: 'PS',
    name: 'Przemek Smyrdek',
    role: 'Co-founder · Lead Engineer',
    text: 'Tworzy programy edukacyjne, kursy i podcasty. Full-stack developer z doświadczeniem w DAZN i Cabify.',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    initials: 'MC',
    name: 'Marcin Czarkowski',
    role: 'Co-founder · Frontend Lead',
    text: 'Lead techniczny Platformy Frontendowej w SmartRecruiters. Specjalista TypeScript, React i Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];
