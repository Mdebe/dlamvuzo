import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import SchoolHistorySection from '@/components/about/SchoolHistorySection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import LeadershipSection from '@/components/about/LeadershipSection';
import ValuesSection from '@/components/about/ValuesSection';
import AchievementsSection from '@/components/about/AchievementsSection';
import AboutCTASection from '@/components/about/AboutCTASection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <Navbar />
      <AboutHeroSection />
      <SchoolHistorySection />
      <MissionVisionSection />
      <LeadershipSection />
      <ValuesSection />
      <AchievementsSection />
      <AboutCTASection />
      <Footer />
    </main>
  );
}
