export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  price: string | null;
  startDate: string | null;
  type: string;
  tags: string[];
  featured: boolean;
  gradient: string;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs 3.0',
    subtitle: 'Programuj z AI jak senior',
    description:
      'Intensywny kurs dla programistów, którzy chcą opanować pracę z AI w codziennym developmencie. Naucz się korzystać z narzędzi takich jak Cursor, Claude, GPT-4 i innych, by pracować 10x szybciej i efektywniej.',
    url: 'https://10xdevs.pl',
    price: '1 743 PLN',
    startDate: '18 maja 2026',
    type: 'Kurs live',
    tags: ['AI', 'Produktywność', 'Cursor', 'Claude'],
    featured: true,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Frontend od podstaw do eksperta',
    description:
      'Kompleksowy kurs frontendu zbudowany z myślą o erze AI. Poznaj React, TypeScript, i nowoczesne narzędzia deweloperskie, ucząc się jak najlepiej współpracować z AI przy budowaniu interfejsów użytkownika.',
    url: 'https://opanujfrontend.pl',
    price: null,
    startDate: null,
    type: 'Kurs online',
    tags: ['React', 'TypeScript', 'CSS', 'AI'],
    featured: false,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript: Frontend Pro',
    subtitle: 'TypeScript na poziomie eksperckim',
    description:
      'Głęboka wiedza o TypeScript — od typów podstawowych po zaawansowane wzorce. Idealne dla frontendowców, którzy chcą pisać kod bezpieczniejszy i łatwiejszy w utrzymaniu.',
    url: 'https://opanujtypescript.pl',
    price: null,
    startDate: null,
    type: 'Kurs online',
    tags: ['TypeScript', 'Typy', 'Wzorce', 'Generics'],
    featured: false,
    gradient: 'from-blue-500 to-cyan-600',
  },
];
