'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '#hero' },
  { name: 'AI Showcase', path: '#ai-video' },
  { name: 'Qualifications & Skills', path: '#qualifications' },
  { name: 'Why Work With Me', path: '#why-me' },
  { name: 'Build Together', path: '#services' },
  { name: 'Contact', path: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-purple-900/30 shadow-2xl shadow-purple-950/20'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="#hero"
              className="group flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
                ✦
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 group-hover:to-pink-400 transition-colors">
                Danish Mukhtar
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/918825062835?text=Hi%20Danish,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105"
            >
              Let&apos;s Talk 💬
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:8825062835"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-purple-600/80 hover:bg-purple-600"
            >
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current block transition-all"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current block transition-all"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current block transition-all"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-purple-900/30"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-white/10 hover:text-purple-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href="https://wa.me/918825062835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg shadow-green-900/40"
                >
                  WhatsApp: +91 8825062835
                </a>
                <a
                  href="mailto:mukhtardanish13@gmail.com"
                  className="w-full text-center py-2.5 rounded-xl font-semibold text-gray-300 border border-gray-700 bg-gray-900/80"
                >
                  mukhtardanish13@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
