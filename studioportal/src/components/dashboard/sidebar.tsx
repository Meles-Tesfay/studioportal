"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "@/components/logo";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/dashboard/projects", icon: Briefcase },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Invoices", href: "/dashboard/invoices", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r border-zinc-800/80 bg-zinc-950/50 backdrop-blur-xl relative h-full">
      <div className="flex h-16 items-center px-6">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1.5 px-4 py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200 z-10 group ${
                isActive
                  ? "text-cyan-400"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {!isActive && (
                <div className="absolute inset-0 rounded-xl bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              )}
              <item.icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-zinc-500 group-hover:text-zinc-300"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-zinc-800/80 mt-auto">
        <button className="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-rose-500/10 hover:text-rose-400 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <LogOut className="relative z-10 h-5 w-5 text-zinc-500 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110 group-hover:text-rose-400" />
          <span className="relative z-10">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
