"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        const text = await res.text();
        setError(text || "Invalid credentials");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-16 sm:px-12 lg:px-16">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative overflow-hidden w-full max-w-md rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 blur-3xl opacity-60" />

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M12 3v18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                <path
                  d="M5 8.5c1.5-2 3-3 7-3s5.5 1 7 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              </svg>
            </div>
            <div>
              <p className="mb-0 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                StudioPortal Access
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Sign in
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                Continue to your agency workspace.
              </p>
            </div>
          </div>

          {error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 rounded-md border border-red-600/30 bg-red-900/30 p-3 text-sm text-red-300"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </motion.div>
          ) : null}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-300"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 7l-9 6-9-6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@agency.com"
                  autoComplete="email"
                  className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 pl-11 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                  required
                  disabled={loading}
                />
                  <p className="mt-1 text-xs text-zinc-500">We'll never share your email — only used for account access.</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-300"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-zinc-500 transition hover:text-zinc-300"
                  onClick={() => alert("Password reset flow not implemented.")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 17a3 3 0 100-6 3 3 0 000 6z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 pl-11 pr-12 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs text-zinc-400 hover:text-zinc-200"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-black transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </motion.button>
          </form>

          <p className="mt-7 text-center text-sm text-zinc-500">
            New here?{" "}
            <Link
              href="/signup"
              className="font-semibold text-zinc-300 transition hover:text-white"
            >
              Create account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
