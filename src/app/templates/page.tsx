"use client";

import { motion } from 'framer-motion';
import TemplateDownload from '@/components/TemplateDownload';
import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    id: 1,
    name: "Minimalist Green",
    price: "Free",
    image: "/templates/sales-dashboard.jpg",
    category: "Business",
    features: [
      "Real-time sales tracking",
      "Revenue forecasting",
      "Customer analysis",
      "Performance metrics"
    ]
  },
  {
    id: 2,
    name: "Financial Reports",
    description: "Comprehensive financial analysis and reporting",
    price: "$69",
    image: "/templates/financial-reports.jpg",
    category: "Finance",
    features: [
      "Balance sheet analysis",
      "Cash flow tracking",
      "Profit & loss",
      "Financial ratios"
    ]
  },
  {
    id: 3,
    name: "Marketing Analytics",
    description: "Analyze marketing campaigns and ROI",
    price: "$59",
    image: "/templates/marketing-analytics.jpg",
    category: "Marketing",
    features: [
      "Campaign tracking",
      "ROI analysis",
      "Customer journey",
      "Social media metrics"
    ]
  },
  {
    id: 4,
    name: "HR Dashboard",
    description: "Manage your workforce with data-driven insights",
    price: "$59",
    image: "/templates/hr-dashboard.jpg",
    category: "HR",
    features: [
      "Employee analytics",
      "Performance tracking",
      "Recruitment metrics",
      "Retention analysis"
    ]
  },
  {
    id: 5,
    name: "Customer Analytics",
    description: "Deep dive into customer behavior and preferences",
    price: "$69",
    image: "/templates/customer-analytics.jpg",
    category: "Customer",
    features: [
      "Customer segmentation",
      "Behavior analysis",
      "Churn prediction",
      "Customer satisfaction"
    ]
  },
  {
    id: 6,
    name: "Supply Chain",
    description: "Optimize your supply chain operations",
    price: "$79",
    image: "/templates/supply-chain.jpg",
    category: "Supply Chain",
    features: [
      "Inventory management",
      "Demand forecasting",
      "Supplier analysis",
      "Logistics tracking"
    ]
  }
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Power BI Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates to transform your data into actionable insights.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              All Templates
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              Business
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              Finance
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              Marketing
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              HR
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              Customer
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
              Supply Chain
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.features.map((feature, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {feature}
                    </li>
                  ))}
                </div>
                <TemplateDownload
                  templateId={template.id}
                  templateName={template.name}
                  filePath="WTD_MinimalisticGreen.pptx"
                  onError={(error) => console.error(`Error downloading ${template.name}:`, error)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-white/900 mb-8">
            Start your journey with our premium Power BI templates today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
