import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { FileText, Scale, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PantryMind Terms of Service - Read our terms and conditions for using the household inventory tracking app.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="PantryMind Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using PantryMind.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025 • Effective: Upon App Launch
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Fair Use</h3>
              </div>
              <p className="text-gray-600">
                Use PantryMind responsibly for household inventory tracking only.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Privacy Protected</h3>
              </div>
              <p className="text-gray-600">
                Your data remains private and is only shared with invited household members.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Family Friendly</h3>
              </div>
              <p className="text-gray-600">
                Designed for families and roommates with a 4+ age rating.
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              
              <p className="text-gray-600 mb-4">
                By downloading, installing, or using PantryMind ("the App"), you agree to be bound 
                by these Terms of Service ("Terms"). If you do not agree to these Terms, please 
                do not use the App.
              </p>
              
              <p className="text-gray-600 mb-4">
                These Terms apply to all users of PantryMind, including household members who 
                join through invitations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              
              <p className="text-gray-600 mb-4">
                PantryMind is a household inventory tracking application that allows users to:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Scan and catalog food items using AI-powered recognition</li>
                <li>Track expiration dates and receive notifications</li>
                <li>Share household inventory with family members and roommates</li>
                <li>Manage and organize kitchen inventory items</li>
                <li>Receive insights about consumption patterns and waste reduction</li>
              </ul>
              
              <p className="text-gray-600">
                The Service is provided "as is" and we reserve the right to modify or discontinue 
                features at any time with reasonable notice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Creation</h3>
              <p className="text-gray-600 mb-4">
                To use PantryMind, you must create an account by providing a valid email address 
                and password. You are responsible for maintaining the confidentiality of your 
                account credentials.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Age Requirements</h3>
              <p className="text-gray-600 mb-4">
                You must be at least 13 years old to create an account. Users under 18 should 
                have parental consent before using the App.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Responsibility</h3>
              <p className="text-gray-600 mb-4">
                You are responsible for all activities that occur under your account. If you 
                suspect unauthorized use, please contact us immediately at support@pantrymind.app.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Permitted Use</h3>
              <p className="text-gray-600 mb-4">
                PantryMind is designed for personal household inventory management. You may:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Track food and household items for personal use</li>
                <li>Share inventory with household members</li>
                <li>Receive notifications about expiring items</li>
                <li>Export your data for personal records</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Use</h3>
              <p className="text-gray-600 mb-4">
                You agree NOT to:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Use the App for commercial inventory management</li>
                <li>Attempt to reverse engineer or hack the App</li>
                <li>Share inappropriate or harmful content</li>
                <li>Violate any local, state, or federal laws</li>
                <li>Spam or abuse other users</li>
                <li>Create fake accounts or misrepresent your identity</li>
                <li>Interfere with the App's operation or security</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Household Sharing</h2>
              
              <p className="text-gray-600 mb-4">
                PantryMind allows you to create households and invite members to share inventory:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Household creators can invite and remove members</li>
                <li>All household members can view and edit shared inventory</li>
                <li>You're responsible for whom you invite to your household</li>
                <li>Household data is shared in real-time among all members</li>
                <li>Leaving a household removes access to that household's data</li>
              </ul>
              
              <p className="text-gray-600">
                Please only invite trusted family members and roommates to your household.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Intellectual Property</h3>
              <p className="text-gray-600 mb-4">
                PantryMind, including its design, functionality, AI algorithms, and content, 
                is owned by PantryMind and protected by copyright, trademark, and other laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Data</h3>
              <p className="text-gray-600 mb-4">
                You retain ownership of all data you input into PantryMind. By using the App, 
                you grant us a limited license to process and store this data to provide the Service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy and Data Protection</h2>
              
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, 
                use, and protect your information. Key points include:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Images are processed on-device and never stored</li>
                <li>Inventory data is encrypted and only shared with household members</li>
                <li>We never sell or share your personal information</li>
                <li>You can delete your data and account at any time</li>
              </ul>
              
              <p className="text-gray-600">
                Please read our full{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>{' '}
                for complete details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Availability</h3>
              <p className="text-gray-600 mb-4">
                While we strive for 100% uptime, we cannot guarantee that PantryMind will be 
                available at all times. Maintenance, updates, or technical issues may temporarily 
                affect service availability.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Accuracy</h3>
              <p className="text-gray-600 mb-4">
                Our AI scanning technology is highly accurate but not infallible. Always verify 
                food safety information and expiration dates independently. We are not responsible 
                for food safety decisions based on App data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-600 mb-4">
                PantryMind is provided "as is" without warranties. We are not liable for any 
                indirect, incidental, or consequential damages arising from your use of the App.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination by You</h3>
              <p className="text-gray-600 mb-4">
                You may delete your account and stop using PantryMind at any time. Deleting your 
                account will permanently remove all your data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination by Us</h3>
              <p className="text-gray-600 mb-4">
                We may suspend or terminate your access to PantryMind if you violate these Terms 
                or engage in harmful behavior. We will provide reasonable notice when possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to Terms</h2>
              
              <p className="text-gray-600 mb-4">
                We may update these Terms occasionally to reflect changes in our Service or 
                applicable laws. We will notify users of significant changes through the App 
                and via email.
              </p>
              
              <p className="text-gray-600">
                Your continued use of PantryMind after Terms changes constitutes acceptance 
                of the updated Terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
              
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="text-gray-600 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:support@pantrymind.app" className="text-blue-600 hover:underline">
                  support@pantrymind.app
                </a>
              </div>
              
              <div className="text-gray-600">
                <strong>Subject Line:</strong> Terms of Service Question
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}