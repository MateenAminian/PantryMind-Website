import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Lock, Database, Share2, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'PantryMind Privacy Policy — how we handle accounts, household inventory, AI scanning, subscriptions, and your rights.',
};

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              How PantryMind collects, uses, and protects your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: September 28, 2026 · Applies to the PantryMind iOS app and
              pantrymind.app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">AI for scanning only</h3>
              </div>
              <p className="text-gray-600">
                Scan photos are sent to our AI provider solely to extract product details.
                PantryMind does not keep those images as part of your inventory.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Encrypted cloud sync</h3>
              </div>
              <p className="text-gray-600">
                Account and household inventory sync through Firebase with encryption in
                transit and at rest.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Minimal by design</h3>
              </div>
              <p className="text-gray-600">
                We collect what the product needs: account, household, inventory, push
                tokens, and diagnostic data to keep the app reliable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center mb-4">
                <Share2 className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold">No selling your data</h3>
              </div>
              <p className="text-gray-600">
                We do not sell personal information. Inventory is shared only with household
                members you invite.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account information</h3>
              <p className="text-gray-600 mb-4">When you create a PantryMind account, we collect:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Email address for authentication</li>
                <li>Password credentials managed by Firebase Authentication (we never store plain-text passwords)</li>
                <li>Account creation and last login metadata</li>
                <li>Household membership and invite relationships</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inventory & household data</h3>
              <p className="text-gray-600 mb-4">To provide shared kitchen tracking, we store:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Food item names, brands, categories, quantities, and notes</li>
                <li>Expiration dates and related estimates</li>
                <li>Grocery list items and household activity notifications</li>
                <li>Household name, invite code, and member roles</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI scan images</h3>
              <p className="text-gray-600 mb-6">
                When you use AI scanning, a compressed image (and optional on-device OCR text)
                is transmitted through our secure backend proxy to a third-party AI provider
                (currently OpenRouter and its underlying model providers) so products can be
                extracted. PantryMind does not retain those scan images as inventory photos.
                You can review and edit results before saving. An in-app setting can
                automatically delete local photos after processing to save device storage.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Device & diagnostics</h3>
              <p className="text-gray-600 mb-4">For functionality and reliability, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Device type and iOS version</li>
                <li>App version</li>
                <li>Push notification tokens (Firebase Cloud Messaging / APNs)</li>
                <li>Crash and performance diagnostics via Firebase Crashlytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscriptions</h3>
              <p className="text-gray-600 mb-6">
                If you purchase PantryMind Plus, Apple processes payment. We store entitlement
                status needed to unlock Plus features for your account/household. We do not
                receive or store your full payment card details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Website analytics</h3>
              <p className="text-gray-600 mb-6">
                pantrymind.app uses Google Analytics to understand aggregate traffic (for
                example, page views). This is separate from the iOS app experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What we don&apos;t collect</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  <strong>Location:</strong> we do not track precise location for inventory
                </li>
                <li>
                  <strong>Contacts:</strong> we do not upload your address book
                </li>
                <li>
                  <strong>Advertising profiles:</strong> we do not sell data for ads
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Information</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Authenticate accounts and secure access</li>
                <li>Sync inventory across household members</li>
                <li>Provide AI scanning and daily scan quotas</li>
                <li>Send push notifications about expiry and household activity</li>
                <li>Process and restore PantryMind Plus entitlements</li>
                <li>Diagnose crashes and improve reliability</li>
                <li>Respond to support requests</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-600">
                <strong>We do not</strong> sell personal information to data brokers or use
                inventory contents to build advertising profiles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We use trusted processors to operate PantryMind:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  <strong>Google Firebase</strong> — Authentication, Firestore, Cloud
                  Functions, Cloud Messaging, Crashlytics
                </li>
                <li>
                  <strong>OpenRouter (and model providers)</strong> — AI vision/text
                  extraction for scans, via our backend proxy
                </li>
                <li>
                  <strong>Apple</strong> — App distribution, Sign-in/payment services as
                  applicable, and In-App Purchases for Plus
                </li>
                <li>
                  <strong>Google Analytics</strong> — website traffic measurement on
                  pantrymind.app
                </li>
              </ul>
              <p className="text-gray-600">
                These providers process data under their own terms and privacy policies, and
                only as needed to deliver PantryMind features.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-4">
                Data in transit uses TLS. Cloud data is protected by Firebase/Google Cloud
                security controls. Access to household inventory is restricted by
                authentication and Firestore security rules so only household members can
                read or write that kitchen&apos;s data.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights & Controls</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  <strong>Access & correction:</strong> view and edit inventory and account
                  details in the app
                </li>
                <li>
                  <strong>Deletion:</strong> Settings → Delete Account removes your Auth
                  identity, user record, device token, and local cache. PantryMind removes
                  you from shared households; if you are the last member, the household and
                  inventory are deleted. If you own a household with other members,
                  ownership transfers before your account is removed.
                </li>
                <li>
                  <strong>Subscription management:</strong> manage or cancel Plus through
                  Apple ID → Subscriptions
                </li>
              </ul>
              <p className="text-gray-600">
                To exercise privacy rights or ask questions, email{' '}
                <a href="mailto:privacy@pantrymind.app" className="text-blue-600 hover:underline">
                  privacy@pantrymind.app
                </a>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Account data: until you delete your account</li>
                <li>Inventory data: until deleted by you/household or account teardown rules above</li>
                <li>Crash diagnostics: typically up to 90 days</li>
                <li>Support emails: up to 2 years for reference</li>
                <li>AI scan images: not retained by PantryMind as inventory photos</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children&apos;s Privacy</h2>
              <p className="text-gray-600 mb-4">
                PantryMind is rated 4+ for family use. We do not knowingly collect personal
                information from children under 13. If you believe a child provided personal
                information, contact us and we will take appropriate steps to delete it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this policy to reflect product or legal changes. Material
                updates will be reflected on this page with a revised “Last updated” date.
                Continued use of PantryMind after changes means you accept the updated
                policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Mail className="w-5 h-5 mr-3" />
                <a
                  href="mailto:privacy@pantrymind.app"
                  className="text-blue-600 hover:underline"
                >
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
