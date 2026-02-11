import CourseCard from './CourseCard';
import { courses } from '../data/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Edukacja technologiczna
            <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              w epoce AI
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
            Przeprogramowani to platforma edukacyjna dla programistów, którzy chcą rozwijać swoje
            umiejętności z wykorzystaniem najnowszych narzędzi AI. Kursy, podcasty i społeczność —
            wszystko w jednym miejscu.
          </p>
        </div>

        {/* Courses grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
