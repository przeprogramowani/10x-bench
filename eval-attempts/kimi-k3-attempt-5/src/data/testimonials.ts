export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/** Opinie uczestników programów Przeprogramowanych (źródło: 10xdevs.pl) */
export const testimonials: Testimonial[] = [
  {
    quote: 'Nauczyłem się konfigurować środowisko tak, żeby AI pracowało dla mnie, a nie na odwrót.',
    author: 'Mariusz Szustka',
    role: 'Senior SysOps Engineer, PSE Innowacje',
  },
  {
    quote:
      'Jestem w stanie zmierzyć się z problemami dużo większymi, niż kiedykolwiek byłem w stanie wcześniej jako programista.',
    author: 'Mateusz Jarzębowski-Bownik',
    role: 'Software Engineer',
  },
  {
    quote: '10xDevs to takie mięcho, które można wziąć i na dzień dobry w pracy rzeczywiście poczujesz różnicę.',
    author: 'Kacper Kustra',
    role: 'Software Engineer',
  },
  {
    quote:
      'Jestem bardziej świadomy tego, jak korzystać z AI. Moje prompty są teraz konkretne, bardziej ustrukturyzowane i odpowiedzi z LLM są dzięki temu dużo lepsze.',
    author: 'Bartosz Chojnacki',
    role: 'AI Practice Lead',
  },
  {
    quote: 'Kup, zobacz, nie pożałujesz, bo sporo elementów otwiera oczy.',
    author: 'Adam Mazur',
    role: 'Uczestnik 10xDevs',
  },
  {
    quote: 'Bierz w ciemno, zobaczysz jak szybko się zwróci.',
    author: 'Piotr Jakubowski',
    role: 'Uczestnik 10xDevs',
  },
];
