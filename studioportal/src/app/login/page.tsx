import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-16 sm:px-12 lg:px-16">
        <section className="w-full max-w-md rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              StudioPortal Access
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white">Sign in</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Continue to your agency workspace.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@agency.com"
                autoComplete="email"
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-zinc-300">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-zinc-500 transition hover:text-zinc-300"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-zinc-100 text-sm font-bold text-black transition hover:scale-[1.01] active:scale-[0.99]"
            >
              Sign In
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-zinc-500">
            Need an account?{" "}
            <Link href="/" className="font-semibold text-zinc-300 transition hover:text-white">
              Contact your admin
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
