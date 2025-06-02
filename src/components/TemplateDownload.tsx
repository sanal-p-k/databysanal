'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStorage } from '../context/StorageContext';
import { motion } from 'framer-motion';

interface TemplateDownloadProps {
  template: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  };
}

export default function TemplateDownload({ template }: TemplateDownloadProps) {
  const router = useRouter();
  const { getTemplateSignedUrl } = useStorage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    industry: '',
    agreeToTerms: false,
  });

  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value
    }));
  };

  const handleDownloadClick = () => {
    setIsFormExpanded(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const signedUrl = await getTemplateSignedUrl(template.name);
      const link = document.createElement('a');
      link.href = signedUrl;
      link.download = template.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFormData({
        name: '',
        email: '',
        companyName: '',
        industry: '',
        agreeToTerms: false,
      });
      setIsFormExpanded(false);
      router.push('/templates');
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download template. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-6 md:p-10"
    >
      <div className="grid md:grid-cols-3 gap-8">

        {/* Section 1: Template Image */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex justify-center items-center">
          <img
            src={template.image}
            alt={template.name}
            className="rounded-xl w-full h-auto object-contain max-h-96"
          />
        </div>

        {/* Section 2: Description */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{template.name}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{template.description}</p>
          </div>
        </div>

        {/* Section 3: How to Use + Download */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Use</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm mb-6 space-y-1">
            <li>Fill the form below.</li>
            <li>Agree to terms & click “Download”.</li>
            <li>Open in Excel or Google Sheets.</li>
            <li>Customize as per your needs.</li>
          </ul>

          {!isFormExpanded ? (
            <div
              onClick={handleDownloadClick}
              className="cursor-pointer relative rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-md"
            >
              <div className="h-40 bg-[url('/images/download-bg.png')] bg-cover bg-center flex items-end">
                <div className="bg-black bg-opacity-60 w-full p-4">
                  <div className="flex items-center gap-2 text-white font-medium text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-3-3m3 3l3-3M12 4v8"
                      />
                    </svg>
                    Download
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Industry</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="hr">HR</option>
                <option value="supply-chain">Supply Chain</option>
                <option value="other">Other</option>
              </select>
              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <label>
                  I agree to the{' '}
                  <a href="#" className="text-primary underline">terms and conditions</a>
                </label>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.agreeToTerms ||
                  !formData.name.trim() ||
                  !formData.email.trim() ||
                  !formData.industry.trim()
                }
                className="w-full py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Download Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
