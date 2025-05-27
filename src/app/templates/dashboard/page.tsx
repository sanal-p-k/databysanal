'use client';

import React from 'react';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const templateId = searchParams.get('templateId') || '';

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    try {
      await signIn(email, password);
      // After successful sign in, redirect to download page
      if (templateId) {
        router.push(`/templates/download/${templateId}`);
      } else {
        router.push('/templates');
      }
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred during authentication. Please try again.');
      }
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to download
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <button
                onClick={() => {
                  router.push('/templates');
                }}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                go back
              </button>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

            </div>

            {error && (
              <div className="text-red-500 text-sm text-center mt-2 px-2">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {templateId || 'Template Download'}
            </h1>
            <p className="text-gray-600 mb-8">
              Download your Power BI template after signing in with your credentials.
            </p>
            
            {user ? (
              <div className="flex justify-center">
                <Link
                  href={`/templates/download/${templateId}`}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
                >
                  Download Template
                </Link>
              </div>
            ) : (
              <div className="text-center text-red-500">
                Please sign in to download the template.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
