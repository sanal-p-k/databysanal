"use client";

import Link from 'next/link';
import { inter } from '@/fonts';

export default function Services() {
  const services = [
    {
      title: 'Power BI Dashboards',
      description: [
        'Transform your business data into interactive visualizations that provide real-time insights. From retail analytics to HR metrics, we create custom dashboards tailored to your specific needs.',
        'Our dashboards are not just pretty visuals – they drive decision-making by providing actionable insights that help you optimize operations and boost profitability.'
      ],
      icon: '📊',
      features: [
        'Retail & E-commerce Analytics',
        'Sales Performance Tracking',
        'HR Metrics & Workforce Analytics',
        'Custom KPI Dashboards',
        'Real-time Data Integration'
      ]
    },
    {
      title: 'Business Intelligence Solutions',
      description: [
        'We provide end-to-end BI solutions that help you make data-driven decisions with confidence. From data collection to actionable insights, we handle everything.',
        'Our solutions are scalable and flexible, growing with your business needs while maintaining data integrity and security.'
      ],
      icon: '🎯',
      features: [
        'Data Warehouse Implementation',
        'ETL Pipeline Development',
        'Data Quality Management',
        'Custom Analytics Solutions',
        'Scalable BI Architecture'
      ]
    },
    {
      title: 'ERP Integration',
      description: [
        'Connect your ERP systems with powerful dashboards that provide unified insights across your organization.',
        'We ensure seamless integration with leading ERP platforms while maintaining data consistency and security.'
      ],
      icon: '🔗',
      features: [
        'ERP Data Integration',
        'Custom ERP Reports',
        'Real-time Data Sync',
        'Automated Data Flow',
        'Secure Data Handling'
      ]
    },
    {
      title: 'Data Automation',
      description: [
        'Automate your data processes using Power Automate and Google Apps Script to save time and reduce errors.',
        'We create custom automation solutions that streamline your workflows while maintaining data accuracy.'
      ],
      icon: '🤖',
      features: [
        'Workflow Automation',
        'Data Processing Scripts',
        'Custom API Integrations',
        'Automated Reporting',
        'Process Optimization'
      ]
    },
    {
      title: 'Custom Reporting',
      description: [
        'Get custom reports tailored to your business needs, from monthly performance reviews to executive dashboards.',
        'Our reports are designed to be intuitive, actionable, and provide the insights you need to make informed decisions.'
      ],
      icon: '📄',
      features: [
        'Custom Report Design',
        'Performance Analytics',
        'Executive Dashboards',
        'Automated Reports',
        'Data Visualization'
      ]
    }
  ];

  const workflow = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We start with a detailed consultation to understand your business needs and data requirements.'
    },
    {
      step: 2,
      title: 'Data Collection',
      description: 'Our team gathers and cleans your data, ensuring it\'s ready for analysis and visualization.'
    },
    {
      step: 3,
      title: 'Dashboard Design',
      description: 'We create custom dashboards that provide clear, actionable insights for your business.'
    },
    {
      step: 4,
      title: 'Deployment',
      description: 'We deploy your solution and provide training to ensure your team can use it effectively.'
    },
    {
      step: 5,
      title: 'Support',
      description: 'Ongoing support and maintenance to keep your dashboards running smoothly.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#13293D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Raw Data into Business Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform complex data into actionable insights with our expert BI solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#0075FF] hover:bg-[#005ed1] transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <div className="mb-6">
                  {service.description.map((para, i) => (
                    <p key={i} className="mb-4 text-gray-600">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#f3f7fb] text-[#13293D] text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {workflow.map((step) => (
              <div
                key={step.step}
                className="text-center p-6 bg-white rounded-lg shadow"
              >
                <div className="text-4xl mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-[#13293D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl mb-8 text-center">
            Let's schedule a consultation to discuss how we can help your business grow with data-driven decisions.
          </p> </div>
      </section>

      

    </main>
  );
}