import React from "react";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 transition-all group-hover:bg-zinc-100 group-hover:scale-110">
        <Sparkles className="h-5 w-5 text-zinc-100 transition-colors group-hover:text-black" />
        <div className="absolute -inset-1 rounded-xl bg-zinc-100/10 opacity-0 blur transition-all group-hover:opacity-100" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">
        Studio<span className="text-zinc-500">Portal</span>
      </span>
    </div>
  );
}
