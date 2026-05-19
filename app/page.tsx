import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import AcademicsSection from '@/components/home/AcademicsSection';
import NewsSection from '@/components/home/NewsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AcademicsSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  );
}