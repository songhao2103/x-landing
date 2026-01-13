'use client'
import { useEffect, useState } from 'react'

export default function AppLoadingOverlay() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  // Fade in (delay nhẹ)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(t)
  }, [])

  // Fade out khi component sắp unmount
  useEffect(() => {
    return () => {
      setLeaving(true)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-700 ease-in-out ${visible && !leaving ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-animated-gradient" />

      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      {/* Blur */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />

      {/* Loader */}
      {/* <XLoader size={120} className="relative z-10" /> */}
    </div>
  )
}
