import React from 'react';
import { siteData } from '../data/siteData';

export default function Courses() {
  const courses = siteData.courses;

  return (
    <section id="kursy" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Edukacja technologiczna w epoce AI
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-900 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block text-primary-400 text-xs font-bold uppercase tracking-wider mb-2">
                      {course.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  {course.featured && (
                    <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Nowość
                    </span>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center text-primary-400 font-semibold group-hover:text-primary-300 transition-colors">
                  Szczegóły
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
