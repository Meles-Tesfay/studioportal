import React from "react";
import Logo from "./logo";
import { Globe, Lock, Layers, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-zinc-900 bg-[#09090b] px-6 py-16 sm:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-6 lg:col-span-12 xl:col-span-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            StudioPortal is a purpose-built client operating system for 
            elite design and development studios. Built for speed, clarity, and brand status.
          </p>
          <div className="flex items-center gap-5 text-zinc-400">
            <a href="#" className="hover:text-zinc-100 transition-colors"><Globe className="h-5 w-5" /></a>
            <a href="#" className="hover:text-zinc-100 transition-colors"><Layers className="h-5 w-5" /></a>
            <a href="#" className="hover:text-zinc-100 transition-colors"><Lock className="h-5 w-5" /></a>
            <a href="#" className="hover:text-zinc-100 transition-colors"><ArrowUpRight className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-12 xl:col-span-8">
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Product</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-500">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Showcase</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-500">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Support</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-500">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Cloud Status</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mt-16 max-w-7xl pt-8 border-t border-zinc-900 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-zinc-600">
        <p>© {currentYear} StudioPortal Inc. All rights reserved.</p>
        <p>Built by elite architects for elite designers.</p>
      </div>
    </footer>
  );
}
