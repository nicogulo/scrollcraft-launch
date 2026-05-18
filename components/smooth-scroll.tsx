'use client'

import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'

export default function ReactLenis({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis()

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <div>{children}</div>
}
