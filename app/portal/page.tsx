import PortalSidebar from '@/components/portal/PortalSidebar';
import PortalTopbar from '@/components/portal/PortalTopbar';
import StudentWelcomeCard from '@/components/portal/StudentWelcomeCard';
import StudentStatsCards from '@/components/portal/StudentStatsCards';
import TimetableSection from '@/components/portal/TimetableSection';
import AssignmentsSection from '@/components/portal/AssignmentsSection';
import ResultsSection from '@/components/portal/ResultsSection';
import AnnouncementsSection from '@/components/portal/AnnouncementsSection';

export default function StudentPortalPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] lg:flex">
      {/* =========================
          SIDEBAR
      ========================== */}
      <PortalSidebar />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* DESKTOP TOPBAR */}
        <PortalTopbar />

        {/* PAGE CONTENT */}
        <div className="space-y-6 p-4 pt-24 sm:p-6 sm:pt-24 lg:space-y-10 lg:p-10 lg:pt-10">
          
          {/* HERO CARD */}
          <StudentWelcomeCard />

          {/* STATS */}
          <StudentStatsCards />

          {/* CONTENT GRID */}
          <div className="grid gap-6 lg:gap-8 xl:grid-cols-[1.5fr_0.7fr]">
            
            {/* LEFT CONTENT */}
            <div className="min-w-0 space-y-6 lg:space-y-8">
              <TimetableSection />

              <AssignmentsSection />

              <ResultsSection />
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="min-w-0">
              <AnnouncementsSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}