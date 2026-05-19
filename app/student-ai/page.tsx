import AIHeader from '@/components/student-ai/AIHeader';
import AIChatMessages from '@/components/student-ai/AIChatMessages';
import AIInput from '@/components/student-ai/AIInput';
import AIQuickActions from '@/components/student-ai/AIQuickActions';
import AISidebar from '@/components/student-ai/AISidebar';

export default function StudentAIPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] lg:flex">
      <AISidebar />

      <section className="flex min-h-screen flex-1 flex-col overflow-hidden">
        <AIHeader />

        <div className="flex flex-1 flex-col overflow-hidden px-4 pb-4 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-8">
          <AIQuickActions />

          <div className="mt-6 flex flex-1 overflow-hidden rounded-[2rem] border border-[#58B947]/10 bg-white shadow-xl">
            <div className="flex flex-1 flex-col overflow-hidden">
              <AIChatMessages />
              <AIInput />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}