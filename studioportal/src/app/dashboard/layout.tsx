import type { Metadata } from "next";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TopNav } from "@/components/dashboard/top-nav";

export const metadata: Metadata = {
  title: "Dashboard | StudioPortal",
  description: "Manage your studio's projects and clients.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#040405] text-zinc-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-zinc-800/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-cyan-900/5 blur-[120px]" />
      </div>
      
      <div className="z-10 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden z-10 relative">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
