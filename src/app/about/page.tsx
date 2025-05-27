"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Discover how we help businesses transform their data into meaningful insights with our premium Power BI solutions.
          </p>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-12 mb-16"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Transform Your Data into Insights</h2>
            <p className="text-gray-600 mb-6">
              At Data By Sanal, we specialize in creating premium Power BI templates that help businesses transform complex data into meaningful insights. Our templates are designed by industry experts to deliver maximum value.
            </p>
            <div className="flex gap-4">
              <Link
                href="/templates"
                className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Templates
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Premium Templates",
                description: "Expertly crafted Power BI templates designed to showcase your data in the most effective way."
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Custom Solutions",
                description: "Tailored Power BI solutions that perfectly match your business needs and requirements."
              },
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Professional Support",
                description: "24/7 support from our team of Power BI experts to help you get the most out of our templates."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Expert Design",
                description: "Our templates are crafted by industry experts with years of Power BI experience."
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Regular Updates",
                description: "We constantly update our templates to stay current with the latest Power BI features."
              },
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Customizable",
                description: "All our templates can be easily customized to match your brand and requirements."
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Business-Focused",
                description: "Our templates are designed with business analytics in mind, not just visual appeal."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-text-muted">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
