import { MapPin, Star, Heart } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  tag: string;
  tagColor: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    rating: 4.9,
    reviews: 2341,
    price: 1299,
    tag: 'Trending',
    tagColor: 'bg-orange-500',
  },
  {
    id: 2,
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    rating: 4.8,
    reviews: 3892,
    price: 899,
    tag: 'Popular',
    tagColor: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    rating: 4.9,
    reviews: 1876,
    price: 1599,
    tag: 'Must Visit',
    tagColor: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Maldives',
    country: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
    rating: 5.0,
    reviews: 1204,
    price: 2499,
    tag: 'Luxury',
    tagColor: 'bg-yellow-500',
  },
  {
    id: 5,
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    rating: 4.7,
    reviews: 5621,
    price: 1099,
    tag: 'Classic',
    tagColor: 'bg-pink-500',
  },
  {
    id: 6,
    name: 'Machu Picchu',
    country: 'Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80',
    rating: 4.8,
    reviews: 987,
    price: 1799,
    tag: 'Adventure',
    tagColor: 'bg-teal-500',
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Explore</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Handpicked destinations that offer extraordinary experiences for every type of traveler.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${dest.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {dest.tag}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-50 transition-colors group/heart">
                  <Heart className="w-4 h-4 text-gray-400 group-hover/heart:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{dest.name}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.country}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-blue-600">${dest.price}</div>
                    <div className="text-xs text-gray-400">per person</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{dest.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{dest.reviews.toLocaleString()} reviews</span>
                  <button className="ml-auto bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
