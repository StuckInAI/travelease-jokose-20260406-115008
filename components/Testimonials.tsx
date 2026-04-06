import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    rating: 5,
    text: 'TravelEase made our honeymoon in Santorini absolutely perfect. Every detail was taken care of, from the airport transfers to the sunset dinner reservations. Highly recommend!',
    trip: 'Santorini, Greece',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: 'The Japan Cultural Journey was a life-changing experience. Our guide was incredibly knowledgeable and the itinerary was perfectly balanced between must-see spots and hidden gems.',
    trip: 'Japan Cultural Journey',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    text: "Best travel company I've ever used! The Southeast Asia Explorer package was incredible value. 14 days of pure adventure with zero stress. Already booked my next trip!",
    trip: 'Southeast Asia Explorer',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real stories from real travelers who discovered the world with TravelEase.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-blue-200 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.text}</p>

              {/* Trip Badge */}
              <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                ✈ {t.trip}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
