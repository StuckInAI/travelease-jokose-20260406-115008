import { Shield, HeadphonesIcon, CreditCard, Map, Award, Clock } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safe & Secure',
    description: 'Your safety is our top priority. All our trips are vetted and insured for your peace of mind.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you wherever you are.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Best Price Guarantee',
    description: "Find a lower price? We'll match it. Get the best deals without compromising on quality.",
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Expert Local Guides',
    description: 'Experience destinations through the eyes of passionate local experts who know every corner.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Award Winning',
    description: 'Recognized as the best travel platform by multiple industry awards for 5 consecutive years.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Booking',
    description: 'Plans change. Our flexible booking policy lets you modify or cancel with no hidden fees.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Why Millions Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                TravelEase
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We combine cutting-edge technology with human expertise to deliver travel experiences that exceed expectations. From planning to return, we&apos;ve got you covered.
            </p>

            {/* Progress Bars */}
            <div className="space-y-5">
              {[
                { label: 'Customer Satisfaction', value: 98 },
                { label: 'On-time Departures', value: 95 },
                { label: 'Repeat Customers', value: 87 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
