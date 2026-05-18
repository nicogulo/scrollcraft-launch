'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextSplitProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export default function TextSplit({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
}: TextSplitProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const words = el.querySelectorAll<HTMLElement>('[data-word]')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: '100%' },
        {
          y: '0%',
          duration: 0.7,
          delay,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [delay, stagger])

  const words = text.split(' ')

  return (
    <div ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: i < words.length - 1 ? '0.25em' : 0 }}
        >
          <span data-word className="inline-block" style={{ transform: 'translateY(100%)' }}>
            {word}
          </span>
        </span>
      ))}
    </div>
  )
}
