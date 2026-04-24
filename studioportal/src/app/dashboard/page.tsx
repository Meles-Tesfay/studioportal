"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Briefcase, 
  CreditCard, 
  Users, 
  MoreHorizontal,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function DashboardPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between md:items-end gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
          <p className="text-zinc-400 mt-1">Here is what's happening with your studio today.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group h-10 px-5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-lg leading-none">+</span> New Project
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
        </motion.button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard title="Total Revenue" value="$45,231" change="+12.5%" icon={CreditCard} />
        <StatCard title="Active Projects" value="12" change="+2" icon={Briefcase} />
        <StatCard title="Total Clients" value="48" change="+4.1%" icon={Users} />
        <StatCard title="Pending Invoices" value="$8,450" change="-2.4%" icon={Clock} isNegative />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 rounded-[2rem] border border-zinc-800/80 bg-zinc-950/40 p-6 shadow-xl shadow-black/20 backdrop-blur-md"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight">Active Projects</h2>
            <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300">View All</button>
          </div>
          <motion.div 
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="show"
            className="space-y-3"
          >
            <ProjectRow name="Acme Corp Rebrand" client="Acme Corp" status="In Progress" progress={65} />
            <ProjectRow name="GlobalTech Website" client="GlobalTech" status="In Review" progress={90} />
            <ProjectRow name="FinApp Mobile UI" client="FinApp" status="Planning" progress={15} />
            <ProjectRow name="Nexus Marketing Site" client="Nexus" status="In Progress" progress={45} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-[2rem] border border-zinc-800/80 bg-zinc-950/40 p-6 shadow-xl shadow-black/20 backdrop-blur-md"
        >
          <h2 className="text-xl font-bold text-white tracking-tight mb-6">Recent Activity</h2>
          <motion.div 
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="show"
            className="relative border-l border-zinc-800 ml-3 space-y-6"
          >
            <ActivityItem title="Invoice Paid" desc="Acme Corp paid $4,500" time="2h ago" type="success" />
            <ActivityItem title="Milestone Approved" desc="GlobalTech approved Phase 2" time="5h ago" type="info" />
            <ActivityItem title="New Client Added" desc="Sarah invited FinApp team" time="1d ago" type="neutral" />
            <ActivityItem title="Project Started" desc="Nexus Marketing Site kicked off" time="2d ago" type="neutral" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon, isNegative = false }: any) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="group rounded-[1.5rem] border border-zinc-800/80 bg-zinc-950/40 p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-zinc-900/60 hover:border-cyan-500/30">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400">{title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-end gap-2">
        <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-sm">
        <span className={isNegative ? "text-rose-400" : "text-cyan-400 font-medium"}>{change}</span>
        <span className="text-zinc-500">vs last month</span>
      </div>
    </motion.div>
  );
}

function ProjectRow({ name, client, status, progress }: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
      className="group flex items-center justify-between rounded-2xl border border-zinc-800/40 bg-zinc-950/20 p-3 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500/30 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">{name}</h4>
          <p className="text-xs text-zinc-500 mt-0.5">{client}</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-end gap-2 w-32">
        <div className="flex w-full items-center justify-between text-xs">
          <span className="text-zinc-400">{status}</span>
          <span className="font-medium text-zinc-100">{progress}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full" 
          />
        </div>
      </div>
      <button className="text-zinc-500 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </motion.div>
  );
}

function ActivityItem({ title, desc, time, type }: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
      className="relative pl-6 group cursor-default"
    >
      <div className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-950 ring-2 ring-zinc-950 transition-transform duration-300 group-hover:scale-150 ${type === 'success' ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]' : type === 'info' ? 'bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.5)]' : 'bg-zinc-500'}`} />
      <div className="transition-transform duration-300 group-hover:translate-x-1">
        <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white">{title}</h4>
        <p className="mt-0.5 text-xs text-zinc-400">{desc}</p>
        <span className="mt-1 block text-[10px] uppercase tracking-wider text-zinc-600">{time}</span>
      </div>
    </motion.div>
  );
}
