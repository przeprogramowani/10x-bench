export const navItems = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export const podcastEpisodes = [
  {
    number: '118',
    label: 'OPANUJ.AI PODCAST',
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA I OPEN AI',
    subtitle: 'Claude Mythos, Claude Fable i GPT-5.6',
    duration: '01:21:53',
    description: 'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo?',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
    tone: 'lime',
  },
  {
    number: '117',
    label: 'OPANUJ.AI LIVE',
    title: 'BYLIŚMY NA GOOGLE I/O 2026',
    subtitle: 'Wrażenia na gorąco i najważniejsze premiery',
    duration: '01:12:26',
    description: 'Relacja z konferencji, która była dla nas jedną wielką niewiadomą, ale też źródłem wielu ciekawych pytań.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
    tone: 'sky',
  },
  {
    number: '116',
    label: 'OPANUJ.AI PODCAST',
    title: 'GPT-5.5 VS OPUS 4.7 - KTO RZĄDZI NA SCENIE AI?',
    subtitle: 'Cursor 3.0, DeepSeek V4 i Meta Muse',
    duration: '00:47:22',
    description: 'W kwietniu dostaliśmy wysyp dużych premier. Sprawdzamy, co naprawdę zmienia się w codziennej pracy programisty.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
    tone: 'coral',
  },
  {
    number: '115',
    label: 'OPANUJ.AI PODCAST',
    title: 'TEGO AI NIE POTRAFI',
    subtitle: 'ARC-AGI-3 i koniec epoki SaaS',
    duration: '01:39:15',
    description: 'Czy AI naprawdę rozumie świat? Rozkładamy na części nowe testy, ograniczenia modeli i przyszłość oprogramowania.',
    href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
    tone: 'violet',
  },
];

export const youtubeVideos = [
  {
    id: 'c5HVzK-tclM',
    category: 'LIVE / 10xDEVS',
    title: 'Poznaj AI Workflow, które działa na produkcji',
    description: 'Od pierwszego promptu do powtarzalnego procesu w zespole.',
    href: 'https://www.youtube.com/watch?v=c5HVzK-tclM',
  },
  {
    id: 'B4t6w4QsD24',
    category: 'AI / NEWS',
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models',
    description: 'Co potrafią nowe modele i jak wykorzystać je lokalnie?',
    href: 'https://www.youtube.com/watch?v=B4t6w4QsD24',
  },
  {
    id: '0JOszZXqKaM',
    category: 'OPANUJ.AI LIVE',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco!',
    description: 'Najważniejsze premiery i obserwacje z konferencji.',
    href: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
  },
  {
    id: 'XgyH-HSzKRQ',
    category: 'KONFERENCJE',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    description: 'Szczere spojrzenie na wydarzenie, trendy i kierunek branży.',
    href: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
  },
  {
    id: '03y826SVjG0',
    category: 'AI / NARZĘDZIA',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    description: 'Praktyczny przegląd agentów i scenariuszy ich użycia.',
    href: 'https://www.youtube.com/watch?v=03y826SVjG0',
  },
  {
    id: 'S-iNbyLSisE',
    category: 'CLAUDE CODE / LIVE DEMO',
    title: '5 Agent Skills do jakościowego programowania z AI',
    description: 'Live demo z konkretnym workflow i narzędziami.',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
  },
];

export const courses = [
  {
    number: '01',
    tag: 'FRONTEND / AI EDITION',
    title: 'Opanuj\nFrontend',
    description: '10-tygodniowy program dla osób, które chcą tworzyć wysokiej jakości aplikacje webowe, a nie tylko znać kolejny framework.',
    points: ['Testy i jakość', 'CI/CD i produkcja', 'Architektura aplikacji'],
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    tone: 'coral',
  },
  {
    number: '02',
    tag: 'TYPESCRIPT / REACT 19',
    title: 'Opanuj\nTypeScript',
    description: 'Praktyczny kurs o typach generycznych, React 19 i narzędziach, które pomagają dowozić stabilny kod na produkcji.',
    points: ['Typy generyczne', 'Wzorce dla Reacta', 'Zod, tRPC i API'],
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    tone: 'sky',
  },
];

export const people = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer z doświadczeniem w .NET, Node.js, Angularze i TypeScripcie.',
    image: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    href: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters. Entuzjasta neurobiologii i twórca materiałów opartych o badania nad uczeniem się. Specjalista TypeScript, React i Node.js.',
    image: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    href: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];
