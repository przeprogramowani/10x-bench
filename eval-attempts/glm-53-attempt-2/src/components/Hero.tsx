import { COURSES } from '../data/courses';
import CourseCard from './CourseCard';
import { ArrowRightIcon, SparkIcon, YouTubeIcon } from './icons';

const STATS = [
  { value: '7', label: 'lat na rynku edukacji' },
  { value: '20,9 tys.', label: 'subskrybentów na YouTube' },
  { value: '411', label: 'filmów o technologii i AI' },
  { value: '7800+', label: 'słuchaczy podcastów' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div
        className="absolute inset-0 bg-gradient-to-b from-main/[0.06] via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[48rem] h-[24rem] rounded-full bg-main/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-main/25 bg-main/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-main">
            <SparkIcon className="w-3.5 h-3.5" />
            Programowanie · AI · Rozwój kariery
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.1]">
            Szersze spojrzenie
            <br />
            na <span className="text-gradient">programowanie</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Kursy, podcasty i YouTube dla ambitnych programistów. Łączymy świat technologii, biznesu i
            rozwoju osobistego — w epoce Generative AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#kursy"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-main text-gray-950 rounded-xl shadow-lg shadow-main/20 transition-all hover:bg-main-hover hover:shadow-main/30"
            >
              Poznaj nasze kursy
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.youtube.com/c/przeprogramowani/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all"
            >
              <YouTubeIcon className="w-5 h-5 text-red-500" />
              Zobacz na YouTube
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col text-center">
                <dt className="order-2 mt-1.5 text-xs sm:text-sm text-gray-500">{stat.label}</dt>
                <dd className="order-1 text-2xl sm:text-3xl font-bold font-heading text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="kursy" className="mt-16 sm:mt-20 scroll-mt-24">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
              Edukacja technologiczna w epoce AI
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400">
              Topowe programy edukacyjne dla ambitnych programistów
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, index) => (
              <CourseCard key={course.title} course={course} featured={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
