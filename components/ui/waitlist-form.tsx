'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Loader2 } from 'lucide-react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBXIIh3rX8-cOpMmp31yZA28FAo8-znPLs",
  authDomain: "pantrymind-6f39c.firebaseapp.com",
  projectId: "pantrymind-6f39c",
  storageBucket: "pantrymind-6f39c.firebasestorage.app",
  messagingSenderId: "547669489485",
  appId: "1:547669489485:web:be1d8f425686401a4f6904"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Check if email already exists in Firestore
      const waitlistRef = collection(db, 'waitlist');
      const q = query(waitlistRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        setError('This email is already registered.');
        return;
      }

      // Add new email to Firestore
      await addDoc(waitlistRef, {
        email: email,
        timestamp: new Date(),
        source: 'website',
        status: 'pending'
      });
      
      console.log('New waitlist signup:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Track waitlist signup for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'waitlist_signup', {
          event_category: 'engagement',
          event_label: 'beta_waitlist'
        });
      }
      
    } catch (err) {
      console.error('Waitlist signup error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-900 mb-2">You're on the waitlist!</h3>
        <p className="text-green-700">
          We'll notify you if you're selected for our closed beta. Limited spots available.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="px-8 bg-black hover:bg-gray-800"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            'Join Waitlist'
          )}
        </Button>
      </div>
      {error && (
        <p className="text-red-600 text-sm text-center">{error}</p>
      )}
      <p className="text-sm text-gray-500 text-center">
        Join our exclusive waitlist for closed beta access. Limited spots available.
      </p>
    </form>
  );
}
