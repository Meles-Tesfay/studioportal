import { cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Package,
  Layers,
  Globe,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#09090b] via-[#040405] to-[#09090b] text-zinc-100 selection:bg-zinc-500/30">
      <Navbar />

      {/* Cinematic Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-12%] left-[-12%] h-[880px] w-[880px] rounded-full bg-zinc-800/15 blur-[140px]" />
        <div className="absolute bottom-[-12%] right-[-12%] h-[980px] w-[980px] rounded-full bg-zinc-900/50 blur-[180px]" />
        <div className="absolute top-[18%] right-[10%] h-[420px] w-[420px] rounded-full bg-white/6 blur-[110px]" />
      </div>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-10 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all hover:bg-zinc-800/60">
              <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-zinc-400">
                Phase 1: Infrastructure Live
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              The Operating
              <span className="block bg-gradient-to-r from-cyan-300 via-slate-100 to-white bg-clip-text text-transparent">
                System
              </span>
              <span className="block text-white">for Elite Studios.</span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-2xl">
              StudioPortal brings premium client portals, smart workflows, and
              real-time billing into one polished hub designed for high-end
              studios.
            </p>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/signup"
                className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-slate-100 to-white px-10 text-xl font-bold text-black shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="#showcase"
                className="flex h-16 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/50 px-10 text-xl font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-zinc-900/70"
              >
                Explore Showcase
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard value="23%" label="Faster delivery" />
              <StatCard value="50+" label="Studio partners" />
              <StatCard value="99.9%" label="Platform uptime" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-zinc-500 sm:justify-center">
              <span className="rounded-full border border-zinc-800/80 bg-zinc-900/40 px-3 py-2">
                Trusted by elite studios
              </span>
              <span className="rounded-full border border-zinc-800/80 bg-zinc-900/40 px-3 py-2">
                Built for boutique scale
              </span>
              <span className="rounded-full border border-zinc-800/80 bg-zinc-900/40 px-3 py-2">
                Secure SSO & billing
              </span>
            </div>
          </div>
        </section>

        {/* Feature Grid Simulation (Glass Cards) */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16"
        >
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Core Infrastructure
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl">
              Everything you need to run a high-ticket agency at scale.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<LayoutDashboard className="h-6 w-6" />}
              title="Centric Dashboard"
              desc="Real-time oversight of agency metrics, revenue goals, and team capacity."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Bespoke Portals"
              desc="Individual, white-labeled workspaces that elevates your client experience."
            />
            <FeatureCard
              icon={<Package className="h-6 w-6" />}
              title="Milestone Roadmaps"
              desc="Interactive, high-fidelity timelines for tracking project evolution."
            />
            <FeatureCard
              icon={<CreditCard className="h-6 w-6" />}
              title="Frictionless Billing"
              desc="Integrated Stripe invoicing with one-click automated checkout flows."
            />
          </div>
        </section>

        {/* Cinematic Dashboard Preview */}
        <section
          id="showcase"
          className="mx-auto mt-24 max-w-7xl px-6 sm:px-12 lg:px-16 overflow-hidden"
        >
          <div className="group relative">
            {/* Glossy Border Effect */}
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-b from-zinc-700/30 to-transparent opacity-50 blur-xl transition-all group-hover:opacity-100 group-hover:duration-500" />

            <div className="glass relative flex h-[500px] w-full flex-col overflow-hidden rounded-[2rem] border border-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] sm:h-[600px]">
              {/* Fake Window Controls */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/40 px-8 py-5 backdrop-blur-md">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <div className="h-3 w-3 rounded-full bg-zinc-800" />
                    <div className="h-3 w-3 rounded-full bg-zinc-900" />
                  </div>
                  <div className="h-5 w-48 rounded-full bg-zinc-800/50" />
                </div>
                <div className="flex gap-4">
                  <div className="h-9 w-28 rounded-lg bg-zinc-800/50" />
                  <div className="h-9 w-9 rounded-lg bg-zinc-100" />
                </div>
              </div>

              {/* Content Area with Generated Image */}
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src="/showcase-preview.png"
                  alt="StudioPortal Dashboard Preview"
                  width={1600}
                  height={900}
                  priority
                  className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-black/70 via-black/0 to-transparent px-8 py-8 text-left text-zinc-100 sm:px-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                    Live workflow preview
                  </p>
                  <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                    A dashboard built to inspire clarity and speed.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
                    See how premium studio operations look when every project,
                    invoice, and client touchpoint lives in one compelling
                    workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Security / Trust Section */}
        <section className="mx-auto max-w-7xl px-6 py-40 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
                Infrastructure built <br />
                <span className="text-zinc-500">for modern studio teams.</span>
              </h2>
              <div className="flex flex-col gap-6">
                <TrustItem
                  icon={<ShieldCheck />}
                  title="Enterprise Security"
                  desc="Encrypt every client workflow with zero compromise."
                />
                <TrustItem
                  icon={<Zap />}
                  title="Hyper-Performance"
                  desc="Instant insights and lightning-fast internal workflows."
                />
                <TrustItem
                  icon={<Lock />}
                  title="Access Control"
                  desc="Granular roles keep sensitive studio data locked down."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex h-48 flex-col justify-end rounded-3xl bg-gradient-to-br from-zinc-950/70 via-zinc-900/70 to-zinc-800/70 p-8 ring-1 ring-zinc-800/60 transition-all hover:from-zinc-900/90 hover:to-zinc-800/90">
                <Globe className="mb-4 h-8 w-8 text-cyan-400" />
                <h4 className="font-bold text-xl text-white">Global Edge</h4>
                <p className="mt-2 text-sm text-zinc-400">
                  Multi-region distribution for distributed teams.
                </p>
              </div>
              <div className="flex h-48 flex-col justify-end rounded-3xl bg-gradient-to-br from-zinc-950/70 via-zinc-900/70 to-zinc-800/70 p-8 ring-1 ring-zinc-800/60 transition-all hover:from-zinc-900/90 hover:to-zinc-800/90">
                <Layers className="mb-4 h-8 w-8 text-violet-400" />
                <h4 className="font-bold text-xl text-white">Multi-tenant</h4>
                <p className="mt-2 text-sm text-zinc-400">
                  White-labeled spaces built for each client experience.
                </p>
              </div>
              <div className="col-span-2 flex h-56 flex-col justify-between rounded-[2rem] bg-zinc-100 p-8 text-black ring-1 ring-zinc-800/60 shadow-lg shadow-zinc-950/10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                    Next-level readiness
                  </p>
                  <h4 className="mt-4 font-bold text-3xl">Ready for launch</h4>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
                  <span className="rounded-full bg-zinc-200 px-3 py-2">
                    Automated billing
                  </span>
                  <span className="rounded-full bg-zinc-200 px-3 py-2">
                    Client portals
                  </span>
                  <span className="rounded-full bg-zinc-200 px-3 py-2">
                    Team productivity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16"
        >
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Pricing plans
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choose the plan that fits your studio.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-400 sm:text-lg">
              Simple, transparent pricing for boutique studios and growing
              teams.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <PricingCard
              title="Starter"
              price="$29"
              frequency="/month"
              features={["Client portals", "Basic invoicing", "Email support"]}
            />
            <PricingCard
              title="Growth"
              price="$79"
              frequency="/month"
              features={[
                "Automated workflows",
                "Advanced analytics",
                "Priority support",
              ]}
              highlighted
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              frequency=""
              features={[
                "Custom onboarding",
                "SLA support",
                "Dedicated success lead",
              ]}
            />
          </div>
        </section>

        <section
          id="docs"
          className="mx-auto max-w-7xl px-6 pb-24 sm:px-12 lg:px-16"
        >
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/60 p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Documentation
                </p>
                <h3 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Everything you need to onboard, integrate, and scale.
                </h3>
                <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                  Access clear implementation guides, API reference, and best
                  practices for managing premium agency operations.
                </p>
              </div>

              <div className="grid gap-4">
                <DocFeature
                  title="Quickstart guide"
                  desc="Get up and running in minutes with step-by-step onboarding."
                />
                <DocFeature
                  title="API reference"
                  desc="Use native integrations and automation endpoints with ease."
                />
                <DocFeature
                  title="Security guide"
                  desc="Learn how StudioPortal keeps client data protected at every layer."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-12 lg:px-16">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/60 p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-12">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Launch-ready studio OS
                </p>
                <h3 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Scale confidently with industry-grade operations.
                </h3>
                <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                  Move from freelancer chaos to polished, repeatable client
                  delivery with a dashboard built for premium teams.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/signup"
                  className="inline-flex h-16 items-center justify-center rounded-2xl bg-cyan-500 px-10 text-base font-semibold text-black transition hover:bg-cyan-400"
                >
                  Start onboarding
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 px-10 text-base font-semibold text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-900"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-start rounded-[2rem] border border-zinc-800 bg-zinc-950/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-zinc-900/80 group">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-slate-800/40 border border-zinc-800 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        {icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-base">{desc}</p>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400">
        {cloneIcon(icon)}
      </div>
      <div>
        <h4 className="text-xl font-bold text-zinc-100">{title}</h4>
        <p className="text-zinc-500 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  frequency,
  features,
  highlighted,
}: {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        "rounded-[2rem] border p-8 transition-all " +
        (highlighted
          ? "border-cyan-500/20 bg-cyan-500/10 shadow-[0_30px_70px_-30px_rgba(34,211,238,0.35)]"
          : "border-zinc-800 bg-zinc-950/70")
      }
    >
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        {title}
      </p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-bold text-white">{price}</span>
        <span className="pb-1 text-sm text-zinc-400">{frequency}</span>
      </div>
      <p className="mt-4 text-zinc-400">
        Everything your studio needs to move faster and operate like a premium
        agency.
      </p>
      <ul className="mt-8 space-y-4 text-sm text-zinc-500">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={
          "mt-10 w-full rounded-2xl px-6 py-4 text-sm font-semibold transition-all duration-200 " +
          (highlighted
            ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:-translate-y-0.5"
            : "border border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 hover:-translate-y-0.5")
        }
      >
        {highlighted ? "Start growth" : "Choose plan"}
      </button>
    </div>
  );
}

function DocFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-zinc-100">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.75rem] border border-zinc-800/70 bg-zinc-950/80 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-zinc-900/80">
      <p className="text-4xl font-bold tracking-tight text-white">{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-zinc-500">{label}</p>
    </div>
  );
}

function cloneIcon(icon: ReactNode) {
  if (!isValidElement(icon)) return null;
  return cloneElement(icon as ReactElement<{ className?: string }>, {
    className: "h-5 w-5",
  });
}
