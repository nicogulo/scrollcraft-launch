'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import ScrollReveal from '@/components/scroll-reveal'
import TextSplit from '@/components/text-split'
import MagneticButton from '@/components/magnetic-button'

gsap.registerPlugin(ScrollTrigger)

const logos = ['Next.js', 'React', 'Tailwind', 'Vercel', 'Stripe', 'Supabase', 'Prisma', 'Redis']

const features = [
  {
    emoji: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for speed at every layer. Sub-second load times with edge caching and intelligent code splitting that adapts to your users in real time.',
    big: true,
  },
  {
    emoji: '🔒',
    title: 'Secure by Default',
    description: 'Enterprise-grade security baked in from day one. End-to-end encryption and compliance ready.',
  },
  {
    emoji: '📊',
    title: 'Real-time Analytics',
    description: 'Live dashboards and instant insights across your entire stack.',
  },
  {
    emoji: '🔌',
    title: 'API First',
    description: 'Every feature exposed as a clean, versioned REST API with full SDK support.',
  },
  {
    emoji: '🤖',
    title: 'AI Powered',
    description: 'Built-in AI capabilities to supercharge your workflows and automate the mundane.',
  },
  {
    emoji: '📈',
    title: 'Scale Infinitely',
    description: 'From zero to millions of users without breaking a sweat or your budget.',
  },
]

const stats = [
  { number: '10000', suffix: '+', label: 'Users' },
  { number: '99.9', suffix: '%', label: 'Uptime' },
  { number: '50', suffix: 'ms', label: 'Response' },
  { number: '24/7', suffix: '', label: 'Support' },
]

const testimonials = [
  {
    quote: 'ScrollCraft cut our landing page dev time by 80%. The animations are butter-smooth.',
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
  },
  {
    quote: 'Best template purchase I ever made. My clients love the scroll effects.',
    name: 'Marcus Rivera',
    role: 'Freelance Developer',
  },
  {
    quote: 'The code quality is exceptional. Clean, well-documented, and performant.',
    name: 'Aiko Tanaka',
    role: 'Frontend Lead at Nexus',
  },
  {
    quote: "Deployed in minutes, not days. Our conversion rate jumped 40%.",
    name: 'James Okafor',
    role: 'Founder at Launchpad',
  },
]

export default function Home() {
  const mockupRef = useRef<HTMLDivElement>(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const el = mockupRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        rotateY: 8,
        rotateX: -4,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((el, i) => {
        if (!el) return
        const stat = stats[i]
        if (stat.number === '24/7') return
        const end = parseFloat(stat.number)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate() {
            if (!el) return
            const display = Number.isInteger(end) ? Math.round(obj.val) : obj.val.toFixed(1)
            el.textContent = display + stat.suffix
          },
          onComplete() {
            if (el) el.textContent = stat.number + stat.suffix
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-black text-[#F8FAFC] min-h-screen">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <TextSplit
              text="Build stunning websites, faster."
              className="text-5xl lg:text-7xl font-bold leading-tight"
            />

            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              The{' '}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                all-in-one platform
              </span>{' '}
              for building and launching beautiful digital products at scale. Design, develop, and deploy — all in one place.
            </p>

            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MagneticButton>
                Get Started
              </MagneticButton>
              <MagneticButton className="!bg-transparent !text-white border border-white hover:!bg-white/10">
                Learn More
              </MagneticButton>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              ref={mockupRef}
              className="w-[400px] h-[300px] rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-3 w-full px-8">
                  <div className="h-3 bg-white/10 rounded-full w-3/4" />
                  <div className="h-3 bg-white/10 rounded-full w-1/2" />
                  <div className="h-3 bg-violet-500/30 rounded-full w-2/3" />
                  <div className="h-3 bg-white/10 rounded-full w-4/5" />
                  <div className="h-3 bg-cyan-500/30 rounded-full w-1/3" />
                  <div className="h-3 bg-white/10 rounded-full w-3/5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Logo Marquee ──────────────────────────────────── */}
      <section className="w-full py-20 border-y border-white/[0.06] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-sm font-medium text-gray-500 mx-12 inline-block">
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* ── Section 3: Features Bento ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">Everything you need</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={i * 0.1}
              className={`h-full${feature.big ? ' lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className="h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/30 transition-colors cursor-default">
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Section 4: Stats Counter ────────────────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  {stat.number === '24/7' ? (
                    <span ref={(el) => { statRefs.current[i] = el }}>
                      {stat.number}{stat.suffix}
                    </span>
                  ) : (
                    <span ref={(el) => { statRefs.current[i] = el }}>
                      0{stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Testimonials ──────────────────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">Loved by developers</h2>
          </ScrollReveal>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[320px] snap-start bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex-shrink-0"
              >
                <p className="text-gray-300 italic">{t.quote}</p>
                <hr className="border-white/10 my-4" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Pricing ──────────────────────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <ScrollReveal className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold">Simple, transparent pricing</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <ScrollReveal delay={0}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center flex flex-col h-full">
                <div className="text-xl font-bold">Starter</div>
                <div className="text-4xl font-bold mt-4">Free</div>
                <div className="text-gray-400 text-sm mt-1">/mo</div>
                <ul className="mt-8 space-y-3 text-left flex-1">
                  {['5 projects', 'Basic analytics', 'Community support'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <MagneticButton className="w-full justify-center">Get Started</MagneticButton>
                </div>
              </div>
            </ScrollReveal>

            {/* Pro */}
            <ScrollReveal delay={0.1}>
              <div className="relative bg-white/[0.03] border border-violet-500/50 rounded-2xl p-8 text-center flex flex-col h-full shadow-lg shadow-violet-500/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="text-xl font-bold">Pro</div>
                <div className="text-4xl font-bold mt-4">$9</div>
                <div className="text-gray-400 text-sm mt-1">/mo</div>
                <ul className="mt-8 space-y-3 text-left flex-1">
                  {['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom domains', 'API access'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <MagneticButton className="w-full justify-center !bg-violet-500 !text-white">Start Free Trial</MagneticButton>
                </div>
              </div>
            </ScrollReveal>

            {/* Enterprise */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center flex flex-col h-full">
                <div className="text-xl font-bold">Enterprise</div>
                <div className="text-4xl font-bold mt-4">$99</div>
                <div className="text-gray-400 text-sm mt-1">/mo</div>
                <ul className="mt-8 space-y-3 text-left flex-1">
                  {['Everything in Pro', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'White-label'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <MagneticButton className="w-full justify-center">Contact Sales</MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA ──────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <TextSplit
              text="Ready to build something amazing?"
              className="text-4xl lg:text-6xl font-bold text-white"
            />
            <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
              Join thousands of developers building the next generation of digital products with ScrollCraft.
            </p>
            <div className="mt-10">
              <MagneticButton className="!bg-white !text-black">Get Started Now</MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="pb-20" />
    </main>
  )
}
