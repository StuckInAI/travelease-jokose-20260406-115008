'use client';

import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'packages'>('packages');

  const tabs = [
    { id: 'flights' as const, label: 'Flights' },
    { id: 'hotels' as const, label: 'Hotels' },
    { id: 'packages' as const, label: 'Packages' },
  ];

  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          {/* Tabs */}
          <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Destination
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where to go?"
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Check In
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <input
                  type="date"
                  className="flex-1 outline-none text-sm text-gray-700"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Travelers
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <select className="flex-1 outline-none text-sm text-gray-700 bg-transparent">
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4+ Travelers</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                &nbsp;
              </label>
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
