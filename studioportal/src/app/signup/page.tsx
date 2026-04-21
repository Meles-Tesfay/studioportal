"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <section className="w-full max-w-md rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              StudioPortal Registration
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create account
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Set up your workspace access in under a minute.
            </p>
          </div>

          {error ? (
            <div className="mb-4 rounded-md border border-red-600/30 bg-red-900/30 p-3 text-sm text-red-300">
              {error}
            </div>
          ) : null}
          {success ? (
            <div className="mb-4 rounded-md border border-green-600/30 bg-green-900/30 p-3 text-sm text-green-300">
              {success}
            </div>
          ) : null}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-300"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                autoComplete="name"
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-300"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@agency.com"
                autoComplete="email"
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 pr-12 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
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
            </div>

            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-zinc-100 text-sm font-bold text-black transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
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
        </section>
      </div>
    </main>
  );
}
