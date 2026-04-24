"use client";

import { useState } from "react";
import { Search, Bell, Menu, User, Settings, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-zinc-800/60 bg-zinc-950/80 px-6 backdrop-blur-2xl relative z-20 transition-all">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 hover:text-cyan-400 transition-colors hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden md:block max-w-md w-full group">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${isFocused ? "text-cyan-400" : "text-zinc-500 group-hover:text-zinc-400"}`} />
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search projects, clients..."
            className="h-11 w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 pl-11 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500/50 focus:bg-zinc-900/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-inner"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 transition-all duration-300 hover:bg-zinc-800 hover:text-zinc-100 hover:border-cyan-500/30 group hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <Bell className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
          <span className="absolute right-3 top-3 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
          </span>
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-zinc-700/80 bg-zinc-800 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)] hover:scale-105 active:scale-95 focus:outline-none ring-2 ring-transparent focus:ring-cyan-500/30"
          >
            <div className="h-full w-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 transition-opacity hover:opacity-90" />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-0 mt-3 w-60 origin-top-right rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-1.5 shadow-2xl backdrop-blur-xl ring-1 ring-white/5"
              >
                <div className="px-3 py-3 mb-1 border-b border-zinc-800/80">
                  <p className="text-sm font-semibold text-zinc-100">Studio Admin</p>
                  <p className="text-xs text-zinc-400 mt-0.5">admin@studioportal.co</p>
                </div>
                <div className="space-y-1 p-1">
                  <DropdownItem icon={User} label="Profile" />
                  <DropdownItem icon={Settings} label="Settings" />
                </div>
                <div className="mt-1 border-t border-zinc-800/80 p-1">
                  <DropdownItem icon={LogOut} label="Log out" danger />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function DropdownItem({ icon: Icon, label, danger = false }: { icon: any, label: string, danger?: boolean }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
        danger 
          ? "text-rose-400 hover:bg-rose-500/10 hover:text-rose-300" 
          : "text-zinc-300 hover:bg-zinc-800/80 hover:text-zinc-100"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
