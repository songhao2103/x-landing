'use client'

import { useEffect, useState } from 'react'

export default function AppLoadingOverlay() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 bg-red-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      {/* Noise layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/10" />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt
      veniam aliquid, et esse doloremque dolore nulla, praesentium provident
      quos atque qui porro tempora aut illum hic voluptatibus accusantium earum!
    </div>
  )
}
