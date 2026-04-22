"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <aside className="flex w-64 flex-col border-r border-zinc-800/80 bg-zinc-950/50 backdrop-blur-xl">
      <div className="flex h-16 items-center px-6">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-cyan-500/20"
                  : "text-zinc-400 border border-transparent hover:bg-zinc-800/50 hover:text-zinc-100"
              }`}
            >
              <item.icon className={`h-5 w-5 transition-colors ${isActive ? "text-cyan-400" : "text-zinc-500"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-zinc-800/80">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:bg-zinc-800/50 hover:text-zinc-100">
          <LogOut className="h-5 w-5 text-zinc-500" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
