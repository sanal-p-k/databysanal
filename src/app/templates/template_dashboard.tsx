"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Template {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const TemplateDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [template, setTemplate] = useState<Template | null>(null);
  const templateId = searchParams.get('id');

  useEffect(() => {
    // In a real application, you would fetch the template data from your API
    // based on the template ID from the URL
    const templates = [
      {
        id: 1,
        title: "Sales Dashboard",
        description: "Track your sales performance with real-time analytics",
        features: [
          "Real-time sales tracking",
          "Revenue forecasting",
          "Customer analysis",
          "Performance metrics"
        ]
      },
      {
        id: 2,
        title: "Financial Reports",
        description: "Comprehensive financial analysis and reporting",
        features: [
          "Balance sheet analysis",
          "Cash flow tracking",
          "Profit & loss",
          "Financial ratios"
        ]
      },
      {
        id: 3,
        title: "Marketing Dashboard",
        description: "Monitor your marketing campaigns and ROI",
        features: [
          "Campaign tracking",
          "ROI analysis",
          "Customer journey",
          "Social media metrics"
        ]
      }
    ];

    if (templateId) {
      const selectedTemplate = templates.find(t => t.id === parseInt(templateId));
      if (selectedTemplate) {
        setTemplate(selectedTemplate);
      } else {
        setTemplate({
          id: -1,
          title: "Template Not Found",
          description: "The requested template could not be found.",
          features: []
        });
      }
    } else {
      setTemplate({
        id: 0,
        title: "No Template Selected",
        description: "Please select a template from the list.",
        features: []
      });
    }
  }, [templateId]);

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ← Back to Templates
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{template.title}</h1>
            <p className="text-gray-600 mb-6">{template.description}</p>

            <div className="relative aspect-w-16 aspect-h-9 mb-8">
              <Image
                src="/dashboard-preview.png"
                alt="Dashboard Preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Download Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
