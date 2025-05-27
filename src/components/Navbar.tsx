"use client";

import Link from 'next/link';
import { useState } from "react";
import { inter } from "@/fonts";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import { useAuth } from '@/context/AuthContext';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import AuthModal from './AuthModal';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signIn, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      {/* Top Alert Bar */}
      <div className="w-full bg-[#13293D] text-white text-xs font-medium text-center py-1.5">
        📊 Unleash the Power of Data with Data By Sanal – Expert BI & Dashboards
      </div>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span style={{ fontFamily: inter.variable }} className="text-2xl font-bold text-[#13293D] tracking-tight">
                Data By Sanal
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#13293D]"
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="flex items-center px-4 py-2 rounded-md bg-gray-100 text-sm font-medium text-gray-800 hover:bg-gray-200"
                  >
                    <UserIcon className="h-5 w-5 mr-2" />
                    {user.email?.split('@')[0] || 'Profile'}
                  </button>
                  <button
                    onClick={signOut}
                    className="px-4 py-2 rounded-md bg-gray-100 text-sm font-medium text-gray-800 hover:bg-gray-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="px-4 py-2 rounded-md bg-gray-100 text-sm font-medium text-gray-800 hover:bg-gray-200"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      const provider = new GoogleAuthProvider();
                      signInWithPopup(auth, provider).catch((error) =>
                        console.error('Google sign in error:', error)
                      );
                    }}
                    className="px-4 py-2 rounded-md bg-[#13293D] text-sm font-medium text-white hover:bg-[#0f1f2c]"
                  >
                    Sign Up with Google
                  </button>
                </>
              )}

              {/* Custom Buttons */}
              <Link href="/templates">
                <button className="px-4 py-2 border rounded-md text-sm font-medium text-[#13293D] border-[#13293D] hover:bg-[#f3f7fb]">
                  Explore Templates
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-4 py-2 rounded-md bg-[#0075FF] text-white text-sm font-medium hover:bg-[#005ed1]">
                  Request a Dashboard
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#13293D] hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm text-[#13293D] hover:text-[#0075FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
