import { Clock, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  destination: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: string;
  highlights: string[];
  badge?: string;
}

const packages: Package[] = [
  {
    id: 1,
    name: 'Greek Island Hopper',
    destination: 'Greece',
    duration: '10 Days',
    groupSize: '2-12',
    rating: 4.9,
    price: 2499,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
    highlights: ['Santorini', 'Mykonos', 'Athens', 'Crete'],
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Southeast Asia Explorer',
    destination: 'Thailand, Vietnam, Cambodia',
    duration: '14 Days',
    groupSize: '4-16',
    rating: 4.8,
    price: 1899,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80',
    highlights: ['Bangkok', 'Hoi An', 'Angkor Wat', 'Phuket'],
    badge: 'Hot Deal',
  },
  {
    id: 3,
    name: 'Japan Cultural Journey',
    destination: 'Japan',
    duration: '12 Days',
    groupSize: '2-10',
    rating: 5.0,
    price: 3299,
    originalPrice: 4100,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    highlights: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
  },
];

export default function PopularPackages() {
  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Packages</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Popular Travel Packages
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Carefully curated packages with everything included — flights, hotels, tours, and more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg card-hover">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                {pkg.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.destination}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{pkg.groupSize} people</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {pkg.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-lg">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-gray-900">${pkg.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-green-600 font-semibold">
                      Save ${(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                  </div>
                  <button className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity group">
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
