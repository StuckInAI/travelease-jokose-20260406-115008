import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
    Destinations: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'],
    Support: ['Help Center', 'Contact Us', 'Safety', 'Cancellation', 'COVID-19 Info'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TravelEase</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted travel companion for exploring the world. We make travel planning effortless and unforgettable.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>hello@travelease.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Travel St, San Francisco, CA</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-500 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
