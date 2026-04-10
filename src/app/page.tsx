import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  Palette,
  Globe,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
  Layout,
  Code,
  MousePointer,
} from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070d23]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Blazesites" width={140} height={28} />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-white/70 transition hover:text-white">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-white/70 transition hover:text-white">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm text-white/70 transition hover:text-white">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-white/80 transition hover:text-white">
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-[#ffbf1e] via-[#f76914] to-[#e23f13] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070d23] pt-32 pb-20">
      <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#f76914]/10 blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#ffbf1e]/8 blur-[100px]" />
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-[#e23f13]/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-[#ffbf1e]" />
            AI-Powered Website Platform
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
            Build smarter websites.{' '}
            <span className="bg-gradient-to-r from-[#ffbf1e] via-[#f76914] to-[#e23f13] bg-clip-text text-transparent">
              Sell faster.
            </span>{' '}
            Scale bigger.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            The all-in-one platform for agencies and entrepreneurs to build professional,
            SEO-optimised websites using AI — and sell them at scale. Go from template to
            live site in under an hour.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffbf1e] via-[#f76914] to-[#e23f13] px-8 py-3.5 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition hover:shadow-orange-500/50"
            >
              Start Building Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
            >
              Sign in to Dashboard
            </Link>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-white/20" />
              <div className="h-3 w-3 rounded-full bg-white/20" />
              <div className="h-3 w-3 rounded-full bg-white/20" />
              <div className="ml-4 h-5 flex-1 rounded bg-white/5" />
            </div>
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-3 border-r border-white/10 p-4">
                <div className="space-y-3">
                  {['Dashboard', 'Clients', 'Projects', 'Templates', 'Leads'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs font-medium ${
                        i === 0
                          ? 'bg-gradient-to-r from-[#f76914]/20 to-transparent text-[#ffbf1e]'
                          : 'text-white/40'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-9 p-6">
                <div className="mb-6 grid grid-cols-4 gap-3">
                  {[
                    { label: 'Clients', val: '24' },
                    { label: 'Projects', val: '18' },
                    { label: 'Live Sites', val: '12' },
                    { label: 'Revenue', val: '$14.2k' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-[10px] text-white/40">{stat.label}</p>
                      <p className="mt-1 text-lg font-bold text-white">{stat.val}</p>
                    </div>
                  ))}
                </div>
                <div className="h-32 rounded-lg border border-white/10 bg-gradient-to-br from-[#f76914]/5 to-transparent" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-[#f76914]/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '< 60 min', label: 'Time to publish a site' },
    { value: '3', label: 'Starter templates included' },
    { value: '100%', label: 'Proprietary — no WordPress' },
    { value: '24/7', label: 'AI content generation' },
  ];

  return (
    <section className="border-y border-white/10 bg-[#0a1029]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-10 text-center">
            <p className="bg-gradient-to-r from-[#ffbf1e] to-[#f76914] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Palette,
      title: 'Visual Page Editor',
      description: 'Drag-and-drop block editor with live preview. No code required. Click to edit any text, image, or CTA directly.',
      gradient: 'from-[#ffbf1e] to-[#f76914]',
    },
    {
      icon: Sparkles,
      title: 'AI Content Engine',
      description: 'Generate brand-aware, SEO-optimised copy for every section. Just provide a brand profile and watch the magic happen.',
      gradient: 'from-[#f76914] to-[#e23f13]',
    },
    {
      icon: Layout,
      title: 'Template Library',
      description: 'Start from professionally designed templates across industries. Import, customise, and deploy in minutes.',
      gradient: 'from-[#ffbf1e] to-[#f76914]',
    },
    {
      icon: Users,
      title: 'CRM Dashboard',
      description: 'Manage clients, track projects, and monitor your pipeline. Everything you need to run your agency in one place.',
      gradient: 'from-[#f76914] to-[#e23f13]',
    },
    {
      icon: Globe,
      title: 'One-Click Hosting',
      description: 'Publish to a staging subdomain instantly. Connect custom domains with SSL, CDN, and auto-backups included.',
      gradient: 'from-[#ffbf1e] to-[#f76914]',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track sites delivered, revenue per client, time-to-publish, and AI usage — all from your dashboard.',
      gradient: 'from-[#f76914] to-[#e23f13]',
    },
  ];

  return (
    <section id="features" className="bg-[#070d23] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f76914]">Features</p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Everything you need to build and sell websites
          </h2>
          <p className="mt-4 text-lg text-white/50">
            A complete platform — CMS, AI copywriter, hosting, and CRM — all under one roof.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className={`inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3`}>
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step: '01', icon: MousePointer, title: 'Choose a Template', description: 'Browse our curated library and pick a template that matches your client\'s industry and style.' },
    { step: '02', icon: Sparkles, title: 'AI Generates Content', description: 'Provide a brand profile — business name, industry, tone — and the AI rewrites every section.' },
    { step: '03', icon: Code, title: 'Customise & Refine', description: 'Fine-tune with the visual editor. Edit text inline, rearrange blocks, adjust colours and spacing.' },
    { step: '04', icon: Zap, title: 'Publish & Deliver', description: 'One click to go live. Share the URL with your client. Connect a custom domain when ready.' },
  ];

  return (
    <section id="how-it-works" className="border-t border-white/10 bg-[#0a1029] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#ffbf1e]">How it Works</p>
          <h2 className="mt-3 text-4xl font-bold text-white">From zero to live in four steps</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <span className="text-6xl font-black text-white/[0.04]">{item.step}</span>
              <div className="mt-2">
                <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5">
                  <item.icon className="h-5 w-5 text-[#f76914]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Starter', price: '$49', description: 'For freelancers getting started',
      features: ['3 Active Websites', '5 Template Imports', '100 AI Generations/mo', 'Blazesites Subdomain', 'Basic SEO Tools', 'Email Support'],
      cta: 'Start Free Trial', highlighted: false,
    },
    {
      name: 'Growth', price: '$149', description: 'For growing agencies',
      features: ['15 Active Websites', 'Unlimited Templates', 'Unlimited AI Generations', 'Custom Domain Support', 'Full SEO Suite', 'Priority Support', 'CRM Dashboard', 'Analytics'],
      cta: 'Start Free Trial', highlighted: true,
    },
    {
      name: 'Agency', price: '$349', description: 'For scaling operations',
      features: ['Unlimited Websites', 'Unlimited Templates', 'Unlimited AI Generations', 'White-Label Option', 'Client Portal', 'Team Seats (up to 10)', 'API Access', 'Dedicated Support'],
      cta: 'Contact Sales', highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="border-t border-white/10 bg-[#070d23] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f76914]">Pricing</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-white/50">Per-seat pricing. Hosting included. No hidden fees.</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-[#f76914]/50 bg-gradient-to-b from-[#f76914]/10 to-transparent'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ffbf1e] to-[#e23f13] px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/50">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/50"> / month</span>
              </div>
              <Link
                href="/register"
                className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#ffbf1e] via-[#f76914] to-[#e23f13] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f76914]/20">
                      <svg className="h-3 w-3 text-[#f76914]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-white/10 bg-[#0a1029] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f76914] to-[#e23f13] px-8 py-16 text-center md:px-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to build your next website in minutes?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join agencies and freelancers who deliver client-ready websites faster with Blazesites.
            </p>
            <div className="mt-8">
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#e23f13] transition hover:bg-white/90"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070d23] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image src="/logo.svg" alt="Blazesites" width={120} height={24} />
            <p className="mt-4 text-sm text-white/40">
              AI-powered website creation and client management platform.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-2">
              {['Features', 'Templates', 'Pricing', 'Changelog'].map((link) => (
                <li key={link}><Link href="#" className="text-sm text-white/40 transition hover:text-white/70">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((link) => (
                <li key={link}><Link href="#" className="text-sm text-white/40 transition hover:text-white/70">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}><Link href="#" className="text-sm text-white/40 transition hover:text-white/70">{link}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/30">
          &copy; {new Date().getFullYear()} Blazesites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Blazesites',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web',
  description:
    'AI-powered website builder for agencies and entrepreneurs. Build professional, SEO-optimised websites in minutes.',
  url: 'https://blazesites.com.au',
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '29', priceCurrency: 'AUD', description: '1 live site' },
    { '@type': 'Offer', name: 'Growth', price: '79', priceCurrency: 'AUD', description: '5 live sites' },
    { '@type': 'Offer', name: 'Professional', price: '199', priceCurrency: 'AUD', description: '15 live sites' },
    { '@type': 'Offer', name: 'Agency', price: '499', priceCurrency: 'AUD', description: '50 live sites' },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070d23]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
