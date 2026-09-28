'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PantryMind Logo"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">PantryMind</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href={sectionHref('#features')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Features
            </a>
            <a
              href={sectionHref('#pricing')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href={sectionHref('#how-it-works')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              How It Works
            </a>
            <Link href="/privacy/" className="text-gray-700 hover:text-green-600 transition-colors">
              Privacy
            </Link>
            <Link href="/support/" className="text-gray-700 hover:text-green-600 transition-colors">
              Support
            </Link>
            <a
              href="https://apps.apple.com/us/app/pantrymind/id6751251151"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-green-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href={sectionHref('#features')}
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href={sectionHref('#pricing')}
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href={sectionHref('#how-it-works')}
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <Link
                href="/privacy/"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="/support/"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <a
                href="https://apps.apple.com/us/app/pantrymind/id6751251151"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
