'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-4">
          Get Exclusive Travel Deals
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips from our experts.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-6">
            <CheckCircle className="w-8 h-8 text-green-300" />
            <div className="text-left">
              <div className="text-white font-bold text-lg">You&apos;re subscribed!</div>
              <div className="text-blue-100 text-sm">Check your inbox for a welcome gift 🎁</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50 text-sm"
            />
            <button
              type="submit"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-blue-200 text-xs mt-4">
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {[
            { value: '50K+', label: 'Subscribers' },
            { value: 'Weekly', label: 'Newsletters' },
            { value: '0', label: 'Spam Emails' },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-2xl font-extrabold text-white">{badge.value}</div>
              <div className="text-blue-200 text-xs mt-1">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
