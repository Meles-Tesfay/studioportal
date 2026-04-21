"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pwStrength, setPwStrength] = useState("");

  const strengthPercent =
    pwStrength === "Weak"
      ? 33
      : pwStrength === "Good"
        ? 66
        : pwStrength === "Strong"
          ? 100
          : 0;
  const strengthColor =
    pwStrength === "Weak"
      ? "bg-red-500"
      : pwStrength === "Good"
        ? "bg-yellow-400"
        : pwStrength === "Strong"
          ? "bg-emerald-400"
          : "bg-zinc-700";

  useEffect(() => {
    const checks = [
      /.{8,}/.test(password),
      /[A-Z]/.test(password),
      /[0-9]/.test(password),
    ];
    const score = checks.filter(Boolean).length;
    if (!password) setPwStrength("");
    else if (score <= 1) setPwStrength("Weak");
    else if (score === 2) setPwStrength("Good");
    else setPwStrength("Strong");
  }, [password]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        setSuccess("Account created. Redirecting to sign in...");
        setTimeout(() => router.push("/login"), 900);
      } else {
        const text = await res.text();
        setError(text || "Could not create account.");
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
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-gradient-to-tr from-emerald-400/20 to-sky-500/10 blur-3xl opacity-60" />

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M12 4v16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                <path
                  d="M6 9c2-2 4-3 6-3s4 1 6 3"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              </svg>
            </div>
            <div>
              <p className="mb-0 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                StudioPortal Registration
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Create account
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                Set up your workspace access in under a minute.
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
          {success ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 rounded-md border border-green-600/30 bg-green-900/30 p-3 text-sm text-green-300"
              role="status"
              aria-live="polite"
            >
              {success}
            </motion.div>
          ) : null}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-300"
              >
                Full name
              </label>
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
                      d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 20a8 8 0 0116 0"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 pl-11 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-300"
              >
                Work email
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
                  className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 pl-11 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-300"
              >
                Password
              </label>
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
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 pl-11 pr-12 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10"
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
              <p className="mt-1 text-xs text-zinc-500">
                Strength:{" "}
                <span className="font-medium text-zinc-200">
                  {pwStrength || "-"}
                </span>
              </p>
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-800">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${strengthColor}`}
                  style={{ width: `${strengthPercent}%` }}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 h-12 w-full rounded-xl bg-zinc-100 text-sm font-bold text-black transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </motion.button>
          </form>

          <p className="mt-7 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-zinc-300 transition hover:text-white"
            >
              Sign in
            </Link>
          </p>
        </motion.section>
      </div>
    </main>
  );
}
