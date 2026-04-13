import { cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";
import {
  LayoutDashboard, 
  Users, 
  CreditCard, 
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Package,
  ArrowUpRight,
  Layers,
  Globe,
  Lock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090b] text-zinc-100 selection:bg-zinc-500/30">
      <Navbar />
      
      {/* Cinematic Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full bg-zinc-800/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[900px] w-[900px] rounded-full bg-zinc-900/40 blur-[160px]" />
        <div className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]" />
      </div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-10 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all hover:bg-zinc-800/60">
              <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-zinc-400">Phase 1: Infrastructure Live</span>
            </div>

            {/* Hero Heading */}
            <h1 className="max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              The Operating <span className="text-zinc-600">System</span> <br/> 
              for Elite Studios.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-500 sm:text-2xl">
              StudioPortal centralizes your agency operations into a single, cinematic 
              interface. Manage clients, track project milestones, and automate 
              invoicing with unmatched precision and brand status.
            </p>

            <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:gap-8">
              <Link 
                href="/dashboard" 
                className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-zinc-100 px-10 text-xl font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Launch Dashboard
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
              <button className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-10 text-xl font-semibold text-zinc-300 backdrop-blur-md transition-all hover:bg-zinc-800/50">
                View Showcase
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid Simulation (Glass Cards) */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Core Infrastructure</h2>
            <p className="text-zinc-500 text-lg max-w-2xl">Everything you need to run a high-ticket agency at scale.</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<LayoutDashboard className="h-6 w-6" />}
              title="Centric Dashboard"
              desc="Real-time oversight of agency metrics, revenue goals, and team capacity."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Bespoke Portals"
              desc="Individual, white-labeled workspaces that elevates your client experience."
            />
            <FeatureCard 
              icon={<Package className="h-6 w-6" />}
              title="Milestone Roadmaps"
              desc="Interactive, high-fidelity timelines for tracking project evolution."
            />
            <FeatureCard 
              icon={<CreditCard className="h-6 w-6" />}
              title="Frictionless Billing"
              desc="Integrated Stripe invoicing with one-click automated checkout flows."
            />
          </div>
        </section>

        {/* Cinematic Dashboard Preview */}
        <section id="showcase" className="mx-auto mt-24 max-w-7xl px-6 sm:px-12 lg:px-16 overflow-hidden">
          <div className="group relative">
            {/* Glossy Border Effect */}
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-b from-zinc-700/30 to-transparent opacity-50 blur-xl transition-all group-hover:opacity-100 group-hover:duration-500" />
            
            <div className="glass relative flex h-[500px] w-full flex-col overflow-hidden rounded-[2rem] border border-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] sm:h-[600px]">
              {/* Fake Window Controls */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/40 px-8 py-5 backdrop-blur-md">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <div className="h-3 w-3 rounded-full bg-zinc-800" />
                    <div className="h-3 w-3 rounded-full bg-zinc-900" />
                  </div>
                  <div className="h-5 w-48 rounded-full bg-zinc-800/50" />
                </div>
                <div className="flex gap-4">
                  <div className="h-9 w-28 rounded-lg bg-zinc-800/50" />
                  <div className="h-9 w-9 rounded-lg bg-zinc-100" />
                </div>
              </div>
              
              {/* Content Area with Generated Image */}
              <div className="flex-1 overflow-hidden">
                <Image
                  src="/showcase-preview.png"
                  alt="StudioPortal Dashboard Preview"
                  width={1600}
                  height={900}
                  priority
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Security / Trust Section */}
        <section className="mx-auto max-w-7xl px-6 py-40 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
                Infrastructure built <br/> 
                <span className="text-zinc-500">for the modern era.</span>
              </h2>
              <div className="flex flex-col gap-6">
                <TrustItem icon={<ShieldCheck />} title="Enterprise Security" desc="All data is encrypted with military-grade standards." />
                <TrustItem icon={<Zap />} title="Hyper-Performance" desc="Built on Next.js 16 for sub-second page transitions." />
                <TrustItem icon={<Lock />} title="Access Control" desc="Strict RBAC ensuring your internal data stays internal." />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex h-48 flex-col justify-end rounded-3xl bg-zinc-900/40 p-8 ring-1 ring-zinc-800/60 transition-colors hover:bg-zinc-900/60">
                <Globe className="mb-4 h-8 w-8 text-zinc-500" />
                <h4 className="font-bold text-xl">Global Edge</h4>
              </div>
              <div className="flex h-48 flex-col justify-end rounded-3xl bg-zinc-900/40 p-8 ring-1 ring-zinc-800/60 transition-colors hover:bg-zinc-900/60">
                <Layers className="mb-4 h-8 w-8 text-zinc-500" />
                <h4 className="font-bold text-xl">Multi-tenant</h4>
              </div>
              <div className="col-span-2 flex h-48 flex-col justify-end rounded-3xl bg-zinc-100 p-8 text-black ring-1 ring-zinc-800/60">
                <ArrowUpRight className="mb-4 h-10 w-10" />
                <p className="text-sm font-bold uppercase tracking-widest">Upgrade Status</p>
                <h4 className="font-bold text-3xl">Get Started Now</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-start rounded-3xl border border-zinc-900 bg-zinc-900/20 p-8 transition-all hover:bg-zinc-800/40 hover:border-zinc-800 group">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-100 transition-all group-hover:scale-110 group-hover:bg-zinc-100 group-hover:text-zinc-900">
        {icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-base">{desc}</p>
    </div>
  );
}

function TrustItem({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400">
        {cloneIcon(icon)}
      </div>
      <div>
        <h4 className="text-xl font-bold text-zinc-100">{title}</h4>
        <p className="text-zinc-500 text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}

function cloneIcon(icon: ReactNode) {
  if (!isValidElement(icon)) return null;
  return cloneElement(icon as ReactElement<{ className?: string }>, { className: "h-5 w-5" });
}
