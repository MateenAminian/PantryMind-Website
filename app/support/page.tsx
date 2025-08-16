import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Mail, MessageCircle, Book, HelpCircle, Bug, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with PantryMind - Contact support, find answers to common questions, and get assistance with household inventory tracking.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you get the most out of PantryMind. Find answers to common questions 
              or get in touch with our support team.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Support</h3>
              <p className="text-gray-600 mb-4">
                Questions about features, account issues, or general help
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
              <p className="text-gray-600 mb-4">
                Found a bug or experiencing technical issues?
              </p>
              <a 
                href="mailto:support@pantrymind.app?subject=Bug Report"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Report Bug
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature Requests</h3>
              <p className="text-gray-600 mb-4">
                Have an idea to make PantryMind even better?
              </p>
              <a 
                href="mailto:feedback@pantrymind.app"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                feedback@pantrymind.app
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I invite family members to my household?
                  </h3>
                  <p className="text-gray-600">
                    Go to Settings &gt; Household &gt; Invite Members. Send them an invitation link 
                    via email or text. Once they join, all inventory will sync automatically.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What if the AI doesn't recognize a food item?
                  </h3>
                  <p className="text-gray-600">
                    You can manually add items by tapping "Add Manually" or edit the AI's 
                    suggestion. The AI learns from corrections to improve future recognition.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I set up expiration notifications?
                  </h3>
                  <p className="text-gray-600">
                    Enable push notifications in Settings &gt; Notifications. Choose how many 
                    days before expiration you'd like to be reminded (1-7 days).
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I use PantryMind offline?
                  </h3>
                  <p className="text-gray-600">
                    Yes! You can add and edit items offline. Changes will sync automatically 
                    when you reconnect to the internet.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is my data safe and private?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. All images are processed on-device and never stored. Your 
                    inventory data is encrypted and only shared with household members you invite.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I delete my account?
                  </h3>
                  <p className="text-gray-600">
                    Go to Settings &gt; Account &gt; Delete Account. This permanently removes all 
                    your data and cannot be undone. Consider exporting your data first.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What iOS versions are supported?
                  </h3>
                  <p className="text-gray-600">
                    PantryMind requires iOS 16.6 or later. We recommend keeping your device 
                    updated for the best performance and latest features.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How much does PantryMind cost?
                  </h3>
                  <p className="text-gray-600">
                    PantryMind will be free to download with basic features included. 
                    Premium features will be available through in-app purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started Guide */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started Guide</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                New to PantryMind? Follow these simple steps to set up your household inventory tracking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Create Account</h3>
                <p className="text-gray-600 text-sm">Sign up with email and verify your account</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Set Up Household</h3>
                <p className="text-gray-600 text-sm">Invite family members or roommates</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Scanning</h3>
                <p className="text-gray-600 text-sm">Use the camera to scan your first items</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-lg font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enable Notifications</h3>
                <p className="text-gray-600 text-sm">Set up expiration alerts and reminders</p>
              </div>
            </div>
          </div>

          {/* Response Times */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Response Times</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're committed to providing excellent support and typically respond within these timeframes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">&lt; 4 hours</div>
                <div className="text-gray-600">Critical Issues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">&lt; 24 hours</div>
                <div className="text-gray-600">General Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">&lt; 48 hours</div>
                <div className="text-gray-600">Feature Requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}