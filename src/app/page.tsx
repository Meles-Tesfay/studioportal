"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Package
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] text-zinc-100 selection:bg-zinc-500/30">
      {/* Cinematic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-zinc-800/20 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-zinc-900/40 blur-[140px]" />
      
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div 
            variants={item}
            className="mb-8 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium"
          >
            <Sparkles className="h-4 w-4 text-zinc-400" />
            <span className="text-zinc-300">Phase 1: Infrastructure Live</span>
          </motion.div>

          {/* Hero Section */}
          <motion.h1 
            variants={item}
            className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          >
            The Operating <span className="text-zinc-500">System</span> for Elite Studios.
          </motion.h1>

          <motion.p 
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            StudioPortal centralizes your agency operations into a single, cinematic 
            interface. Manage clients, track project milestones, and automate 
            invoicing with unmatched precision.
          </motion.p>

          <motion.div 
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <Link 
              href="/dashboard" 
              className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-8 text-lg font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="flex h-14 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/30 px-8 text-lg font-medium text-zinc-300 backdrop-blur-sm transition-all hover:bg-zinc-800/50">
              View Showcase
            </button>
          </motion.div>

          {/* Feature Grid Simulation (Glass Cards) */}
          <motion.div 
            variants={item}
            className="mt-32 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <FeatureCard 
              icon={<LayoutDashboard className="h-6 w-6" />}
              title="Global Dashboard"
              desc="Real-time oversight of agency metrics and revenue."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Client Portals"
              desc="Individual, branded workspaces for every partner."
            />
            <FeatureCard 
              icon={<Package className="h-6 w-6" />}
              title="Milestone Tracking"
              desc="Interactive roadmaps for high-fidelity deliverables."
            />
            <FeatureCard 
              icon={<CreditCard className="h-6 w-6" />}
              title="Stripe Payouts"
              desc="Integrated invoicing with instant gateway processing."
            />
          </motion.div>
        </motion.div>
      </main>

      {/* Decorative Dashboard Preview (Minimalist) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
        className="mx-auto mt-24 max-w-6xl px-6 sm:px-12"
      >
        <div className="glass h-[400px] w-full rounded-t-3xl p-8 pt-12 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-zinc-800" />
              <div className="h-4 w-32 rounded bg-zinc-800/50" />
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-24 rounded-lg bg-zinc-800/30" />
              <div className="h-10 w-10 rounded-lg bg-zinc-100" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="h-32 rounded-2xl bg-zinc-800/20" />
            <div className="h-32 rounded-2xl bg-zinc-800/20" />
            <div className="h-32 rounded-2xl bg-zinc-800/20" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 text-center transition-all hover:bg-zinc-800/30">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-100">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
