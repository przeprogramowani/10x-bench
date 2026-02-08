import type { Course } from '@/types';

export const courses: Course[] = [
  {
    slug: '10xdevs',
    title: '10xDevs 3.0',
    subtitle: 'Programowanie z AI — nowa era developmentu',
    description:
      'Kompleksowy program, który nauczy Cię efektywnie wykorzystywać AI w codziennej pracy developera. Od prompt engineeringu przez AI-assisted coding po budowanie pełnych aplikacji z pomocą narzędzi AI. Trzecia edycja naszego flagowego kursu — zaktualizowana o najnowsze modele i techniki.',
    featured: true,
    price: '2 497 zł',
    originalPrice: '3 497 zł',
    ctaUrl: 'https://10xdevs.pl',
    ctaLabel: 'Dołącz do 10xDevs 3.0',
    color: 'brand-primary',
    nextEdition: 'Marzec 2026',
    studentsCount: '3700+',
    features: [
      '12 tygodni intensywnego programu',
      'Projekty praktyczne z AI',
      'Dostęp do zamkniętej społeczności',
      'Certyfikat ukończenia',
      'Lifetime access do materiałów',
      'Wsparcie mentorów',
    ],
    modules: [
      {
        title: 'Fundamenty AI dla developerów',
        description: 'Zrozum jak działają modele językowe i jak wykorzystać je w praktyce.',
        topics: [
          'Jak działają LLM — od tokenów do odpowiedzi',
          'Prompt engineering — techniki i best practices',
          'Przegląd narzędzi AI dla developerów',
          'Konfiguracja środowiska pracy z AI',
        ],
      },
      {
        title: 'AI-Assisted Coding',
        description: 'Naucz się pisać kod szybciej i lepiej z pomocą AI.',
        topics: [
          'GitHub Copilot — zaawansowane techniki',
          'Cursor, Claude Code i inne IDE z AI',
          'Code review z wykorzystaniem AI',
          'Debugowanie i refactoring z AI',
        ],
      },
      {
        title: 'Budowanie aplikacji z AI',
        description: 'Twórz pełne aplikacje wykorzystując AI na każdym etapie.',
        topics: [
          'Architektura aplikacji AI-first',
          'Integracja z API modeli językowych',
          'RAG — Retrieval Augmented Generation',
          'Agenty AI i automatyzacja workflow',
        ],
      },
      {
        title: 'AI w produkcji',
        description: 'Wdrażaj rozwiązania AI w realnych projektach.',
        topics: [
          'Testowanie aplikacji AI',
          'Monitoring i observability',
          'Bezpieczeństwo i etyka AI',
          'Optymalizacja kosztów i wydajności',
        ],
      },
    ],
    testimonials: [
      {
        name: 'Anna Kowalska',
        role: 'Senior Frontend Developer',
        content:
          'Kurs 10xDevs totalnie zmienił mój sposób pracy. Teraz używam AI codziennie i jestem 3x bardziej produktywna. Polecam każdemu developerowi!',
      },
      {
        name: 'Michał Nowak',
        role: 'Full-stack Developer',
        content:
          'Najlepszy kurs o AI dla programistów w Polsce. Praktyczne podejście, świetni prowadzący i niesamowita społeczność. Warto każdej złotówki.',
      },
      {
        name: 'Karolina Wiśniewska',
        role: 'Tech Lead',
        content:
          'Dzięki 10xDevs wprowadziłam AI do workflow mojego zespołu. Nasze code review są szybsze, a jakość kodu wzrosła. Game changer.',
      },
    ],
  },
  {
    slug: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    subtitle: 'AI Edition — nowoczesny frontend z pomocą AI',
    description:
      'Kompleksowy kurs frontendowy zaktualizowany o najnowsze techniki AI-assisted development. React, TypeScript, Next.js i narzędzia AI — wszystko czego potrzebujesz aby zostać nowoczesnym frontend developerem.',
    featured: false,
    price: '1 497 zł',
    originalPrice: '1 997 zł',
    ctaUrl: 'https://opanujfrontend.pl',
    ctaLabel: 'Zapisz się na kurs',
    color: 'brand-accent',
    studentsCount: '2100+',
    features: [
      '8 tygodni kursu',
      'Projekty w React + TypeScript',
      'AI-assisted development',
      'Dostęp do materiałów na zawsze',
      'Wsparcie na forum',
      'Certyfikat ukończenia',
    ],
    modules: [
      {
        title: 'Nowoczesny JavaScript & TypeScript',
        description: 'Solidne fundamenty pod profesjonalny frontend.',
        topics: [
          'ES2024+ — najnowsze features',
          'TypeScript — zaawansowane typy',
          'Async/await i zarządzanie stanem',
          'Tooling: Vite, ESLint, Prettier',
        ],
      },
      {
        title: 'React w praktyce',
        description: 'Od komponentów po pełne aplikacje.',
        topics: [
          'React 19 — Server Components i Actions',
          'Zarządzanie stanem — Zustand, React Query',
          'Testowanie — Vitest, Testing Library',
          'Performance i optymalizacja',
        ],
      },
      {
        title: 'Next.js i architektura',
        description: 'Budowanie produkcyjnych aplikacji.',
        topics: [
          'App Router i SSR/SSG/ISR',
          'API Routes i middleware',
          'Autentykacja i autoryzacja',
          'Deployment i CI/CD',
        ],
      },
    ],
    testimonials: [
      {
        name: 'Piotr Zieliński',
        role: 'Junior Developer',
        content:
          'Dzięki Opanuj Frontend dostałem swoją pierwszą pracę jako frontend developer. Kurs dał mi praktyczne umiejętności, których szukali pracodawcy.',
      },
      {
        name: 'Marta Dąbrowska',
        role: 'UX/UI Designer → Frontend Dev',
        content:
          'Przebranżowiłam się z designu na frontend dzięki temu kursowi. Świetnie wyjaśnione koncepty i dużo praktyki.',
      },
    ],
  },
  {
    slug: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'Frontend Pro — TypeScript na poziomie zaawansowanym',
    description:
      'Głębokie zanurzenie w TypeScript dla frontend developerów. Od zaawansowanych typów generycznych po budowanie type-safe aplikacji. Kurs dla tych, którzy chcą naprawdę opanować TypeScript.',
    featured: false,
    price: '997 zł',
    originalPrice: '1 497 zł',
    ctaUrl: 'https://opanujtypescript.pl',
    ctaLabel: 'Rozpocznij naukę',
    color: 'brand-secondary',
    studentsCount: '1500+',
    features: [
      '6 tygodni kursu',
      'Zaawansowane typy i generyki',
      'Type-safe patterns',
      'Projekty praktyczne',
      'Dostęp na zawsze',
      'Certyfikat ukończenia',
    ],
    modules: [
      {
        title: 'Zaawansowane typy',
        description: 'Opanuj system typów TypeScript.',
        topics: [
          'Conditional types i mapped types',
          'Template literal types',
          'Type narrowing i type guards',
          'Utility types — deep dive',
        ],
      },
      {
        title: 'Generyki w praktyce',
        description: 'Twórz reusable, type-safe kod.',
        topics: [
          'Generyczne komponenty React',
          'Generyczne hooki i utility functions',
          'Constraints i default types',
          'Infer i zaawansowane patterns',
        ],
      },
      {
        title: 'TypeScript w architekturze',
        description: 'Budowanie solidnych, typowanych aplikacji.',
        topics: [
          'Type-safe API contracts (Zod, tRPC)',
          'Branded types i phantom types',
          'Module augmentation i declaration merging',
          'Migracja JavaScript → TypeScript',
        ],
      },
    ],
    testimonials: [
      {
        name: 'Jakub Kowalczyk',
        role: 'Mid Frontend Developer',
        content:
          'Wreszcie rozumiem zaawansowane typy TypeScript. Kurs jest wymagający, ale daje realne umiejętności, które od razu stosuję w pracy.',
      },
      {
        name: 'Ewa Mazurek',
        role: 'Senior React Developer',
        content:
          'Nawet po latach pracy z TypeScriptem znalazłam tu mnóstwo nowych rzeczy. Świetna jakość materiałów i zadań.',
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
