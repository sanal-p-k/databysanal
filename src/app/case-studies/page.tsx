'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cases, Case } from '@/data/cases';
import Image from 'next/image';

const CaseStudiesPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Inspiring Case Studies
      </motion.h1>

      {cases.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          Case studies coming soon. Stay tuned!
        </p>
      ) : (
        <div
          className={`grid gap-8 ${
            cases.length === 1
              ? 'grid-cols-1 max-w-xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {cases.map((caseItem, index: number) => (
            <motion.div
              key={caseItem.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href={`/case-studies/${caseItem.slug}`}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {caseItem.image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {caseItem.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {caseItem.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
