"use client";

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const templates = [
  {
    id: 1,
    name: "Sales Dashboard",
    description: "Track your sales performance with real-time analytics",
    price: "$49",
    image: "/templates/sales-dashboard.jpg",
    category: "Business",
    features: [
      "Real-time sales tracking",
      "Revenue forecasting",
      "Customer analysis",
      "Performance metrics"
    ],
    details: [
      "Comprehensive sales tracking dashboard",
      "Real-time data updates",
      "Customizable metrics",
      "Mobile-responsive design",
      "Integration with multiple data sources"
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
    ],
    details: [
      "Automated financial calculations",
      "Custom report generation",
      "Historical data analysis",
      "Trend visualization",
      "Compliance reporting"
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
    ],
    details: [
      "Multi-channel campaign tracking",
      "ROI calculation",
      "Customer journey mapping",
      "Social media analytics",
      "Conversion rate optimization"
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
    ],
    details: [
      "Employee performance tracking",
      "Recruitment pipeline analysis",
      "Retention rate analysis",
      "Employee satisfaction metrics",
      "Workforce planning tools"
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
    ],
    details: [
      "Advanced customer segmentation",
      "Behavior pattern analysis",
      "Churn prediction modeling",
      "Customer satisfaction tracking",
      "Lifetime value calculation"
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
    ],
    details: [
      "Inventory optimization",
      "Demand forecasting models",
      "Supplier performance analysis",
      "Logistics cost optimization",
      "Supply chain risk management"
    ]
  }
];

export default function TemplateDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const template = templates.find(t => t.id === parseInt(id as string));

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Template Not Found</h1>
          <p className="text-gray-600 mb-4">The template you're looking for doesn't exist.</p>
          <Link
            href="/templates"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Section 1: Header with Image and Text */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-full">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {template.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {template.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="text-2xl font-bold text-primary">
                {template.price}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Quote */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <blockquote className="text-2xl italic text-gray-700">
            "Data is the new oil. Transform your business with powerful insights."
          </blockquote>
        </div>

        {/* Section 3: How to Use & Download */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* How to Use Box */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Install Power BI</h3>
                  <p className="text-gray-600">Download and install Power BI Desktop from Microsoft's website.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Import Template</h3>
                  <p className="text-gray-600">Open Power BI and import the downloaded .pbix file.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Connect Data</h3>
                  <p className="text-gray-600">Connect your data source to the template.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Download Box */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download Template</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Template Features</h3>
                <ul className="space-y-2">
                  {template.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/templates/dashboard?templateId=${template.id}`}
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
              >
                Download Now
              </Link>
            </div>
          </div>
        </div>

        {/* Section 4: Thank You */}
        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your support helps us create more amazing templates.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Share on LinkedIn
            </button>
            <button className="px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Share on Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
