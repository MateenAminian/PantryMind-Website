import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Scale, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'PantryMind Terms of Service — household inventory tracking, AI scanning, and PantryMind Plus subscriptions.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Last updated: September 28, 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Fair use</h3>
              </div>
              <p className="text-gray-600">
                Use PantryMind for personal household inventory tracking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Your kitchen, your people</h3>
              </div>
              <p className="text-gray-600">
                Inventory is shared only with household members you invite.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Family friendly</h3>
              </div>
              <p className="text-gray-600">
                Designed for families and roommates with a 4+ age rating.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By downloading, installing, or using PantryMind (“the App”), you agree to
                these Terms of Service (“Terms”) and our{' '}
                <Link href="/privacy/" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree, do not use the App.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">PantryMind helps households:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Scan and catalog food items with AI-assisted recognition</li>
                <li>Track expiration dates and receive notifications</li>
                <li>Share inventory with family members and roommates</li>
                <li>Maintain a shared grocery list</li>
                <li>Optionally subscribe to PantryMind Plus for higher limits</li>
              </ul>
              <p className="text-gray-600">
                Features may change over time. We may modify or discontinue functionality
                with reasonable notice when practical.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Accounts</h2>
              <p className="text-gray-600 mb-4">
                You must create an account with a valid email and password (or other
                supported sign-in methods we enable). Keep your credentials confidential.
                You are responsible for activity under your account.
              </p>
              <p className="text-gray-600 mb-4">
                You must be at least 13 years old. Users under 18 should have parental
                consent before using the App.
              </p>
              <p className="text-gray-600">
                Report suspected unauthorized access to{' '}
                <a
                  href="mailto:support@pantrymind.app"
                  className="text-blue-600 hover:underline"
                >
                  support@pantrymind.app
                </a>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">You may use PantryMind to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Track food and household items for personal use</li>
                <li>Share inventory with trusted household members</li>
                <li>Receive expiry and activity notifications</li>
              </ul>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Abuse AI scanning or attempt to circumvent quotas or paywalls</li>
                <li>Reverse engineer, disrupt, or attack the App or our infrastructure</li>
                <li>Upload unlawful, harmful, or abusive content</li>
                <li>Misrepresent your identity or create fake accounts</li>
                <li>Use the App for commercial warehouse / retail inventory systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Household Sharing</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Owners can invite members via invite code or QR code</li>
                <li>Members can view and edit shared inventory</li>
                <li>You are responsible for whom you invite</li>
                <li>Leaving a household removes your access to that kitchen&apos;s data</li>
                <li>
                  Free plans limit household size; Plus expands seats as described in-app
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. PantryMind Plus & In-App Purchases
              </h2>
              <p className="text-gray-600 mb-4">
                PantryMind offers an optional auto-renewable subscription (“PantryMind
                Plus”) through Apple In-App Purchase. Current US display pricing is $5.99
                per month or $49.99 per year; Apple may show localized prices for your
                storefront.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  Plus is household-based: the owner&apos;s active subscription unlocks Plus
                  benefits for that kitchen according to in-app limits
                </li>
                <li>
                  Payment is charged to your Apple ID account at confirmation of purchase
                </li>
                <li>
                  Subscriptions renew automatically unless canceled at least 24 hours before
                  the end of the current period
                </li>
                <li>
                  Manage or cancel in Settings → [Your Name] → Subscriptions on your Apple
                  device
                </li>
                <li>
                  Free trials (if offered) convert to paid renewals unless canceled in time
                </li>
              </ul>
              <p className="text-gray-600">
                Refunds are handled by Apple according to Apple&apos;s policies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. AI Features</h2>
              <p className="text-gray-600 mb-4">
                AI scanning is assistive. Results can be wrong. Always verify product names,
                allergens, and expiration dates yourself. PantryMind is not a food-safety
                authority and is not liable for spoilage, illness, or purchasing decisions
                based on App data.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                PantryMind’s branding, design, and software are owned by PantryMind and
                protected by applicable laws. You retain ownership of content you enter into
                the App and grant us a limited license to process and store it to provide the
                Service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our{' '}
                <Link href="/privacy/" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{' '}
                explains how we handle account data, household inventory, AI scan images,
                diagnostics, and third-party processors.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Disclaimers & Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                The Service is provided “as is” without warranties of uninterrupted
                availability or perfect accuracy. To the fullest extent permitted by law, we
                are not liable for indirect, incidental, or consequential damages arising
                from your use of the App.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                You may delete your account anytime in Settings. We may suspend or terminate
                access for Terms violations or harmful behavior. Account deletion removes
                personal account data as described in the Privacy Policy; shared household
                data may remain for other members.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes</h2>
              <p className="text-gray-600">
                We may update these Terms. Continued use after updates constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact</h2>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@pantrymind.app"
                  className="text-blue-600 hover:underline"
                >
                  support@pantrymind.app
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Subject:</strong> Terms of Service Question
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
