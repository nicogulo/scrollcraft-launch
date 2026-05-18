'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const x = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    if (window.innerWidth < 768) return

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor]')) setHovered(true)
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor]')) setHovered(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [rawX, rawY, visible])

  if (!visible) return null

  const size = hovered ? 40 : 12

  return (
    <motion.div
      style={{
        x,
        y,
        width: size,
        height: size,
        translateX: '-50%',
        translateY: '-50%',
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: hovered ? 0.6 : 1,
      }}
      animate={{ width: size, height: size, opacity: hovered ? 0.6 : 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
  )
}
