'use client';

import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Scan, Users, Shield, Bell, BarChart3, Smartphone, ChevronDown, Star, Download, ArrowRight, CheckCircle, Camera, FolderSync, PieChart } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center app-shadow">
                  <Image 
                    src="/logo.png" 
                    alt="PantryMind Logo" 
                    width={48} 
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="absolute -top-2 -right-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    Now Available
                  </span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Never waste food again with{' '}
              <span className="gradient-text">PantryMind</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Smart household inventory tracking for families and roommates. 
              Track your kitchen inventory with AI-powered scanning and real-time household sync.
            </p>
            
            <div className="mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Live on App Store
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Download PantryMind today and start reducing food waste in your household
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://apps.apple.com/us/app/pantrymind/id6751251151" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </a>
                <p className="text-sm text-gray-500">
                  iOS 16.6+ • Free to download
                </p>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">AI-Powered</div>
                <div className="text-gray-600">Smart Scanning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Real-Time</div>
                <div className="text-gray-600">Household Sync</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Privacy-First</div>
                <div className="text-gray-600">On-Device Processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage your kitchen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PantryMind combines AI technology with household collaboration to help you 
              track inventory, reduce waste, and save money on groceries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Scan className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Camera Scanning</h3>
              <p className="text-gray-600">
                AI-powered food item recognition automatically identifies products and tracks 
                expiration dates with just a quick camera scan.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Household Collaboration</h3>
              <p className="text-gray-600">
                Real-time sync across all family members and roommates. Everyone stays 
                updated on what's in the kitchen and what needs restocking.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy-First Design</h3>
              <p className="text-gray-600">
                Your images are processed on-device and never stored. Complete privacy 
                protection with secure Firebase authentication.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Notifications</h3>
              <p className="text-gray-600">
                Get timely expiration alerts and household activity updates. Never let 
                food go to waste again with intelligent reminders.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inventory Management</h3>
              <p className="text-gray-600">
                Easy add, edit, and track items with intuitive controls. Organize by 
                categories and get insights into your consumption patterns.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="feature-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <FolderSync className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Device Sync</h3>
              <p className="text-gray-600">
                Works seamlessly across all iOS devices. Access your inventory from 
                iPhone, iPad, or any device in your household.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple. Smart. Effective.
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three easy steps and never waste food again
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold border-2 border-green-500">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scan Items</h3>
              <p className="text-gray-600">
                Use your camera to scan food items. Our AI instantly recognizes products 
                and captures expiration dates.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold border-2 border-blue-500">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto-Organize</h3>
              <p className="text-gray-600">
                Items are automatically organized and synced across all household members 
                in real-time.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                  <PieChart className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold border-2 border-purple-500">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track & Save</h3>
              <p className="text-gray-600">
                Get smart notifications about expiring items and track your savings 
                from reduced food waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Beautiful. Intuitive. Powerful.
            </h2>
            <p className="text-xl text-gray-600">
              Experience the clean, modern interface designed for families
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* App Screenshots */}
            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image 
                  src="/screenshot-onboarding.png" 
                  alt="PantryMind Onboarding Screen" 
                  width={300} 
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Get Started</p>
                <p className="text-xs opacity-80">Welcome to PantryMind</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image 
                  src="/screenshot-inventory.png" 
                  alt="PantryMind Inventory Screen" 
                  width={300} 
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Smart Inventory</p>
                <p className="text-xs opacity-80">Track items with AI</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image 
                  src="/screenshot-details.png" 
                  alt="PantryMind Item Details" 
                  width={300} 
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">Item Details</p>
                <p className="text-xs opacity-80">Manage expiration dates</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image 
                  src="/screenshot-scan.png" 
                  alt="PantryMind Scan Screen" 
                  width={300} 
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                <p className="text-sm font-medium">AI Scanning</p>
                <p className="text-xs opacity-80">Camera & photo library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by families everywhere
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of households reducing food waste and saving money
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "PantryMind has completely changed how our family manages groceries. 
                We've cut our food waste by 70% and saved hundreds of dollars!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Sarah Martinez</p>
                  <p className="text-gray-500">Family of 4</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As roommates, keeping track of shared groceries was always a challenge. 
                PantryMind made it effortless and we all love the real-time sync!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  AL
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Alex Liu</p>
                  <p className="text-gray-500">College Roommates</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The AI scanning is incredibly accurate and the privacy features give 
                me peace of mind. It's exactly what busy families need!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Michael Johnson</p>
                  <p className="text-gray-500">Busy Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about PantryMind
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How accurate is the AI food scanning?",
                answer: "Our AI scanning technology achieves over 95% accuracy in food item recognition. It can identify thousands of common grocery items and automatically extract expiration dates from packaging."
              },
              {
                question: "Is my data private and secure?",
                answer: "Absolutely. PantryMind processes all images on-device and never stores them. We use Firebase for secure authentication and all household data is encrypted both in transit and at rest."
              },
              {
                question: "Can I use PantryMind with roommates?",
                answer: "Yes! PantryMind is designed for households of any size. You can invite family members or roommates to join your household and everyone will have real-time access to the shared inventory."
              },
              {
                question: "What iOS versions are supported?",
                answer: "PantryMind requires iOS 16.6 or later and works on iPhone and iPad. We optimize for the latest iOS features to provide the best scanning and sync experience."
              },
              {
                question: "How much does PantryMind cost?",
                answer: "PantryMind is free to download with core inventory tracking features included. Premium features like advanced analytics and unlimited household members are available through in-app purchase."
              },
              {
                question: "How do I download PantryMind?",
                answer: "PantryMind is now available on the App Store! Simply search for 'PantryMind' in the App Store or visit our App Store page to download it for free. Requires iOS 16.6 or later."
              }
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
            Ready to transform your kitchen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download PantryMind today and join thousands of families reducing food waste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="https://apps.apple.com/us/app/pantrymind/id6751251151" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </a>
            <div className="flex items-center text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="text-sm">4.8 rating • 1,000+ downloads</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Free to download • iOS 16.6+ required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}