export type NavItem = {
  href: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  badge: string;
  stats: string[];
  accent: string;
};

export const siteTitle = 'Przeprogramowani.pl';
export const siteTagline = 'Szersze spojrzenie na programowanie';
export const siteDescription =
  'Nowoczesna strona projektu Przeprogramowani.pl z sekcjami O nas, Podcast, YouTube oraz ofertą kursów Opanuj Frontend, Opanuj TypeScript i 10xDevs.';

export const navigation: NavItem[] = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' }
];

export const externalLinks = {
  main: 'https://przeprogramowani.pl/',
  about: 'https://przeprogramowani.pl/o-nas',
  podcast: 'https://przeprogramowani.pl/podcast',
  youtube: 'https://www.youtube.com/c/przeprogramowani',
  newsletter: 'https://przeprogramowani.substack.com',
  frontend: 'https://www.opanujfrontend.pl/',
  typescript: 'https://www.opanujtypescript.pl/',
  tenXDevs: 'https://www.10xdevs.pl/',
  contact: 'mailto:kontakt@przeprogramowani.pl'
};

export const stats = [
  { value: '7 lat', label: 'na rynku edukacji technologicznej' },
  { value: '383+', label: 'absolwentów Opanuj Frontend' },
  { value: '121+', label: 'kursantów Opanuj TypeScript' },
  { value: '3700+', label: 'absolwentów 10xDevs' }
];

export const partners = [
  'Huuuge Games',
  'Nutridome',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'edrone',
  'Xfive',
  'Euvic',
  'Strabag',
  'Autodesk'
];

export const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source.',
    image: 'https://przeprogramowani.pl/img/profiles/przemek.webp',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/'
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca Opanuj AI Podcast. Specjalista TypeScript, React i Node.js.',
    image: 'https://przeprogramowani.pl/img/profiles/marcin.webp',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/'
  }
];

export const aboutHighlights = [
  {
    title: 'Technologia + biznes + rozwój',
    description:
      'Przeprogramowani łączą praktykę software engineeringu z myśleniem o architekturze, procesie, karierze i wpływie biznesowym.'
  },
  {
    title: 'Materiały dla ambitnych developerów',
    description:
      'Tworzą kursy, podcasty, newsletter i treści wideo dla osób, które chcą rozwijać się szerzej niż tylko w obrębie kodu.'
  },
  {
    title: 'Edukacja osadzona w realnych projektach',
    description:
      'Programy szkoleniowe bazują na doświadczeniu z firm produktowych, pracy na produkcji i nowoczesnym stacku frontendowym.'
  }
];

export const courses: Course[] = [
  {
    slug: '10xdevs',
    title: '10xDevs 3.0',
    tagline: 'Hero programu',
    description:
      'AI-Native Software Engineering dla developerów, którzy chcą pracować z agentami świadomie, pragmatycznie i w realnych scenariuszach greenfield oraz brownfield.',
    href: externalLinks.tenXDevs,
    badge: 'Programuj z AI',
    stats: [
      '5 modułów o współpracy z AI w całym cyklu wytwarzania',
      'Claude Code, Codex, Cursor i praktyka produkcyjna',
      '3700+ absolwentów poprzednich edycji'
    ],
    accent: 'from-cyan-400/25 via-cyan-500/10 to-transparent'
  },
  {
    slug: 'frontend',
    title: 'Opanuj Frontend: AI Edition',
    tagline: 'Kurs premium',
    description:
      'Intensywne 10-tygodniowe szkolenie dla osób, które chcą budować zaawansowane aplikacje webowe wysokiej jakości i wejść na poziom technicznego lidera frontendu.',
    href: externalLinks.frontend,
    badge: 'Frontend',
    stats: [
      '5 obszernych modułów o jakości, testach, CI/CD i architekturze',
      'Elastyczny harmonogram i codzienne wsparcie seniorów',
      '383 programistów przyspieszyło rozwój'
    ],
    accent: 'from-rose-500/25 via-orange-500/10 to-transparent'
  },
  {
    slug: 'typescript',
    title: 'Opanuj TypeScript',
    tagline: 'Frontend Pro',
    description:
      'Praktyczny kurs TypeScript 5 i React 19 skupiony na generykach, wzorcach typowania, narzędziach ekosystemu i decyzjach, które poprawiają jakość kodu na produkcji.',
    href: externalLinks.typescript,
    badge: 'TypeScript',
    stats: [
      'TypeScript 5.7+ i React 19 w praktyce',
      '40+ ćwiczeń oraz topowe narzędzia: SWR, React Query, Zod, tRPC, Astro 5',
      '121 programistów dołączyło już do kursu'
    ],
    accent: 'from-blue-500/25 via-sky-500/10 to-transparent'
  }
];

export const homePillars = [
  {
    title: 'Nowoczesne programowanie',
    description:
      'Treści i szkolenia o frontendzie, TypeScripcie, AI, jakości kodu i architekturze aplikacji.'
  },
  {
    title: 'Treści audio i video',
    description:
      'Regularne publikacje w formie podcastów i filmów, które pomagają utrzymać kontakt z tym, co ważne w branży.'
  },
  {
    title: 'Społeczność i praktyka',
    description:
      'Programy zaprojektowane tak, by łączyć teorię, ćwiczenia, konsultacje, feedback i doświadczenia z pracy nad produktem.'
  }
];

export const contentNotes = [
  'Sekcje Podcast i YouTube pobierają aktualne materiały z oficjalnych stron Przeprogramowanych.',
  'Copy dla kursów i zespołu opiera się na publicznych informacjach z przeprogramowani.pl, opanujfrontend.pl, opanujtypescript.pl oraz 10xdevs.pl.'
];
