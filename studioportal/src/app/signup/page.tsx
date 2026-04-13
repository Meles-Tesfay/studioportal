import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-16 sm:px-12 lg:px-16">
        <section className="w-full max-w-md rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              StudioPortal Registration
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white">Create account</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Set up your workspace access in under a minute.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                autoComplete="name"
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                Work email
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
              <label htmlFor="password" className="text-sm font-medium text-zinc-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a strong password"
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-zinc-600"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-zinc-100 text-sm font-bold text-black transition hover:scale-[1.01] active:scale-[0.99]"
            >
              Create Account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-zinc-300 transition hover:text-white">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
