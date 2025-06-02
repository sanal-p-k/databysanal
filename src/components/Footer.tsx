"use client";

import Link from "next/link";
import { FiExternalLink, FiPhone, FiMail, FiCalendar } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const companies = [
    {
      name: "What The Data",
      url: "https://whatthedata.netlify.app/",
      description: "Software & Data Consultancy",
    },
    {
      name: "Pixalytica",
      url: "https://pixalytica.netlify.app/",
      description: "Digital Marketing",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/sanal-p-k/",
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      url: "https://x.com/sanalpk64",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      url: "https://www.instagram.com/databysanal/",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Companies */}
          <div className="slide-up">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Companies
            </h3>
            <div className="space-y-4">
              {companies.map((company, index) => (
                <div key={index} className="slide-in">
                  <Link
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="text-base font-medium">{company.name}</span>
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{company.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-up">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li className="slide-in">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="slide-in">
                <Link
                  href="/templates"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li className="slide-in">
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="slide-up">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="slide-in">
                <div className="flex items-center">
                  <FiPhone className="w-5 h-5 text-gray-500" />
                  <span className="text-base text-gray-400 ml-3">+91 9497684728</span>
                </div>
              </li>
              <li className="slide-in">
                <div className="flex items-center">
                  <FiMail className="w-5 h-5 text-gray-500" />
                  <span className="text-base text-gray-400 ml-3">sanalpkwork@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="slide-up">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Follow Us
            </h3>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => (
                <li key={index} className="slide-in">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-blue-700 hover:text-blue-900 transition-all duration-300 flex items-center"
                  >
                    {social.icon}
                    <span className="ml-3">{social.url.replace("https://www.", "")}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-base text-gray-400 text-center slide-up">
            &copy; {new Date().getFullYear()} PowerBI Templates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
