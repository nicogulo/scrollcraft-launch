'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import ScrollReveal from '@/components/scroll-reveal'
import TextSplit from '@/components/text-split'
import MagneticButton from '@/components/magnetic-button'
import Footer from '@/components/footer'

gsap.registerPlugin(ScrollTrigger)

const logos = ['Next.js', 'React', 'Tailwind', 'Vercel', 'Stripe', 'Supabase', 'Prisma', 'Redis']

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 32L32 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 8L32 8L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    title: 'Lightning Fast',
    description:
      'Optimized for speed at every layer. Sub-second load times with edge caching and intelligent code splitting.',
    big: true,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
    ),
    title: 'Secure by Default',
    description: 'Enterprise-grade security baked in. End-to-end encryption and compliance ready.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="22" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="16" width="5" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <rect x="26" y="8" width="5" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Real-time Analytics',
    description: 'Live dashboards and instant insights across your entire stack.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 14L8 20L12 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 14L32 20L28 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 10L17 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'API First',
    description: 'Every feature exposed as a clean, versioned REST API with full SDK support.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="28" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <path d="M18 17L14 24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M22 17L26 24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    title: 'AI Powered',
    description: 'Built-in AI capabilities to supercharge your workflows and automate the mundane.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M14 26L20 14L26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 30L20 10L30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
    title: 'Scale Infinitely',
    description: 'From zero to millions of users without breaking a sweat or your budget.',
  },
]

const stats = [
  { number: '10000', suffix: '+', label: 'Active Users' },
  { number: '99.9', suffix: '%', label: 'Uptime SLA' },
  { number: '50', suffix: 'ms', label: 'Avg Response' },
  { number: '24/7', suffix: '', label: 'Expert Support' },
]

const testimonials = [
  {
    quote: 'ScrollCraft cut our landing page dev time by 80%. The animations are butter-smooth and the code quality is exceptional.',
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
  },
  {
    quote: 'Best template purchase I ever made. My clients are blown away by the scroll effects and I can customize everything.',
    name: 'Marcus Rivera',
    role: 'Freelance Developer',
  },
  {
    quote: 'The code quality is exceptional. Clean, well-documented, and performant. This is how templates should be built.',
    name: 'Aiko Tanaka',
    role: 'Frontend Lead at Nexus',
  },
  {
    quote: "Deployed in minutes, not days. Our conversion rate jumped 40% after switching to a ScrollCraft template.",
    name: 'James Okafor',
    role: 'Founder at Launchpad',
  },
]

function BentoCard({ feature, index }: { feature: typeof features[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`bento-card h-full${feature.big ? ' lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <div
        className="relative h-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-2xl p-8 hover:border-violet-500/30 transition-colors duration-500 cursor-default overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.08), transparent)`,
            }}
          />
        )}
        <div className="relative">
          <div className="text-violet-400 mb-5">{feature.icon}</div>
          <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <circle cx="8" cy="8" r="7" stroke="rgb(74 222 128)" strokeWidth="1.5" />
      <path d="M5 8L7 10L11 6" stroke="rgb(74 222 128)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])
  const statsLineRef = useRef<HTMLDivElement>(null)
  const testimonialsSectionRef = useRef<HTMLElement>(null)
  const testimonialsTrackRef = useRef<HTMLDivElement>(null)

  // Hero pinned scroll + orb animation
  useEffect(() => {
    const hero = heroRef.current
    const orb = orbRef.current
    if (!hero || !orb) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        orb,
        { scale: 0.8, opacity: 0.6 },
        {
          scale: 1.15,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      )

      gsap.to(orb, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Stats counter animation
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

      // Stats divider line animation
      if (statsLineRef.current) {
        gsap.fromTo(
          statsLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: statsLineRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  // Bento grid batch animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.bento-card', {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
          ),
        start: 'top 88%',
      })
    })

    return () => ctx.revert()
  }, [])

  // Testimonials horizontal scroll
  useEffect(() => {
    const section = testimonialsSectionRef.current
    const track = testimonialsTrackRef.current
    if (!section || !track || window.innerWidth < 768) return

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-black text-[var(--text-primary)] min-h-screen relative z-[1] overflow-x-hidden">

      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        {/* Gradient mesh orb */}
        <div
          ref={orbRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(50vw,600px)] h-[min(50vw,600px)] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(139,92,246,0.4), transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(6,182,212,0.3), transparent 60%),
              radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.2), transparent 70%)
            `,
            filter: 'blur(60px)',
            opacity: 0.7,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto w-full text-center">
          <div className="space-y-4">
            <TextSplit
              text="Build stunning"
              className="font-display text-[clamp(3rem,8vw,9rem)] font-bold leading-[0.9] tracking-[-0.03em]"
            />
            <TextSplit
              text="websites, faster."
              className="font-display text-[clamp(3rem,8vw,9rem)] font-bold leading-[0.9] tracking-[-0.03em]"
              delay={0.15}
            />
          </div>

          <motion.p
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              all-in-one platform
            </span>{' '}
            for building and launching beautiful digital products at scale.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MagneticButton>
              Get Started
            </MagneticButton>
            <MagneticButton className="!bg-transparent !text-white border border-white/20 hover:!bg-white/5 hover:border-white/40">
              Learn More
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Logo Marquee ──────────────────────────────────── */}
      <section className="w-full py-20 border-y border-[var(--border-subtle)] overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap h-full items-center">
            {[...logos, ...logos].map((logo, i) => (
              <span key={`a-${i}`} className="font-display text-sm uppercase tracking-[0.2em] text-white/20 mx-16 inline-block">
                {logo}
              </span>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex animate-marquee-reverse whitespace-nowrap h-full items-center mt-4">
            {[...logos, ...logos].map((logo, i) => (
              <span key={`b-${i}`} className="font-display text-sm uppercase tracking-[0.2em] text-white/10 mx-16 inline-block">
                {logo}
              </span>
            ))}
          </div>
        </div>
        {/* Spacer to maintain height */}
        <div className="invisible">
          <div className="flex whitespace-nowrap">
            {logos.map((logo, i) => (
              <span key={i} className="text-sm mx-16 inline-block">{logo}</span>
            ))}
          </div>
          <div className="flex whitespace-nowrap mt-4">
            {logos.map((logo, i) => (
              <span key={i} className="text-sm mx-16 inline-block">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Features Bento ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-40 lg:py-48">
        <ScrollReveal className="mb-20 lg:mb-24 text-center">
          <h2 className="font-display text-5xl lg:text-6xl font-bold">Everything you need</h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-2xl mx-auto">
            A complete toolkit for building modern digital products
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <BentoCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </section>

      {/* ── Section 4: Stats Counter ────────────────────────────────── */}
      <section className="py-40 lg:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={statsLineRef}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20"
            style={{ transformOrigin: 'center', transform: 'scaleX(0)' }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-6xl lg:text-7xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
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
                <div className="text-[var(--text-secondary)] mt-3 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-20" />
        </div>
      </section>

      {/* ── Section 5: Testimonials (Horizontal Scroll) ──────────────── */}
      <section ref={testimonialsSectionRef} className="relative min-h-screen overflow-hidden">
        <div className="h-full flex items-center">
          <div ref={testimonialsTrackRef} className="flex items-center gap-8 px-6 md:px-12 will-change-transform">
            {/* Section title as first card */}
            <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0">
              <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
                Loved by<br />developers
              </h2>
              <p className="text-[var(--text-secondary)] mt-4">See what our users say</p>
            </div>

            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[380px] md:min-w-[480px] flex-shrink-0 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-2xl p-8 md:p-10 relative overflow-hidden group"
              >
                <span className="absolute top-4 right-6 font-display text-8xl text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="text-lg text-white/80 leading-relaxed relative">&ldquo;{t.quote}&rdquo;</p>
                <hr className="border-[var(--border-subtle)] my-6" />
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-[var(--text-tertiary)] text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* End spacer */}
            <div className="min-w-[100px] flex-shrink-0" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── Section 6: Pricing ──────────────────────────────────────── */}
      <section className="py-40 lg:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20 lg:mb-24 text-center">
            <h2 className="font-display text-5xl lg:text-6xl font-bold">Simple, transparent pricing</h2>
            <p className="text-[var(--text-secondary)] mt-4 text-lg">No hidden fees. Cancel anytime.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <ScrollReveal delay={0}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center flex flex-col h-full min-h-[480px]">
                <div className="font-display text-xl font-bold">Starter</div>
                <div className="font-display text-5xl font-bold mt-4">Free</div>
                <div className="text-[var(--text-tertiary)] text-sm mt-1">/mo</div>
                <ul className="mt-8 space-y-4 text-left flex-1">
                  {['5 projects', 'Basic analytics', 'Community support'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-[var(--text-secondary)]">{f}</span>
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
              <div className="relative bg-[var(--surface-elevated)] border border-violet-500/50 rounded-2xl p-8 text-center flex flex-col h-full min-h-[480px] animate-pulse-glow">
                <div className="flex justify-center mb-4 -mt-4">
                  <span className="bg-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="font-display text-xl font-bold">Pro</div>
                <div className="font-display text-5xl font-bold mt-4">$9</div>
                <div className="text-[var(--text-tertiary)] text-sm mt-1">/mo</div>
                <ul className="mt-8 space-y-4 text-left flex-1">
                  {['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom domains', 'API access'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-[var(--text-secondary)]">{f}</span>
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
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center flex flex-col h-full min-h-[480px]">
                <div className="font-display text-xl font-bold">Enterprise</div>
                <div className="font-display text-5xl font-bold mt-4">$99</div>
                <div className="text-[var(--text-tertiary)] text-sm mt-1">/mo</div>
                <ul className="mt-8 space-y-4 text-left flex-1">
                  {['Everything in Pro', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'White-label'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-[var(--text-secondary)]">{f}</span>
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
      <section className="py-40 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: 'var(--noise-texture)',
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <TextSplit
              text="Ready to build something amazing?"
              className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05]"
            />
            <p className="text-white/70 mt-8 text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands of developers building the next generation of digital products.
            </p>
            <div className="mt-12">
              <MagneticButton className="!bg-white !text-black text-lg px-8 py-4">Get Started Now</MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
