import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Mail, MessageCircle, Book, Bug, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'PantryMind help — household invites, AI scanning, PantryMind Plus, account deletion, and contact options.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers or email us. We&apos;re happy to help you get your kitchen
              synced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Support</h3>
              <p className="text-gray-600 mb-4">
                Features, account help, household questions
              </p>
              <a
                href="mailto:support@pantrymind.app"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                support@pantrymind.app
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bug className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bug Reports</h3>
              <p className="text-gray-600 mb-4">Something broken or unexpected?</p>
              <a
                href="mailto:support@pantrymind.app?subject=Bug%20Report"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Report a bug
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature Ideas</h3>
              <p className="text-gray-600 mb-4">Tell us what would make PantryMind better</p>
              <a
                href="mailto:feedback@pantrymind.app"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                feedback@pantrymind.app
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I invite someone to my household?
                  </h3>
                  <p className="text-gray-600">
                    Open Settings → Household, then share your invite code or QR code. They
                    join with Join Household and enter the code. Inventory syncs
                    automatically after they join.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What if AI misreads an item?
                  </h3>
                  <p className="text-gray-600">
                    Review results before saving, then edit names, brands, categories, or
                    expiry dates. You can also add items manually or with the barcode
                    scanner.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do expiration notifications work?
                  </h3>
                  <p className="text-gray-600">
                    Allow notifications when prompted (or enable them in iOS Settings).
                    PantryMind schedules reminders for items with expiry dates and can also
                    notify household members about shared activity.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Does PantryMind work offline?
                  </h3>
                  <p className="text-gray-600">
                    You can view and edit local inventory offline. Cloud sync and AI
                    scanning require a network connection.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is my data private?
                  </h3>
                  <p className="text-gray-600">
                    Inventory is shared only with your household. Scan images are sent for
                    AI extraction and are not stored by PantryMind as inventory photos. Full
                    details are in our{' '}
                    <Link href="/privacy/" className="text-teal-700 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do Free and Plus limits work?
                  </h3>
                  <p className="text-gray-600">
                    Free includes up to 2 household members and 25 AI scans per day. Plus
                    ($5.99/mo or $49.99/yr) unlocks unlimited AI scans and up to 20 members;
                    the owner&apos;s plan covers that kitchen. Manage subscriptions in Apple
                    ID → Subscriptions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I delete my account?
                  </h3>
                  <p className="text-gray-600">
                    Settings → Delete Account. This removes your personal account data. If
                    other members remain in a household, shared inventory stays for them.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What iOS versions are supported?
                  </h3>
                  <p className="text-gray-600">
                    PantryMind requires iOS 16.6 or later on iPhone and iPad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting started</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                New to PantryMind? Follow these steps after downloading from the App Store.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Create account</h3>
                <p className="text-gray-600 text-sm">
                  Complete welcome onboarding, then sign up and verify email
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Set up household</h3>
                <p className="text-gray-600 text-sm">
                  Create a kitchen or join with an invite code / QR
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scan or add</h3>
                <p className="text-gray-600 text-sm">
                  Use AI scan, barcode, or manual add—then review before saving
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enable alerts</h3>
                <p className="text-gray-600 text-sm">
                  Allow notifications so expiry reminders can reach you
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our response times</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We aim to reply within these windows on business days:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">&lt; 4 hours</div>
                <div className="text-gray-600">Critical issues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">&lt; 24 hours</div>
                <div className="text-gray-600">General support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">&lt; 48 hours</div>
                <div className="text-gray-600">Feature ideas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
