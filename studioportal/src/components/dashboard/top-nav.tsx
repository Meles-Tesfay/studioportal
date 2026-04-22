import { Search, Bell, Menu } from "lucide-react";

export function TopNav() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/50 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-zinc-400 hover:text-zinc-100">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects, clients..."
            className="h-10 w-80 rounded-xl border border-zinc-800 bg-zinc-900/50 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:bg-zinc-800 hover:text-zinc-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 shadow-sm cursor-pointer hover:border-zinc-600 transition-colors">
          {/* Colorful gradient placeholder for avatar */}
          <div className="h-full w-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600" />
        </div>
      </div>
    </header>
  );
}
