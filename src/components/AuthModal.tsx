'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate inputs
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Clear any existing errors
      setError('');
      
      // Show loading state
      const loadingElement = document.createElement('div');
      loadingElement.className = 'fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50';
      loadingElement.innerHTML = `
        <div className="bg-white p-4 rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-center">Signing in...</p>
        </div>
      `;
      document.body.appendChild(loadingElement);

      await signIn(email, password);
      
      // Remove loading state
      loadingElement.remove();
      onClose();
    } catch (err: any) {
      // Remove loading state if present
      const loadingElement = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-25');
      if (loadingElement) {
        loadingElement.remove();
      }

      // Handle specific Firebase errors
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Authentication window was closed. Please try again.');
      } else if (err.code === 'auth/popup-blocked') {
        setError('Authentication window was blocked by browser. Please allow popups for this site.');
      } else if (err.code === 'auth/cancelled-popup-request') {
        setError('Authentication request was cancelled. Please try again.');
      } else {
        setError(err.message || 'An error occurred during authentication. Please try again.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/templates/signup" className="font-medium text-primary hover:text-primary-hover">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
