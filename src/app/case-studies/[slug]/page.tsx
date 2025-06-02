'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { cases, Case } from '@/data/cases'; 
import Image from 'next/image'; 
import { FaCheckCircle, FaTools, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

const CaseStudyPage: NextPage<CaseStudyProps> = ({ params }) => {
  const caseStudy = cases.find(
    (c) => c.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!caseStudy) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Case study not found.
      </div>
    );
  }

  return (
    <main className="container max-w-5xl mx-auto px-6 py-16 prose prose-indigo">
      <Link
        href="/case-studies"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
      >
        ← Back to Case Studies
      </Link>

      <header className="mb-10">
        <h1 className="text-5xl font-extrabold">{caseStudy.name}</h1>
        <h2 className="text-xl text-gray-600 mt-2 mb-1">{caseStudy.title}</h2>
        <div className="flex items-center space-x-6 text-gray-500 mt-1">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {caseStudy.location}
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {caseStudy.duration}
          </span>
        </div>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-3">Testimonial</h3>
        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-gray-700 text-lg">
          “{caseStudy.testimonial}”
        </blockquote>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
        <p>{caseStudy.description}</p>
      </section>

      <section className="mb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-700">Challenges</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {caseStudy.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-700">Goals</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {caseStudy.goals.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Solution</h3>
        <p>{caseStudy.solution}</p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Results & Impact</h3>
        <ul className="list-none space-y-4">
          {caseStudy.results.map((result, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-green-700 text-lg font-medium"
            >
              <FaCheckCircle className="text-green-500" />
              {result}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-indigo-700">
          <FaTools /> Tools Used
        </h3>
        <div className="flex flex-wrap gap-3">
          {caseStudy.tools.map((tool, i) => (
            <span
              key={i}
              className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full font-semibold"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.screenshots.map((screenshot, i) => (
              <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                />
                {screenshot.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                    <p className="text-sm text-white">{screenshot.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default CaseStudyPage;
