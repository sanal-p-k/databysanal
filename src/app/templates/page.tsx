"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

const templates = [
  {
    id: 1,
    name: "Minimalist Green",
    description: "Download the full editable design in pptx",
    image: "/templates/screenshots/minimalist_green.png",
    price: "Free",
    originalPrice: "",
    specialOffer: false
  },
  {
    id: 2,
    name: "Silver Simplicity",
    description: "Download the full editable design in pptx, pbix and Power BI Theme (.json)",
    image: "/templates/screenshots/silver-simplicity.png",
    price: "$39",
    originalPrice: "$60",
    specialOffer: true
  },
  {
    id: 3,
    name: "Color Fusion",
    description: "Download the full editable design in pptx, pbix and Power BI Theme (.json)",
    image: "/templates/screenshots/color-fusion.png",
    price: "$27",
    originalPrice: "",
    specialOffer: false
  }
];

export default function PowerBIDesignTemplates() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Power BI Design Templates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              className="bg-white rounded-xl shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {template.specialOffer && (
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-br-md z-10">
                  Special Offer
                </div>
              )}

              <div className="relative h-56">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  Full Access Power BI Design Template | {template.name}
                </h2>
                <p className="text-sm text-gray-600">{template.description}</p>

                <div className="flex justify-between items-end mt-4">
                  <div className="text-gray-800 text-lg font-bold">
                    {template.price}
                    {template.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {template.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/templates/download?templateId=${template.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Get this!
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

