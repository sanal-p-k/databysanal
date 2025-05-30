'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useStorage } from '../context/StorageContext';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
import { supabase } from '@/lib/supabase';


interface TemplateDownloadProps {
  templateId: number;
  templateName: string;
  filePath: string;
  onError?: (error: Error) => void;
}

export default function TemplateDownload({
  templateId,
  templateName,
  filePath,
  onError,
}: TemplateDownloadProps) {
  const { getTemplateSignedUrl } = useStorage();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    industry: '',
    agreeToTerms: false,
  });

  // useEffect(() => {
  //   const listFilesInBucket = async () => {
  //     const { data, error } = await supabase.storage.from('templates').list('', {
  //       limit: 100,
  //       offset: 0,
  //     });
  //     console.log('Files in templates bucket root:', data);


  //     if (error) {
  //       console.error('Error listing files:', error.message);
  //       return;
  //     }

  //     console.log('Files in templates/Templates folder:', data);
  //   };

  //   listFilesInBucket(); // call on component mount
  // }, []);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (!formData.agreeToTerms) {
      setError('Please agree to terms and conditions');
      setIsSubmitting(false);
      return;
    }

    try {
      if (!filePath || !filePath.trim()) {
        throw new Error('Template file path is required');
      }

      // console.log('formData:', formData);

      // Map formData keys to match your DB column names exactly
      const insertData = {
        template_id: templateId,
        template_name: templateName,
        name: formData.name,
        email: formData.email,
        companyname: formData.companyName,   // lowercase key expected by DB
        industry: formData.industry,
        agreetoterms: formData.agreeToTerms, // lowercase key expected by DB
        created_at: new Date().toISOString(),
      };

      // 1. Save form data to Supabase
      const { error } = await supabase.from('template_downloads').insert([insertData]);

      if (error) {
        throw error;
      }

      // 2. Get signed URL using the internal file path
      const signedUrl = await getTemplateSignedUrl(filePath);
      if (!signedUrl) throw new Error("Failed to get file link");

      // 3. Trigger file download
      const link = document.createElement('a');
      link.href = signedUrl;
      link.download = templateName + '.pptx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      const error = err instanceof Error ? err : new Error("Something went wrong");
      setError(error.message);
      console.error(error);
      if (onError) onError(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Download Template</h3>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Industry</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
            <option value="hr">HR</option>
            <option value="supply-chain">Supply Chain</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !formData.agreeToTerms ||
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.industry.trim()
          }
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Download Template'}
        </button>
      </form>
    </motion.div>
  );
}
