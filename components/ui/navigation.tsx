'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Smartphone } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PantryMind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">
              How It Works
            </a>
            <a href="#screenshots" className="text-gray-700 hover:text-green-600 transition-colors">
              Screenshots
            </a>
            <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">
              Privacy
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-green-600 transition-colors">
              Support
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-green-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Features
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                How It Works
              </a>
              <a href="#screenshots" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Screenshots
              </a>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Privacy
              </Link>
              <Link href="/support" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}