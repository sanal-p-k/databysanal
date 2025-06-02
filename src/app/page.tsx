'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

const glassMorphism = 'bg-white/5 backdrop-blur-sm border border-white/10';
const hoverEffect = 'hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300';

// Testimonials from your actual projects
export const testimonials = [
  {
    name: 'Lean IT Team',
    title: 'Internal Ops Team',
    testimonial: 'We just needed something fast and simple. Sanal’s AppSheet app became our daily control center. No fluff, no dashboards – just what we needed.',
    benefits: ['70% less communication lag', 'No training needed', 'Full mobile access'],
    avatar: 'IT',
    avatarColor: 'text-blue-400',
    image: '/images/case-studies/lean-it-team.jpg'
  },
  {
    name: 'Staffspectrum',
    title: 'Internship Mentor',
    testimonial: 'Sanal created a Power BI dashboard that helped us track performance and spot trends fast. His work in analysis, DB design, and reporting had real impact.',
    benefits: ['Live performance dashboards', 'Improved decision-making', 'Clear data insights'],
    avatar: 'SS',
    avatarColor: 'text-purple-400',
    image: '/images/case-studies/staffspectrum.jpg'
  }
];

// Features you specialize in
const features = [
  {
    name: 'Smart Hiring Systems',
    description: 'Automated hiring workflows with Power Apps and Power BI',
    icon: '📋',
    color: 'text-cyan-400'
  },
  {
    name: 'Mobile Workflow Apps',
    description: 'Fast, minimal automation apps using AppSheet for teams on the go',
    icon: '📱',
    color: 'text-blue-400'
  },
  {
    name: 'Data-Driven Dashboards',
    description: 'Interactive dashboards for decision-makers, built with Power BI',
    icon: '📊',
    color: 'text-purple-400'
  },
  {
    name: 'Follow-up Automation',
    description: 'Timely reminders and task tracking so nothing slips through',
    icon: '🔔',
    color: 'text-pink-400'
  },
  {
    name: 'Zero-Code Solutions',
    description: 'No-code tools to help teams automate without IT overhead',
    icon: '🛠️',
    color: 'text-green-400'
  },
  {
    name: 'Custom App Development',
    description: 'Tailored apps to manage data, people, and operations',
    icon: '⚙️',
    color: 'text-indigo-400'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
        <div className="relative text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            I Turn Data into Decisions.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
          >
            Hi, I'm Sanal - I use Power BI, AppSheet, and Power Apps to solve real business problems with automation, insights, and smarter workflows.          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="https://www.youtube.com/@databysanal/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-full border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-300"
              >
                YouTube
              </motion.button>
            </Link>
            <Link href="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-300"
              >
                See Case Studies
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What We Can Build for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${glassMorphism} ${hoverEffect} p-8 rounded-2xl`}
              >
                <div className="text-4xl mb-4" style={{ color: feature.color }}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.name}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${glassMorphism} ${hoverEffect} p-6 rounded-2xl`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <span className={`${testimonial.avatarColor} text-xl font-bold`}>{testimonial.avatar}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{testimonial.testimonial}</p>
                <ul className="space-y-2">
                  {testimonial.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-400">
                      <span className={`${testimonial.avatarColor} mr-2`}>✅</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
