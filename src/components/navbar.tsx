"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./logo";
import { ArrowRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-zinc-800/50 bg-[#09090b]/80 px-6 backdrop-blur-xl sm:px-12 lg:px-16"
    >
      <Link href="/">
        <Logo />
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 sm:flex">
        <Link href="#features" className="hover:text-zinc-100 transition-colors">Features</Link>
        <Link href="#showcase" className="hover:text-zinc-100 transition-colors">Showcase</Link>
        <Link href="#pricing" className="hover:text-zinc-100 transition-colors">Pricing</Link>
        <Link href="#docs" className="hover:text-zinc-100 transition-colors">Documentation</Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link 
          href="/login" 
          className="hidden text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors sm:block"
        >
          Sign In
        </Link>
        <Link 
          href="/dashboard" 
          className="group flex h-10 items-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-bold text-black transition-all hover:scale-[1.03] active:scale-[0.97]"
        >
          Launch Portal
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 sm:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </motion.header>
  );
}
