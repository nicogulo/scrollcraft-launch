'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { useLenis }

function GsapLenisSync() {
  const lenisRef = useRef<ReturnType<typeof useLenis>>(undefined)
  lenisRef.current = useLenis()

  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(tick)
    }
  }, [])

  return null
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ autoRaf: false }}>
      <GsapLenisSync />
      {children}
    </ReactLenis>
  )
}
