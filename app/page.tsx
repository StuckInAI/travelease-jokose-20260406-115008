import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import PopularPackages from '@/components/PopularPackages';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedDestinations />
      <PopularPackages />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
