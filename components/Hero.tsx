'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium">500+ Destinations Worldwide</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Discover the World
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Your Way
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Plan unforgettable journeys, explore hidden gems, and create lifelong memories with TravelEase — your ultimate travel companion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 shadow-2xl group">
            Start Exploring
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-blue-700 fill-blue-700 ml-0.5" />
            </div>
            Watch Video
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: '50K+', label: 'Happy Travelers' },
            { value: '500+', label: 'Destinations' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-yellow-300">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
