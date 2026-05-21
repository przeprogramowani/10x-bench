export type Course = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  accentClass: string;
};

export const site = {
  name: 'Przeprogramowani',
  url: 'https://przeprogramowani.pl',
  slogan: 'Szersze spojrzenie na programowanie',
  description:
    'Kursy i szkolenia dla programistów: JavaScript, TypeScript, AI, GitHub Actions oraz praktyczny podcast i materiały edukacyjne.',
  contactEmail: 'kontakt@przeprogramowani.pl',
  founders: [
    {
      name: 'Przemek Smyrdek',
      role: 'Co-Founder',
      href: 'https://www.linkedin.com/in/psmyrdek/'
    },
    {
      name: 'Marcin Czarkowski',
      role: 'Co-Founder',
      href: 'https://www.linkedin.com/in/mkczarkowski/'
    }
  ],
  social: {
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    podcast: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    newsletter: 'https://przeprogramowani.substack.com'
  }
};

export const heroCourse = {
  name: '10xDevs',
  tagline: 'Programuj z AI',
  description:
    'Nowe oblicze programowania z wykorzystaniem Generative AI. Techniki i narzędzia do świadomej pracy w całym cyklu wytwarzania oprogramowania.',
  href: 'https://10xdevs.pl'
};

export const courses: Course[] = [
  {
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Intensywne szkolenie frontendowe',
    description:
      '10 tygodni praktyki: jakość kodu, testowanie, architektura, CI/CD i codzienne wsparcie mentorów.',
    href: 'https://www.opanujfrontend.pl',
    accentClass: 'from-fuchsia-500/30 via-rose-500/20 to-orange-400/30'
  },
  {
    name: 'Opanuj TypeScript',
    tagline: 'TypeScript 5 + React 19',
    description:
      'Praktyczny kurs typowania frontendu: generyki, wzorce, narzędzia i ponad 40 ćwiczeń produkcyjnych.',
    href: 'https://www.opanujtypescript.pl',
    accentClass: 'from-sky-500/30 via-indigo-500/20 to-cyan-400/30'
  }
];

export const proofPoints = [
  '7+ lat edukacji technologicznej',
  '1500+ przeszkolonych developerów (O:FE + O:JS)',
  'Podcast, YouTube i newsletter dla ambitnych programistów'
];

export const sourceFootnote =
  'Dane opisowe pochodzą z przeprogramowani.pl, opanujfrontend.pl i opanujtypescript.pl.';
