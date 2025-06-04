'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();



  const templateId = searchParams.get('templateId') ?? '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
  });

  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isHowToOpen, setIsHowToOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const supabase = createClientComponentClient<Database>();

      // List files in the 'templates' bucket to debug
      const { data: files, error: listError } = await supabase.storage.from('templates').list('');
      console.log('Files in bucket:', files);
      if (listError) {
        console.error('Error listing files:', listError);
      }

      // Then continue with your insert & download logic
      const { data: userData, error: userError } = await supabase
        .from('template_downloads')
        .insert([
          {
            template_id: parseInt(templateId),
            name: formData.name,
            email: formData.email,
            user_id: user?.uid,
          }
        ])
        .select()
        .single();

      if (userError) throw userError;

      // Download the file
      const { data: fileData, error: fileError } = await supabase
        .storage
        .from('templates')
        .download(`WTD_MinimalisticGreen.pptx`);

      if (fileError) throw fileError;

      // Create blob and trigger download
      const blob = new Blob([fileData], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `WTD_MinimalisticGreen.pptx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      toast.success('Template downloaded successfully!');
      setSuccess(true);
      setTimeout(() => {
        router.push('/templates');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to process your request. Please try again.');
      toast.error('Failed to download template. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.industry.trim() !== '';



  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <section className="text-center bg-white p-10 rounded-lg shadow-md max-w-md">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Download Complete!</h1>
          <p className="text-gray-700 mb-6">
            Your template has been downloaded successfully. Redirecting you to templates...
          </p>
          <Link
            href="/templates"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition"
          >
            Back to Templates
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="space-y-12">
          {/* Template Image */}
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <Image
                src={`/templates/screenshots/shooting-star.png`} // You can make this dynamic by mapping templateId
                alt="Template Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Action Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* How to Use Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-6 h-full"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">How to Use</h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to get the most out of our Power BI templates
                  </p>
                  <button
                    onClick={() => setIsHowToOpen(true)}
                    className="w-full py-4 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-all duration-300 shadow flex items-center justify-center gap-3"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    View Instructions
                  </button>
                </div>
              </motion.div>

              {/* Download Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-6 h-full"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Download Template</h3>
                  <p className="text-gray-600 text-sm">
                    Get instant access to our premium Power BI template
                  </p>
                  <button
                    onClick={() => setIsFormExpanded(true)}
                    className="w-full py-4 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-all duration-300 shadow flex items-center justify-center gap-3"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    Download Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* How to Use Overlay */}
          {isHowToOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 p-8 relative">
                <button
                  onClick={() => setIsHowToOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">How to Use This Template</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Download the Template',
                      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
                      description: 'Click the download button to get the template file.'
                    },
                    {
                      title: 'Open in Power BI',
                      icon: 'M12 14l9-5-9-5m0 10l4.5-4.5-4.5-4.5',
                      description: 'Open the downloaded .pbix file in Power BI Desktop.'
                    },
                    {
                      title: 'Connect Your Data',
                      icon: 'M12 14l9-5-9-5m0 10l4.5-4.5-4.5-4.5',
                      description: 'Connect your data source to the template using Power BI\'s data connection tools.'
                    },
                    {
                      title: 'Customize',
                      icon: 'M12 14l9-5-9-5m0 10l4.5-4.5-4.5-4.5',
                      description: 'Customize the template with your branding and specific requirements.'
                    }
                  ].map(({ title, icon, description }, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-6 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Form Overlay */}
          {isFormExpanded && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 p-8 relative">
                <button
                  onClick={() => setIsFormExpanded(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Download Template</h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {error && (
                    <div
                      role="alert"
                      className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6"
                    >
                      {error}
                    </div>
                  )}

                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
                    { label: 'Email address', name: 'email', type: 'email', placeholder: 'Enter your email' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {label}
                      </label>
                      <input
                        id={name}
                        name={name}
                        type={type}
                        value={formData[name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm transition"
                        autoComplete={name === 'email' ? 'email' : 'off'}

                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Industry
                    </label>
                    <input
                      id="industry"
                      name="industry"
                      type="text"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      placeholder="Enter your industry"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm transition"
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full py-3 px-6 font-medium rounded-lg transition-all duration-300 shadow mt-4
    ${isSubmitting || !isFormValid
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary-hover'}
  `}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Download Now'
                    )}
                  </button>

                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
