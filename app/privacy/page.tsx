import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Shield, Eye, Lock, Database, Share2, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PantryMind Privacy Policy - Learn how we protect your data and ensure complete privacy in our household inventory tracking app.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy is our top priority. Learn how we protect your data.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025 • Effective: Upon App Launch
            </p>
          </div>

          {/* Privacy Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">On-Device Processing</h3>
              </div>
              <p className="text-gray-600">
                All image scanning happens on your device. Photos are never sent to our servers or stored anywhere.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Encrypted Data</h3>
              </div>
              <p className="text-gray-600">
                All your inventory data is encrypted both in transit and at rest using industry-standard encryption.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Minimal Data Collection</h3>
              </div>
              <p className="text-gray-600">
                We only collect data necessary for app functionality. No tracking, no analytics, no ads.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Share2 className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold">No Data Sharing</h3>
              </div>
              <p className="text-gray-600">
                We never sell, share, or trade your personal information with third parties.
              </p>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="prose max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h3>
              <p className="text-gray-600 mb-4">
                When you create a PantryMind account, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Email address for authentication</li>
                <li>Encrypted password (we never store plain text passwords)</li>
                <li>Account creation and last login timestamps</li>
                <li>Household invitation and membership data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inventory Data</h3>
              <p className="text-gray-600 mb-4">
                To provide inventory tracking functionality, we store:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Food item names and categories</li>
                <li>Expiration dates and purchase dates</li>
                <li>Quantity and location information</li>
                <li>Custom notes and tags you add</li>
                <li>Household sharing permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Information</h3>
              <p className="text-gray-600 mb-4">
                For app functionality and security, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Device type and iOS version</li>
                <li>App version and crash logs (if enabled)</li>
                <li>Push notification tokens (for alerts)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We DON'T Collect</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Photos:</strong> Images are processed on-device and never stored</li>
                <li><strong>Location data:</strong> We don't track your location</li>
                <li><strong>Personal contacts:</strong> We don't access your contact list</li>
                <li><strong>Browsing history:</strong> We don't track your web activity</li>
                <li><strong>Advertising data:</strong> We don't collect data for ads</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              
              <p className="text-gray-600 mb-4">
                We use your information solely to provide and improve PantryMind's services:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Authenticate your account and maintain security</li>
                <li>Sync inventory data across your household members</li>
                <li>Send push notifications about expiring items</li>
                <li>Provide customer support when requested</li>
                <li>Improve app performance and fix bugs</li>
                <li>Comply with legal requirements</li>
              </ul>

              <p className="text-gray-600">
                <strong>We never use your data for:</strong> Advertising, marketing to third parties, 
                selling to data brokers, or any purpose not directly related to PantryMind's functionality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Encryption</h3>
              <p className="text-gray-600 mb-4">
                All data transmission uses TLS 1.3 encryption. Data at rest is encrypted using 
                AES-256 encryption with keys managed by Firebase Security.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentication</h3>
              <p className="text-gray-600 mb-4">
                We use Firebase Authentication with industry-standard security practices, 
                including secure password hashing and optional two-factor authentication.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Centers</h3>
              <p className="text-gray-600 mb-6">
                Your data is stored in Google Cloud Platform data centers with enterprise-grade 
                security, regular security audits, and 99.95% uptime SLA.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              
              <p className="text-gray-600 mb-4">
                You have full control over your data:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Access:</strong> View all data we have about you</li>
                <li><strong>Correction:</strong> Update or correct your information</li>
                <li><strong>Deletion:</strong> Delete your account and all associated data</li>
                <li><strong>Portability:</strong> Export your inventory data</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
              </ul>

              <p className="text-gray-600">
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@pantrymind.app" className="text-blue-600 hover:underline">
                  privacy@pantrymind.app
                </a>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
              
              <p className="text-gray-600 mb-4">
                We retain your data only as long as necessary:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Account data: Until you delete your account</li>
                <li>Inventory data: Until you delete items or your account</li>
                <li>Crash logs: Maximum 90 days</li>
                <li>Support communications: Up to 2 years for reference</li>
              </ul>

              <p className="text-gray-600">
                When you delete your account, all associated data is permanently deleted 
                within 30 days, except where required by law.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              
              <p className="text-gray-600 mb-4">
                PantryMind is rated 4+ and is safe for family use. However, we do not knowingly 
                collect personal information from children under 13. If a parent or guardian 
                becomes aware that their child has provided us with personal information, 
                please contact us immediately.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              
              <p className="text-gray-600 mb-4">
                We may update this privacy policy occasionally to reflect changes in our 
                practices or applicable laws. We will notify users of significant changes 
                through the app and via email.
              </p>
              
              <p className="text-gray-600">
                Continued use of PantryMind after policy changes constitutes acceptance 
                of the updated policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              
              <p className="text-gray-600 mb-4">
                If you have questions about this privacy policy or our data practices, 
                please contact us:
              </p>
              
              <div className="flex items-center text-gray-600 mb-2">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:privacy@pantrymind.app" className="text-blue-600 hover:underline">
                  privacy@pantrymind.app
                </a>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">
                We typically respond to privacy inquiries within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}