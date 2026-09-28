'use client';

import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import {
  Scan,
  Users,
  Shield,
  Bell,
  ShoppingCart,
  FolderSync,
  Camera,
  CheckCircle,
  PieChart,
  Download,
  Star,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const APP_STORE_URL = 'https://apps.apple.com/us/app/pantrymind/id6751251151';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center app-shadow">
                <Image
                  src="/logo.png"
                  alt="PantryMind Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
            </div>

            <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase mb-3">
              PantryMind
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Your shared kitchen,{' '}
              <span className="gradient-text">finally organized</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scan your fridge and pantry with AI, sync inventory across your household,
              and get expiry alerts before food goes to waste.
            </p>

            <div className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download on the App Store
                </a>
                <p className="text-sm text-gray-500">Free to start · iOS 16.6+</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">AI Scanning</div>
                <div className="text-gray-600">Camera & photo library</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Household Sync</div>
                <div className="text-gray-600">One kitchen, many devices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">Expiry Alerts</div>
                <div className="text-gray-600">Waste less, save more</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything your kitchen needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PantryMind combines AI scanning with real-time household collaboration so
              everyone knows what&apos;s on hand—and what to use next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Scan className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Camera Scanning</h3>
              <p className="text-gray-600">
                Point at a fridge shelf or upload photos. PantryMind identifies products,
                suggests categories, and estimates shelf life when dates aren&apos;t visible.
              </p>
            </div>

            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Household Collaboration</h3>
              <p className="text-gray-600">
                Share one kitchen inventory with family or roommates via invite code or QR.
                Edits sync in real time across every member&apos;s device.
              </p>
            </div>

            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Notifications</h3>
              <p className="text-gray-600">
                Get expiry reminders and household activity updates so nothing spoils quietly
                in the back of the fridge.
              </p>
            </div>

            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Grocery List</h3>
              <p className="text-gray-600">
                Turn low stock and finished items into a shared grocery list so the next trip
                covers what your kitchen actually needs.
              </p>
            </div>

            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <FolderSync className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Device Sync</h3>
              <p className="text-gray-600">
                Inventory lives securely in the cloud with Firebase, so iPhone and iPad stay
                in sync—even when different people update the pantry.
              </p>
            </div>

            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Private by Design</h3>
              <p className="text-gray-600">
                Scan images are sent only to process AI extraction and aren&apos;t kept by
                PantryMind. Household data stays with the people you invite.{' '}
                <a href="/privacy/" className="text-teal-700 hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple. Smart. Shared.
            </h2>
            <p className="text-xl text-gray-600">
              From first scan to a kitchen everyone can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold border-2 border-green-500">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scan</h3>
              <p className="text-gray-600">
                Capture fridge or pantry photos. AI extracts products so you can review and
                confirm before saving.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold border-2 border-blue-500">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organize</h3>
              <p className="text-gray-600">
                Items land in your shared inventory with categories and expiry estimates your
                household can edit anytime.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                  <PieChart className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold border-2 border-purple-500">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay ahead</h3>
              <p className="text-gray-600">
                Expiry alerts and grocery restock prompts help you use what you have and buy
                only what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Plus */}
      <section id="pricing" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Free forever · Plus when you need more
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple pricing for real kitchens
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free. Upgrade to PantryMind Plus when your household needs unlimited AI
              scans and more seats. The owner&apos;s plan covers everyone in that kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Everything you need to get organized</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                $0
                <span className="text-base font-normal text-gray-500"> / forever</span>
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  Shared inventory & expiry alerts
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  Up to 2 household members
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  25 AI scans per day
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  Grocery list & manual add
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-2">PantryMind Plus</h3>
              <p className="text-teal-50 mb-6">For busy households that scan often</p>
              <p className="text-4xl font-bold mb-1">
                $5.99
                <span className="text-base font-normal text-teal-100"> / month</span>
              </p>
              <p className="text-teal-100 mb-6">or $49.99 / year (~$4.17/mo)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  Unlimited AI scans for the household
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  Up to 20 household members
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  Owner&apos;s subscription covers the kitchen
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  Managed through Apple subscriptions
                </li>
              </ul>
              <p className="text-sm text-teal-50">
                Prices shown in USD. App Store localized pricing may vary by region.
                Cancel anytime in Settings → Apple ID → Subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for everyday kitchens
            </h2>
            <p className="text-xl text-gray-600">
              A clean iOS experience for scanning, reviewing, and staying in sync
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src="/screenshot-onboarding.png"
                  alt="PantryMind welcome onboarding"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Welcome</p>
                <p className="text-xs opacity-80">Value-first onboarding</p>
              </div>
            </div>

            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src="/screenshot-inventory.png"
                  alt="PantryMind inventory"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Inventory</p>
                <p className="text-xs opacity-80">Shared household pantry</p>
              </div>
            </div>

            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src="/screenshot-details.png"
                  alt="PantryMind item details"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Item details</p>
                <p className="text-xs opacity-80">Expiry & notes</p>
              </div>
            </div>

            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src="/screenshot-scan.png"
                  alt="PantryMind AI scanning"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">AI scanning</p>
                <p className="text-xs opacity-80">Camera & photo library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">Straight answers about how PantryMind works</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How does AI scanning work?',
                answer:
                  'When you scan, PantryMind sends a compressed image to our secure AI proxy for product extraction. Results come back for you to review before anything is saved. Images are used for that request only and are not stored by PantryMind as inventory photos.',
              },
              {
                question: 'Is my data private?',
                answer:
                  'Account and household inventory sync through Firebase with encryption in transit and at rest. Inventory is only visible to members of your household. See the Privacy Policy for details on AI processing, Crashlytics, and website analytics.',
              },
              {
                question: 'Can roommates share one kitchen?',
                answer:
                  'Yes. Create a household, share an invite code or QR code, and everyone syncs to the same inventory. Free plans include up to 2 members; Plus expands that to 20.',
              },
              {
                question: 'How much does PantryMind cost?',
                answer:
                  'PantryMind is free to download with inventory tracking, expiry alerts, grocery list, up to 2 household members, and 25 AI scans per day. PantryMind Plus is $5.99/month or $49.99/year and unlocks unlimited AI scans plus up to 20 members for the whole kitchen.',
              },
              {
                question: 'What iOS versions are supported?',
                answer:
                  'PantryMind requires iOS 16.6 or later and works on iPhone and iPad.',
              },
              {
                question: 'How do I delete my account?',
                answer:
                  'In the app, go to Settings → Delete Account. That removes your auth identity and personal data. Shared household inventory is preserved for remaining members when applicable.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to organize your kitchen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download PantryMind free on the App Store and invite your household in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </a>
            <div className="flex items-center text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="text-sm">Free to start · Plus optional</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">iOS 16.6+ · Available on the App Store</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
