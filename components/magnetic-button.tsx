'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', href, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  const contentX = useTransform(x, (v) => v * 0.6)
  const contentY = useTransform(y, (v) => v * 0.6)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    // Clamp to max 8px shift
    const maxShift = 8
    rawX.set(Math.max(-maxShift, Math.min(maxShift, dx * 0.4)))
    rawY.set(Math.max(-maxShift, Math.min(maxShift, dy * 0.4)))
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const baseClass = `inline-flex items-center justify-center rounded-full bg-white text-black font-medium px-6 py-3 cursor-pointer select-none transition-colors hover:bg-white/90 ${className}`

  const inner = (
    <motion.span style={{ x: contentX, y: contentY }} className="pointer-events-none">
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={baseClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {inner}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClass}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {inner}
    </button>
  )
}
