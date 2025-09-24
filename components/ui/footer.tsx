import Link from 'next/link';
import { Mail, Shield, FileText } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="PantryMind Logo" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <span className="text-xl font-bold">PantryMind</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Smart household inventory tracking for families and roommates. Never waste food again with AI-powered scanning and real-time sync.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Beta Available
              </span>
              <span>Available on iOS 16.6+</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@pantrymind.app" className="text-gray-400 hover:text-white transition-colors">
                  support@pantrymind.app
                </a>
              </li>
              <li>
                <a href="mailto:feedback@pantrymind.app" className="text-gray-400 hover:text-white transition-colors">
                  feedback@pantrymind.app
                </a>
              </li>
              <li>
                <a href="mailto:privacy@pantrymind.app" className="text-gray-400 hover:text-white transition-colors">
                  privacy@pantrymind.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PantryMind. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Made with ❤️ for families and roommates
          </p>
        </div>
      </div>
    </footer>
  );
}