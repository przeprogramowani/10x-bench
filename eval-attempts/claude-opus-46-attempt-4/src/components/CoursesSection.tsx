import CourseCard from "./CourseCard";

const courses = [
  {
    title: "10xDevs 3.0",
    description:
      "Flagowy program szkoleniowy. Naucz się budować nowoczesne aplikacje webowe z wykorzystaniem AI, od architektury po deployment na Cloudflare.",
    features: ["AI-first", "Full-stack", "Cloudflare", "Projekty"],
    href: "https://10xdevs.pl",
    accent: "accent",
  },
  {
    title: "Opanuj Frontend",
    description:
      "Kompleksowy kurs frontend developmentu. React, TypeScript, testowanie i najlepsze praktyki tworzenia interfejsów użytkownika.",
    features: ["React", "TypeScript", "Testy", "Architektura"],
    href: "https://opanujfrontend.pl",
    accent: "brand",
  },
  {
    title: "Opanuj TypeScript",
    description:
      "Dogłębne szkolenie z TypeScript — od podstaw typowania, przez zaawansowane typy generyczne, po praktyczne wzorce w projektach.",
    features: ["Typy", "Generyki", "Utility Types", "Praktyka"],
    href: "https://opanujtypescript.pl",
    accent: "green",
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-surface-950 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Nasze kursy
          </h2>
          <p className="mt-3 text-surface-400">
            Praktyczna wiedza, która przyspiesza Twoją karierę w IT
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
